let fetch = require('node-fetch')
let handler = async (m, { conn }) => conn.sendButtonLoc(m.chat, await (await fetch(fla + 'codebahasa')).buffer(), `
┌〔 𝙆𝙤𝙙𝙚 𝘽𝙖𝙝𝙖𝙨𝙖 〕
├ Daftar bahasa yang didukung:
├ https://cloud.google.com/translate/docs/languages
└────
`.trim(), footer, 'Translate', '.translate')
handler.help = ['codebahasa']
handler.tags = ['tools']
handler.command = /^(codebahasa|kodebahasa)$/i

module.exports = handler
