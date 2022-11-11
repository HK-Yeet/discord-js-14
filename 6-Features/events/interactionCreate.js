module.exports = (client, interaction) => {
    if (interaction.isChatInputCommand()) {
        let command = client.commands.get(interaction.commandName);
        if (!command) return;
        else {
            try {
                command.execute({client, interaction});
            } catch (e) {
                client.utils.log("error", e);
            }
        }
    }
}