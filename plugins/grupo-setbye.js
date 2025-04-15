let handler = async (m, { conn, text, isRowner }) => {
  if (!text) {
    return m.reply('🍭 Ingresa Un Mensaje Para La Despedida!\n> Ejemplo: `.setdespedida ¡Se fue😹!`');
  }

  const despMessage = text.trim();

  try {
    global.db.data.chats[m.chat].despMessage = despMessage;

    m.reply(`🍭 El mensaje de despedida del grupo ahora : ${despMessage}`);
  } catch (error) {
    console.error(error);
    m.reply('🍭 Hubo un error al intentar cambiar el mensaje de despedida.');
  }
};

handler.help = ['setdespedida *<mensaje>*'];
handler.tags = ['grupo'];
handler.command = ['setdespedida', 'setdesp'];
handler.admin = true;
handler.group = true;

export default handler;