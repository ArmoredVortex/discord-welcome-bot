const { MessageEmbed } = require('discord.js');
const fs = require('fs');
const config = JSON.parse(fs.readFileSync('config.json'));
module.exports = client =>{
    client.on('guildMemberAdd',member=>{
        let embed = new MessageEmbed()
        .setTitle(`${member.user.tag} ${config.messages.welcomeMessage}`)
        .setImage(member.user.displayAvatarURL())
        let channel = member.guild.channels.cache.get(config.channels.welcomeChannel);
        channel.send(embed);
    })
}