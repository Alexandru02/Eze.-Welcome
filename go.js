const Discord = require('discord.js');
const client = new Discord.Client();
const settings = require('./settings.json');
const chalk = require('chalk');
const fs = require('fs');
const moment = require('moment');
require('./util/eventLoader')(client);

const log = message => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${message}`);
};

client.on("ready", () => {
  console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`); 
   client.user.setStatus("dnd");
  client.user.setGame(`in ${client.guilds.size} servere | -help`);
});


client.on('message', msg => {
  if (msg.content === 'Buna') {
    msg.reply('Hey,esti bine?');
  }
});
