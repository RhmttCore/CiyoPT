/**
TheMystic-Bot-MD@BrunoSobrino - _antitrabas.js
By @NeKosmic || https://github.com/NeKosmic/
**/

import * as fs from 'fs';

export async function before(m, {conn, isAdmin, isBotAdmin, usedPrefix}) {
  if (m.isBaileys && m.fromMe) {
    return !0;
  }
  if (!m.isGroup) return !1;
  const chat = global.db.data.chats[m.chat];
  const bot = global.db.data.settings[this.user.jid] || {};
  const delet = m.key.participant;
  const bang = m.key.id;
  const name = await conn.getName(m.sender);
  const fakemek = {'key': {'participant': '0@s.whatsapp.net', 'remoteJid': '0@s.whatsapp.net'}, 'message': {'groupInviteMessage': {'groupJid': '51995386439-1616969743@g.us', 'inviteCode': 'm', 'groupName': 'P', 'caption': 'The Mystic - Bot', 'jpegThumbnail': null}}};
  if (chat.antiTraba && m.text.length > 5000) { // Cantidad máxima de caracteres aceptados en un mensaje.
    if (isAdmin) return conn.sendMessage(m.chat, {text: `_*< ANTI-TRABAS />*_\n\n*[ ℹ️ ] Administrator @${m.sender.split('@')[0]} mengirim pesan yang berisi banyak karakter.*`, mentions: [m.sender]}, {quoted: fakemek});
    conn.sendMessage(m.chat, `*[ ! ] Sebuah pesan yang berisi banyak karakter terdeteksi [ ! ]*\n`, `${isBotAdmin ? '' : 'Saya bukan seorang administrator, aku tidak bisa melakukan apapun :/'}`, m);
    // await conn.sendButton(m.chat, `*[ ! ] Se detecto un mensaje que contiene muchos caracteres [ ! ]*\n`, `${isBotAdmin ? '' : 'No soy administrador, no puedo hacer nada :/'}`, author, ['[ DESACTIVAR ANTI TRABAS ]', usedPrefix+'apagar antitraba'], fakemek )
    if (isBotAdmin && bot.restrict) {
      conn.sendMessage(m.chat, {delete: {remoteJid: m.chat, fromMe: false, id: bang, participant: delet}});
        	setTimeout(() => {
        	conn.sendMessage(m.chat, {text: `Tandai obrolan sebagai sudah dibaca ✓\n${'\n'.repeat(400)}\n=> Number : wa.me/${m.sender.split('@')[0]}\n=> Alias : ${name}\n[ ! ] Anda baru saja mengirimkan teks yang berisi banyak karakter yang dapat menyebabkan kegagalan perangkat`, mentions: [m.sender]}, {quoted: fakemek});
      }, 0);
      setTimeout(() => {
        	conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove');
      }, 1000);
    } else if (!bot.restrict) return m.reply('[ ! ] Untuk melakukan tindakan penghapusan, pemilik saya harus mengaktifkan mode _restrict_!');
  }
  return !0;
}
