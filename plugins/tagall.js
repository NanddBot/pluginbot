/*let handler = async (m, { conn, text, participants }) => {
  let users = participants.map(u => u.jid)
  m.reply(text + '\n' + users.map(v => '@' + v.replace(/@.+/, '')).join`\n`, null, {
    contextInfo: { mentionedJid: users }
  })
}
handler.command = ['tagall']

handler.admin = true
handler.group = true
handler.botAdmin = true

module.exports = handler
*/

let { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn, participants, args }) => {
    const getGroupAdmins = (participants) => {
        admins = []
        for (let i of participants) {
            i.isAdmin ? admins.push(i.jid) : ''
        }
        return admins
    }

    const mentions = (teks, memberr, id) => {
        (id == null || id == undefined || id == false) ? conn.sendMessage(m.chat, teks.trim(), MessageType.extendedText, { contextInfo: { "mentionedJid": memberr } }) : conn.sendMessage(m.chat, teks.trim(), MessageType.extendedText, { quoted: m, contextInfo: { "mentionedJid": memberr } })
    }
    const isGroup = m.chat.endsWith('@g.us')
    let grupmeta = await conn.groupMetadata(m.chat)
    const groupMembers = isGroup ? grupmeta.participants : ''
    const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
    const info = await conn.groupMetadata(m.chat)
    let users = (await conn.groupMetadata(m.chat)).participants.map(u => u.jid)
    let pesan = args.join` `
    let oi = `message : ${pesan}`
    let hmm = `*⺀TAG-ALL-B E B A N-GROUP⺀*\n\n`
    let duh = `└\n\n▌│█║▌║▌║║▌║▌║█│▌▌║▌│█\nNIH SEMUA NOMER BEBAN DI ATAS`
       var teks = `${oi}\n\n❏\n`
    for (let admon of groupMembers) {
        teks += `┣➥ @${admon.jid.split('@')[0]}\n`
    }
    mentions(hmm+teks+duh, users, true,{ contextInfo: { mentionedJid: users } })
    // m.reply( + "\nNama:\n" +  + "\nDeskripsi:\n" + )
} 
handler.help = ['tagall'] 
handler.tags = ['group']
handler.command = /^tagall$/i
handler.admin = true
handler.group = true
handler.botAdmin = true

module.exports = handler


