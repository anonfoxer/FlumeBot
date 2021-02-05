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
        message.channel.send(":gear: Version 2.3.2 Changelog\n - Fixed purge, cringe, and all action commands\n - Updated dogwater");
        }

}

module.exports = changeLog