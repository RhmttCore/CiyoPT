// TheMystic-Bot-MD@BrunoSobrino - _antitoxic.js

const toxicRegex = /puto|puta|rata|estupido|imbecil|rctmre|mrd|verga|vrga|maricon|ppk|kntl|ajg|babi|tolol|kontol|pepek|anjing|memek|colmek|coli|coly/i;

export async function before(m, {isAdmin, isBotAdmin, isOwner}) {
  if (m.isBaileys && m.fromMe) {
    return !0;
  }
  if (!m.isGroup) {
    return !1;
  }
  const user = global.db.data.users[m.sender];
  const chat = global.db.data.chats[m.chat];
  const bot = global.db.data.settings[mconn.conn.user.jid] || {};
  const isToxic = toxicRegex.exec(m.text);

  if (isToxic && chat.antiToxic && !isOwner && !isAdmin) {
    user.warn += 1;
    if (!(user.warn >= 5)) await m.reply('_*< ANTI-TOXIC />*_\n\n*[ ℹ️ ] ' + `${user.warn == 1 ? `@${m.sender.split`@`[0]}` : `@${m.sender.split`@`[0]}`}, Mengirimkan kata "${isToxic}" dilarang di grup ini.\n\n▢ *Warning:* ${user.warn}/5` + '*', false, {mentions: [m.sender]});
  }

  if (user.warn >= 5) {
    user.warn = 0;
    await m.reply(`_*< ANTI-TOXIC />*_\n\n*[ ℹ️ ] Peserta @${m.sender.split('@')[0]}, Dia telah mendapat peringatan melebihi 5 kali, jadi dia akan dikeluarkan dari grup.*`, false, {mentions: [m.sender]});
    user.banned = true;
    await mconn.conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove');
    // await this.updateBlockStatus(m.sender, 'block')
  }
  return !1;
}
