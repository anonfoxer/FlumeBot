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
        message.channel.send(":gear: Version 2.4.0 Changelog\n - Added aminal command group, out of fitting a request for Turtl.");
        }

}

module.exports = changeLog