const { RichEmbed } = require('discord.js')
const { VR } = require('../armazanador/color') 
const { perm } = require('../armazanador/perms')

exports.run = async (client, message, args) => {
    if(!message.member.hasPermission("MANAGE_SERVER")) {
        let pemr = new RichEmbed()
        .setDescription(perm)
        .setColor(VR)
        message.channel.send(pemr)
        return;
    }


    if(args[0] == 'owner-1') {
        let embed = new RichEmbed()
        .setDescription('Meu primeiro ``owner`` é o  => ' + `<@569328425186230283>`)
        .setColor(VR)
        message.channel.send(embed)
    }

    if(args[0] == 'owner-2') {
        let embed2 = new RichEmbed()
        .setDescription('Meu segundo ``owner`` é o  => ' + `<@317696183772643329>`)
        .setColor(VR)
        message.channel.send(embed2)  
    }

    let FRASE_COM_IMPACTO = 'Eu tenho varios ``OWNERS``, não sou ADVINHA KARALHO!!! '

    let embed3 = new RichEmbed()
    .setDescription(FRASE_COM_IMPACTO + '\n\nBrincadeira kkkk, use ``d..owner <1`` , 2>')
    .setColor(VR)
    message.channel.send(embed3)
}

exports.config = {
    name: 'const',
    aliases: ['C']
}