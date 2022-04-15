/*let handler = m => m
handler.before = m => {
  let user = global.db.data.users[m.sender]
  if (user.afk > -1) {
    m.reply(`
Kamu berhenti AFK${user.afkReason ? ' setelah ' + user.afkReason : ''}
Selama ${clockString(new Date - user.afk)}
`.trim())
    user.afk = -1
    user.afkReason = ''
  }
  let jids = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
  for (let jid of jids) {
    let user = global.db.data.users[jid]
    if (!user) continue
    let afkTime = user.afk
    if (!afkTime || afkTime < 0) continue
    let reason = user.afkReason || ''
    m.reply(`
Jangan tag dia!
Dia sedang AFK ${reason ? 'dengan alasan ' + reason : 'tanpa alasan'}
Selama ${clockString(new Date - afkTime)}
`.trim())
  }
  return true
}

module.exports = handler

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}
*/

let handler = m => m
let fs = require('fs')
handler.before = m => {
  let user = global.db.data.users[m.sender]
  if (user.afk > -1) {
    let test = `
*Reason* :  ${user.afkReason ? user.afkReason : ''}
*Time* : ${clockString(new Date - user.afk)}
──────────────────────
`.trim()
conn.relayWAMessage(conn.prepareMessageFromContent(m.chat, {
        "listMessage": {
          "title": test.trim(),
          "description": `${user.name} Telah Kembali Dari Afk !`.trim(),
          "footerText": global.botdate,
          "buttonText": "M E N U",
          "listType": "SINGLE_SELECT",
          "sections": [
                            {
                                "rows": [{
                                         "title": 'DONASI',
                                         "description": "Jan Lupa Donasi Kak",
                                         "rowId": ".donasi"
                                    }, {
                                         "title": 'RULES', 
                                         "description": "Rules Menggunakan BOT",
                                         "rowId": ".rules"
                                         }, {
                                         "title": 'OWNER', 
                                         "description": "Owner BOT",
                                         "rowId": ".owner"
                       }],
                                "title": "⎙ BOT Whatsapp"
                  }
                        ], "contextInfo": 
                         { "stanzaId": m.key.id,
                        "participant": m.sender,
                        "quotedMessage": m.message
                        }
                      }
                     }, {}), {waitForAck: true})
    user.afk = -1
    user.afkReason = ''
  }
  let jids = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
  for (let jid of jids) {
  const ftrol = {
    key : {
    remoteJid: 'status@broadcast',
    participant : '0@s.whatsapp.net'
    },
    message: {
    orderMessage: {
    itemCount : 2022,
    status: 1,
    surface : 1,
    message: `❗ JANGAN TAG DIA!`, 
    orderTitle: `▮Menu ▸`,
   // thumbnail: fs.readFileSync('./thumbnail.jpg'), //Gambarnye
    sellerJid: '0@s.whatsapp.net' 
    }
    }
    }
    let user = global.db.data.users[jid]
    if (!user) continue
    let afkTime = user.afk
    if (!afkTime || afkTime < 0) continue
    let reason = user.afkReason || ''
    let str = `─────────[ *AFK* ]─────────
*Reason* : ${reason}
 *Time* : ${clockString(new Date - afkTime)}
──────────────────────
`.trim()
conn.reply(m.chat, str, ftrol)
  }
  return true
}

module.exports = handler

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}

let wm = global.botwm