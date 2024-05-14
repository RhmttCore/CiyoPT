import {find_lyrics} from '@brandond/findthelyrics';
import {getTracks} from '@green-code/music-track-data';
import {googleImage} from '@bochilteam/scraper';
const handler = async (m, {conn, text, usedPrefix, command}) => {
  const teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : '';
  if (!teks) throw `*[❗] Masukkan judul lagu yang ingin dicari, Contoh: ${usedPrefix + command} who i am*`;
  try {
      m.reply(global.wait);
    const result = await getTracks(teks);
    const lyrics = await find_lyrics(`${result[0].artist} ${result[0].title}`);
    const res = await fetch(global.API('https://some-random-api.com', '/lyrics', {title: result[0].artist + result[0].title}));
    const json = await res.json();
    let img;
    try {
      img = result.album.artwork;
    } catch {
      try {
        img = json.thumbnail.genius;
      } catch {
        const bochil = await googleImage(`${result[0].artist} ${result[0].title}`);
        img = await bochil.getRandom();
      }
    }
    const textoLetra = `🎤 TITLE: *${result[0].title || ''}*\n👤 AUTHOR: *${result[0].artist || ''}*\n\n📃🎵 LYRIC:\n${lyrics || ''}`;
    await conn.sendMessage(m.chat, {image: {url: img}, caption: textoLetra}, {quoted: m});
    await conn.sendMessage(m.chat, {audio: {url: result[0].preview}, fileName: `${result[0].artist} ${result[0].title}.mp3`, mimetype: 'audio/mp4'}, {quoted: m});
  } catch {
    throw `*[❗𝐈𝐍𝐅𝐎❗] Terjadi masalah saat pencarian, coba lagi!*`;
  }
};
handler.help = ['lirik', 'lyric'].map((v) => v + ' <Apa>');
handler.tags = ['internet'];
handler.command = /^(lirik|lyrics|lyric|liriklagu)$/i;
export default handler;
