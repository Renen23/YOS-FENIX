module.exports = {
name: 'boton',
description: 'Liga o bot (reativa comandos para todos)',
category: 'dono',
aliases: ['ligar', 'start'],
async execute({ yosFenixBot, from, info, reply, isDono }) {
if (!isDono) return reply('❌ Apenas o dono pode usar este comando!')
global.botLigado = true
await reply('🌕 *YOS FÊNIX OPERANDO NOVAMENTE* 🌕')
try {
const donoId = yosFenixBot.user.id?.split(':')[0] + '@s.whatsapp.net'
await yosFenixBot.sendMessage(donoId, {text: `🌕 *YOS FÊNIX OPERANDO NORMALMENTE* 🌕 \n\nComandos reativados para todos os usuários.`})
} catch(e) {}
}
}