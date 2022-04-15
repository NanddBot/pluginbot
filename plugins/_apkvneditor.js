let fs = require('fs')
let fetch = require('node-fetch')

let handler = async(m, { conn, usedPrefix, command, info }) => {
orng = `@${m.sender.split`@`[0]}`
info = `Hai Kak ${orng} Nih Applikasi Mods VN Editor Premium Yang Terbaru Tanpa Watermark

Link Download Nya Di Bawah Kak :

♧ Dengan Password : 
https://www.mediafire.com/download/rwxf15czbmkei1f

♧ Tanpa Password : 
https://cararegistrasi.com/VBNqVQzl

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
handler.help = ['apkvn']
handler.tags = ['apkmods']
handler.command = /^apkvn$/i

module.exports = handler



