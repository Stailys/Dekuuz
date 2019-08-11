const { RichEmbed } = require('discord.js')
const { R } = require('../armazanador/color')
const { perm } = require('../armazanador/perms')

exports.run = async (client, message, args) => {
    if(!message.member.hasPermission("ADMINISTRATOR")) {
        let embed = new RichEmbed()
        .setDescription(perm)
        .setColor(R)
        message.channel.send(embed)
        return;
    }

    let role = message.guild.roles.find(role => role.id === message.guild.id)
    message.channel.overwritePermissions(role, { SEND_MESSAGES: false})
    let deucerto = new RichEmbed()
    .setDescription('O chat foi bloqueado com sucesso !')
    .setColor(R)
    message.channel.send(deucerto)
}

exports.config = {
    name: 'lock',
    aliases: []
}