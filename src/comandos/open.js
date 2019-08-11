const { YES, NO } = require('../armazanador/emojis')
const { BK } = require('../armazanador/color')
const { RichEmbed } = require('discord.js')

exports.run = async (client, message, args) => {
    let embed = new RichEmbed()
    .setDescription('Querem o link do bot em opne source?')
    .setColor(BK)
    message.channel.send(embed).then(dekuuz => {
        dekuuz.react(YES)
        dekuuz.react(NO)
    })


}
exports.config = {
    name: 'open',
    aliases: ['open']
}