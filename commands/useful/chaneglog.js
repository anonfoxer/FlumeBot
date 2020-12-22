const commando = require('discord.js-commando');
//const guild = message.guild; //define the guild
//const loggify = guild.channels.find(channel => channel.name === "flume-logs");

class changeLog extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'changelog',
            group: 'useful',
            memberName: 'changelog',
            description: 'View the Changelog!'
        })
    }

    async run(message, args) {
        message.channel.send(":gear: Version 2.0.0 Changelog\n - Rewrote lots of code across all parts of the bot.\n - Removed the barely functioning logging system.\n - Removed mute & unmute\n - Added &info, &kick, &cat, &rip, and &ban\n- Removed setup commands!");
        }

}

module.exports = changeLog