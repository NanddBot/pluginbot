let fetch = require('node-fetch')
     let handler  = async (m, { conn, usedPrefix, command }) => {
m.reply(wait)
heum = await fetch(`https://apikey-bear3.herokuapp.com/api/darkjokes?apikey=${bearkey}`)
    json = await heum.buffer()
m.reply('APIKEY SALAH, pastikan anda pernah berlangganan di https://apikey-bear3.herokuapp.com/docs')

}
handler.help = ['darkjoke', 'darkjokes']
handler.tags = ['internet']
handler.command = /^((drag|dark)joke|jokes)$/i

module.exports = handler
