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
        message.channel.send(":gear: Version 2.2.0 Changelog\n - Changed the requirements in &info as channel perms are no longer needed\n - Added new command group copypasta\n - Added new commnds under useful: whois and serverinfo");
        }

}

module.exports = changeLog