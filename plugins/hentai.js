let fetch = require('node-fetch')
let handler = async (m, { conn, usedPrefix, command }) => {
if (!db.data.chats[m.chat].nsfw && m.isGroup) throw global.nsfw
m.reply(wait)
heum = await fetch(`https://hardianto.xyz/api/anime/random?nsfw=hentai&apikey=hardianto`)
   if (!heum) throw json
    json = await heum.buffer()
   conn.sendButtonImg(m.chat, json, kasihcaption, footer, 'NEXT', `${usedPrefix + command}`, m)
}
handler.help = ['hentai']
handler.tags = ['hentai']

handler.command = /^(hentai)$/i
handler.limit = 15

module.exports = handler
