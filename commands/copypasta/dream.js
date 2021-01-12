const commando = require('discord.js-commando');

class redditors extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'dream',
            group: 'copypasta',
            memberName: 'dream',
            description: 'DREAM I NEED CLOUT'
        })
    }

    async run(message, args) {  
        var msg = "DREAM!! DREAM!! Hello!!! Do your shoes need shining? Dream, Dream please! Do you need coffee? Come back! PLEASE my clout! Don't go away from me! Dream please!";
        try {
            message.delete();
            message.channel.send(msg);
        }
        catch {
            message.channel.send("An error occured, probably due to network issues or lack of permissions.");
        }
    }
}

module.exports = redditors