import z from "zod";

export const contactSchema = z.object({
    name: z.string().min(2, "Імя обов'язкове та має містити не менше 2 символів"),
    phone: z.string().min(10, "Телефон обов'язковий та має містити не менше 10 символів"),
    email: z.string().email("Невірний формат email"),
    description: z.string().optional(),
});