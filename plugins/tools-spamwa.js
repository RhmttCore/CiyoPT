const handler = async (m, {conn, text}) => {
  const [nomor, pesan, jumlah] = text.split('|');
  if (!nomor) throw '*[ ⚠️ ] Masukkan nomer yang ingin dispam.*\n*Contoh:*\n*—◉ #spamwa 6281234567890|teks :v|5*';
  if (!pesan) throw '*[ ⚠️ ] Masukkan pesan yang ingin disampaikan.*\n*Contoh:*\n*—◉ #spamwa 6281234567890|teks :v|5*';
  if (jumlah && isNaN(jumlah)) throw '*[ ⚠️ ] Masukkan jumlah pesan yang ingin disampaikan.*\n*Contoh:*\n*—◉ #spamwa 6281234567890|teks :v|5*';

  const fixedNumber = nomor.replace(/[-+<>@]/g, '').replace(/ +/g, '').replace(/^[0]/g, '62') + '@s.whatsapp.net';
  const fixedJumlah = jumlah ? jumlah * 1 : 10;
  if (fixedJumlah > 50) throw '*[ ⚠️ ] Terlalu banyak pesan, maksimal 50 pesan.*️';
  await m.reply(`*[❗] Berhasil mengirim spam ke nomer ${nomor} *\n*Pesan:* ${pesan}\n*—◉ ${fixedJumlah} terkirim!*`);
  for (let i = fixedJumlah; i > 1; i--) {
    if (i !== 0) conn.reply(fixedNumber, pesan.trim(), m);
  }
};
handler.help = ['spamwa <number>|<mesage>|<no of messages>'];
handler.tags = ['General'];
handler.command = /^spam(wa)?$/i;
handler.group = false;
handler.premium = true;
// handler.private = true
// handler.limit = true
export default handler;
