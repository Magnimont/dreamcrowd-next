"use server";
import { ContactFormData } from "@/components/home/Contact";
import { ContactSchema } from "@/schema";
import { Resend } from "resend";
import fs from 'fs';
import path from 'path';

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FromEmail!!;
const toEmail = process.env.ToEmail!!;
export async function sendContactInfo(values: ContactFormData): Promise<{
  success: boolean;
  data?: any;
}> {
  try {
    const data = ContactSchema.safeParse(values);
    if (!data.success) {
      return {
        success: data.success,
        data: data.error,
      };
    }
    await sendContactMail(values);
    return {
      success: true,
      data: "Success 🎉",
    };
  } catch (error) {
    return {
      success: false,
      data: "unknown error!",
    };
  }
}

const domain = process.env.NEXT_PUBLIC_APP_URL;



export const sendContactMail = async (data: ContactFormData) => {
  const emailTemplatePath = path.join(process.cwd(), 'templates', 'contact-email.html');
  let emailTemplate = fs.readFileSync(emailTemplatePath, 'utf-8');
  
  // Replace placeholders with actual data
  emailTemplate = emailTemplate
    .replace('${data.firstName}', data.firstName)
    .replace('${data.lastName}', data.lastName)
    .replace('${data.email}', data.email)
    .replace('${subject}', `Contact - ${data.firstName} ${data.lastName}`)
    .replace('${data.message}', data.message);  const mail = await resend.emails.send({
    from: fromEmail,
    to: toEmail,
    subject: `Contact - ${data.firstName} ${data.lastName}`,
    html: emailTemplate
  });

  console.log(mail);
};