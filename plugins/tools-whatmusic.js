import fs from 'fs';
import acrcloud from 'acrcloud';
const acr = new acrcloud({
  host: 'identify-eu-west-1.acrcloud.com',
  access_key: 'c33c767d683f78bd17d4bd4991955d81',
  access_secret: 'bvgaIAEtADBTbLwiPGYlxupWqkNGIjT7J9Ag2vIu',
});

const handler = async (m) => {
  const q = m.quoted ? m.quoted : m;
  const mime = (q.msg || q).mimetype || '';
  if (/audio|video/.test(mime)) {
    if ((q.msg || q).seconds > 30) return m.reply('[❗] File yang Anda unggah terlalu besar, kami sarankan Anda memotong file besar menjadi file yang lebih kecil, hanya bisa 10-30 detik');
    const media = await q.download();
    const ext = mime.split('/')[1];
    fs.writeFileSync(`./tmp/${m.sender}.${ext}`, media);
    const res = await acr.identify(fs.readFileSync(`./tmp/${m.sender}.${ext}`));
    const {code, msg} = res.status;
    if (code !== 0) throw msg;
    const {title, artists, album, genres, release_date} = res.metadata.music[0];
    const txt = `
Result

• 📌 Title: ${title}
• 👨‍🎤 Artist: ${artists !== undefined ? artists.map((v) => v.name).join(', ') : 'Not found'}
• 💾 Album: ${album.name || 'Not found'}
• 🌐 Genre: ${genres !== undefined ? genres.map((v) => v.name).join(', ') : 'Not found'}
• 📆 Release Date: ${release_date || 'Not found'}
`.trim();
    fs.unlinkSync(`./tmp/${m.sender}.${ext}`);
    m.reply(txt);
  } else throw '*[❗] Tanggapi sebuah audio.*';
};
handler.command = /^whatmusik|whatmusic|musikapa$/i;
export default handler;
