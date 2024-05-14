import translate from '@vitalets/google-translate-api';
import fetch from 'node-fetch';
const handler = async (m, {args, usedPrefix, command}) => {
  const msg = `*[❗] Penggunaan perintah yang benar ${usedPrefix + command} (bahasa) (teks)*\n*Contoh:*\n*${usedPrefix + command} id Hello World*\n\n*Bahasa yang didukung:*\n*- https://cloud.google.com/translate/docs/languages*`;
  if (!args || !args[0]) return m.reply(msg);
  let lang = args[0];
  let text = args.slice(1).join(' ');
  const defaultLang = 'id';
  if ((args[0] || '').length !== 2) {
    lang = defaultLang;
    text = args.join(' ');
  }
  if (!text && m.quoted && m.quoted.text) text = m.quoted.text;
  try {
    const result = await translate(`${text}`, {to: lang, autoCorrect: true});
    await m.reply('*Terjemahan:* ' + result.text);
  } catch {
    try {
      const lol = await fetch(`https://api.lolhuman.xyz/api/translate/auto/${lang}?apikey=${lolkeysapi}&text=${text}`);
      const loll = await lol.json();
      const result2 = loll.result.translated;
      await m.reply('*Terjemahan:* ' + result2);
    } catch {
      await m.reply('*[❗] Error, coba lagi nanti.*');
    }
  }
};
handler.command = /^(translate)$/i;
export default handler;
