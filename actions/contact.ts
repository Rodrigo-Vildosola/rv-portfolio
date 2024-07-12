import { ContactSchema } from "@/schemas";
import * as z from "zod";



export const contact = async (
  values: z.infer<typeof ContactSchema>, 
) => {
  const validatedFields = ContactSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid fields" };
  }

  const { name, email, message } = validatedFields.data;

  console.log(name, email, message);

  if (email) {
    return { success: "Contacto enviado correctamente "};
  }




  return { message: "Mensaje " };
}
