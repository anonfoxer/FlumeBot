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
        message.channel.send(":gear: Version 2.3.1 Changelog\n - Changed class names for certian commands, surprised it worked at all without me doing this.\n - added &based, &dogwater, &purge, and &cringe (thanks to FaunaBoops for the suggestion of the last one.)\n - Added command group actions as well as some starter commands for there.");
        }

}

module.exports = changeLog