const { RichEmbed } = require('discord.js')
const { P } = require('../armazanador/color')
const { perm } = require('../armazanador/perms')

module.exports.run = async (client, message, args) => {
    if(!message.member.hasPermission("ADMINISTRATOR")) {
        let embed = new RichEmbed() 
        .setDescription(perm)
        .setColor(P)
        message.channel.send(embed)
    }
    if(args[0] === "help"){
        let embed = new RichEmbed()
        .setDescription('Use este comando para limpar mensagens do chat !')
        .setColor(P)
        .addFiel('Use: ', `d..clear < 2 a 100>`)

        message.channel.send(embed)
        return;
    }


    message.delete()

    
  if(!args[0]) {
      let embed1 = new RichEmbed()
      .setDescription('Forneça um número de 2 a 100 !')
      .setColor(P)
      message.channel.send(embed1)
      return;
  }
  message.channel.bulkDelete(args[0]).then(() => {
    let deletou = new RichEmbed()
    .setColor(P)
    .setDescription(`**__Foram Deletadas ${args[0]} mensagens.__**`)
    message.channel.send(deletou).then(msg => msg.delete(2000))
    });
}

exports.config = {
    name: 'clear',
    aliases: ['C', 'cls']
}