let axios = require("axios");
let handler = async (m, { conn, command }) => {


   await m.reply('Searching...')
  axios.get(`https://raw.githubusercontent.com/saipulanuar/Api-Github/main/virus/virtex3.json`).then ((res) => {

let hasil = `
*JANGAN LUPA SUBSCRIBEx*

${res.data}
`.trim()

    conn.reply(m.chat, hasil, m)
  })
}
handler.help = ['virtex3']
handler.tags = ['virus']
handler.command = /^(virtex3)$/i
handler.owner = false
handler.mods = false
handler.premium = true
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
