require('dotenv').config();
const Discord = require("discord.js");
const generateStoreEntryMessage = require('./components/generateStoreEntryMessage.js');

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"
    ]
})

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`)
    generateStoreEntryMessage(client, '992434513496002671')
})

client.on('interactionCreate', interaction => {
	// if (!interaction.isButton()) return;
	console.log(interaction);
});

client.login(process.env.TOKEN)