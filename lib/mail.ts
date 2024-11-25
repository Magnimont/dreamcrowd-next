import { Resend } from 'resend';
import crypto from 'crypto';

if (!process.env.RESEND_API_KEY) {
  throw new Error('RESEND_API_KEY is not defined in environment variables');
}

if (!process.env.UNSUBSCRIBE_SECRET) {
  throw new Error('UNSUBSCRIBE_SECRET is not defined in environment variables');
}

const resend = new Resend(process.env.RESEND_API_KEY);


function generateUnsubscribeToken(email: string) {
  return crypto
    .createHash('sha256')
    .update(`${email}${process.env.UNSUBSCRIBE_SECRET}`)
    .digest('hex')
}

export async function sendNewsLetterMail(email: string) {
  const unsubscribeToken = generateUnsubscribeToken(email)
  const unsubscribeUrl = `$/unsubscribe?email=${email}&token=${unsubscribeToken}`

  await resend.emails.send({
    from: 'newsletter@yourdomain.com',
    to: email,
    subject: 'Welcome to Our Newsletter!',
    html: `
      <h1>Welcome to Our Newsletter!</h1>
      <p>Thank you for subscribing to our newsletter.</p>
      <p>To unsubscribe, <a href="${unsubscribeUrl}">click here</a></p>
    `,
  })
}

interface ContactInfo {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

export async function sendContactInfo(data: ContactInfo) {
  await resend.emails.send({
    from: 'contact@yourdomain.com',
    to: 'support@yourdomain.com',
    subject: 'New Contact Form Submission',
    html: `
      <h1>New Contact Form Submission</h1>
      <h2>Contact Details:</h2>
      <p><strong>Name:</strong> ${data.firstName} ${data.lastName}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <h2>Message:</h2>
      <p>${data.message}</p>
    `,
  })

  // Send confirmation email to the user
  await resend.emails.send({
    from: 'contact@yourdomain.com',
    to: data.email,
    subject: 'We received your message',
    html: `
      <h1>Thank you for contacting us!</h1>
      <p>Dear ${data.firstName},</p>
      <p>We have received your message and will get back to you as soon as possible.</p>
      <p>Best regards,<br>Your Support Team</p>
    `,
  })
}