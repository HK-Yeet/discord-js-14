const chalk = require("chalk");

class Utils {
    _client;

    constructor(client) {
        this._client = client;
    }

    async replyOrEdit(interaction, ...data) {
        if (interaction.replied || interaction.deferred) {
            return interaction.editReply(...data);
        } else {
            return interaction.reply(...data)
        }
    }

    log(type, message){
        let out = "";
        switch (type) {
            case "ready":
                out += chalk.green("[READY]");
                break;
            case "error":
                out += chalk.red("[ERROR]");
                break;
            default:
                out += "[INFO]";
        }

        out += ` ${message}`;
        console.log(out);
    }
}

module.exports = Utils;