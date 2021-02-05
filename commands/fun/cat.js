const commando = require('discord.js-commando');

class cat extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'cat',
            group: 'fun',
            memberName: 'cat',
            description: 'Repeats what you tell it to!',
            examples: ['&cat Flume is a dumb bot']
        })
    }

    async run(message, args) {
        try {
            message.delete();
            message.channel.send(message.content.slice(5, message.content.length));
        }
        catch {
            message.reply("An error occured, probably due to network issues. Contact anonfoxer#8098.");
        }
    }
}

module.exports = cat