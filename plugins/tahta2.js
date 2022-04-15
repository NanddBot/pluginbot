let util = require('util')
let path = require('path')
let { spawn } = require('child_process')

// HartA tahta Xteam
let handler  = async (m, { conn, text, usedPrefix, command }) => {
  let d = new Date
  let tgl = d.toLocaleDateString('id-Id')
  let hari = d.toLocaleDateString('id-Id', { weekday: 'long' })
conn.hartatahta = conn.hartatahta ? conn.hartatahta : {}
 if (m.chat in conn.hartatahta) throw 'Masih ada yang sedang membuat\nTeks Harta Tahta\ndi chat ini... tunggu sampai selesai'
 if (!text) throw `Uhm...Teksnya mana?\nContoh: ${usedPrefix + command} Bear`
 else conn.hartatahta[m.chat] = true
 m.reply('_Sedang membuat..._\n*Mohon tunggu sekitar 1 menit*')
m.reply('APIKEY SALAH, pastikan anda pernah berlangganan di https://apikey-bear3.herokuapp.com/docs')
}
handler.help = ['harta2'].map(v => v + ' <teks>')
handler.tags = ['tools']
handler.command = /^(harta|ht|tahta)2$/i
handler.limit = true
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.register = true

module.exports = handler
