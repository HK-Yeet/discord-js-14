const path = require("path");

module.exports = (client) => {
    client.utils.log("ready", `Logged in as ${client.user.tag}`)
    client.loadCommands(path.join(__dirname, "..", "commands"));
}