const generateStoreEntryMessage = require('../components/generateStoreEntryMessage');

module.exports = async (client, interaction) => {
    if (interaction.commandName == 'generatestore' && interaction.user.id == '863204836236460033') {
        interaction.reply(generateStoreEntryMessage(client, '992434513496002671'))
    }
}