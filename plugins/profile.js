let PhoneNumber = require('awesome-phonenumber')
let levelling = require('../lib/levelling')
let handler = async (m, { conn, usedPrefix }) => {
  let pp = './src/avatar_contact.png'
 let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
 let ppe = await conn.getProfilePicture(who)
    let about = (await conn.getStatus(who).catch(console.error) || {}).status || ''
    if (typeof global.db.data.users[who] == "undefined") {
      global.db.data.users[who] = {
        exp: 0,
        limit: 10,
        lastclaim: 0,
        registered: false,
        name: 'Belum Daftar:v',
        age: -1,
        regTime: -1,
        afk: -1,
        afkReason: '',
        banned: false,
        level: 0,
        call: 0,
        role: 'Warrior V',
        autolevelup: false,
        pc: 0,
      }
    }
    let { name, limit, exp, lastclaim, registered, regTime, age, level, role, banned } = global.db.data.users[who]
    let { min, xp, max } = levelling.xpRange(level, global.multiplier)
    let username = conn.getName(who)
    let math = max - xp
   let res = `http://hardianto-chan.herokuapp.com/api/rankcard?profile=https://i.ibb.co/vQTHzkh/IMG-20210907-WA0721.jpg&name=${name}&bg=https://i.ibb.co/4YBNyvP/images-76.jpg&needxp=${max}&curxp=${exp}&level=${level}&logorank=https://i.ibb.co/Wn9cvnv/FABLED.png`
    let fkon = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: '18592956744@s.whatsapp.net' } : {}) }, message: { contactMessage: { displayName: `${name}`, vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${name}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}} 
    
    let str = `
]────❏ *PROFILE* ❏────[
 🧸 *Name:* ${registered ? '(' + name + ') ' : ''}(@${who.replace(/@.+/, '')})
 🧸 *Bio:* ${about ? about : ''}
 🧸 *Tag:* @${who.replace(/@.+/, '')}
 🧸 *Link Wa:* https://wa.me/${who.split`@`[0]}
 🧸 *XP:* TOTAL ${exp} (${exp - min} / ${xp}) [${math <= 0 ? `Siap untuk *${usedPrefix}levelup*` : `${math} XP lagi untuk levelup`}]
 🧸 *Age:* ${registered ? age : ''}
 🧸 *Level:* ${level}
 🧸 *Role:* *${role}*
 🧸 *Limit:* ${limit}
 
 🧸 *Owner: ${global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) ? 'Ya' : 'Tidak'}
 🧸 *Premium: ${global.prems.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) ? 'Ya' : 'Tidak'}
 🧸 *Terdaftar: ${registered ? 'Ya (' + new Date(regTime).toLocaleString() + ')' : 'Tidak'}${lastclaim > 0 ? '\nTerakhir Klaim: ' + new Date(lastclaim).toLocaleString() : ''}
`.trim()

let mentionedJid = [who]
    conn.send2ButtonImg(m.chat, await conn.getProfilePicture(m.sender), banned ? 'kasian ke banned' : str, global.botdate, 'MENU', '.menu', 'INVENTORY', '.inv', fkon, { contextInfo: { mentionedJid: [who], forwardingScore: 999, isForwarded: true}})
 

}
handler.help = ['profile [@user]']
handler.tags = ['rpg']
handler.command = /^profile|pp$/i
module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

