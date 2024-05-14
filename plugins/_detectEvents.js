// Creditos del codigo a @Gatito-kw //

/* GitHub: https://github.com/Gatito-kw */

/* Bot: https://github.com/Gatito-kw/nekobot-md */

import {WAMessageStubType} from '@whiskeysockets/baileys';
import fetch from 'node-fetch';

export async function before(m, {conn, participants}) {
  if (!m.messageStubType || !m.isGroup) return !0;
  const groupName = (await conn.groupMetadata(m.chat)).subject;
  const groupAdmins = participants.filter((p) => p.admin);
  const pp = await conn.profilePictureUrl(m.chat, 'image').catch((_) => null) || './src/avatar_contact.png';
  const img = await (await fetch(pp)).buffer();
  const chat = global.db.data.chats[m.chat];
  const mentionsString = [m.sender, m.messageStubParameters[0], ...groupAdmins.map((v) => v.id)];
  const mentionsContentM = [m.sender, m.messageStubParameters[0]];
  const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};

  if (chat.detect2 && m.messageStubType == 29) {
    let txt1 = `*Seorang anggota baru-baru ini dipromosikan menjadi administrator.*\n\n`;
    txt1 += `*◦  Group:* ${groupName}\n`;
    txt1 += `*◦  New admin:* @${m.messageStubParameters[0].split`@`[0]}\n`;
    txt1 += `*◦  Executed by:* @${m.sender.split`@`[0]}`;
    await conn.sendMessage(m.chat, {image: img, caption: txt1, mentions: mentionsString}, {quoted: fkontak2});
  }

  if (chat.detect2 && m.messageStubType == 30) {
    let txt2 = `*Seorang administrator baru-baru ini diturunkan menjadi anggota.*\n\n`;
    txt2 += `*◦  Group:* ${groupName}\n`;
    txt2 += `*◦  It was removed a:* @${m.messageStubParameters[0].split`@`[0]}\n`;
    txt2 += `*◦  Executed by:* @${m.sender.split`@`[0]}`;
    await conn.sendMessage(m.chat, {image: img, caption: txt2, mentions: mentionsString}, {quoted: fkontak2});
  }

  if (chat.detect2 && m.messageStubType == 27) {
    let txt3 = `*Seorang anggota baru baru-baru ini bergabung dengan grup.*\n\n`;
    txt3 += `*◦  Group:* ${groupName}\n`;
    if (!m.sender.endsWith('@g.us')) {
      txt3 += `*◦  Was added a:* @${m.messageStubParameters[0].split`@`[0]}\n`;
      txt3 += `*◦  Executed by:* @${m.sender.split`@`[0]}`;
    } else {
      txt3 += `*◦  Was added:* @${m.messageStubParameters[0].split`@`[0]}\n`;
    }
    await conn.sendMessage(m.chat, {image: img, caption: txt3, mentions: mentionsContentM}, {quoted: fkontak2});
  }

  if (chat.detect2 && m.messageStubType == 28) {
    let txt4 = `*Seorang anggota grup baru-baru ini dihapus.*\n\n`;
    txt4 += `*◦  Group:* ${groupName}\n`;
    if (!m.sender.endsWith('@g.us')) {
      txt4 += `*◦  It was eliminated:* @${m.messageStubParameters[0].split`@`[0]}\n`;
      txt4 += `*◦  Executed by:* @${m.sender.split`@`[0]}`;
    } else {
      txt4 += `*◦  It was eliminated:* @${m.messageStubParameters[0].split`@`[0]}\n`;
    }
    await conn.sendMessage(m.chat, {image: {url: pp}, caption: txt4, mentions: mentionsContentM}, {quoted: fkontak2});
  }

  if (chat.detect2 && m.messageStubType == 32) {
    let ax;
    if (m.messageStubParameters[0] === m.sender) {
      ax = 'salido';
    } else {
      ax = 'eliminado';
    }
    let txt5 = `*Seorang anggota grup baru-baru ini bergabung dengan ${ax}.*\n\n`;
    txt5 += `*◦  Group:* ${groupName}\n`;
    if (ax === 'eliminado') {
      txt5 += `*◦  It was deleted a:* @${m.messageStubParameters[0].split`@`[0]}\n`;
      txt5 += `*◦  Executed by:* @${m.sender.split`@`[0]}`;
    } else {
      txt5 += `*◦  It came out:* @${m.messageStubParameters[0].split`@`[0]}\n`;
    }
    await conn.sendMessage(m.chat, {image: {url: pp}, caption: txt5, mentions: mentionsContentM}, {quoted: fkontak2});
  }

  if (chat.detect2 && m.messageStubType == 26) {
    let accion;
    if (m.messageStubParameters[0].split`@`[0] === 'on') {
      accion = 'cerrado';
    } else {
      accion = 'abierto';
    }
    let txt6 = `*Pengaturan grup baru-baru ini diubah.*\n\n`;
    txt6 += `*◦  Group:* ${groupName}\n`;
    txt6 += `*◦  The group has:* ${'```' + accion + '```'}\n`;
    txt6 += `*◦  Executed by:* @${m.sender.split`@`[0]}`;
    await conn.sendMessage(m.chat, {image: {url: pp}, caption: txt6, mentions: mentionsContentM}, {quoted: fkontak2});
  }

  if (chat.detect2 && m.messageStubType == 21) {
    let txt7 = `*Nama grup baru-baru ini diubah.*\n\n`;
    txt7 += `*◦  New name:* ${'```' + groupName + '```'}\n`;
    txt7 += `*◦  Executed by:* @${m.sender.split`@`[0]}`;
    await conn.sendMessage(m.chat, {image: {url: pp}, caption: txt7, mentions: mentionsContentM}, {quoted: fkontak2});
  }
} /* Cierre del comando */
