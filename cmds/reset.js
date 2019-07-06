const Discord = module.require("discord.js");
const fs = require("fs");   
module.exports.run = async (client,message,args) => {
    if (message.author.id !== '386477101374504960') return;

message.channel.send('Reboot')

    .then(message => client.destroy())

    .then(() => client.login(process.env.token));

};
module.exports.help = {
    name: "reset"
};