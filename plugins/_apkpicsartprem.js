let fs = require('fs')
let fetch = require('node-fetch')

let handler = async(m, { conn, usedPrefix, command, info }) => {
orng = `@${m.sender.split`@`[0]}`
info = `Hai Kak ${orng} Nih Apk PicsArt Premium Mod v19.4.0 Tanpa WaterMark

Link Download Nya Di Bawah Kak :

♧ Dengan Password : 
https://www.mediafire.com/file/nxzj847q5bxxep3/Picsart_v19.4.0-GOLD_ModdingUnited.zip/file

♧ Tanpa Password : 
https://cararegistrasi.com/goTV469uRd

Gak Tau Cara Download Dan Install Nya !!!
Nih Nonton Video Dibawah Tutorialnya Kak

Tutorial Dengan Password : 
https://youtu.be/gE-asHaytOw

Tutorial Tanpa Password :
https://youtu.be/Y0xgBMes_f0


*Jangan Lupa Subrek ya kak, kalo gak subrek saya doa kan emmror wwkkwk :v...*
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', `*${global.packname}*`, 'status@broadcast') 
}
handler.help = ['apkpicsartprem']
handler.tags = ['apkmods']
handler.command = /^apk(picsartprem|paprem)$/i

module.exports = handler



