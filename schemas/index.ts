import * as z from 'zod';


export const ContactSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  // subject: z.string().min(5, { message: "Subject must be at least 5 characters" }),
  message: z.string().min(1, { message: "Message is required" }),
  // phoneNumber: z.string().optional(),
  // company: z.string().optional(),
});

export type ContactFormValues = z.infer<typeof ContactSchema>;


export const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1, {
    message: "You must enter a password.",
  }),
  code: z.optional(z.string()),
});

export const RegisterSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6, {
    message: "Minimum of 6 characters required.",
  }),
  name: z.string().min(1, {
    message: "You must enter a name.",
  }),
});


export const ResetSchema = z.object({
  email: z.string().email({
    message: "You must enter a valid email address.",
  }),
});


export const NewPasswordSchema = z.object({
  password: z.string().min(6, {
    message: "Minimum of 6 characters required.",
  }),
});


// export const SettingsSchema = z.object({
//   name: z.optional(z.string()),
//   isTwoFactorEnabled: z.optional(z.boolean()),
//   role: z.enum([UserRole.USER, UserRole.ADMIN]),
//   email: z.optional(z.string().email()),
//   password: z.optional(z.string().min(6)),
//   newPassword: z.optional(z.string().min(6)),
// })
//   .refine(data => {
//     if (data.password && !data.newPassword) {
//       return false;
//     }
    

//     return true;
//   }, {
//     message: "New password is required",
//     path: ["newPassword"],
//   })
//   .refine(data => {
//     if (!data.password && data.newPassword) {
//       return false;
//     }
    

//     return true;
//   }, {
//     message: "Current password is required",
//     path: ["password"],
//   });
