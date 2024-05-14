import gplay from "google-play-scraper";

let handler = async (m, { conn, text }) => {
  if (!text) throw "*[❗] Masukkan nama apk yang ingin anda cari.*";
  let res = await gplay.search({ term: text });
  if (!res.length) throw `*[❗] Masukkan nama apk yang ingin Anda cari dengan benar*`;
  let opt = {
    contextInfo: {
      externalAdReply: {
        title: res[0].title,
        body: res[0].summary,
        thumbnail: (await conn.getFile(res[0].icon)).data,
        sourceUrl: res[0].url,
      },
    },
  };
  await console.log(res);
  res = res.map(
    (v) =>
      `*🔍 Result:* ${v.title}
       *✍️ Developer:* ${v.developer}
       *💸 Price:* ${v.priceText}
       *📈 Rating:* ${v.scoreText}
        *⛓️ Url:* ${v.url}`
  ).join`\n\n`;
  m.reply(res, null, opt);
};
handler.help = ['playstore <aplicacion>'];
handler.tags = ['internet'];
handler.command = /^(playstore)$/i;
export default handler;
