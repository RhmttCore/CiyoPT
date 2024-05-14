import axios from 'axios';
const handler = async (m, {args}) => {
  if (!args[0]) throw '*[❗] Masukkan nama kota/negara yang ingin dicari.*';
  try {
    const response = axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${args}&units=metric&appid=060a6bcfa19809c2cd4d97a212b19273`);
    const res = await response;
    const name = res.data.name;
    const Country = res.data.sys.country;
    const Weather = res.data.weather[0].description;
    const Temperature = res.data.main.temp + '°C';
    const Minimum_Temperature = res.data.main.temp_min + '°C';
    const Maximum_Temperature = res.data.main.temp_max + '°C';
    const Humidity = res.data.main.humidity + '%';
    const Wind = res.data.wind.speed + 'km/h';
    const wea = `「 📍 」Tempat: ${name}\n「 🗺️ 」Negara: ${Country}\n「 🌤️ 」Waktu: ${Weather}\n「 🌡️ 」Suhu: ${Temperature}\n「 💠 」Suhu minimal: ${Minimum_Temperature}\n「 📛 」Suhu maksimum: ${Maximum_Temperature}\n「 💦 」Kelembaban: ${Humidity}\n「 🌬️ 」Angin: ${Wind}`;
    m.reply(wea);
  } catch {
    return '*[❗] Terjadi masalah, tidak ada respon dari server.*';
  }
};
handler.help = ['clima *<kota/negara>*'];
handler.tags = ['herramientas'];
handler.command = /^(iklim|cuaca)$/i;
export default handler;
