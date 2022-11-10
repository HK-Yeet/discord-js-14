const {GatewayIntentBits, Events} = require("discord.js");
const path = require("path");
require("dotenv/config");

const CustomClient = require("./structures/CustomClient");
const client = new CustomClient({
    intents: [GatewayIntentBits.Guilds]
});

client.loadEvents(path.join(__dirname, "events"));

client.login(process.env.TOKEN);