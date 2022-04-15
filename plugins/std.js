let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
	conn.send3ButtonLoc(m.chat, await (await fetch(fla + 'sewa bot')).buffer(), `╠═〘 Beli Bot 〙 ═
╠➥ *1 Bulan* :      *Rp 15.000,00*
╠➥ *Permanen* : *Rp 25.000,00*
╠➥ *Premium* :   *Rp 45.000,00*
╠➥ *Permanen+SC* : *Rp 100.000,00*
╠➥ *Jasa Run* : *Rp 15.000,00*
╠➥ *Edit Sc/Nambah Fitur Bot*
╠➥ *1 Fitur* : *Rp 5.000.00 No Apikey*
╠➥ *1 Fitur* : *Rp 8.000.00 + Apikey*
╠➥ *Beli Apikey* : *Rp 25.000.00 = 1 Bulan*
║
╠═〘 PEMBAYARAN 〙 ═
╠➥ Gopay, Dana, Dan Ovo
║
╠═ Tertarik Untuk Beli Bot Ini?
╠➥Ketuk Tombol Di Bawah Ya
║
╠═ Whatsapp Bot
╠═ Scrip original by Nurutomo
╠═〘 ${namabot} 〙 ═`.trim(), footer, 'Dana', '#viadana', 'OVO', '#viaovo', 'Pulsa', '#viapulsa', m)
}

handler.command = /^sewa(bot)?$/i

module.exports = handler
