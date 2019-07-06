const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (client,message,args) => {
    client.channels.find(c => c.id === "596754487809409067").setName(`Всего участников: ${client.guilds.get('561512048811442198').members.size}`);
    client.channels.find(c => c.id === "596754511146778624").setName(`Людей: ${bot.guilds.get('561512048811442198').members.filter(mem => !mem.user.client === true).size}`);
    client.channels.find(c => c.id === "596754545296801792").setName(`Ботов: ${bot.guilds.get('561512048811442198').members.filter(mem => mem.user.client === true).size}`);
    client.channels.find(c => c.id === "596754706399887380").setName(`В сети: ${client.guilds.get('561512048811442198').presences.size}`);
}
module.exports.help = {
    name: "ch"
};