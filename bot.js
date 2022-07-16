require('dotenv').config();
const Discord = require("discord.js");
const commands = require('./controllers/commands');

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"
    ]
})

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`);
})

client.on('interactionCreate', interaction => {
    if (interaction.isCommand()) {
        commands(client, interaction)
    };
});

client.login(process.env.TOKEN)