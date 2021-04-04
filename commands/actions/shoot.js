const Discord = require('discord.js');
const commando = require('discord.js-commando');

class nerfguns extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'shoot',
            group: 'actions',
            memberName: 'shoot',
            description: 'Shoot someone!',
            examples: ['&shoot @flume']
        })
    }

    async run(message, args) {
        var authr = message.author.username;
        var scrubby = message.mentions.members.first(); //mentioned user as arg
        let responses = [
            authr + " takes aim at " + scrubby.displayName + " hits them square in the face with a NERF dart!",
            authr + " fumbles about, looks at " + scrubby.displayName + ", and shoots them with a NERF gun!",
            authr + " gives " + scrubby.displayName + " a NERF gun....Then shoots them with a different one!",
            authr + " sends a NERF dart flying right at " + scrubby.displayName + "!",
            authr + "'s NERF dart flies through the air, hitting " + scrubby.displayName + " right on the nose!",
        ];
        try {
            if(!scrubby) { //if they didnt mention throw err
                message.channel.send(authr + " plays Russian Roulette with a NERF gun!");
            }
            let result = responses[Math.floor(Math.random()*(responses.length)-1)]
            message.channel.send(result);
        }
        catch(err) {
            message.reply("An error occured, contact anonfoxer#8098. Error details: " + err);
        }
    }
}

module.exports = nerfguns