import { generateWAMessageFromContent } from "@whiskeysockets/baileys";
import os from "os";
import util from "util";
import sizeFormatter from "human-readable";
import MessageType from "@whiskeysockets/baileys";
import fs from "fs";
import { performance } from "perf_hooks";
const handler = async (m, { conn, usedPrefix }) => {
  const _uptime = process.uptime() * 1000;
  const uptime = clockString(_uptime);
  const totalusrReg = Object.values(global.db.data.users).filter((user) => user.registered == true).length;
  const totalusr = Object.keys(global.db.data.users).length;
  const chats = Object.entries(conn.chats).filter(
    ([id, data]) => id && data.isChats,
  );
  const groupsIn = chats.filter(([id]) => id.endsWith("@g.us"));
  const groups = chats.filter(([id]) => id.endsWith("@g.us"));
  const used = process.memoryUsage();
  const { restrict, antiCall, antiprivado, modejadibot } =
    global.db.data.settings[conn.user.jid] || {};
  const { autoread, gconly, pconly, self } = global.opts || {};
  const old = performance.now();
  const neww = performance.now();
  const rtime = (neww - old).toFixed(7);
  const wm = 'CiyoBot';
  const image = fs.readFileSync('./Menu4.jpg');
  const info = ` _*< INFORMATION />*_

*Owner:* RhmttDev
*WA:* +6285254337661

*Platform:* Linux
*Ping:* ${rtime}
*Uptime:* ${uptime}
*Prefix:* ${usedPrefix}
*Mode:* ${self ? "Private" : "Public"}
*Registered:* ${totalusrReg}
*Total Users:* ${totalusr}
*Bot Type:* ${(conn.user.jid == global.conn.user.jid ? `Sub-Bot` : `${global.conn.user.jid.split`@`[0]}`) || 'Non Sub-Bot'}
 
*Private chats:* ${chats.length - groups.length}
*Groups:* ${groups.length}
*Total Chats:* ${chats.length}
 
*Autoread:* ${autoread ? "Enabled" : "Disabled"}
*Restrict:* ${restrict ? "Enabled" : "Disabled"}
*PCOnly:* ${pconly ? "Enabled" : "Disabled"}
*GPOnly:* ${gconly ? "Enabled" : "Disabled"}
*AntiPrivate:* ${antiprivado ? "Enabled" : "Disabled"}
*AntiCall:* ${antiCall ? "Enabled" : "Disabled"}
*JadiBot:* ${modejadibot ? "Enabled" : "Disabled"}`.trim();
  const doc = [
    "pdf",
    "zip",
    "vnd.openxmlformats-officedocument.presentationml.presentation",
    "vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    "vnd.openxmlformats-officedocument.wordprocessingml.document",
  ];
  const document = doc[Math.floor(Math.random() * doc.length)];
  const Message = {
    document: { url: `https://github.com/RhmttCore/CiyoBotV2` },
    mimetype: `application/${document}`,
    fileName: `「  𝑯𝒆𝒍𝒍𝒐 𝑾𝒐𝒓𝒍𝒅 」`,
    fileLength: 99999999999999,
    pageCount: 200,
    contextInfo: {
      forwardingScore: 200,
      isForwarded: true,
      externalAdReply: {
        mediaUrl: "https://github.com/RhmttCore/CiyoBotV2",
        mediaType: 2,
        previewType: "pdf",
        title: 'Ciyo | Information',
        body: wm,
        thumbnail: image,
        sourceUrl: "https://chat.whatsapp.com/LlbN8sF1I0LIdQ0eDkCXpS",
      },
    },
    caption: info,
    footer: wm,
    headerType: 6,
  };
 conn.sendMessage(m.chat, Message, { quoted: m });
    
    
    
};



handler.command = /^(ping|info|status)$/i;
export default handler;

function clockString(ms) {
  let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000)
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [d, 'H ', h, 'J ', m, 'M '].map(v => v.toString().padStart(2, 0)).join('')
}
