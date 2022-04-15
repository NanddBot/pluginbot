let fetch = require('node-fetch')
let handler = async (m, { text }) => {
m.reply(wait)
 let url = await fetch('https://api.zeks.xyz/api/memeindo?apikey=caliph_71')
  let barbar = await url.json()
m.reply('Error)

}
handler.command = /^(memeindo)$/i
handler.register = true
handler.private = false
handler.limit = true

module.exports = handler