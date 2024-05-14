import translate from '@vitalets/google-translate-api';
import {Anime} from '@shineiichijo/marika';
const client = new Anime();
const handler = async (m, {conn, text, usedPrefix}) => {
  if (!text) return m.reply(`*[❗] Masukkan nama anime yang ingin Anda cari*`);
  try {
     
    const anime = await client.searchAnime(text);
    const result = anime.data[0];
    const resultes = await translate(`${result.background}`, {to: 'id', autoCorrect: true});
    const resultes2 = await translate(`${result.synopsis}`, {to: 'id', autoCorrect: true});
    const AnimeInfo = `
🎀 • *Title:* ${result.title}
🎋 • *Format:* ${result.type}
📈 • *State:* ${result.status.toUpperCase().replace(/\_/g, ' ')}
🍥 • *Totals eps:* ${result.episodes}
🎈 • *Duration: ${result.duration}*
✨ • *Based On:* ${result.source.toUpperCase()}
💫 • *Released:* ${result.aired.from}
🎗 • *Finished:* ${result.aired.to}
🎐 • *Popularity:* ${result.popularity}
🎏 • *Favorites:* ${result.favorites}
🎇 • *Rating:* ${result.rating}
🏅 • *Rank:* ${result.rank}
♦ • *Trailer:* ${result.trailer.url}
🌐 • *URL:* ${result.url}
🎆 • *Background:* ${resultes.text}
❄ • *Summary:* ${resultes2.text}`;
    conn.sendFile(m.chat, result.images.jpg.image_url, 'error.jpg', AnimeInfo, m);
 
  } catch {

    throw `*[❗] Terjadi kesalahan saat mencari, coba lagi!*`;
  }
};
handler.command = /^(anime|animeinfo)$/i;
export default handler;
