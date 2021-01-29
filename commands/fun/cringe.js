const Discord = require('discord.js');
const commando = require('discord.js-commando');

class cring extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'cringe',
            group: 'fun',
            memberName: 'cringe',
            description: 'Figure out how cringe someone is! Suggested by FaunaBoops'
        })
    }

    async run(message, args) {
        var scrubby = message.mentions.members.first(); //mentioned user as arg
        let responses = [
            scrubby + " is super fucking cringe. Cringetopia. r/TikTokCringe. Reddit cringe. They're alllllll sorts of cringe. Actually dogwater.",
            scrubby + " is pretty damn cringe. Wouldn't wanna hang out with them in public. Yeah, theyre so cringe they think its funny to call other people cringy. Thats pretty cringe.",
            scrubby + " is cringy. Cringy enough that you dont wanna always be seen with them.",
            scrubby + " isnt *that* cringy, but I would watch my back.",
            scrubby + " is...Actually not that cringe.",
            scrubby + " is pretty damn *not* cringy. They like furry stuff, thats pretty cool.",
            scrubby + " is a basic bitch. Not cringy, not NOT cringy. Just " + scrubby + ".",
            scrubby + " is decidedly *not* cringy. They like furry stuff, that makes you not cringy.",
            scrubby + " is actually super cool.",
            scrubby + " is the dictionary definition of a god."
        ];
        try {
            if(!args[2]) return message.reply("Please provide a question");
            let result = responses[Math.floor(Math.random()*(responses.length)-1)]
            message.channel.send(result);
        }
        catch {
            message.reply("An error occured, probably due to network issues. Contact anonfoxer#8098.");
        }
    }
}

module.exports = cring