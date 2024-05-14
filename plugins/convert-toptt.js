import {toPTT} from '../lib/converter.js';
const handler = async (m, {conn, usedPrefix, command}) => {
  const q = m.quoted ? m.quoted : m;
  const mime = (m.quoted ? m.quoted : m.msg).mimetype || '';
  if (!/video|audio/.test(mime)) throw `*[❗] Tanggapi audio yang ingin Anda konversi.*`;
  const media = await q.download?.();
  if (!media && !/video/.test(mime)) throw '*[❗] Maaf, terjadi kesalahan saat mengunduh video Anda, silakan coba lagi.*';
  if (!media && !/audio/.test(mime)) throw '*[❗] Maaf, terjadi kesalahan saat mengunduh audio Anda, silakan coba lagi.*';
  const audio = await toPTT(media, 'mp4');
  if (!audio.data && !/audio/.test(mime)) throw '*[❗] Maaf, terjadi kesalahan saat konversi audio Anda, silakan coba lagi.*';
  if (!audio.data && !/video/.test(mime)) throw '*[❗] Maaf, terjadi kesalahan saat konversi video Anda, silakan coba lagi.*';
  const aa = conn.sendFile(m.chat, audio.data, 'error.mp3', '', m, true, {mimetype: 'audio/mpeg'});
  if (!aa) return conn.sendMessage(m.chat, {audio: {url: media}, fileName: 'error.mp3', mimetype: 'audio/mpeg', ptt: true}, {quoted: m});
};
handler.help = ['tovn'];
handler.tags = ['audio'];
handler.command = /^to(vn|(ptt)?)$/i;
export default handler;
