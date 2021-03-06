
const { proto, areJidsSameUser, newMessagesDB, generateWAMessage, MessageType } = require('@adiwajshing/baileys')
const util = require('util')

module.exports = {
    async all(m, chatUpdate) {
        if (m.isBaileys) return
        if (!m.message) return 
        if (!(m.message.buttonsResponseMessage || m.message.templateButtonReplyMessage)) return
        let id = m.message.buttonsResponseMessage?.selectedButtonId || m.message.templateButtonReplyMessage?.selectedId
        let text = m.message.buttonsResponseMessage?.selectedDisplayText || m.message.templateButtonReplyMessage?.selectedDisplayText
        let isIdMessage = false, usedPrefix
        for (let name in global.plugins) {
            let plugin = global.plugins[name]
            if (!plugin) continue
            if (plugin.disabled) continue
            if (!opts['restrict']) if (plugin.tags && plugin.tags.includes('admin')) continue
            if (typeof plugin !== 'function') continue
            if (!plugin.command) continue
            const str2Regex = str => str.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&')
            let _prefix = plugin.customPrefix ? plugin.customPrefix : this.prefix ? this.prefix : global.prefix
            let match = (_prefix instanceof RegExp ? // RegExp Mode?
                [[_prefix.exec(id), _prefix]] :
                Array.isArray(_prefix) ? // Array?
                    _prefix.map(p => {
                        let re = p instanceof RegExp ? // RegExp in Array?
                            p :
                            new RegExp(str2Regex(p))
                        return [re.exec(id), re]
                    }) :
                    typeof _prefix === 'string' ? // String?
                        [[new RegExp(str2Regex(_prefix)).exec(id), new RegExp(str2Regex(_prefix))]] :
                        [[[], new RegExp]]
            ).find(p => p[1])
            if ((usedPrefix = (match[0] || '')[0])) {
                let noPrefix = id.replace(usedPrefix, '')
                let [command, ...args] = noPrefix.trim().split` `.filter(v => v)
                command = (command || '').toLowerCase()
                let isId = plugin.command instanceof RegExp ? // RegExp Mode?
                    plugin.command.test(command) :
                    Array.isArray(plugin.command) ? // Array?
                        plugin.command.some(cmd => cmd instanceof RegExp ? // RegExp in Array?
                            cmd.test(command) :
                            cmd === command
                        ) :
                        typeof plugin.command === 'string' ? // String?
                            plugin.command === command :
                            false
                if (!isId) continue
                console.log({ name, command: plugin.command, text: id })
                isIdMessage = true
            }

        }
        // m.reply(util.format(isIdMessage ? m.msg.selectedButtonId : m.msg.selectedDisplayText))
        this.emit('chat-update', {
            ...chatUpdate,
            messages: newMessagesDB([
                this.cMod(m.chat,
                    await this.prepareMessage(m.chat, isIdMessage ? m.msg.selectedButtonId : m.msg.selectedDisplayText, MessageType.extendedText, {
                    contextInfo: {
                        mentionedJid: m.msg.contextInfo && m.msg.contextInfo.mentionedJid ? m.msg.contextInfo.mentionedJid : []
                        },
                        ...(m.quoted ? { quoted: m.quoted.fakeObj } : {}),
                        messageId: m.id,
                    }),
                    isIdMessage ? m.msg.selectedButtonId : m.msg.selectedDisplayText,
                    m.sender
                )
            ])
        })
    }
}