const {ApplicationCommandOptionType} = require("discord.js");

module.exports = {
    name: "add",
    description: "add 2 numbers together",
    options: [{
        name: "num_1",
        description: "first number",
        type: ApplicationCommandOptionType.Number,
        required: true,
    }, {
        name: "num_2",
        description: "second number",
        type: ApplicationCommandOptionType.Number,
        required: true,
    }],
    execute: ({client, interaction}) => {
        let sum = interaction.options.getNumber("num_1") + interaction.options.getNumber("num_2");
        client.utils.replyOrEdit(interaction, `The sum is ${sum}`);
    }
}