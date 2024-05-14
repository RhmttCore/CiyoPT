// TheMystic-Bot-MD@BrunoSobrino - _antiarab.js

const handler = (m) => m;
handler.before = async function(m, {conn, isAdmin, isBotAdmin, isOwner, isROwner} ) {
  /* if (m.message) {
    console.log(m.message)
  }*/
  if (!m.isGroup) return !1;
  const chat = global.db.data.chats[m.chat];
  const bot = global.db.data.settings[conn.user.jid] || {};
  if (isBotAdmin && chat.antiArab2 && !isAdmin && !isOwner && !isROwner && bot.restrict) {
    if (m.sender.startsWith('212' || '212')) {
      m.reply(`_*< ANTI-ARAB />*_\n\n*[ ℹ️ ] Nomor yang dimulai dengan +212 tidak diperbolehkan di grup ini. Oleh karena itu Anda akan dikeluarkan dari grup.*`);
      const responseb = await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove');
      if (responseb[0].status === '404') return;
    }

    if (m.sender.startsWith('265' || '265')) {
      m.reply(`_*< ANTI-ARAB />*_\n\n*[ ℹ️ ] Nomor yang dimulai dengan +265 tidak diperbolehkan di grup ini. Oleh karena itu Anda akan dikeluarkan dari grup.*`);
      const responseb = await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove');
      if (responseb[0].status === '404') return;
    }

    if (m.sender.startsWith('92' || '92')) {
      m.reply(`_*< ANTI-ARAB />*_\n\n*[ ℹ️ ] Nomor yang dimulai dengan +92 tidak diperbolehkan di grup ini. Oleh karena itu, Anda akan dikeluarkan dari grup.*`);
      const responseb = await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove');
      if (responseb[0].status === '404') return;
    }
  }
};
export default handler;
