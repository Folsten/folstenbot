const Discord = require("discord.js");

module.exports = (client, channelId) => {
    const channel = client.channels.cache.get(channelId);
    const button = new Discord.MessageActionRow()
        .addComponents(
            new Discord.MessageButton()
                .setCustomId('generateStoreEntryButton')
                .setLabel('Place an order')
                .setStyle('PRIMARY')
        );
    return ({ content: "Hi, this bot is designed to automate the checkout process. Fast and simple!", components: [button] })
}