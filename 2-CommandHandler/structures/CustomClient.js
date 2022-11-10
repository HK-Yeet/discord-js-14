const {Client, Collection} = require("discord.js");
const Utils = require("./Utils");

class CustomClient extends Client {
    constructor(data) {
        super(data);
        this._utils = new Utils(this);
        this._commands = new Collection();
    }

    get utils() {
        return this._utils;
    }

    get commands() {
        return this._commands;
    }

    loadCommands(dir) {
        let files = this._utils.getAllFiles(dir);
        for (let file of files) {
            let cmd = require(file);
            let {name, description, execute} = cmd;

            if (!name) {
                throw new Error(`${file} has no command name`);
            }
            if (!description) {
                throw new Error(`${name} has no description`);
            }
            if (!execute) {
                throw new Error(`${name} has no executable`);
            }
            this._commands.set(name,cmd);
        }
        this.application.commands.set([...this._commands.values()])
    }
}

module.exports = CustomClient;