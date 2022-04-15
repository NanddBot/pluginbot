let handler = m => m
handler.before = async function (m) {

    if (m.isGroup && global.db.data.chats[m.chat].expired != 0) {
        if (new Date() * 1 >= global.db.data.chats[m.chat].expired) {
            this.reply(m.chat, `waktunya *${this.user.name}* untuk meninggalkan grup`, null).then(() => {
            this.reply(m.chat, `Silahkan Hubungi @${global.owner[0].split`@`[0]} untuk menambah masa aktif Grup`, null).then(() => {
                    this.groupLeave(m.chat).then(() => {
                        global.db.data.chats[m.chat].expired = 0
                    })
                })
            })
        }
    }
}

module.exports = handler
