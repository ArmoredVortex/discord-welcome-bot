const Discord = require('discord.js');
const goodbye = require('./events/goodbye');
require('dotenv').config();
const client = new Discord.Client();
const token = process.env.BOT_TOKEN ;
const welcome = require('./events/welcome')

client.on('ready',()=>{
    console.log(`Logged in as ${client.user.tag}`);
    welcome(client);
    goodbye(client);
})

client.login(token);