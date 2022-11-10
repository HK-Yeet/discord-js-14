const path = require("path");

module.exports = {
    name: "attachment",
    description: "Send an image",
    execute: async ({client, interaction}) => {
        await interaction.deferReply();
        await client.utils.replyOrEdit(interaction, {files: [path.join(__dirname, "..", "data", "meme.png")]});
    }
}