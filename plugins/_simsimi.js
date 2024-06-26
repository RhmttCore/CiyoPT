import fetch from 'node-fetch';
const handler = (m) => m;

handler.before = async (m) => {
  const chat = global.db.data.chats[m.chat];
  if (chat.simi) {
    if (/^.*false|disnable|(turn)?off|0/i.test(m.text)) return;
    let textodem = m.text;
    try {
      const ressimi = await fetch(`https://api.simsimi.net/v2/?text=${encodeURIComponent(textodem)}&lc=es`);
      const data = await ressimi.json();
      if (data.success == 'Saya tidak tahu apa yang Anda katakan. Tolong ajari saya.') return m.reply(`${lol}`); /* EL TEXTO "lol" NO ESTA DEFINIDO PARA DAR ERROR Y USAR LA OTRA API */
      await m.reply(data.success);
    } catch {
      /* SI DA ERROR USARA ESTA OTRA OPCION DE API DE IA QUE RECUERDA EL NOMBRE DE LA PERSONA */
      if (textodem.includes('Halo')) textodem = textodem.replace('Halo', 'Hello');
      if (textodem.includes('halo')) textodem = textodem.replace('halo', 'hello');
      if (textodem.includes('HOLA')) textodem = textodem.replace('HOLA', 'HELLO');
      const reis = await fetch('https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=en&dt=t&q=' + textodem);
      const resu = await reis.json();
      const nama = m.pushName || '1';
      const api = await fetch('http://api.brainshop.ai/get?bid=153868&key=rcKonOgrUFmn5usX&uid=' + nama + '&msg=' + resu[0][0][0]);
      const res = await api.json();
      const reis2 = await fetch('https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=es&dt=t&q=' + res.cnt);
      const resu2 = await reis2.json();
      await m.reply(resu2[0][0][0]);
    }
    return !0;
  }
  return true;
};
export default handler;
