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
        message.channel.send(":gear: Version 2.2.5 Changelog\n - Fixed &serverinfo\n - Added &cupid and &suggest\n - Added nice emojis to everything");
        }

}

module.exports = changeLog