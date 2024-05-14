import fetch from 'node-fetch';
const handler = async (m, {conn, args, text}) => {
  if (!text) throw '*[❗] Masukkan tautan yang ingin diubah.*';
  const shortUrl1 = await (await fetch(`https://tinyurl.com/api-create.php?url=${args[0]}`)).text();
  if (!shortUrl1) throw `*[❗] Terjadi kesalahan saat proses pembuatan tautan.*`;
  const done = `*Long Url:*\n${text}\n*Short Url:*\n${shortUrl1}`.trim();
  m.reply(done);
};
handler.help = ['tinyurl'].map((v) => v + ' <link>');
handler.tags = ['tools'];
handler.command = /^(tinyurl|shorturl)$/i;
handler.fail = null;
export default handler;
