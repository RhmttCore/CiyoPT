import yts from 'yt-search';
import fs from 'fs';
const handler = async (m, {conn, text, usedPrefix, command}) => {
  if (!text) throw `*[❗] Masukkan nama lagu*\n\n*—◉ Contoh:*\n*${usedPrefix + command} Begin you*`;
  try {
    const vids_ = {
      from: m.sender,
      urls: [],
    };
    if (!global.videoList) {
      global.videoList = [];
    }
    if (global.videoList[0]?.from == m.sender) {
      global.videoList.splice(0, global.videoList.length);
    }
    const results = await yts(text);
    const textoInfo = `*[❗] Anda dapat mendownload video yang Anda inginkan dengan cara berikut:*
◉ ${usedPrefix}audio <angka>
◉ ${usedPrefix}video <angka> 

*—◉ Contoh:*
*◉ ${usedPrefix}audio 5*
*◉ ${usedPrefix}video 8*`.trim();
    const teks = results.all.map((v, i) => {
      const link = v.url;
      vids_.urls.push(link);
      return `[${i + 1}] ${v.title}
↳ 🫐 *_Url :_* ${v.url}
↳ 🕒 *_Duration :_* ${v.timestamp}
↳ 📥 *_Uploaded :_* ${v.ago}
↳ 👁 *_View :_* ${v.views}`;
    }).join('\n\n◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦\n\n');
    conn.sendFile(m.chat, results.all[0].thumbnail, 'yts.jpeg', textoInfo + '\n\n' + teks, m);
    global.videoList.push(vids_);
  } catch {
    await m.reply('*[❗] Terjadi kesalahan saat pengunduhan.*');
  }
};
handler.help = ['playlist *<teks>*'];
handler.tags = ['search'];
handler.command = /^playlist|playlist2$/i;
export default handler;
