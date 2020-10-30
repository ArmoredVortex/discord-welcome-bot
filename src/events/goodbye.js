const { MessageEmbed } = require('discord.js');
const fs = require('fs');
const config = JSON.parse(fs.readFileSync('config.json'));
module.exports = client =>{
    client.on('guildMemberRemove',member =>{
        let embed = new MessageEmbed()
        .setTitle(`${member.user.tag} ${config.messages.goodbyeMessage}`)
        .setImage(member.user.displayAvatarURL())
        let channel = member.guild.channels.cache.get(config.channels.goodbyeChannel);
        channel.send(embed);
    })
}