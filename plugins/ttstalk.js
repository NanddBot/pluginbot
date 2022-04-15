let fetch = require('node-fetch')
let handler = async (m, { conn, args, usedPrefix, command }) => {
  if (!args[0]) throw `contoh:\n${usedPrefix + command} raraharsita2`
  m.reply('_Sedang membuat..._\n*Mohon tunggu sekitar 1 menit*')
  let res = await fetch(`https://apikey-bear3.herokuapp.com/api/maker/skatch?apikey=APIKEY&url=https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbmrYfgiRt1lLwNgRMgMbID62qH3EQ2T1c6RUJEQMcoCWKqVVxAg7R_LfM&s=10`)
  if (!res.ok) throw eror
  let json = await res.json()
  if (json.status != 200) throw json
 let iggs = `
┏━━━ꕥ *TIKTOK STALKER* ꕥ━⬣
┃✾ *Username:* ${json.result.username}
┃✾ *Nickname:* ${json.result.nickname}
┃✾ *Followers:* ${json.result.followers} Followers
┃✾ *Following:* ${json.result.followings} Following
┃✾ *Like:* ${json.result.likes} Like
┃✾ *Video:* ${json.result.likes} Video
┃✾ *Link:* https://tiktok.com/@${json.result.username}
┃✾ *Bio:* ${json.result.bio}
┗━❑
`.trim() // tambahin sendiri json.blablabla :)
  m.reply('APIKEY SALAH, pastikan anda pernah berlangganan di https://apikey-bear3.herokuapp.com/docs')
} 

handler.help = ['ttstalk <username>']
handler.tags = ['tools']
handler.command = /^ttstalk$/i

module.exports = handler
