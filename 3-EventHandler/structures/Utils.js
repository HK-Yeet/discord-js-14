const chalk = require("chalk");
const fs = require("fs");
const path = require("path");
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

    log(type, message) {
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

    getAllFiles(dir) {
        let rawFiles = fs.readdirSync(dir, {withFileTypes: true});
        let files = [];

        for(let file of rawFiles){
            if(file.isDirectory()){
                files = [...files, ...this.getAllFiles(path.join(dir, file.name))];
            } else {
                files.push(path.join(dir, file.name));
            }
        }
        return files;
    }
}

module.exports = Utils;