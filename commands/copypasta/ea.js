const commando = require('discord.js-commando');

class redditors extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'ea',
            group: 'copypasta',
            memberName: 'ea',
            description: 'The intent is to provide players with a sense of pride and accomplishment for unlocking different heroes.'
        })
    }

    async run(message, args) {  
        var msg = "The intent is to provide players with a sense of pride and accomplishment for unlocking different heroes.\nAs for cost we selected initial values based upon data from the Open Beta and other adjustments made to milestone rewards before launch.  Among other things, we are looking at average per player credit earn rates on a daily basis and we'll be making constant adjustments to ensure that players have challenges that are compelling, rewarding, and of course attainable via gameplay.\nWe appreciate the candid feedback and the passion the community has put forth around the current topics here on Reddit our forums and across numerous social media outlets.\nOur team will continue to make changes and monitor community feedback and update everyone as soon and as often as we can.";
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