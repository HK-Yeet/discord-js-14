module.exports = {
    name: "ping",
    description: "Check ping of bot",
    execute: ({ client, interaction }) => {
        client.utils.replyOrEdit(interaction, `Pong! ${client.ws.ping}`)
    }
}