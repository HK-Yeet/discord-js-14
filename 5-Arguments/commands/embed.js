module.exports = {
    name: "embed",
    description: "Send an embed",
    execute: ({client, interaction}) => {
        let embed = new client.utils.embed()
            .setTitle("This is an Embed!")
            .setDescription("Hello World!")
        client.utils.replyOrEdit(interaction, {embeds: [embed]});
    }
}