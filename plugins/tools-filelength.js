import uploadImage from '../lib/uploadImage.js';
import fetch from 'node-fetch';
const handler = async (m, {conn, usedPrefix, command, args, text}) => {
  const q = m.quoted ? m.quoted : m;
  const mime = (q.msg || q).mimetype || '';
  if (!mime) throw '⚠️️ Tanggapi sebuah gambar atau video.';
  if (!text) throw '⚠️️ Masukkan ukuran gambar/video yang baru.';
  if (isNaN(text)) throw ' 🔢 Hanya angka';
  if (!/image\/(jpe?g|png)|video|document/.test(mime)) throw `⚠️️ Format tidak didukung`;
  const img = await q.download();
  const url = await uploadImage(img);

  if (/image\/(jpe?g|png)/.test(mime)) {
    conn.sendMessage(m.chat, {image: {url: url}, caption: `*Berhasil!*`, fileLength: `${text}`, mentions: [m.sender]}, {ephemeralExpiration: 24*3600, quoted: m});
  } else if (/video/.test(mime)) {
    return conn.sendMessage(m.chat, {video: {url: url}, caption: `*Berhasil!*`, fileLength: `${text}`, mentions: [m.sender]}, {ephemeralExpiration: 24*3600, quoted: m});
  }
};
handler.tags = ['tools'];
handler.help = ['filelength <jumlah>'];
handler.command = /^(length|filelength)$/i;
export default handler;
