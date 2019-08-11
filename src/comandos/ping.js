const { P } = require("discord.js")

exports.run = async (client, message, args) => {
    let data_atual = Date.now();
    let heartbeat = (data_atual - message.createdTimestamp);

    const m = await message.channel.send("Calculando...");
    let latency = Math.round(m.createdTimestamp - message.createdTimestamp);

    let api_latency = Math.round(client.ping);

    let msg = ":ping_pong: Pong!";
    msg += "\nLatency » `" + latency + "ms`";
    msg += "\nHeartbeat » `" + heartbeat + "ms`";
    msg += "\nAPI Latency » `" + api_latency + "ms`";
    let e = new Discord.RichEmbed()
    .setDescription(msg)
    .setColor(P);

m.edit(e);

}