const cron = require("node-cron");

module.exports = (client) => {
    // second, minute, hour, day of month, month, day of week
    let schedule = "0 */10 * * * *";
    if (cron.validate(schedule)) {
        cron.schedule(schedule, () => {
            let channel = client.channels.cache.get("1234567890");
            if (!channel) return;
            let {guild} = channel;
            channel.setName(`${guild.memberCount} Members`);
        });
    } else {
        client.utils.log("error", "Not valid schedule");
    }
}