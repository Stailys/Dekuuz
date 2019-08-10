const { RichEmbed } = require('discord.js')
const { A_B } = require('../armazanador/color')

exports.run = async (client, message, args) => {
    let em = new RichEmbed()
    .setDescription('OIIIEEEEE')
    .setColor(A_B)
    message.channel.send(em)
}

exports.config = {
    name: "embed",
    aliases: ['em']
}