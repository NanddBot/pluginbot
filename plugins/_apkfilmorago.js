let fs = require('fs')
let fetch = require('node-fetch')

let handler = async(m, { conn, usedPrefix, command, info }) => {
orng = `@${m.sender.split`@`[0]}`
info = `Hai Kak ${orng} Nih Applikasi FilMorago 6.6.0 pro, Yang Terbaru Tanpa Watermark

Link Download Nya Di Bawah Kak :

♧ Dengan Password : 
https://www.mediafire.com/download/au93tx2njfjryyo

♧ Tanpa Password : 
https://cararegistrasi.com/Tuc7bOCBX

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
handler.help = ['apkfilmorago']
handler.tags = ['apkmods']
handler.command = /^apkfilemorago$/i

module.exports = handler



