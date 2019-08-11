const { RichEmbed } = require('discord.js')
const { BK } = require('../armazanador/color')
const { perm } = require('../armanazenador/perms')

exports.run = async (client, message, args) => {
    if(!message.member.hasPermission("ADMINISTRATOR")) {
        let permission = new RichEmbed()
        .setDescription(perm)
        .setColor(BK)
        message.channel.send(permission)
    }

    let user = message.mentions.users.first();
    if(!user) {
        let userE = new RichEmbed()
        .setDescription('Você não me informou o usuário para eu banir !')
        .setColor('BK')
        message.channel.send(userE)
        return;
    }

    let motivo = args.join(" ");
    if(!motivo) {
        let embed = new RichEmbed()
        .setDescription('Você não me informou o motivo do banimento !')
        .setColor('BK')
        message.channel.send(embed)
        return;
    }


    if(!user.bannable) {
        let BANNEBLE = new RichEmbed()
        .setDescription('Eu não posso banir este usuário !')
        .setColor(BK)
        message.channel.send(BANNEBLE)
        return;
    }

    message.guild.member(user).ban(motivo)

    let banE = new Discord.RichEmbed()
    .setAuthor('Ação | Ban')
    .setColor(BK)
    .addField('Usuário', `${user}, ID:${user.id}`)
    .addField('Motivo', motivo)
    .addField('Administrador', `${message.author}, ID: ${message.author.id}`)
    .addField("Canal:", message.channel)
    message.channel.send(banE);


    let banEM = new RichEmbed()
    .setAuthor('AÇÃO | BAN')
    .setColor(BK)
    .setDescription('Sinto muito te informar mas você foi banido do:', `${message.guild}`)
    .addField('Pela motivo:', motivo)
    .addField('Pelo ADM:', `${message.author}`)
    user.send(banEM)
}