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
        message.channel.send(":gear: Version 2.2.2 Changelog\n - Fixed &impostor and &serverinfo (the lazy way)\n - Added more copypastas\n");
        }

}

module.exports = changeLog
