let handler = function (m) {
	this.sendContact(m.chat, '18592956744', 'Nomer Owner :)', m)
}

handler.customPrefix = ['🍭Owner Bot'] 
handler.command = new RegExp

module.exports = handler

