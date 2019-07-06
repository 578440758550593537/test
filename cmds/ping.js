const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (client,message,args) => {
    const embed = new Discord.RichEmbed()
    .setColor("#050505")
    .addField("⏲ | ping", `**${client.ping}** ms`, true)
    message.channel.send(embed);
};
module.exports.help = {
    name: "ping"
};