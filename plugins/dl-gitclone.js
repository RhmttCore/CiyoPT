import fetch from 'node-fetch';
const regex = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i;
const handler = async (m, {args, usedPrefix, command}) => {
  if (!args[0]) throw `_*< DOWNLOADER - GITCLONE />*_\n\n*[ ℹ️ ] Masukkan tautan GitHub.*`;
  if (!regex.test(args[0])) throw '_*< DOWNLOADER - GITCLONE />*_\n\n*[ ℹ️ ] Tautan yang Anda berikan salah.*';
  let [_, user, repo] = args[0].match(regex) || [];
  repo = repo.replace(/.git$/, '');
  const url = `https://api.github.com/repos/${user}/${repo}/zipball`;
  const filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1];
  m.reply(`_*< DOWNLOADER - GITCLONE />*_\n\n*[ ℹ️ ] File sedang dikirim. Tunggu...*\n\n*[ ℹ️ ] Jika tidak dikirimkan, bisa jadi karena melebihi batas ukuran.*`);
  conn.sendFile(m.chat, url, filename, null, m);
};
handler.command = /gitclone/i;
export default handler;
