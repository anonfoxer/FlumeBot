const commando = require('discord.js-commando');

class freeSoFree extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'dogwater',
            group: 'copypasta',
            memberName: 'dogwater',
            description: 'Youre free, literally so free.'
        })
    }

    async run(message, args) {  
        var msg = "Youre literally free, boxed you, dogwater, 0 earns, 0 PR, you have no earnings, no wage earning, youre free, literally so free, freer than a free sample at costco, youre dogwater, literally so dog, these kids are so free, halotimmy, shut the fuck up, and quit crying, shouldnt you be playing roblox, you 0 earn 0 awareness walking piece of shit, obviously you cant win a game, maybe you should be watching bob the builder, to work on your mechanics, dogshit, youre lost like a console player trying to play n1.";
        try {
            message.delete();
            message.channel.send(msg);
        }
        catch {
            message.channel.send("An error occured, probably due to network issues or lack of permissions.");
        }
    }
}

module.exports = freeSoFree