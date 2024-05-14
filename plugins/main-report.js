const handler = async (m, {conn, text, usedPrefix, command}) => {
  if (!text) throw `*[❗] Masukkan pesan yang ingin Anda kirim.*\n\n*Contoh:*\n*${usedPrefix + command} fitur ${usedPrefix}play error min!*`;
  if (text.length < 10) throw `*[❗] Masukkan minimum 10 karakter huruf!*`;
  if (text.length > 1000) throw `*[❗] Tidak bisa mengirim pesan yang lebih dari 1000 karakter huruf*`;
  const teks = `*❒═════[REPORT]═════❒*\n*┬*\n*├❧ Number:* wa.me/${m.sender.split`@`[0]}\n*┴*\n*┬*\n*├❧ Message:* ${text}\n*┴*`;
  conn.reply('6285254337661@s.whatsapp.net', m.quoted ? teks + m.quoted.text : teks, null, {contextInfo: {mentionedJid: [m.sender]}});
    
    const cal = `*[ ✔️ ] Pesan berhasil dikirim ke pembuat bot, laporan anda akan ditindaklanjuti secepatnya, jika palsu atau bercanda hanya akan diabaikan*`
  async function loading() {

var hawemod = [

"《█▒▒▒▒▒▒▒▒▒▒▒》10%",

"《████▒▒▒▒▒▒▒▒》30%",

"《███████▒▒▒▒▒》50%",

"《██████████▒▒》80%",

"《████████████》100%"

]

   let { key } = await conn.sendMessage(m.chat, {text: `*Memuat..*`, mentions: conn.parseMention(cal)}, {quoted: m})

 for (let i = 0; i < hawemod.length; i++) {

   await new Promise(resolve => setTimeout(resolve, 200)); 

   await conn.sendMessage(m.chat, {text: hawemod[i], edit: key, mentions: conn.parseMention(cal)}, {quoted: m}); 

  }

  await conn.sendMessage(m.chat, {text: cal, edit: key, mentions: conn.parseMention(cal)}, {quoted: m});         

 }

loading()    
  //m.reply(`*[ ✔️ ] Pesan berhasil dikirim ke pembuat bot, laporan anda akan ditindaklanjuti secepatnya, jika palsu atau bercanda hanya akan diabaikan*`);
};
handler.help = ['report', 'request'].map((v) => v + ' <teks>');
handler.tags = ['main'];
handler.command = /^(report|request|bugs|bug|report-owner)$/i;
export default handler;
