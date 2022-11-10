const {ApplicationCommandOptionType} = require("discord.js");

module.exports = {
    name: "say",
    description: "make me say something",
    options: [{
        name: "message",
        description: "thing to say",
        type: ApplicationCommandOptionType.String,
        required: true,
    }],
    execute: ({client, interaction}) => {
        let message = interaction.options.getString("message");
        client.utils.replyOrEdit(interaction, message);
    }
}