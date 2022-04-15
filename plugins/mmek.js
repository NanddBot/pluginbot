let { performance } = require('perf_hooks')
let fs = require ('fs')
let path = require('path')
let handler  = async (m, { conn, usedPrefix }) => { 
  //let package = JSON.parse(fs.readFileSync(path.join(__dirname, '../package.json')))
  let _uptime = process.uptime() * 1000
  let uptime = clockString(_uptime) 
  let totalreg = Object.keys(global.db.data.users).length
  let old = Math.round(performance.now())
  //await m.reply('wait Kakak!!')
  let neww = Math.round(performance.now())
  conn.reply(m.chat, `
*── 「 RULES AND FAQ 」 ──*

R U L E S B O T
🗯️ Jangan Telp/Vc Nomer Bot
🗯️ Jangan Minta Sv/Pm Ke Nomer Bot
🗯️ Bot Harus Jadi Admin Group
🗯️ Jangan Spam, Nanti Saat jaringan normal di spam balek oleh bot jad kesel
🗯️ Beri Jeda 5 detik setiap menggunakan perintah bot
🗯️ Harap bersabar dan hargai pengguna yang lain karena tidak anda sendiri saja yang mengakses

Kalau mau chat/minta sv/lapor ke nomer owner yg ini aja : wa.me/18592956744

F A Q
🗯️ Bot tidak atau lambat merespon ?
➡️ Mungkin dipengaruhi oleh jaringan, signal, banned oleh Whatsapp dan beberapa asalan. Tetap patuhi rules‼️

🗯️ Boleh saya menambah ke grup?
➡️ Untuk sementara bot dalam status free to add, cukup bayar dengan subscribe Youtube Owner aja.

Jika sudah dipahami rules-nya, silakan ketik *${prefix}allmenu* untuk memulai!

⚠️ Segala kebijakan dan ketentuan NanddBot di pegang oleh owner dan segala perubahan kebijakan, sewaktu waktu owner berhak mencabut, memblokir user(*﹏*) 

Arigatou Gozaimasu!!
😖🙏

 
═〘 ${namabot} 〙 ═
`.trim(), m)
}

handler.help = ['main']
handler.tags = ['infobot', 'rules']
handler.command = handler.command = /^(infobot|rules)$/i

handler.fail = null

module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let h = Math.floor(ms / 3600000)
  let m = Math.floor(ms / 60000) % 60
  let s = Math.floor(ms / 1000) % 60
  console.log({ms,h,m,s})
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}
