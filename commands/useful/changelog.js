const commando = require('discord.js-commando');
//const guild = message.guild; //define the guild
//const loggify = guild.channels.find(channel => channel.name === "flume-logs");

class informSetup extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'changelog',
            group: 'useful',
            memberName: 'changelog',
            description: 'View the Changelog!'
        })
    }

    async run(message, args) {
        message.channel.send(":gear: Version 0.1.5 Changelog\n - Added changelog comnmand\n - added getlog command\n - Improved descriptions in the info command\n - Added functional global logging! Expect bugs and for them to be cleaned up!");
        }

}

module.exports = informSetup