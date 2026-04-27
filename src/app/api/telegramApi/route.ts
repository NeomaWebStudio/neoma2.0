import { contactSchema } from "@/lib/validation/contact.schema";

export async function POST(req: Request) {
  try {
    const data = await req.json()
    
    // Валідація даних за допомогою Zod
    const validation = contactSchema.safeParse(data);
    if (!validation.success) {
      const errors = validation.error.issues.map(issue => ({
        field: issue.path.join('.'),
        message: issue.message,
      }));
      return Response.json({response: 'Помилка валідації даних', errors}, {status: 400});
    }
    
    // Шаблон повідомлення для телеграму
    const message = `
    Нова заявка:
    Імя: ${data.name}
    Телефон: ${data.phone}
    Email: ${data.email}
    Опис завдання: ${data.description}
    `
    // Змінні середовища для токена бота та ID чату
    const token = process.env.BOT_TOKEN
    const chatId = Number(process.env.CHAT_ID)
    const url = `https://api.telegram.org/bot${token}/sendMessage`;
    
    // Відправка повідомлення в Telegram
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
      }),
    });
    // Обробка відповіді від Telegram API
    const result = await response.json();
    
    // Перевірка на успішність відправки повідомлення
    if (!response.ok) {
        return Response.json({response: 'Помилка при відправленні повідомлення, спробуйте пізніше', error: result.description}, {status: 400});
    }
    // Повернення успішної відповіді
    return Response.json({response: 'Повідомлення успішно відправлено'})
  } catch (error) {
    return Response.json({response: 'Помилка при обробці запиту, спробуйте пізніше', error: String(error)}, {status: 500})
  }
}
