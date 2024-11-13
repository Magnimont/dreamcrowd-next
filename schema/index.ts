import * as z from "zod";

export const ContactSchema = z.object({
  firstName: z
    .string()
    .min(2, { message: "First name should be at least 2 characters" })
    .max(60, { message: "First name should not exceed 60 characters" }),
  lastName: z
    .string()
    .min(2, { message: "Last name should be at least 2 characters" })
    .max(60, { message: "Last name should not exceed 60 characters" }),
  email: z.string().email({ message: "Invalid email address" }),
  message: z.string().min(1, { message: "Message is required" }),
});