const Discord = require('discord.js');
const commando = require('discord.js-commando');

class booper extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'boop',
            group: 'actions',
            memberName: 'boop',
            description: 'Boop someone!'
        })
    }

    async run(message, args) {
        var authr = message.author;
        var scrubby = message.mentions.members.first(); //mentioned user as arg
        let responses = [
            authr.displayName + " runs up to " + scrubby.displayName + " and taps them on the nose!",
            authr.displayName + " jumps on " + scrubby.displayName + " and boops them!",
            authr.displayName + " gives " + scrubby.displayName + " a quick boop!",
            authr.displayName + " boops " + scrubby.displayName + "!",
            authr.displayName + " leaps acros the room to " + scrubby.displayName + " and lets loose a barrage of boops!",
            authr.displayName + " gives " + scrubby.displayName + " a ninja boop!"
        ];
        try {
            if(!scrubby) { //if they didnt mention throw err
                message.channel.send(authr.displayName + " stands there and boops themselves?");
            }
            let result = responses[Math.floor(Math.random()*(responses.length)-1)]
            message.channel.send(result);
        }
        catch {
            message.reply("An error occured, probably due to network issues. Contact anonfoxer#8098.");
        }
    }
}

module.exports = booper