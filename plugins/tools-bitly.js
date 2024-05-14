
import axios from 'axios';

// Fungsi untuk membuat URL pendek dengan API Bitly


const handler = async (m, {conn, args, text}) => {
if (!text) throw '*[❗] Masukkan tautan yang ingin diubah.*';
// Contoh penggunaan
    let longUrl = ``


const accessToken = '833f976cb749dbb4d45e3e49594aeff9adfa779f';
    
async function createShortLink(longUrl, accessToken) {
    try {
        const response = await axios.post('https://api-ssl.bitly.com/v4/shorten', {
            long_url: longUrl
        }, {
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json'
            }
        });

        return response.data.link;
    } catch (error) {
        console.error('Error creating short link:', error.response.data);
        throw new Error('Failed to create short link');
    }
}
if (args[0].includes('https://')) {
longUrl = `${args[0]}`
createShortLink(longUrl, accessToken)
    .then(shortUrl => m.reply(`*Long Url:* ${longUrl}\n*Short Url:* ${shortUrl}`))
    .catch(error => m.reply(`*[❗] Masukkan tautan yang valid atau berformat https.*`));

  } else if (args[0].includes('http://')) {
longUrl = `${args[0]}`
createShortLink(longUrl, accessToken)
    .then(shortUrl => m.reply(`*Long Url:* ${longUrl}\n*Short Url:* ${shortUrl}`))
    .catch(error => m.reply(`*[❗] Masukkan tautan yang valid atau berformat https.*`));

  } else {
longUrl = `https://${args[0]}`
createShortLink(longUrl, accessToken)
    .then(shortUrl => m.reply(`*Long Url:* ${longUrl}\n*Short Url:* ${shortUrl}`))
    .catch(error => m.reply(`*[❗] Masukkan tautan yang valid atau berformat https*`));
      }
};
handler.help = ['bitly'].map((v) => v + ' <link>');
handler.tags = ['tools'];
handler.command = /^(bitly)$/i;
handler.fail = null;
export default handler;


