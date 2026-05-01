import nodemailer from "nodemailer";
import { contactSchema } from "@/lib/validation/contact.schema";
// Створення транспортеру для відправки повідомлень
const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
    }
});

// Відправка повідомлення
export async function POST(req: Request) {
    try {
    const data = await req.json();
    const validation = contactSchema.safeParse(data);
    if(!validation.success){
        const errors = validation.error.issues.map(issue => ({
            field: issue.path.join('.'),
            message: issue.message,
        }));
        return Response.json({response: 'Помилка валідації даних:', errors}, {status: 400})
    }
    const info = await transporter.sendMail({
        from: `"Системне повідомлення з сайту" <${process.env.SMTP_USER}>`,
        to: `${process.env.SMTP_USER}`,
        subject: "Нова заявка",
        html: `<h3>Нова Заявка</h3>
            <p>Імя: ${data.name}</p>
            <p>Телефон: ${data.phone}</p>
            <p>Email: ${data.email}</p>
            <p>Опис завдання: ${data.description}</p>
        `,
    });

    return Response.json({response: 'Емайл успішно надіслано'})
    } catch (error) {
        console.log(error)
    }

}

