let handler = m => m

let linkRegex = /📄.PHILIP_RASHAN                                                             📄.PHILIP_RASHAN/i

handler.before = async function (m, { isAdmin, isBotAdmin }) {
  if (m.isBaileys && m.fromMe) return true
  let chat = global.db.data.chats[m.chat]
  let name = this.getName(m.sender)
  let isGroupPhilip = linkRegex.exec(m.text)

  await conn.sendButton(m.chat, `*Virtext Terdeteksi!*${isBotAdmin ? '' : '\n\nbukan admin jadi gabisa kick t_t'}\n\nKetik *.off antiphilip* untuk mematikan fitur ini${opts['restrict'] ? '' : '\nketik *#on restrict* supaya bisa kick'}`, '©RFK Bot', 'Matikan AntiPhilip', '#off antiphilip', m)
    //if (global.opts['restrict']) {
      if (isBotAdmin) this.groupRemove(m.chat, [m.sender])
//    }
  }
  return true
}

module.exports = handler