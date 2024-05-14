/* Codigo hecho por @Fabri115 y mejorado por BrunoSobrino */

import { readdirSync, unlinkSync, existsSync, promises as fs, rmSync } from 'fs';
import path from 'path';

const handler = async (m, { conn, usedPrefix }) => {
  if (global.conn.user.jid !== conn.user.jid) {
    return conn.sendMessage(m.chat, {text: '*[❗] Gunakan perintah ini langsung di nomor utama Bot.*'}, {quoted: m});
  }
  const chatId = m.isGroup ? [m.chat, m.sender] : [m.sender];
  const sessionPath = './MysticSession/';
  try {
    const files = await fs.readdir(sessionPath);
    let filesDeleted = 0;
    for (const file of files) {
      for (const id of chatId) {
        if (file.includes(id.split('@')[0])) {
          await fs.unlink(path.join(sessionPath, file));
          filesDeleted++;
          break;
        }
      }
    }
    if (filesDeleted === 0) {
      await conn.sendMessage(m.chat, {text: '*Tidak ditemukan file yang menyertakan ID obrolan.*'}, {quoted: m});
    } else {
      await conn.sendMessage(m.chat, {text: `*Berhasil menghapus ${filesDeleted} file sesi.*`}, {quoted: m});
    }
  } catch (err) {
    console.error('Kesalahan membaca folder atau file sesi:', err);
    await conn.sendMessage(m.chat, {text: '*Terjadi kesalahan saat menghapus file sesi.*'}, {quoted: m});
  }
  await conn.sendMessage(m.chat, {text: `*Berhasil, Jika bot tidak merespon anda silahkan coba lagi.*`}, {quoted: m});
};
handler.help = ['fixmsg'];
handler.tags = ['main'];
handler.command = /^(fixmsgespera|fixmsg)$/i;
export default handler;
