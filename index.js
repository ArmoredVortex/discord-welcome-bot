const Discord = require('discord.js');
const fs = require('fs');
const config = JSON.parse(fs.readFileSync('config.json'));
require('dotenv').config();
const client = new Discord.Client();
const token = process.env.BOT_TOKEN ;

client.on('ready',()=>{
    console.log(`Logged in as ${client.user.tag}`);
})
client.on('guildMemberAdd',member=>{
    let embed = new Discord.MessageEmbed()
    .setTitle(`${member.user.tag} ${config.messages.welcomeMessage}`)
    .setImage(member.user.displayAvatarURL())
    let channel = member.guild.channels.cache.get(config.channels.welcomeChannel);
    channel.send(embed);
})
client.on('guildMemberRemove',member =>{
    let embed = new MessageEmbed()
    .setTitle(`${member.user.tag} ${config.messages.goodbyeMessage}`)
    .setImage(member.user.displayAvatarURL())
    let channel = member.guild.channels.cache.get(config.channels.goodbyeChannel);
    channel.send(embed);
})
client.login(token);