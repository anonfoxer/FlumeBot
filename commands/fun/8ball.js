const Discord = require('discord.js');
const commando = require('discord.js-commando');

class eBall extends commando.Command {
    constructor(client) {
        super(client, {
            name: '8ball',
            group: 'fun',
            memberName: '8ball',
            description: 'Get a fortune from the beyond!',
            examples: ['&8ball Am I cool']
        })
    }

    async run(message, args) {
        let responses = [
            ":8ball: It is certain",
            ":8ball: It is decidedly so",
            ":8ball: Without a doubt",
            ":8ball: No – definitely",
            ":8ball: I would leave Earth now.",
            ":8ball: Perhaps",
            ":8ball: Outlook uncertian, try again",
            ":8ball: Outlook poor",
            ":8ball: Outlook good",
            ":8ball: Outlook catastrophic",
            ":8ball: You'd have more luck trying to eat a pinecone",
            ":8ball: I would fear tomorrow if I were you",
            ":8ball: Start running",
            ":8ball: Start celebrating now",
            ":8ball: Yes - Definitely",
            ":8ball: Absolutely",
            ":8ball: Outlook euphoric",
            ":8ball: Outlook misty"
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

module.exports = eBall