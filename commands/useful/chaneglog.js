const commando = require('discord.js-commando');

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
        message.channel.send(":gear: Version 2.4.3 Changelog\n - Fixed spelling for CUTTLE FISH.\n - Removed the anti pog routine as it slows down the current hardware too much. Will be renabled when i have a better server for Flume.");
        }

}

module.exports = changeLog