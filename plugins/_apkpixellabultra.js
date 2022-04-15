let fs = require('fs')
let fetch = require('node-fetch')

let handler = async(m, { conn, usedPrefix, command, info }) => {
orng = `@${m.sender.split`@`[0]}`
info = `Hai Kak ${orng} Nih Apk PixelLab Ultra Mod v2.0.2 Full Unlock

Link Download Nya Di Bawah Kak :

♧ Dengan Password : 
https://www.mediafire.com/file/vy1uy5sxuy7aaqw/PixelLab_Ultra_v2.0.2.zip/file

♧ Tanpa Password : 
https://cararegistrasi.com/jHOqv

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
handler.help = ['apkpixellabultra']
handler.tags = ['apkmods']
handler.command = /^apkpixellabultra$/i

module.exports = handler



