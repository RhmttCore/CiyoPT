import fs from 'fs';
const handler = async (m, {conn, usedPrefix}) => {
  
  const doc = ['pdf', 'zip', 'vnd.openxmlformats-officedocument.presentationml.presentation', 'vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'vnd.openxmlformats-officedocument.wordprocessingml.document'];
  const document = doc[Math.floor(Math.random() * doc.length)];
  const text = `*Halo pengguna 👋🏻, Saya mengundang Anda untuk bergabung dengan grup resmi CiyoBot untuk berinteraksi bersama komunitas.*

*➤ Official Group Ciyobot:*
*1.-* https://chat.whatsapp.com/LlbN8sF1I0LIdQ0eDkCXpS`.trim();
  let image = fs.readFileSync('./Menu4.jpg');
 const buttonMessage= {
    'document': {url: `https://github.com/RhmttCore/CiyoBotV2`},
    'mimetype': `application/${document}`,
    'fileName': `「  𝑯𝒆𝒍𝒍𝒐 𝑾𝒐𝒓𝒍𝒅 」`,
    'fileLength': 99999999999999,
    'pageCount': 200,
    'contextInfo': {
      'forwardingScore': 200,
      'isForwarded': true,
      'externalAdReply': {
        'mediaUrl': 'https://github.com/RhmttCore/CiyoBotV2',
        'mediaType': 2,
        'previewType': 'pdf',
        'title': 'Ciyo | Official Group',
        'body': wm,
        'thumbnail': image,
        'sourceUrl': 'https://chat.whatsapp.com/LlbN8sF1I0LIdQ0eDkCXpS'}},
    'caption': text,
    'footer': wm,
    'headerType': 6};
 conn.sendMessage(m.chat, buttonMessage, {quoted: m});
    
};
 
handler.command = ['listgc', 'listgp', 'listgrup', 'listgroup', 'grouplist'];
export default handler;
