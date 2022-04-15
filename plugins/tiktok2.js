let fetch = require('node-fetch')
let handler = async (m, { conn, args, json, usedPrefix, command }) => {

  if (!args[0]) throw `uhm.. url nya mana?\n\ncontoh:\n${usedPrefix + command} https://vt.tiktok.com/yqyjPX/`
  if (!args[0].match(/tiktok/gi)) throw `url salah`

  let res = await fetch(API('https://hardianto.xyz/api/tiktok?apikey=hardianto'))
  if (!res.ok) throw eror
  //let json = await res.json()
  if (!json.status) throw json
  await m.reply(wait)
  await conn.sendFile(m.chat, '', `${jso.caption}\n\n© nanda`, m)

}
handler.help = ['tiktok2'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(tiktok2)$/i

handler.limit = true

module.exports = handler
