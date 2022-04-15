// Bismillahirrahmanirrahim
// thank you to ALLAH Swt
// thank you to Nurutomo as wabot-aq
// thank you to ariffb as stikerinbot
// thank you to botstylee
// thank you to bochilgaming as games-wabot
// thank you to benni ismael
// thank you to zerochanBot
// thank you to fernazer
// thank you to King Of Bear Official
// thank you to MikeBot Dev Team
// thank you to ALL Bot creator
// and thanks you to who support my Bot
global.util = require('util')
//global.fs = require('fs')
//global.fetch = require('node-fetch')
//global.chalk = require('chalk')
global.os = require('os')
//global.moment = require('moment-timezone')
global.axios = require('axios')
global.cheerio = require('cheerio')
global.scrape = require('./lib/scrape')
global.xfr = require('xfarr-api')
global.yzu = require('yuzzu-api')
//global.dhn = require('dhn-api')
global.hxz = require('hxz-api')
global.clp = require('caliph-api')
global.bs = require('@bochilteam/scraper')
global.baileys = require('@adiwajshing/baileys')
let fs = require('fs')
let fetch = require('node-fetch')
let moment = require('moment-timezone')
let d = new Date(new Date + 3600000)
let locale = 'id'
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
})

let time = d.toLocaleTimeString(locale, {
hour: 'numeric',
minute: 'numeric',
second: 'numeric'
})
let wktuh = moment.tz('Asia/Jakarta').format('HH')
let wktum = moment.tz('Asia/Jakarta').format('mm')
let wktus = moment.tz('Asia/Jakarta').format('ss')


function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}


gc1 = ''
gc2 = ''
gc3 = ''
global.linkGC = ['https://chat.whatsapp.com/BaOFz6JuW97DV7l9XNyxfR', ''] // ganti jadi group lu
global.owner = ['79309772935'] // Put your number here //owner eval
global.kontak = ['79309772935','18592956744'] //Ketika ada yang ngetik #owner
global.prems = JSON.parse(fs.readFileSync('./src/premium.json')) 
global.mods = ['79309772935','18592956744'] // Want some help?

global.APIs = { // API Prefix
  // name: 'https://website'
  bx: 'https://bx-hunter.herokuapp.com',
  rey: 'https://server-api-rey.herokuapp.com',
  dhnjing: 'https://dhnjing.xyz',
  hardianto: 'https://hardianto.xyz',
  hardianto: 'https://hardianto-chan.herokuapp.com',
  nrtm: 'https://nurutomo.herokuapp.com', 
  melcanz: 'httpa://melcanz.com',
  neoxr: 'https://neoxr-api.herokuapp.com',
  xteam: 'https://api.xteam.xyz',
  zahir: 'https://zahirr-web.herokuapp.com',
  lol: 'https://api.lolhuman.xyz',
  dhnjing: 'https://dhnjing.xyz',
  zeks: 'https://api.zeks.me',
  pencarikode: 'https://pencarikode.xyz',
  bear: 'https://apikey-bear.herokuapp.com',
  bear2: 'https://apikey-bear2.herokuapp.com',
  bear3: 'https://apikey-bear3.herokuapp.com',
  viko: 'https://vikoapi-index.herokuapp.com',
  bsbt: 'https://bsbt-api-rest.herokuapp.com',
  LeysCoder: 'https://leyscoders-api.herokuapp.com',
  viko: 'https://viko-api.herokuapp.com',
  yoga: 'https://yog-apikey.herokuapp.com',
  tobzapi: 'https://tobz-api.herokuapp.com'
}
 
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey' (apikey kalian)
  'https://api.xteam.xyz': 'cristian9407',
  'https://bsbt-api-rest.herokuapp.com': 'benniismael',
  'https://tobz-api.herokuapp.com': 'Tobzzz1',
  'https://server-api-rey.herokuapp.com': 'apirey',
  'https://bx-hunter.herokuapp.com': 'Ikyy69',
  'https://hardianto.xyz': 'hardianto',
  'https://melcanz.com': 'elaina',
  'https://neoxr-api.herokuapp.com': 'yntkts',
  'https://api.lolhuman.xyz': 'rey2k21',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://hardianto-chan.herokuapp.com': 'hardianto',
  'https://api.zeks.me': 'apivinz',
  'https://api.zeks.me': 'Alphabott',
  'https://pencarikode.xyz': 'pais',
  'https://apikey-bear.herokuapp.com': 'KingOfBear',
  'https://apikey-bear2.herokuapp.com': 'KingOfBear',
  'https://apikey-bear3.herokuapp.com': 'KingOfBear',
  'https://leyscoders-api.herokuapp.com': 'dappakntlll',
  'https://pencarikode.xyz': 'pais', 
  'https://leyscoders-api.herokuapp.com': 'MIMINGANZ', 
  'https://vikoapi-index.herokuapp.com': 'q78dNJhR',
  'https://viko-api.herokuapp.com': 'vinko',
  'https://yog-apikey.herokuapp.com': 'YogGanz'
}

