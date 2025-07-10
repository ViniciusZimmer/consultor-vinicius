type SimulationData = {
  name: string;
  phone: string;
  email: string;
  planType: string;
  category: string;
  value: number;
};

const sendTelegramMessage = async (data: SimulationData) => {
  try {
    const message = `
📝 *Nova Simulação Recebida*:
👤 Nome: ${data.name}
📞 Telefone: ${data.phone}
📧 E-mail: ${data.email}
💳 Tipo: ${data.planType}
📂 Categoria: ${data.category}
💰 Valor: R$ ${Number(data.value).toLocaleString("pt-BR")}
    `;

    const chatId = import.meta.env.VITE_TELEGRAM_CHAT_ID;
    const token = import.meta.env.VITE_TELEGRAM_BOT_TOKEN;

    console.log("Enviando mensagem para o Telegram:", {
      chatId,
      message,
    });

    const response = await fetch(
      `https://api.telegram.org/bot${token}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: chatId,
          text: message,
          parse_mode: "Markdown",
        }),
      }
    );

    if (!response.ok) {
      const text = await response.text();
      throw new Error(`Telegram API error: ${text}`);
    }

    return { success: true };
  } catch (error: unknown) {
    console.error("Erro ao enviar mensagem para o Telegram:", error);
    return { success: false, error: (error as Error).message };
  }
};

export default sendTelegramMessage;
