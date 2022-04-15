
let handler = m => m
handler.before = async function (m) {
 if (m.text && m.text.length >= 10000) {
 if (m.sender == this.user.jid) return false
let babii = "\n".repeat(300) + "Ada Spam Virtext atau Ga Penting "
m.reply(`Si @${m.sender.split("@")[0]} Asuu DETECTED SEND VIRUS AND SPAM!*\n_Sorry Ente Dikick Karna Meresahkan Beban Grub Disini._`)


await conn.groupRemove(m.chat, [m.sender])
m.reply(babii)
}
}
module.exports = handler



