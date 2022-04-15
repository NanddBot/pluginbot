let handler  = async (m, { conn, usedPrefix: _p }) => {
ye = `@${m.sender.split`@`[0]}`
let info = `Hai Kak ${ye} lagi nyari video viral ya?
Nih Download Sendiri di YT we :
https://youtube.com/channel/UCFc8f2h3qeS7hYm21Op275A

*Jangan Lupa Subscribe ya kak, kalo gak subscribe saya gak kirim wowkok :v...*
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', `*${global.packname}*`, 'status@broadcast') 
}
handler.help = ['videoviral']
handler.tags = ['info']
handler.command = ['videoviral', 'viral',]
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 10

module.exports = handler
