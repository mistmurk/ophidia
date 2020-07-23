require('dotenv').config()

const fs = require('fs');
const Discord = require('discord.js');

const messages = require('./messages.js')
const config = require('./config/config.json')

// Initialize client
const client = new Discord.Client();

// Wait for client to be ready
client.once('ready', () => {
  console.log('Ready!');
});

// Handle messages
client.on('message', message => messages(client, message));

client.login(process.env.DISCORD_TOKEN);
