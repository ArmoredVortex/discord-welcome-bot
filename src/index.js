const Discord = require('discord.js');
require('dotenv').config();
const client = new Discord.Client();
const token = process.env.BOT_TOKEN ;
const welcome = require('./events/welcome');
const goodbye = require('./events/goodbye');

client.on('ready',()=>{
    console.log(`Logged in as ${client.user.tag}`);
    welcome(client);
    goodbye(client);
})

client.login(token);