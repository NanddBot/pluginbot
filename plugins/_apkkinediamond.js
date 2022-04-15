let fs = require('fs')
let fetch = require('node-fetch')

let handler = async(m, { conn, usedPrefix, command, info }) => {
orng = `@${m.sender.split`@`[0]}`
info = `Hai Kak ${orng} Nih Applikasi Mods Kine Master Diamond V. 4.11 Yang Terbaru Tanpa Watermark

Link Download Nya Di Bawah Kak :

♧ Dengan Password : 
https://www.mediafire.com/file/6iej2bfw6354yu5/KineMaster_Diamond_v4.11.zip/file

♧ Tanpa Password : 
https://cararegistrasi.com/dCaZ7Dhm1ul

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
handler.help = ['apkkinediamond']
handler.tags = ['apkmods']
handler.command = /^apkkinediamond$/i

module.exports = handler



