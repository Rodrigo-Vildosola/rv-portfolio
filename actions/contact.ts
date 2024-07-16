import { ContactSchema } from "@/schemas";
import * as z from "zod";
import sendEmail from "@/lib/mail";

export const contact = async (values: z.infer<typeof ContactSchema>) => {
  const contactTemplateId = process.env.NEXT_PUBLIC_EMAILJS_CONTACT_TEMPLATE_ID;
  const thankYouTemplateId = process.env.NEXT_PUBLIC_EMAILJS_THANK_YOU_TEMPLATE_ID;
  const userId = process.env.NEXT_PUBLIC_EMAILJS_USER_ID;

  // Check if all necessary environment variables are defined
  if (!contactTemplateId || !thankYouTemplateId || !userId) {
    return { error: "Email configuration is not properly set." };
  }

  const validatedFields = ContactSchema.safeParse(values);
  if (!validatedFields.success) {
    return { error: "Invalid fields" };
  }

  const { name, email, message } = validatedFields.data;


  try {
    // Send the contact email
    const contactResponse = await sendEmail(contactTemplateId, { name, email, message });

    if (!contactResponse) {
      console.error("Failed to send contact email");
      return { error: "Failed to send contact email" };
    }

    // Send the thank you email
    const thankYouResponse = await sendEmail(thankYouTemplateId, { name, email });

    if (!thankYouResponse) {
      console.error("Failed to send thank you email");
      return { success: "Contact sent successfully, but failed to send thank you email" };
    }

    return { success: "Contact sent successfully and thank you email sent" };
  } catch (error) {
    console.error("Error sending email:", error);
    return { error: "An error occurred while sending the emails" };
  }
};
