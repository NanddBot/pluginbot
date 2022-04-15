let handler = async (m, { conn, args, command }) => {
let totalf = Object.values(global.plugins).filter(
    (v) => v.help && v.tags
  ).length;
conn.reply(m.chat, `Total Fitur saat ini: ${totalf} fitur`,m)
}

handler.help = ['totalfitur', 'jumlahfitur']
handler.tags = ['info']
handler.command = ['totalfitur', 'jumlahfitur']
module.exports = handler
