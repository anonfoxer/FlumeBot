const Discord = require('discord.js');
const commando = require('discord.js-commando');

class huggity extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'hug',
            group: 'actions',
            memberName: 'hug',
            description: 'Hug someone!'
        })
    }

    async run(message, args) {
        var authr = message.author;
        var scrubby = message.mentions.members.first(); //mentioned user as arg
        let responses = [
            authr.displayName + " tackles " + scrubby.displayName + " and squeezes them tight!",
            authr.displayName + " jumps on " + scrubby.displayName + " and boops them!",
            authr.displayName + " gives " + scrubby.displayName + " a hug!!",
            authr.displayName + " hugs " + scrubby.displayName + " tightly!",
            authr.displayName + " cozily hugs " + scrubby.displayName + "!",
            authr.displayName + " gives " + scrubby.displayName + " a ninja hug!"
        ];
        try {
            if(!scrubby) { //if they didnt mention throw err
                message.channel.send(authr.displayName + " gives themselves a hug!");
            }
            let result = responses[Math.floor(Math.random()*(responses.length)-1)]
            message.channel.send(result);
        }
        catch {
            message.reply("An error occured, probably due to network issues. Contact anonfoxer#8098.");
        }
    }
}

module.exports = huggity