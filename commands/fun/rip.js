const commando = require('discord.js-commando');

class rip extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'rip',
            group: 'fun',
            memberName: 'rip',
            description: 'Kicks YOU from the server.'
        })
    }

    async run(message, args) {
        var target = message.author();
        try {
            target.kick();
        message.channel.send(":question: " + target.memberName + " just kicked themselves from the server!....rip....");
    }
        catch {
            message.reply("Ran into an error!");
        }
    }
}

module.exports = rip