let fs = require('fs')
let fetch = require('node-fetch')

let handler = async(m, { conn, usedPrefix, command, info }) => {
orng = `@${m.sender.split`@`[0]}`
info = `Hai Kak ${orng} Nih Applikasi Mods Premium AM Yang tanpa Watermark
Terbaru & Support Semua Preset

Link Download Nya Di Bawah Kak :

♧ Dengan Password :
https://www.mediafire.com/download/5tm97urtwsir0cp

♧ Tanpa Password :
https://cararegistrasi.com/7d5o

Gak Tau Cara Download Dan Install Nya !!!
Nih Nonton Video Tutorialnya Kak

Tutorial Dengan Password : 

https://youtu.be/gE-asHaytOw

Tutorial Tanpa Password :

https://youtu.be/Y0xgBMes_f0

*Jangan Lupa Subrek ya kak, kalo gak subrek saya doa kan emmror wwkkwk :v...*
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', `*${global.packname}*`, 'status@broadcast') 
}
handler.help = ['apkalightmotion']
handler.tags = ['apkmods']
handler.command = /^apk(alightmotion|am)$/i

module.exports = handler



