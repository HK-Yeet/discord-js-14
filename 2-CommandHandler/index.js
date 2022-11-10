const {GatewayIntentBits, Events} = require("discord.js");
const path = require("path");
require("dotenv/config");

const CustomClient = require("./structures/CustomClient");
const client = new CustomClient({
    intents: [GatewayIntentBits.Guilds]
});

client.on(Events.ClientReady, () => {
    client.utils.log("ready", `Logged in as ${client.user.tag}`)
    client.loadCommands(path.join(__dirname, "commands"));
})

client.on(Events.InteractionCreate, async (interaction) => {
    if (interaction.isChatInputCommand()) {
        let command = client.commands.get(interaction.commandName);
        console.log(command)
        if (!command) return;
        else {
            try {
                command.execute({client, interaction});
            } catch (e) {
                client.utils.log("error", e.message);
            }
        }
    }
})

client.login(process.env.TOKEN);