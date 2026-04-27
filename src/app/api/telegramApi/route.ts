
export async function POST(req: Request) {
  try {
    const data = await req.json()
    // Шаблон повідомлення для телеграму
    const message = `
    Нова заяявка:
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
        return Response.json({response: 'Помилка при відправленні повідомлення', result}, {status: 400});
    }
    // Повернення успішної відповіді
    return Response.json({response: 'Повідомлення успішно відправлено'})
  } catch (error) {
    return Response.json({response: 'Помилка при відправленні повідомлення'})
  }
}
