let fs = require('fs')
let handler = async (m) => {
let kontol = fs.readFileSync('https://a.uguu.se/iREMJzvg.mp3')
conn.sendFile(m.chat, kontol, '', '', m, true)
}

handler.customPrefix = /^(Kontol)$/i
handler.command = new RegExp
handler.limit = true

module.exports = handler
