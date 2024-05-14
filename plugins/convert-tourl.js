import uploadFile from '../lib/uploadFile.js';
import uploadImage from '../lib/uploadImage.js';
const handler = async (m) => {
  const q = m.quoted ? m.quoted : m;
  const mime = (q.msg || q).mimetype || '';
  if (!mime) throw '*[❗] Tanggapi image/video yang ingin Anda konversi *';
  const media = await q.download();
  const isTele = /image\/(png|jpe?g|gif)|video\/mp4/.test(mime);
  const link = await (isTele ? uploadImage : uploadFile)(media);
  m.reply(`*Tautan ke file Anda:* ${link}`);
};
handler.help = ['tourl'];
handler.tags = ['sticker'];
handler.command = /^(upload|tourl)$/i;
export default handler;
