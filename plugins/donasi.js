let handler = async m => m.reply(`
┏━━°❀❬ *DONASI* ❭❀°━━┓
┃
┃Mau Pakai Bot ?
┃Syarat Nya Harus Donasi Ya Kak
┃Gratis Kokk, Cuma Dengan Subrek Ajja
┃Kakak Bisa Gunakan Bot Secara Free
┃Buat Grub Kakak Nyaaa
┃
┃Kirim Bukti Screen Nya Ya Kakk
┃Habis Itu Baru Aku Acc 
┃Kalau Belom Sabar Ya Kakk
┃Mungkin Owner Lagi Off
┃Nanti Kalau Owner Onn
┃Pasti Di Acc Kok 😊😉😉
┃
┃TerimaKasih Ya Kak Yang Sudah Bantu 🙏🙏
┃
┃Link Channel : https://youtube.com/channel/UCFc8f2h3qeS7hYm21Op275A
┃
┗━━━━━━━━━━━━━━━━
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command =/^(donasi)$/i

module.exports = handler
