import * as baileys from '@whiskeysockets/baileys';

const handler = async (m, {conn, text}) => {
  const [, code] = text.match(/chat\.whatsapp\.com\/(?:invite\/)?([0-9A-Za-z]{20,24})/i) || [];
  if (!code) throw '*[❗] Masukkan tautan grup WhatsApp.*';
  const res = await conn.query({tag: 'iq', attrs: {type: 'get', xmlns: 'w:g2', to: '@g.us'}, content: [{tag: 'invite', attrs: {code}}]});
  const data = extractGroupMetadata(res);
  const txt = `*⫹⫺ ID:* ${data.id}\n*⫹⫺ Name:* ${data.subject}\n*⫹⫺ Creation date:* ${data.creation}\n*⫹⫺ Creator:* ${data.owner}\n*⫹⫺ Description:*\n${data.desc}`;
  
  const pp = await conn.profilePictureUrl(data.id, 'image').catch(console.error);
  if (pp) return conn.sendMessage(m.chat, {image: {url: pp}, caption: txt}, {quoted: m});
  const groupinfo = `*⫹⫺ ID:* ${data.id}\n*⫹⫺ Name:* ${data.subject}\n*⫹⫺ Creation date:* ${data.creation}\n*⫹⫺ Creator:* ${data.owner}\n*⫹⫺ Description:*\n${data.desc}`;
  await conn.reply(m.chat, groupinfo, m);
};
handler.command = /^(inspect)$/i;
export default handler;

const extractGroupMetadata = (result) => {
  const group = baileys.getBinaryNodeChild(result, 'group');
  const descChild = baileys.getBinaryNodeChild(group, 'description');
  let desc;
  if (descChild) desc = baileys.getBinaryNodeChild(descChild, 'body')?.content;
  const metadata = {
    id: group.attrs.id.includes('@') ? group.attrs.id : baileys.jidEncode(group.attrs.id, 'g.us'),
    subject: group.attrs.subject,
    creation: new Date(+group.attrs.creation * 1000).toLocaleString('id-MX', {timeZone: 'Asia/Jakarta'}),
    owner: group.attrs.creator ? 'wa.me/' + baileys.jidNormalizedUser(group.attrs.creator).split('@')[0] : group.attrs.id.includes('-') ? 'wa.me/' + group.attrs.id.split('-')[0] : '',
    desc,
  };
  return metadata;
};
