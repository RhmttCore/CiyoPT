const handler = async (m, {conn, args, usedPrefix, command}) => {
  const isClose = { // Switch Case Like :v
    'open': 'not_announcement',
    'close': 'announcement',
    '0': 'not_announcement',
    '1': 'announcement',
    'abrir': 'not_announcement',
    'cerrar': 'announcement',
  }[(args[0] || '')];
  if (isClose === undefined) {
    throw `*━「* CONTOH PENGGUNAAN *」━*

*${usedPrefix + command} open*
*${usedPrefix + command} close*`.trim();
  }
  await conn.groupSettingUpdate(m.chat, isClose);
  {m.reply('*[ ✔ ] Grup berhasil dikonfigurasi.*');}
};
handler.help = ['group open / close', 'grupo abrir / cerrar'];
handler.tags = ['group'];
handler.command = /^(group|grup)$/i;
handler.admin = true;
handler.botAdmin = true;
export default handler;
