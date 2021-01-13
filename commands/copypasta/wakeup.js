const commando = require('discord.js-commando');

class redditors extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'wakeup',
            group: 'copypasta',
            memberName: 'wakeup',
            description: 'a fantasy world from which they could not wake up'
        })
    }

    async run(message, args) {  
        var msg = "It has been reported that some victims of torture, during the act, would retreat into a fantasy world from which they could not wake up. In this catatonic state, the victim lived in a world just like their normal one, except they weren’t being tortured. The only way that they realized they needed to wake up was a note they found in their fantasy world. It would tell them about their condition, and tell them to wake up. Even then, it would often take months until they were ready to discard their fantasy world and please wake up.";
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