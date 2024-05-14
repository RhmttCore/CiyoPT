const handler = async (m, {conn, text, participants}) => {
  const member = participants.map((u) => u.id);
  if (!text) {
    var sum = member.length;
  } else {
    var sum = text;
  }
  let total = 0;
  const sider = [];
  for (let i = 0; i < sum; i++) {
    const users = m.isGroup ? participants.find((u) => u.id == member[i]) : {};
    if ((typeof global.db.data.users[member[i]] == 'undefined' || global.db.data.users[member[i]].chat == 0) && !users.isAdmin && !users.isSuperAdmin) {
      if (typeof global.db.data.users[member[i]] !== 'undefined') {
        if (global.db.data.users[member[i]].whitelist == false) {
          total++;
          sider.push(member[i]);
        }
      } else {
        total++;
        sider.push(member[i]);
      }
    }
  }
  if (total == 0) return conn.reply(m.chat, `*[❗] Grup ini aktif, tidak ada sidernya*`, m);
  m.reply(`*[ ⚠ Tinjauan tidak aktif ⚠ ]*\n\n*Group:* ${await conn.getName(m.chat)}\n*Group members:* ${sum}\n\n*[ 👻 Daftar sider 👻 ]*\n${sider.map((v) => '  👉🏻 @' + v.replace(/@.+/, '')).join('\n')}\n\n*Note: Ini mungkin tidak 100% akurat, bot mulai menghitung pesan setelah diaktifkan pada nomor ini*`, null, {mentions: sider});
};
handler.command = /^(verfantasmas|hider|sider)$/i;
handler.admin = true;
handler.botAdmin = true;
export default handler;
