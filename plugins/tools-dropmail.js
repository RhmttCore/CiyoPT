import fetch from 'node-fetch';
const handler = async (m, {
  conn,
  isOwner,
  usedPrefix,
  command,
  text,
}) => {
  conn.dropmail = conn.dropmail ? conn.dropmail : {};
  const id = 'dropmail';

  const lister = [
    'create',
    'message',
    'delete',
  ];

  const [feature, inputs, inputs_, inputs__, inputs___] = text.split(' ');
  if (!lister.includes(feature)) return m.reply('*Contoh:*\n' + usedPrefix + command + ' create\n\n*Pilih tipe yang ada*\n' + lister.map((v, index) => '  ○ ' + v).join('\n'));

  if (lister.includes(feature)) {
    if (feature == 'create') {
      try {
        if (conn.dropmail[id]) return m.reply(`Ada masih memiliki dropmail yang sebelumnya, silahkan hapus dengan cara *${usedPrefix + command} delete*`);
        const eml = await random_mail();
        const timeDiff = new Date(eml[2]) - new Date();
        conn.dropmail[id] = [
          await m.reply('*EMAIL:*\n' + eml[0] + '\n\n' + '*ID:*\n' + eml[1] + '\n\n*Expired:*\n' + msToTime(timeDiff) + '\n\n_Contoh *' + usedPrefix + command + ' message* Untuk memeriksa kotak masuk Anda_'),
          eml[0],
          eml[1],
          eml[2],
        ];
      } catch (e) {
        await m.reply(eror);
      }
    }

    if (feature == 'message') {
      if (!conn.dropmail[id]) return m.reply('Harap buat email terlebih dahulu.\nContoh *' + usedPrefix + command + ' create*');

      try {
        const eml = await get_mails(conn.dropmail[id][2]);
        const teks = eml[0].map((v, index) => {
          return `*EMAIL [ ${index + 1} ]*
*From* : ${v.fromAddr}
*For* : ${v.toAddr}

*Message* : ${v.text}
*Size* : ${formatSize(v.rawSize)}
*Title* : ${v.headerSubject}
*Download* : ${v.downloadUrl}
   `.trim();
        }).filter((v) => v).join('\n\n________________________\n\n');
        await m.reply(teks || '*EMPTY*' + '\n\n_Contoh *' + usedPrefix + command + ' delete* Untuk menghapus email_');
      } catch (e) {
        await m.reply(eror);
      }
    }
    if (feature == 'delete') {
      if (!conn.dropmail[id]) return m.reply('Anda tidak memiliki dropmail saat ini silahkan buat terlebih dahulu.\nContoh *' + usedPrefix + command + ' create*');

      try {
        delete conn.dropmail[id];
        await m.reply('Email berhasil dihapus');
      } catch (e) {
        await m.reply(eror);
      }
    }
  }
};
handler.help = ['dropmail'];
handler.tags = ['misc'];
handler.command = /^(dropmail)$/i;
export default handler;

function msToTime(duration) {
  const milliseconds = parseInt((duration % 1000) / 100);
  const seconds = Math.floor((duration / 1000) % 60);
  const minutes = Math.floor((duration / (1000 * 60)) % 60);
  const hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

  return `${hours}h ${minutes}m ${seconds}s ${milliseconds}ms`;
}

function formatSize(sizeInBytes) {
  const units = ['B', 'KB', 'MB', 'GB', 'TB'];
  let index = 0;

  while (sizeInBytes >= 1024 && index < units.length - 1) {
    sizeInBytes /= 1024;
    index++;
  }

  return sizeInBytes.toFixed(2) + ' ' + units[index];
}

async function random_mail() {
  const link = 'https://dropmail.me/api/graphql/web-test-wgq6m5i?query=mutation%20%7BintroduceSession%20%7Bid%2C%20expiresAt%2C%20addresses%20%7Baddress%7D%7D%7D';

  try {
    const response = await fetch(link);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    const email = data['data']['introduceSession']['addresses'][0]['address'];
    const id_ = data['data']['introduceSession']['id'];
    const time = data['data']['introduceSession']['expiresAt'];

    return [email, id_, time];
  } catch (error) {
    console.log(error);
  }
}

async function get_mails(id_) {
  const link = `https://dropmail.me/api/graphql/web-test-wgq6m5i?query=query%20(%24id%3A%20ID!)%20%7Bsession(id%3A%24id)%20%7B%20addresses%20%7Baddress%7D%2C%20mails%7BrawSize%2C%20fromAddr%2C%20toAddr%2C%20downloadUrl%2C%20text%2C%20headerSubject%7D%7D%20%7D&variables=%7B%22id%22%3A%22${id_}%22%7D`;

  try {
    const response = await fetch(link);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    const inbox = data['data']['session']['mails'];

    // return the size of the inbox to verify the amount of mail and whether the mail has arrived
    return [inbox, inbox.length];
  } catch (error) {
    console.log(error);
  }
}
