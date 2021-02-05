const Discord = require('discord.js');
const commando = require('discord.js-commando');

class booper extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'boop',
            group: 'actions',
            memberName: 'boop',
            description: 'Boop someone!',
            examples: ['&boop @flume']
        })
    }

    async run(message, args) {
        var authr = message.author.username;
        var scrubby = message.mentions.members.first(); //mentioned user as arg
        let responses = [
            authr + " runs up to " + scrubby.displayName + " and taps them on the nose!",
            authr + " jumps on " + scrubby.displayName + " and boops them!",
            authr + " gives " + scrubby.displayName + " a quick boop!",
            authr + " boops " + scrubby.displayName + "!",
            authr + " leaps acros the room to " + scrubby.displayName + " and lets loose a barrage of boops!",
            authr + " gives " + scrubby.displayName + " a ninja boop!"
        ];
        try {
            if(!scrubby) { //if they didnt mention throw err
                message.channel.send(authr + " stands there and boops themselves?");
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