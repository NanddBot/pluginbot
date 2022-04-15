let fetch = require('node-fetch')
let handler = async (m, { text, usedPrefix, command }) => {
  if (!text) throw `uhm.. teksnya mana?\n\ncontoh:\n${usedPrefix + command} hai`
  let res = await fetch(`https://apikey-bear3.herokuapp.com/api/maker/skatch?apikey=APIKEY&url=https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbmrYfgiRt1lLwNgRMgMbID62qH3EQ2T1c6RUJEQMcoCWKqVVxAg7R_LfM&s=10`)
  if (!res.ok) throw eror
  let json = await res.json()
  if (json.jawaban == 'Aku tidak mengerti apa yang kamu katakan.Tolong ajari aku.') await m.reply('siminya blom diajarin jadi gatau t_t custom pesannya di https://simsimi.com/teach')
m.reply('APIKEY SALAH, pastikan anda pernah berlangganan di https://apikey-bear3.herokuapp.com/docs')
}
handler.help = ['simi', 'simsimi', 'simih'].map(v => v + ' <teks>')
handler.tags = ['fun']
handler.command = /^((sim)?simi|simih)$/i

module.exports = handler

