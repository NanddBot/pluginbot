let handler  = async (m, { conn, usedPrefix: _p }) => {
let pp = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=Group'
let botol = global.botwm
let str = `
✧─────[ *Group Official* ]─────✧
🍀 Group 1 Khusus Bot Official :
https://chat.whatsapp.com/IT7uWmki6KpEqtLiag6fbO

🍀 Group 2 Khusus Asupan :
Note : Yg 15 + 
https://chat.whatsapp.com/HAzZYXAEIuDKC8SPHkVdos
✧─────────···─────────✧
`.trim()
conn.sendButton(m.chat, str, `${botol}`, `⋮☰ Menu`, `.menu`, m)
}
handler.help = ['gcbot']
handler.tags = ['info']
handler.command = /^gcbot$/i

module.exports = handler