apisenku = 'SenkuApi', //Unlimited
HunterApi = 'itsmevall69', //Unlimited
xchillds = 'XChillDs', //Unlimited
hardi = 'hardianto',  //Unlimited
valkey = 'rivalgans', 
zeksapi = 'vallganz5',
dapapi = 'anakasu', //Unlimited
ApiZeks = 'NinoWangy',
zekskey = 'Alphabott', //Unlimited
lolkey = 'rey2k21',  
zerokey = "76V5OVlX",
zekskey = 'chika-key', //Unlimited
zekskey = 'apivinz',
xteamkey = 'cristian9407',
leyskey = 'dappakntlll',
bearkey = 'KingOfBear',
bearkey2 = 'KingOfBear',
bearkey3 = 'KingOfBear',
tobzapi = 'Tobzzz1',
hardikey = 'hardianto',
leyskey = 'MIMINGANZ',
vikokey = 'q78dNJhR',
xteam = 'cristian9407',
yogkey = 'YogGanz',
vinkey = 'vinko'

namaig = 'https://instagram.com/nandd_.10'
namagithub = 'GAK ADA :)'
kasihcaption = `Nih kak`
namakontak1 = 'NomerBot'
namakontak2 = 'Chat/SvWaIni'

//kasihcaption = `Nih Kak`

// Sticker WM
//=========== Sticker WM =============//
const spack = fs.readFileSync("lib/exif.json")
const stickerpack = JSON.parse(spack)
if (stickerpack.spackname == '') {
  var sticker_name = ''
  var sticker_author = '               ig\nnandd_.10'
 } else {
  var sticker_name = stickerpack.spackname
  var sticker_author = stickerpack.sauthor
}
const file_exif = "lib/exif.json"
fs.watchFile(file_exif, () => {
  fs.unwatchFile(file_exif)
  console.log(chalk.redBright("Update 'exif.json'"))
  delete require.cache[file_exif]
  require('./lib/exif.json')
})
//=========== Don't Change ============//
global.packname = sticker_name
global.author = sticker_author
//=====================================//

global.botwm = `NanddBot`//
global.botdate = `❏ ${wktuh} H  ${wktum} M  ${wktus} S\n❏ ${week} ${date}`
global.logo = `JSON.parse(fs.readFileSync('./src/logo.jpg'))`

//yyy
bc = 'Pesan' //King Of Bear Broadcast
footer = '\n©NandaBot'
wm = '\n©NandaBot'
namabot = 'NANDDBOT'
namalu = 'N A N D A'


// 
wait = '_*Loadiiing...*_'
global.wait = '_*Loadiinggggg...*_'
global.rpg = 'Fitur Rpg Dimatikan\nKetik *!enable* *rpg* untuk menggunakan fitur ini!\nKalo Mau main Disini aja\nhttps://chat.whatsapp.com/FnNAbem8o6r4pgLhSdO8Q9'
global.nsfw = 'Fitur NSFW Dimatikan\nKetik *!enable* *nsfw* untuk menggunakan fitur ini!'
global.eror = '_*Server Error*_'
global.fla = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text='


// tingkat kesulitan, semakin tinggi semakin susah
global.multiplier = 80 // The higher, The harder levelup

//*****************PEMBATAS*********************
// JANGAN DI GANTI NTAR KLO GABISA JAN TANYA GW

let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})