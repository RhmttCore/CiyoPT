
const {downloadContentFromMessage} = (await import('@whiskeysockets/baileys'));

const handler = async (m, {conn}) => {
  if (!m.quoted) throw '*[❗] Tanggapi pesan sekali lihat yang ingin diambil.*';
  if (m.quoted.mtype !== 'viewOnceMessageV2') throw '*[❗] Pesan tersebut bukan pesan sekali lihat.*';
  const msg = m.quoted.message;
  const type = Object.keys(msg)[0];
  const media = await downloadContentFromMessage(msg[type], type == 'imageMessage' ? 'image' : 'video');
  let buffer = Buffer.from([]);
  for await (const chunk of media) {
    buffer = Buffer.concat([buffer, chunk]);
  }
  if (/video/.test(type)) {
    return conn.sendFile(m.chat, buffer, 'error.mp4', msg[type].caption || '', m);
  } else if (/image/.test(type)) {
    return conn.sendFile(m.chat, buffer, 'error.jpg', msg[type].caption || '', m);
  }
};
handler.help = ['readvo'];
handler.tags = ['tools'];
handler.command = /^(readviewonce|read|revelar|readvo)$/i;
export default handler;
