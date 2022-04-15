let handler = async (m, { conn, isOwner, text, isAdmin }) => {
  let who
  if (m.isGroup) {
    if (!(isAdmin || isOwner)) {
      global.dfail('admin', m, conn)
      throw false
    }
    who = m.mentionedJid[0] ? m.mentionedJid[0] : text ? text.replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.chat
    // else who = m.chat
  } else {
    if (!isOwner) {
      global.dfail('owner', m, conn)
      throw false
    }
    who = text ? text.replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.chat
  }
  try {
    if (who.endsWith('g.us')) global.db.data.chats[who].isBanned = false
    else global.db.data.users[who].banned = false
    let pesan = (`${namabot} sekarang aktif dichat @${who.split`@`[0]}`)
    conn.send2Button(m.chat, pesan, footertext, 'Menu', '.menu', 'Donasi', '.donasi', m)
  } catch (e) {
    throw `nomor tidak ada didatabase!`
  }
}
handler.help = ['unban']
handler.tags = ['owner']
handler.command = /^unban(chat)?$/i

handler.owner = true

module.exports = handler

let footertext = `Jangan Lupa Donasi Nya Yaa Kakk Biar Bot Makin Semangat\nTerimakasih Kak`