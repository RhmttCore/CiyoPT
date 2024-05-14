const handler = async (m, {conn, participants, groupMetadata}) => {
  const pp = await conn.profilePictureUrl(m.chat, 'image').catch((_) => null) || './src/avatar_contact.png';
  const {antiToxic, antiTraba, antidelete, antiviewonce, isBanned, welcome, detect, detect2, sWelcome, sBye, sPromote, sDemote, antiLink, antiLink2, modohorny, autosticker, modoadmin, audios, delete: del} = global.db.data.chats[m.chat];
  const groupAdmins = participants.filter((p) => p.admin);
  const listAdmin = groupAdmins.map((v, i) => `${i + 1}. @${v.id.split('@')[0]}`).join('\n');
  const owner = groupMetadata.owner || groupAdmins.find((p) => p.admin === 'superadmin')?.id || m.chat.split`-`[0] + '@s.whatsapp.net';
  const text = `*「 GROUP INFORMATION 」*\n
*ID:* 
${groupMetadata.id}

*NAME:* 
${groupMetadata.subject}

*DESCRIPTION:* 
${groupMetadata.desc?.toString() || '(Tidak ada)'}

*TOTAL PARTICIPANTS:*
${participants.length} Participantes

*CREATED BY:* 
@${owner.split('@')[0]}

*LIST ADMINS:*
${listAdmin}

*OPTION SETTINGS:*
— Welcome: ${welcome ? '_Aktif_' : '_Tidak aktif_'}
— Detect: ${detect ? '_Aktif_' : '_Tidak aktif_'} 
— Detect 2: ${detect2 ? '_Aktif_' : '_Tidak aktif_'} 
— Antilink: ${antiLink ? '_Aktif_' : '_Tidak aktif_'} 
— Antilink 𝟸: ${antiLink2 ? '_Aktif_' : '_Tidak aktif_'} 
— Mode Horny: ${modohorny ? '_Aktif_' : '_Tidak aktif_'} 
— Autosticker: ${autosticker ? '_Aktif_' : '_Tidak aktif_'} 
— Audio: ${audios ? '_Aktif_' : '_Tidak aktif_'} 
— Antiviewonce ${antiviewonce ? '_Aktif_' : '_Tidak aktif_'} 
— Antidelete: ${antidelete ? '_Aktif_' : '_Tidak aktif_'} 
— Antitoxic ${antiToxic ? '_Aktif_' : '_Tidak aktif_'} 
— Antitraba ${antiTraba ? '_Aktif_' : '_Tidak aktif_'} 
— Mode Admin: ${modoadmin ? '_Akti_' : '_Tidak aktif_'} 
`.trim();
  conn.sendFile(m.chat, pp, 'error.jpg', text, m, false, {mentions: [...groupAdmins.map((v) => v.id), owner]});
};
handler.help = ['infogrup'];
handler.tags = ['group'];
handler.command = /^(infogrup|gro?upinfo|info(gro?up|gc))$/i;
handler.group = true;
export default handler;
