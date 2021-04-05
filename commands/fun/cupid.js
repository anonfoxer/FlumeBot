const Discord = require('discord.js');
const commando = require('discord.js-commando');

class cupid extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'cupid',
            group: 'fun',
            memberName: 'cupid',
            description: 'See how well you and someone might go together!',
            examples: ['&cupid @flume']
        })
    }

    async run(message, args) {
        var scrubby = message.mentions.members.first(); //mentioned user as arg
        let responses = [
            ":broken_heart: You and " + scrubby.displayName + " might as well not even bother.",
            ":broken_heart: You and " + scrubby.displayName + " would do better by moving to seperate countries and never speaking again.",
            ":broken_heart: You and " + scrubby.displayName + " might have a chance if they're blind.",
            ":white_heart: You and " + scrubby.displayName + " might work out....MIGHT.",
            ":white_heart: You and " + scrubby.displayName + " have a solid...26.4221% chance of working out. I should know. Im a computer.",
            ":question: You and " + scrubby.displayName + "...I cant say for sure. Try again.",
            ":question: You and " + scrubby.displayName + " have a fuzzy outlook. I cant say for certian.",
            ":question: You and " + scrubby.displayName + " will have a spark as long as they have a taser.",
            ":heart: You and " + scrubby.displayName + " have a candle between you. Talk more!",
            ":heartpulse: You and " + scrubby.displayName + "...I see a small bonfire. Theres some love there!",
            ":heartpulse: You and " + scrubby.displayName + " have some spark! Talk more, you might be surprised!",
            ":heartpulse: You and " + scrubby.displayName + " might as well kiss right now.",
            ":wedding: You and " + scrubby.displayName + " might as well start planning the wedding!",
            ":exclamation: You and " + scrubby.displayName + "...Wait a second youre already dating!"
        ];
        try {
            if(!scrubby) { //if they didnt mention throw err
                message.channel.send('Error: Mention a user!');
            }
            let result = responses[Math.floor(Math.random()*(responses.length)-1)]
            message.channel.send(result);
        }
        catch(err) {
            message.reply("An error occured, contact anonfoxer#8098. Error details: " + err);
        }
    }
}

module.exports = cupid