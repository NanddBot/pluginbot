let fs = require('fs')
let fetch = require('node-fetch')

let handler = async(m, { conn, usedPrefix, command, info }) => {
orng = `@${m.sender.split`@`[0]}`
info = `Hai Kak ${orng} Nih Apk CapCut Mod v5.5.0 Tanpa WaterMark

Link Download Nya Di Bawah Kak :

♧ Dengan Password : 
https://www.mediafire.com/file/wp58rq0hlfpnwte/CapCut_MOD_v.5.5.0.zip/file

♧ Tanpa Password : 
https://cararegistrasi.com/XHDdSC

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
handler.help = ['apkcapcut']
handler.tags = ['apkmods']
handler.command = /^apk(capcut|cc)$/i

module.exports = handler



