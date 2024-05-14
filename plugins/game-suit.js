const handler = async (m, {conn, text, command, usedPrefix, args}) => {
// let pp = 'https://www.bighero6challenge.com/images/thumbs/Piedra,-papel-o-tijera-0003318_1584.jpeg'
  const pp = 'https://telegra.ph/file/c7924bf0e0d839290cc51.jpg';

  // 60000 = 1 minuto // 30000 = 30 segundos // 15000 = 15 segundos // 10000 = 10 segundos
  const time = global.db.data.users[m.sender].wait + 10000;
  if (new Date - global.db.data.users[m.sender].wait < 10000) throw `*🕓 Anda harus menunggu ${Math.floor((time - new Date()) / 1000)} detik sebelum dapat bermain lagi*`;

  if (!args[0]) return conn.reply(m.chat, `*—◉ Penggunaan perintah:*\n*◉ ${usedPrefix + command} batu*\n*◉ ${usedPrefix + command} kertas*\n*◉ ${usedPrefix + command} gunting*`, m);
  // conn.sendButton(m.chat, `*𝐏𝐢𝐞𝐝𝐫𝐚 🗿, 𝐏𝐚𝐩𝐞𝐥 📄 𝐨 𝐓𝐢𝐣𝐞𝐫𝐚 ✂️*\n\n*—◉  𝙿𝚎𝚍𝚎𝚜 𝚞𝚜𝚊𝚛 𝚕𝚘𝚜 𝚋𝚘𝚝𝚘𝚗𝚎𝚜 𝚙𝚊𝚛𝚊 𝚓𝚞𝚐𝚊𝚛 𝚘 𝚝𝚊𝚖𝚋𝚒𝚎𝚗 𝚙𝚞𝚎𝚍𝚎𝚜 𝚞𝚜𝚊𝚛 𝚎𝚜𝚝𝚘𝚜 𝚌𝚘𝚖𝚊𝚗𝚍𝚘𝚜:*\n*◉ ${usedPrefix + command} piedra*\n*◉ ${usedPrefix + command} papel*\n*◉ ${usedPrefix + command} tijera*`, wm, pp, [['Piedra 🗿', `${usedPrefix + command} piedra`], ['Papel 📄', `${usedPrefix + command} papel`], ['Tijera ✂️', `${usedPrefix + command} tijera`]], m)
  let astro = Math.random();
  if (astro < 0.34) {
    astro = 'batu';
  } else if (astro > 0.34 && astro < 0.67) {
    astro = 'gunting';
  } else {
    astro = 'kertas';
  }
  const textm = text.toLowerCase();
  if (textm == astro) {
    global.db.data.users[m.sender].exp += 500;
    m.reply(`*🔰 Draw!*\n\n*👉🏻 You: ${textm}*\n*👉🏻 Ciyo: ${astro}*\n*🎁 Reward +500 XP*`);
  } else if (text == 'kertas') {
    if (astro == 'batu') {
      global.db.data.users[m.sender].exp += 1000;
      m.reply(`*🥳 You win! 🎉*\n\n*👉🏻 You: ${textm}*\n*👉🏻 Ciyo: ${astro}*\n*🎁 Reward +1000 XP*`);
    } else {
      global.db.data.users[m.sender].exp -= 300;
      m.reply(`*☠️ You lose! ❌*\n\n*👉🏻 You: ${textm}*\n*👉🏻 Ciyo: ${astro}*\n*❌ Reward -300 XP*`);
    }
  } else if (text == 'gunting') {
    if (astro == 'kertas') {
      global.db.data.users[m.sender].exp += 1000;
      m.reply(`*🥳 You win! 🎉*\n\n*👉🏻 You: ${textm}*\n*👉🏻 Ciyo: ${astro}*\n*🎁 Reward +1000 XP*`);
    } else {
      global.db.data.users[m.sender].exp -= 300;
      m.reply(`*☠️ You lose! ❌*\n\n*👉🏻 You: ${textm}*\n*👉🏻 Ciyo: ${astro}*\n*❌ Reward -300 XP*`);
    }
  } else if (textm == 'gunting') {
    if (astro == 'kertas') {
      global.db.data.users[m.sender].exp += 1000;
      m.reply(`*🥳 You win! 🎉*\n\n*👉🏻 You: ${textm}*\n*👉🏻 Ciyo: ${astro}*\n*🎁 Reward +1000 XP*`);
    } else {
      global.db.data.users[m.sender].exp -= 300;
      m.reply(`*☠️ You lose! ❌*\n\n*👉🏻 You: ${textm}*\n*👉🏻 Ciyo: ${astro}*\n*❌ Reward -300 XP*`);
    }
  } else if (textm == 'kertas') {
    if (astro == 'batu') {
      global.db.data.users[m.sender].exp += 1000;
      m.reply(`*🥳 You win! 🎉*\n\n*👉🏻 You: ${textm}*\n*👉🏻 Ciyo: ${astro}*\n*🎁 Reward +1000 XP*`);
    } else {
      global.db.data.users[m.sender].exp -= 300;
      m.reply(`*☠️ You lose! ❌*\n\n*👉🏻 You: ${textm}*\n*👉🏻 Ciyo: ${astro}*\n*❌ Reward -300 XP*`);
    }
  } else if (textm == 'batu') {
    if (astro == 'gunting') {
      global.db.data.users[m.sender].exp += 1000;
      m.reply(`*🥳 You win! 🎉*\n\n*👉🏻 You: ${textm}*\n*👉🏻 Ciyo: ${astro}*\n*🎁 Reward +1000 XP*`);
    } else {
      global.db.data.users[m.sender].exp -= 300;
      m.reply(`*☠️ You lose! ❌*\n\n*👉🏻 You: ${textm}*\n*👉🏻 Ciyo: ${astro}*\n*❌ Reward -300 XP*`);
    }
  }
  global.db.data.users[m.sender].wait = new Date * 1;
};
handler.help = ['suit'];
handler.tags = ['games'];
handler.command = /^(suit)$/i;
export default handler;
