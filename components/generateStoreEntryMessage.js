const Discord = require("discord.js");

module.exports = (client, channelID) => {
    const channel = client.channels.cache.get(channelID);
    const button = new Discord.MessageActionRow()
        .addComponents(
            new Discord.MessageButton()
                .setCustomId('generateStoreEntryButton')
                .setLabel('Place an order')
                .setStyle('PRIMARY'),
        );
    channel.send({ content: "Hi, this bot is designed to automate the checkout process. Fast and simple!", components: [button] })
    console.log('StoreEntryMessage generated')
}