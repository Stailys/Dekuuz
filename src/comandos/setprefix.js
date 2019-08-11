const { RichEmbed } = require('discord.js')
const { V } = require('../armazanador/color')
const { perm } = require('../armazanador/perms')

const db = require('quick.db')

exports.run = async (client, message, args) => {
    if(!message.member.hasPermission("ADMINISTRATOR")) {
        let embed = new RichEmbed()
        .setDescription(perm)
        .setColor(V)
        message.channel.send(embed)
        return;
    }

    if(!args[0]) {
        let ar = new RichEmbed()
        .setDescription('Use este comando para mudar o prefixo do bot => ```d..setprefix <Novo prefixo>')
        .setColor(V)
        message.channel.send(ar)
        return;
    }

    db.set(`prefix_${message.guild.id}`, args[0])
    let argus = new RichEmbed()
    .setDescription('Prefixo alterado com sucesso para ' + `${args[0]}`)
    .setColor(V)
    message.channel.send(argus)

}

exports.config = {
    name: 'setprefix',
    aliases: ['stx']
}