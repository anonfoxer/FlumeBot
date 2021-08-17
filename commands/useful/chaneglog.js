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
        message.channel.send(":gear: Version 2.5.0 Changelog\n - Added &shark\n - Added &hamster\n - Added Mordhau commands category\n - Added &badbuild");
        }

}

module.exports = changeLog
