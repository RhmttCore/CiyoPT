export function before(m) {
  const user = global.db.data.users[m.sender];
  if (user.afk > -1) {
    m.reply(`
  *[❗] Kamu telah berhenti afk ${user.afkReason ? ' setelah tidak aktif (AFK) dengan alasannya: ' + user.afkReason : ''}*
  
  *—◉ Afk selama: ${(new Date - user.afk).toTimeString()}*
  `.trim());
    user.afk = -1;
    user.afkReason = '';
  }
  const jids = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])];
  for (const jid of jids) {
    const user = global.db.data.users[jid];
    if (!user) {
      continue;
    }
    const afkTime = user.afk;
    if (!afkTime || afkTime < 0) {
      continue;
    }
    const reason = user.afkReason || '';
    m.reply(`*[❗] DON'T DISTURB*

*—◉ Pengguna yang Anda tandai tidak aktif*      
*—◉ ${reason ? 'Alasan tidak aktif (AFK): ' + reason : 'Alasan tidak aktif (AFK): _Pengguna tidak menentukan alasannya_'}*
*—◉ Telah afk selama: ${(new Date - afkTime).toTimeString()}*
  `.trim());
  }
  return true;
}
