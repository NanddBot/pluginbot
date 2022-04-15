const axios = require('axios')
const cheerio = require('cheerio')

let handler = async (m, { conn, args, usedPrefix, command }) => {
  if (!args || !args[0]) throw `Gunakan format ${usedPrefix}${command} [username]
Contoh: ${usedPrefix}${command} nanda
`.trim()
  let res = await igstalk(args[0])
  m.reply('_Sedang membuat..._\n*Mohon tunggu sekitar 1 menit*')
  let json = JSON.parse(JSON.stringify(res))
  let iggs = `
┏━━━ꕥ *INSTAGRAM STALKER* ꕥ━⬣
┃✾ *Username:* ${json.username}
┃✾ *Nickname:* ${json.fullName}
┃✾ *Followers:* ${json.followersM} Followers
┃✾ *Following:* ${json.followingM} Following
┃✾ *Posting:* ${json.postsCountM} Postingan
┃✾ *Link:* https://instagram.com/${json.username}
┃✾ *Bio:* ${json.bio}
┗━❑
`.trim() // tambahin sendiri json.blablabla :)
 m.reply('_APIKEY SALAH, pastikan anda pernah berlangganan di https://apikey-bear3.herokuapp.com/docs_')
}
handler.help = ['igstalk <username>']
handler.tags = ['tools']
handler.command = /^(igstalk)$/i
handler.limit = 3
module.exports = handler