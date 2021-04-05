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
        catch(err) {
            message.reply("An error occured, contact anonfoxer#8098. Error details: " + err);
        }
    }
}

module.exports = rip