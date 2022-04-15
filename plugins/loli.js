let fetch = require('node-fetch')
     let handler  = async (m, { conn, usedPrefix, command }) => {
m.reply(wait)
heum = await fetch(`https://apikey-bear3.herokuapp.com/api/loli?apikey=${bearkey}`)
    json = await heum.buffer()
   m.reply('APIKEY SALAH, pastikan anda pernah berlangganan di https://apikey-bear3.herokuapp.com/docs')

}
handler.help = ['loli']
handler.tags = ['anime']
handler.command = /^loli$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
