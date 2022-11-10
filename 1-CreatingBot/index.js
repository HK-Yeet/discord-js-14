const {Client, GatewayIntentBits, Events} = require("discord.js");
require("dotenv/config");

const Utils = require("./structures/Utils");

const client = new Client({
    intents: [GatewayIntentBits.Guilds]
});
client.utils = new Utils(client);

client.on(Events.ClientReady, () => {
    client.utils.log("ready", `Logged in as ${client.user.tag}`)
})

client.on(Events.InteractionCreate, async (interaction) => {
    if (interaction.isChatInputCommand()) {
        const name = interaction.commandName;
        if (name === "ping") {
            await client.utils.replyOrEdit(interaction, `Pong ${client.ws.ping}`);
        }
    }
})

client.login(process.env.TOKEN);