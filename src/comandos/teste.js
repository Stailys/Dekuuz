const Discord = require('discord.js')

exports.run = async (bot, message, args) => {
    message.channel.send('TA')
}

exports.config = {
    name: 'teste',
    aliases: ['T']
    }
    