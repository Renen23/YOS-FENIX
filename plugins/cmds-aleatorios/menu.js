const fs = require('fs')
const path = require('path')

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

const menuTxt = `
╭🌸─━⛩─━❄━─⛩━─🌸╮
    『 𝗬𝗢𝗦 𝗙𝗘𝗡𝗜𝗫 』
╰🌸─━⛩─━❄━─⛩━─🌸╯

╭🌸━─━─━─🌸─━─━─━─🌸╮
│🔥╭─⛩༺YOS FÊNIX༻⛩─╮
│❄│ Bot: YOS FÊNIX
│❄│ User: ${pushname}
│❄│ Numero: ${sender.split("@")[0]}
│❄│ Grupo: ${isGroup ? 'Sim' : 'Nao'}
│❄│ Status: Online
│🔥╰─⛩༺YOS FÊNIX༻⛩─╯
╰🌸━─━─━─🌸─━─━─━─🌸╯

📌 *COMANDOS:*

🛡️ *Admin*
${prefix}menuadm

🗒 *Comandos*
${prefix}menucmds

👑 *Dono*
${prefix}menudono

⬇️ *Downloads*
${prefix}menudownloads

🎨 *Efeitos*
${prefix}menuefeitos

🤖 *IA*
${prefix}menuia

🎬 *Midias*
${prefix}menumidias

💎 *Premium*
${prefix}menupremium

🎮 *Jogos*
${prefix}menuresenha

⚔️ *RPG*
${prefix}menurpg

╭🌸━─━─━─🌸─━─━─━─🌸╮
│© YOS FÊNIX
╰🌸━─━─━─🌸─━─━─━─🌸╯`

if (bufferMenu) {
await yosFenixBot.sendMessage(from, {
image: bufferMenu,
caption: menuTxt,
mentions: [sender]
}, { quoted: info })
} else {
await reply(menuTxt)
}
} catch(e){
console.error(e)
await reply('Erro ao abrir o menu.')
}
}
}
}
},{})
} catch(e){
console.error(e)
await reply('Erro ao abrir o menu.')
}
}
}