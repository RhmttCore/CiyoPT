import fetch from 'node-fetch';
import { canLevelUp, xpRange } from '../lib/levelling.js';
const handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;
  try {
    const pp = fs.readFileSync('./Menu.png');
    
    const d = new Date(new Date + 3600000);
    const locale = 'id-ID';
    const week = d.toLocaleDateString(locale, {weekday: 'long'});
    const date = d.toLocaleDateString(locale, {day: '2-digit', month: '2-digit', year: 'numeric'});
    const _uptime = process.uptime() * 1000;
    const uptime = clockString(_uptime);
    const user = global.db.data.users[m.sender];
    const {money, joincount} = global.db.data.users[m.sender];
    const {exp, limit, level, role} = global.db.data.users[m.sender];
    const rtotalreg = Object.values(global.db.data.users).filter((user) => user.registered == true).length;
      const { min, xp, max } = xpRange(user.level, global.multiplier);
    const rtotal = Object.entries(global.db.data.users).length || '0'
    const more = String.fromCharCode(8206);
    const readMore = more.repeat(850);
    const taguser = '@' + m.sender.split('@s.whatsapp.net')[0];
    const { autoread, gconly, pconly, self } = global.opts || {};
    const doc = ['pdf', 'zip', 'vnd.openxmlformats-officedocument.presentationml.presentation', 'vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'vnd.openxmlformats-officedocument.wordprocessingml.document'];
    const document = doc[Math.floor(Math.random() * doc.length)];
 /*
 

 _*< SUB-BOTS />*_
 
  ▢ _${usedPrefix}enable restrict_
  ▢ _${usedPrefix}disable restrict_
  ▢ _${usedPrefix}enable autoread_
  ▢ _${usedPrefix}disable autoread_
  ▢ _${usedPrefix}enable antispam_
  ▢ _${usedPrefix}disable antispam_
  ▢ _${usedPrefix}enable anticall_
  ▢ _${usedPrefix}disable anticall_
  ▢ _${usedPrefix}enable modoia_
  ▢ _${usedPrefix}disable modoia_
  ▢ _${usedPrefix}enable audios_bot_
  ▢ _${usedPrefix}disable audios_bot_
  ▢ _${usedPrefix}enable antiprivado_
  ▢ _${usedPrefix}disable antiprivado_
  
  _*< FUN />*_

  ▢ _${usedPrefix}fitnah <teks> <@tag> <teks2>_

_*< GAMES />*_

  ▢ _${usedPrefix}math <mode>_
  ▢ _${usedPrefix}suit *<gunting|kertas|batu>*_
  ▢ _${usedPrefix}prostituto *<nombre / @tag>*_
  ▢ _${usedPrefix}prostituta *<nombre / @tag>*_
  ▢ _${usedPrefix}gay2 *<nombre / @tag>*_
  ▢ _${usedPrefix}lesbiana *<nombre / @tag>*_
  ▢ _${usedPrefix}pajero *<nombre / @tag>*_
  ▢ _${usedPrefix}pajera *<nombre / @tag>*_
  ▢ _${usedPrefix}puto *<nombre / @tag>*_
  ▢ _${usedPrefix}puta *<nombre / @tag>*_
  ▢ _${usedPrefix}manco *<nombre / @tag>*_
  ▢ _${usedPrefix}manca *<nombre / @tag>*_
  ▢ _${usedPrefix}rata *<nombre / @tag>*_
  ▢ _${usedPrefix}love *<nombre / @tag>*_
  ▢ _${usedPrefix}doxear *<nombre / @tag>*_
  ▢ _${usedPrefix}pregunta *<txt>*_
  ▢ _${usedPrefix}suitpvp *<@tag>*_
  ▢ _${usedPrefix}slot *<apuesta>*_
  ▢ _${usedPrefix}ttt *<nombre sala>*_
  ▢ _${usedPrefix}delttt_
  ▢ _${usedPrefix}acertijo_
  ▢ _${usedPrefix}simi *<txt>*_
  ▢ _${usedPrefix}top *<txt>*_
  ▢ _${usedPrefix}topgays_
  ▢ _${usedPrefix}topotakus_
  ▢ _${usedPrefix}formarpareja_
  ▢ _${usedPrefix}verdad_
  ▢ _${usedPrefix}reto_
  ▢ _${usedPrefix}tebaklagu_
  ▢ _${usedPrefix}pista_
  ▢ _${usedPrefix}akinator_
  ▢ _${usedPrefix}ruleta
  ▢ _${usedPrefix}suerte
  ▢ _${usedPrefix}wordfind_

_*< EN/DISABLE />*_

  ▢ _${usedPrefix}enable *welcome*_
  ▢ _${usedPrefix}disable *welcome*_
  ▢ _${usedPrefix}enable *modohorny*_
  ▢ _${usedPrefix}disable *modohorny*_
  ▢ _${usedPrefix}enable *antilink*_
  ▢ _${usedPrefix}disable *antilink*_
  ▢ _${usedPrefix}enable *antilink2*_
  ▢ _${usedPrefix}disable *antilink2*_
  ▢ _${usedPrefix}enable *detect*_
  ▢ _${usedPrefix}disable *detect*_
  ▢ _${usedPrefix}enable *audios*_
  ▢ _${usedPrefix}disable *audios*_
  ▢ _${usedPrefix}enable *autosticker*_
  ▢ _${usedPrefix}disable *autosticker*_
  ▢ _${usedPrefix}enable *antiviewonce*_
  ▢ _${usedPrefix}disable *antiviewonce*_
  ▢ _${usedPrefix}enable *antitoxic*_
  ▢ _${usedPrefix}disable *antitoxic*_
  ▢ _${usedPrefix}enable *antitraba*_
  ▢ _${usedPrefix}disable *antitraba*_
  ▢ _${usedPrefix}enable *antiarabes*_
  ▢ _${usedPrefix}disable *antiarabes*_
  ▢ _${usedPrefix}enable *modoadmin*_
  ▢ _${usedPrefix}disable *modoadmin*_
  ▢ _${usedPrefix}enable *antidelete*_
  ▢ _${usedPrefix}disable *antidelete*_
  
  

_*< EFFECTS & LOGOS />*_

  ▢ _${usedPrefix}logos *<efecto> <txt>*_
  ▢ _${usedPrefix}logochristmas *<txt>*_
  ▢ _${usedPrefix}logocorazon *<txt>*_
  ▢ _${usedPrefix}ytcomment *<txt>*_
  ▢ _${usedPrefix}hornycard *<@tag>*_
  ▢ _${usedPrefix}simpcard *<@tag>*_
  ▢ _${usedPrefix}lolice *<@tag>*_
  ▢ _${usedPrefix}itssostupid_
  ▢ _${usedPrefix}pixelar_
  ▢ _${usedPrefix}blur_


_*< PHRASES & TEXTS />*_

  ▢ _${usedPrefix}piropo_
  ▢ _${usedPrefix}consejo_
  ▢ _${usedPrefix}fraseromantica_
  ▢ _${usedPrefix}historiaromantica_


_*< RANDOM />*_

  ▢ _${usedPrefix}kpop *<blackpink/exo/bts>*_
  ▢ _${usedPrefix}cristianoronaldo_
  ▢ _${usedPrefix}messi_
  ▢ _${usedPrefix}cat_
  ▢ _${usedPrefix}dog_
  ▢ _${usedPrefix}meme_
  ▢ _${usedPrefix}itzy_
  ▢ _${usedPrefix}blackpink_
  ▢ _${usedPrefix}navidad_
  ▢ _${usedPrefix}wpmontaña_
  ▢ _${usedPrefix}pubg_
  ▢ _${usedPrefix}wpgaming_
  ▢ _${usedPrefix}wpaesthetic_
  ▢ _${usedPrefix}wpaesthetic2_
  ▢ _${usedPrefix}wprandom_
  ▢ _${usedPrefix}wallhp_
  ▢ _${usedPrefix}wpvehiculo_
  ▢ _${usedPrefix}wpmoto_
  ▢ _${usedPrefix}coffee_
  ▢ _${usedPrefix}pentol_
  ▢ _${usedPrefix}caricatura_
  ▢ _${usedPrefix}ciberespacio_
  ▢ _${usedPrefix}technology_
  ▢ _${usedPrefix}doraemon_
  ▢ _${usedPrefix}hacker_
  ▢ _${usedPrefix}planeta_
  ▢ _${usedPrefix}randomprofile_

_*< AUDIO EFFECTS />*_

*- Responde a un audio o nota de voz.*

  ▢ _${usedPrefix}bass_
  ▢ _${usedPrefix}blown_
  ▢ _${usedPrefix}deep_
  ▢ _${usedPrefix}earrape_
  ▢ _${usedPrefix}fast_
  ▢ _${usedPrefix}fat_
  ▢ _${usedPrefix}nightcore_
  ▢ _${usedPrefix}reverse_
  ▢ _${usedPrefix}robot_
  ▢ _${usedPrefix}slow_
  ▢ _${usedPrefix}smooth_
  ▢ _${usedPrefix}tupai_

_*< CHAT ANONYMOUS />*_

  ▢ _${usedPrefix}start_
  ▢ _${usedPrefix}next_
  ▢ _${usedPrefix}leave_



_*< ECONOMY />*_

  ▢ _${usedPrefix}adventure_
  ▢ _${usedPrefix}cazar_
  ▢ _${usedPrefix}cofre_
  ▢ _${usedPrefix}balance_
  ▢ _${usedPrefix}claim_
  ▢ _${usedPrefix}heal_
  ▢ _${usedPrefix}lb_
  ▢ _${usedPrefix}levelup_
  ▢ _${usedPrefix}myns_
  ▢ _${usedPrefix}perfil_
  ▢ _${usedPrefix}work_
  ▢ _${usedPrefix}minar_
  ▢ _${usedPrefix}minar2_
  ▢ _${usedPrefix}buy_
  ▢ _${usedPrefix}buyall_
  ▢ _${usedPrefix}verificar_
  ▢ _${usedPrefix}robar *<cant> <@tag>*_
  ▢ _${usedPrefix}crime
  ▢ _${usedPrefix}transfer *<tipo> <cant> <@tag>*_
  ▢ _${usedPrefix}unreg *<sn>*_

_*< STICKERS />*_

  ▢ _${usedPrefix}sticker *<responder a img o video>*_
  ▢ _${usedPrefix}sticker *<url>*_
  ▢ _${usedPrefix}sticker2 *<responder a img o video>*_
  ▢ _${usedPrefix}sticker2 *<url>*_
  ▢ _${usedPrefix}s *<responder a img o video>*_
  ▢ _${usedPrefix}s *<url>*_
  ▢ _${usedPrefix}emojimix *<emoji 1>&<emoji 2>*_
  ▢ _${usedPrefix}scircle *<img>*_
  ▢ _${usedPrefix}sremovebg *<img>*_
  ▢ _${usedPrefix}semoji *<tipo> <emoji>*_
  ▢ _${usedPrefix}qc *<txt>*_
  ▢ _${usedPrefix}attp *<txt>*_
  ▢ _${usedPrefix}attp2 *<txt>*_
  ▢ _${usedPrefix}attp3 *<txt>*_
  ▢ _${usedPrefix}ttp *<txt>*_
  ▢ _${usedPrefix}ttp2 *<txt>*_
  ▢ _${usedPrefix}ttp3 *<txt>*_
  ▢ _${usedPrefix}ttp4 *<txt>*_
  ▢ _${usedPrefix}ttp5 *<txt>*_
  ▢ _${usedPrefix}pat *<@tag>*_
  ▢ _${usedPrefix}slap *<@tag>*_
  ▢ _${usedPrefix}kiss *<@tag>*_
  ▢ _${usedPrefix}dado_
  ▢ _${usedPrefix}wm *<packname> <autor>*_
  ▢ _${usedPrefix}stickermarker *<efecto> <img>*_
  ▢ _${usedPrefix}stickerfilter *<efecto> <img>*_

_*< OWNERS & MODS />*_

  ▢ _> *<funcion>*_
  ▢ _=> *<funcion>*_
  ▢ _$ *<funcion>*_
  ▢ _${usedPrefix}join *<wagp_url>*_
  ▢ _${usedPrefix}dsowner_
  ▢ _${usedPrefix}setprefix *<prefijo>*_
  ▢ _${usedPrefix}resetprefix_
  ▢ _${usedPrefix}autoadmin_
  ▢ _${usedPrefix}grouplist_
  ▢ _${usedPrefix}chetar_
  ▢ _${usedPrefix}leavegc_
  ▢ _${usedPrefix}cajafuerte_
  ▢ _${usedPrefix}blocklist_
  ▢ _${usedPrefix}addowner *<@tag / num>*_
  ▢ _${usedPrefix}delowner *<@tag / num>*_
  ▢ _${usedPrefix}block *<@tag / num>*_
  ▢ _${usedPrefix}unblock *<@tag / num>*_
  ▢ _${usedPrefix}enable *restrict*_
  ▢ _${usedPrefix}disable *restrict*_
  ▢ _${usedPrefix}enable *autoread*_
  ▢ _${usedPrefix}disable *autoread*_
  ▢ _${usedPrefix}enable *public*_
  ▢ _${usedPrefix}disable *public*_
  ▢ _${usedPrefix}enable *pconly*_
  ▢ _${usedPrefix}disable *pconly*_
  ▢ _${usedPrefix}enable *gconly*_
  ▢ _${usedPrefix}disable *gconly*_
  ▢ _${usedPrefix}enable *anticall*_
  ▢ _${usedPrefix}disable *anticall*_
  ▢ _${usedPrefix}enable *antiprivado*_
  ▢ _${usedPrefix}disable *antiprivado*_
  ▢ _${usedPrefix}enable *modejadibot*_
  ▢ _${usedPrefix}disable *modejadibot*_
  ▢ _${usedPrefix}enable *audios_bot*_
  ▢ _${usedPrefix}disable *audios_bot*_
  ▢ _${usedPrefix}enable *antispam*_
  ▢ _${usedPrefix}disable *antispam*_
  ▢ _${usedPrefix}msg *<txt>*_
  ▢ _${usedPrefix}banchat_
  ▢ _${usedPrefix}unbanchat_
  ▢ _${usedPrefix}resetuser *<@tag>*_
  ▢ _${usedPrefix}banuser *<@tag>*_
  ▢ _${usedPrefix}unbanuser *<@tag>*_
  ▢ _${usedPrefix}dardiamantes *<@tag> <cant>*_
  ▢ _${usedPrefix}añadirxp *<@tag> <cant>*_
  ▢ _${usedPrefix}banuser *<@tag>*_
  ▢ _${usedPrefix}bc *<txt>*_
  ▢ _${usedPrefix}bcchats *<txt>*_
  ▢ _${usedPrefix}bcgc *<txt>*_
  ▢ _${usedPrefix}bcgc2 *<aud>*_
  ▢ _${usedPrefix}bcgc2 *<vid>*_
  ▢ _${usedPrefix}bcgc2 *<img>*_
  ▢ _${usedPrefix}bcbot *<txt>*_
  ▢ _${usedPrefix}cleartpm_
  ▢ _${usedPrefix}restart_
  ▢ _${usedPrefix}update_
  ▢ _${usedPrefix}banlist_
  ▢ _${usedPrefix}addprem *<@tag> <tiempo>*_
  ▢ _${usedPrefix}addprem2 *<@tag> <tiempo>*_
  ▢ _${usedPrefix}addprem3 *<@tag> <tiempo>*_
  ▢ _${usedPrefix}addprem4 *<@tag> <tiempo>*_
  ▢ _${usedPrefix}delprem *<@tag>*_
  ▢ _${usedPrefix}listcmd_
  ▢ _${usedPrefix}setppbot *<responder a img>*_
  ▢ _${usedPrefix}addcmd *<txt>*_
  ▢ _${usedPrefix}delcmd_
  ▢ _${usedPrefix}saveimage_
  ▢ _${usedPrefix}viewimage_
  
  _*< MENU LIST />*_

  ▢ _${usedPrefix}menuanime_
  
  
  cmd dihapus 
  ▢ _${usedPrefix}pptiktok *<usr>*_
  ▢ _${usedPrefix}soundcloud *<txt>*_
  ▢ _${usedPrefix}tiktokimg *<url>*_
 */
    const str = `_*< YOUR STATISTICS />*_

*Name:* ${taguser}
*Level:* ${level} ${exp - min < xp ? `↓↓` : `↑↑`} 
*Exp:* ${exp - min}/${xp}
*Role:* ${role}
*Limit:* ${limit}
*Money:* ${money}
*Status:* ${user.premiumTime > 0 ? 'Premium' : 'Non - Premium'}

*Registered:* ${rtotalreg}
*Mode:* ${self ? "Private" : "Public"}
*Uptime:* ${uptime}
*Date:* ${date}
 ${readMore}
_*< ABOUT THE BOT />*_
  
  ▢ _${usedPrefix}afk <alasan>_
  ▢ _${usedPrefix}fixmsg_
  ▢ _${usedPrefix}grouplist_
  ▢ _${usedPrefix}owner_
  ▢ _${usedPrefix}premlist_
  ▢ _${usedPrefix}report <teks>_
  ▢ _${usedPrefix}request <teks>_
  ▢ _${usedPrefix}status_
  ▢ _${usedPrefix}speedtest_

_*< SEARCHING />*_

  ▢ _${usedPrefix}animeinfo <teks>_
  ▢ _${usedPrefix}google <teks>_
  ▢ _${usedPrefix}gimage <teks>_
  ▢ _${usedPrefix}githubsearch <teks>_
  ▢ _${usedPrefix}liriklagu <teks>_
  ▢ _${usedPrefix}modapk <teks>_
  ▢ _${usedPrefix}playstore <teks>_
  ▢ _${usedPrefix}pinterest <teks>_
  ▢ _${usedPrefix}ringtone <teks>_
  ▢ _${usedPrefix}spotify <teks>_
  ▢ _${usedPrefix}stickersearch <teks>_
  ▢ _${usedPrefix}stickersearch2 <teks>_
  ▢ _${usedPrefix}wikipedia <teks>_
  ▢ _${usedPrefix}wallpaper <teks>_ 
  ▢ _${usedPrefix}ytsearch <teks>_

_*< CONVERTERS />*_

  ▢ _${usedPrefix}toanime_
  ▢ _${usedPrefix}togifaud_
  ▢ _${usedPrefix}toimg_
  ▢ _${usedPrefix}tomp3_
  ▢ _${usedPrefix}toptt_
  ▢ _${usedPrefix}topdf_
  ▢ _${usedPrefix}tovideo_
  ▢ _${usedPrefix}tourl_
  ▢ _${usedPrefix}tts <bahasa> <teks>_
  ▢ _${usedPrefix}ttseffect <efek> <teks>_

_*< DOWNLOADERS />*_

  ▢ _${usedPrefix}facebook <url>_
  ▢ _${usedPrefix}gitclone <url>_
  ▢ _${usedPrefix}gdrive <url>_
  ▢ _${usedPrefix}instagram <url>_
  ▢ _${usedPrefix}igstory <username>_
  ▢ _${usedPrefix}mediafire <url>_ 
  ▢ _${usedPrefix}play <teks>_
  ▢ _${usedPrefix}playlist <teks>_
  ▢ _${usedPrefix}stickerpack <url>_
  ▢ _${usedPrefix}tiktok <url>_
  ▢ _${usedPrefix}twitter <url>_
  ▢ _${usedPrefix}ytshort <url>_
  ▢ _${usedPrefix}ytmp3 <url>_
  ▢ _${usedPrefix}ytmp4 <url>_

_*< TOOLS />*_
 
  ▢ _${usedPrefix}bitly <url>_
  ▢ _${usedPrefix}calc <operasi>_
  ▢ _${usedPrefix}cuaca <negara> <kota>_
  ▢ _${usedPrefix}dall-e <teks>_
  ▢ _${usedPrefix}dropmail <opsi>_
  ▢ _${usedPrefix}enchance_
  ▢ _${usedPrefix}filelength <jumlah>_
  ▢ _${usedPrefix}hd_
  ▢ _${usedPrefix}inspect <url>_
  ▢ _${usedPrefix}nowa <nomer>_
  ▢ _${usedPrefix}qrcode <teks>_
  ▢ _${usedPrefix}readqr_
  ▢ _${usedPrefix}remini_
  ▢ _${usedPrefix}readmore <teks1|teks2>_
  ▢ _${usedPrefix}readviewonce_
  ▢ _${usedPrefix}ssweb <url>_
  ▢ _${usedPrefix}shorturl <url>_
  ▢ _${usedPrefix}spamwa <nomer|teks|jumlah>_
  ▢ _${usedPrefix}tinyurl <url>_
  ▢ _${usedPrefix}timezone_
  ▢ _${usedPrefix}translate <bahasa> <teks>_
  ▢ _${usedPrefix}whatmusic_

_*< GROUPS />*_

  ▢ _${usedPrefix}add <nomer>_
  ▢ _${usedPrefix}group <open/close>_
  ▢ _${usedPrefix}grouptime <opsi> <timer>_
  ▢ _${usedPrefix}delete
  ▢ _${usedPrefix}demote <@tag>_
  ▢ _${usedPrefix}admins <teks>_
  ▢ _${usedPrefix}hidetag_
  ▢ _${usedPrefix}sider_
  ▢ _${usedPrefix}infogroup_
  ▢ _${usedPrefix}linkgroup_
  ▢ _${usedPrefix}polling <judul|teks1|teks2>_
  ▢ _${usedPrefix}kick <@tag>_
  ▢ _${usedPrefix}kick2 <@tag>_
  
  ▢ _${usedPrefix}listanum *<txt>*_
  ▢ _${usedPrefix}kicknum *<txt>*_
  
  ▢ _${usedPrefix}promote *<@tag>*_
  
  
  ▢ _${usedPrefix}resetlink_
  
  ▢ _${usedPrefix}setname *<txt>*_
  ▢ _${usedPrefix}setdesc *<txt>*_
  ▢ _${usedPrefix}invocar *<txt>*_
  ▢ _${usedPrefix}setwelcome *<txt>*_
  ▢ _${usedPrefix}setbye *<txt>*_
  
  ▢ _${usedPrefix}warn *<@tag>*_
  ▢ _${usedPrefix}unwarn *<@tag>*_
  ▢ _${usedPrefix}listwarn_
  
  
  ▢ _${usedPrefix}destraba_
  ▢ _${usedPrefix}setpp *<img>*_
`.trim();
    if (m.isGroup) {
      // await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: fkontak2});
    } else {
      // await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: fkontak2});
    }
  } catch {
    conn.reply(m.chat, '*[ ℹ️ ] Perintah ini sedang mengalami kesalahan internal, sehingga tidak dapat dikirim.*', m);
  }
};
handler.command = /^(menu|help|allmenu)$/i;
handler.exp = 50;
handler.fail = null;
export default handler;
function clockString(ms) {
  //const h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
  //const m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
 //const s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
 // return [h, 'J ', m, 'M '].map((v) => 
                                //v.toString().padStart(2, 0)).join('');
    let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000)
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [d, 'H ', h, 'J ', m, 'M '].map(v => v.toString().padStart(2, 0)).join('')
}
