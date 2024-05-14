import Presence from '@whiskeysockets/baileys';
const handler = async (m, {conn, args, text}) => {
//  if (!isBotAdmin) throw `Bot bukan admin`;
  if (!text) throw `*[❗] Masukkan nama grup baru yang akan digunakan.`;
  try {
    const text = args.join` `;
    if (!args || !args[0]) {
    } else {
      conn.groupUpdateSubject(m.chat, text);
    }
  } catch (e) {
    throw '[❗] *Terjadi kesalahan saat proses berlangsung, coba lagi dengan maksimal 25 karakter.*';
  }
};
handler.help = ['setname <text>'];
handler.tags = ['group'];
handler.command = /^(setname)$/i;
handler.group = true;
handler.admin = true;
handler.botAdmin = true;
export default handler;
