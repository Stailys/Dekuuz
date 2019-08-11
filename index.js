const { Client, Collection } = require('discord.js');
const client = new Client();
const config = require('./setup/config.json')

const fs = require('fs')
client.commands = new Collection()
client.aliases = new Collection()

const chalk = require('chalk')
const db = require('quick.db')

client.on("ready", () => {
  console.log(chalk.greenBright('[START]'))
      client.user.setPresence({ game: { name: 'absolutamente nada', type: 1, url: 'https://www.twitch.tv/kazutuu'} });
});

fs.readdir('./src/comandos/', (err, files) => {

    if(err) console.log(err)

    let jsfile = files.filter(f => f.split('.').pop() === 'js')
    if(jsfile.length <= 0) {
        return console.log('[Comandos] Não consegui encontrar comandos')
    }

    jsfile.forEach((f, i) => {
        let pull = require(`./src/comandos/${f}`)
        client.commands.set(pull.config.name, pull)
        pull.config.aliases.forEach(alias => {
            client.aliases.set(alias, pull.config.name)
        })
    })
})

client.on("message", async message => {
  
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;
    
    let prefixo = await db.fetch(`prefix_${message.guild.id}`)
    let prefix = (prefixo !== null) ? prefixo : 'd..'
    
    if(!message.content.startsWith(prefix)) return;

    let args = message.content.slice(prefix.length).trim().split(' ');
    let cmd = args.shift().toLowerCase();
    let msg = message;



    if (message.author.bot) return;
      if (!message.content.startsWith(prefix)) return;

      let commandFile = client.commands.find(c => c.config.name === cmd || c.config.aliases.includes(cmd))
      if (commandFile) commandFile.run(client, message, args)
})

client.login(config.token)