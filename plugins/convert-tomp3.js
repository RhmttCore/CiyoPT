import {toAudio} from '../lib/converter.js';
const handler = async (m, {conn, usedPrefix, command}) => {
  const q = m.quoted ? m.quoted : m;
  const mime = (q || q.msg).mimetype || q.mediaType || '';
  if (!/video|audio/.test(mime)) throw `*[❗] Tanggapi video yang ingin Anda konversi.*`;
  const media = await q.download();
  if (!media) throw '*[❗] Maaf, terjadi kesalahan saat mengunduh video Anda, silakan coba lagi*';
  const audio = await toAudio(media, 'mp4');
  if (!audio.data) throw '*[❗] Maaf, terjadi kesalahan saat mengonversi memo suara Anda ke audio/mp3, silakan coba lagi*';
  conn.sendMessage(m.chat, {audio: audio.data, mimetype: 'audio/mpeg'}, {quoted: m});
};
handler.alias = ['tomp3', 'toaudio'];
handler.command = /^to(mp3|audio)$/i;
export default handler;
