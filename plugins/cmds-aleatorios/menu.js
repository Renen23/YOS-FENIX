const fs = require('fs')
const path = require('path')
const { prepareWAMessageMedia } = require('@whiskeysockets/baileys')

module.exports = {
name: 'menu',
description: 'Mostra o menu de comandos',
category: 'cmds-aleatorios',
aliases: ['comandos','help'],
async execute({ yosFenixBot, from, info, prefix, reply, reagir, AudioYosFenix, pushname, sender, isGroup }) {
try {

await AudioYosFenix('./arquivos/audio/menu.mp3').catch(() => {})
await reagir("🎐")

const caminhoMenu = path.join(__dirname,'../../arquivos/imagem/menu.jpg')
const bufferMenu = fs.existsSync(caminhoMenu) ? fs.readFileSync(caminhoMenu) : null

const mediaMenu = bufferMenu ? await prepareWAMessageMedia(
{ image: bufferMenu },
{ upload: yosFenixBot.waUploadToServer }
) : null

const menuTxt = `
╭🌸─━⛩─━❄━─⛩━─🌸╮

    『 𝗛𝗜𝗬𝗨𝗞𝗜 𝗦𝗨𝗣𝗥𝗘𝗠𝗘 𝐕𝟏 』

╰🌸─━⛩─━❄━─⛩━─🌸╯
        ❱❱ Hɪʏᴜᴋɪ Sᴜᴘʀᴇᴍᴇ V1 ❰❰
╭🌸━─━─━─🌸─━─━─━─🌸╮
│🔥╭─⛩༺YOS FÊNIX༻⛩─╮
│❄│ 𝐁𝐨𝐭: YOS FÊNIX
│❄│ 𝐔𝐬𝐞𝐫: ${pushname}
│❄│ 𝐍𝐮𝐦𝐞𝐫𝐨: ${sender.split("@")[0]}
│❄│ 𝐆𝐫𝐮𝐩𝐨: ${isGroup ? 'Sim✅️' : 'Não❌️'}
│❄│ 𝐒𝐭𝐚𝐭𝐮𝐬: Online 🟢
│🔥╰─⛩༺YOS FÊNIX༻⛩─╯
╰🌸━─━─━─🌸─━─━─━─🌸╯`

const botoes = [{
name: "cta_url",
buttonParamsJson: JSON.stringify({
display_text: "🔥 YOS FÊNIX 🔥",
url: "https://github.com/",
merchant_url: "https://github.com/"
})
},{
name: "single_select",
buttonParamsJson: JSON.stringify({
title: "🌸 𝐌𝐄𝐍𝐔 ❆ 𝐋𝐈𝐒𝐓𝐀 🌸",
sections: [{
title: "Escolha uma opção",
rows: [
{header:"𝗠𝗘𝗡𝗨 𝗔𝗗𝗠",title:"🛡️ Admin",description:"Comandos apenas para administradores",id:`${prefix}menuadm`}, {header:"𝗠𝗘𝗡𝗨 𝗖𝗢𝗠𝗔𝗡𝗗𝗢𝗦",title:"🗒 Comandos",description:"Comandos aleatorios",id:`${prefix}menucmds`},
{header:"𝗠𝗘𝗡𝗨 𝗗𝗢𝗡𝗢",title:"👑 Dono",description:"Comandos exclusivos do dono do YOS FÊNIX",id:`${prefix}menudono`},
{header:"𝗠𝗘𝗡𝗨 𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗𝗦",title:"⬇️ Downloads",description:"Comandos de downloads",id:`${prefix}menudownloads`},
{header:"𝗠𝗘𝗡𝗨 𝗘𝗙𝗘𝗜𝗧𝗢𝗦",title:"🎨 Efeitos",description:"Feitos de img e audio",id:`${prefix}menuefeitos`},
{header:"𝗠𝗘𝗡𝗨 𝗜𝗔",title:"🤖 IA",description:"Comandos de inteligência artificial",id:`${prefix}menuia`},
{header:"𝗠𝗘𝗡𝗨 𝗠𝗜𝗗𝗜𝗔𝗦",title:"🎬 Midias",description:"Comandos de mídias do YOS FÊNIX",id:`${prefix}menumidias`},
{header:"𝗠𝗘𝗡𝗨 𝗣𝗥𝗘𝗠𝗜𝗨𝗠",title:"💎 Premium",description:"Comandos de premium",id:`${prefix}menupremium`},
{header:"𝗠𝗘𝗡𝗨 𝗥𝗘𝗦𝗘𝗡𝗛𝗔",title:"🎮 Jogos",description:"Jogos e brincadeiras do YOS FÊNIX",id:`${prefix}menuresenha`},
{header:"𝗠𝗘𝗡𝗨 𝗥𝗣𝗚",title:"⚔️ RPG",description:"Comandos de RPG da bot",id:`${prefix}menurpg`}
]
}]
})
}]

await yosFenixBot.relayMessage(from,{
interactiveMessage:{
contextInfo:{
stanzaId: info.key.id,
participant: info.key.participant || info.key.remoteJid,
quotedMessage: info.message,
mentionedJid:[sender]
},
body:{text:'🔥 _Ô, chefia! YOS FÊNIX, aqui está seu menu._ 🔥'},
footer:{text:'YOS FÊNIX </>'},
carouselMessage:{
cards:[{
header:{hasMediaAttachment:true,imageMessage: mediaMenu ? mediaMenu.imageMessage : undefined},
body:{text: menuTxt},
footer:{text:'© YOS FÊNIX'},
nativeFlowMessage:{buttons: botoes}
}]
}
}
},{})
} catch(e){
console.error(e)
await reply('Erro ao abrir o menu.')
}
}
}