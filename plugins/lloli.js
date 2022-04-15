let fetch = require('node-fetch')
     let handler  = async (m, { conn, usedPrefix, command }) => {
     	if (!db.data.chats[m.chat].nsfw && m.isGroup) throw global.nsfw
m.reply(wait)
heum = await fetch(`https://api.lolhuman.xyz/api/random/nsfw/loli?apikey=${lolkey}`)
    json = await heum.buffer()
   m.reply('APIKEY SALAH, pastikan anda pernah berlangganan di https://apikey-bear3.herokuapp.com/docs')

}
handler.help = ['nsfwloli']
handler.tags = ['hentai']
handler.command = /^nsfwloli$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
