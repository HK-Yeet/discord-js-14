const {EmbedBuilder} = require("discord.js")

class CustomEmbed extends EmbedBuilder {
    constructor(data) {
        super(data);
        this.setColor("DarkGold");
    }
}

module.exports = CustomEmbed;