let handler = async (m, { conn, isOwner, text, isAdmin }) => {
//y = groupMetadata
//m.reply(y.subject)
 let who
  if (m.isGroup) {
    if (!(isAdmin || isOwner)) {
      global.dfail('admin', m, conn)
      throw false
    }
    if (isOwner) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text ? text.replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.chat
    else who = m.chat
  } else {
    if (!isOwner) {
      global.dfail('owner', m, conn)
      throw false
    }
    who = text ? text.replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.chat
  }

  try {
    if (who.endsWith('g.us')) global.db.data.chats[who].isBanned = true
    else global.db.data.users[who].banned = true
    let pesan = (`${namabot} tidak aktif dichat @${who.split`@`[0]}`)
    
    conn.send2Button(m.chat, pesan, footertext, 'Owner', '.owner', 'Donasi', '.donasi', m)
  } catch (e) {
    throw `nomor tidak ada didatabase!`
  }
}
handler.help = ['ban']
handler.tags = ['owner', 'group']
handler.command = /^ban(chat)?$/i

module.exports = handler
let footertext = `Silakan Hubungi Owner Bot Untuk Membuka Banned`