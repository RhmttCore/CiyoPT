import axios from 'axios';
import fetch from 'node-fetch';
import cheerio from 'cheerio';
import {mediafiredl} from '@bochilteam/scraper';

const handler = async (m, {conn, args, usedPrefix, command}) => {
  if (!args[0]) throw `_*< DOWNLOADER - MEDIAFIRE />*_\n\n*[ ℹ️ ] Masukkan tautan MediaFire.*`;
  try {
    const resEX = await mediafiredl(args[0]);
    const captionES = `_*< DOWNLOADER - MEDIAFIRE />*_\n
▢ *Name:* ${resEX.filename}
▢ *Size:* ${resEX.filesizeH}
▢ *Extension:* ${resEX.ext}\n\n
*[ ℹ️ ] File sedang dikirim. Tunggu...*`.trim();
    m.reply(captionES);
    await conn.sendFile(m.chat, resEX.url, resEX.filename, '', m, null, {mimetype: resEX.ext, asDocument: true});
  } catch {
    try {
      const res = await mediafireDl(args[0]);
      const {name, size, date, mime, link} = res;
      const caption = `_*< DOWNLOADER - MEDIAFIRE />*_\n
▢ *Name:* ${name}
▢ *Size:* ${size}
▢ *Extension:* ${mime}\n\n
*[ ℹ️ ] File sedang dikirim. Tunggu...*`.trim();
      await m.reply(caption);
      await conn.sendFile(m.chat, link, name, '', m, null, {mimetype: mime, asDocument: true});
    } catch {
      await m.reply('_*< DOWNLOADER - MEDIAFIRE />*_\n\n*[ ℹ️ ] Terjadi kesalahan. Silakan coba lagi nanti.*');
    }
  }
};
handler.command = /^(mediafire|mediafiredl|dlmediafire)$/i;
export default handler;

async function mediafireDl(url) {
  const res = await axios.get(`https://www-mediafire-com.translate.goog/${url.replace('https://www.mediafire.com/', '')}?_x_tr_sl=en&_x_tr_tl=fr&_x_tr_hl=en&_x_tr_pto=wapp`);
  const $ = cheerio.load(res.data);
  const link = $('#downloadButton').attr('href');
  const name = $('body > main > div.content > div.center > div > div.dl-btn-cont > div.dl-btn-labelWrap > div.promoDownloadName.notranslate > div').attr('title').replaceAll(' ', '').replaceAll('\n', '');
  const date = $('body > main > div.content > div.center > div > div.dl-info > ul > li:nth-child(2) > span').text();
  const size = $('#downloadButton').text().replace('Download', '').replace('(', '').replace(')', '').replace('\n', '').replace('\n', '').replace('                         ', '').replaceAll(' ', '');
  let mime = '';
  const rese = await axios.head(link);
  mime = rese.headers['content-type'];
  return {name, size, date, mime, link};
}
