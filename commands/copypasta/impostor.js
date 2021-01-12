const commando = require('discord.js-commando');

class eject extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'impostor',
            group: 'copypasta',
            memberName: 'impostor',
            description: 'Eject that impostor!'
        })
    }

    async run(message, args) {
        var scrubby = message.mentions.members.first(); //mentioned user as arg
        var msg = `
        . 　　　。　　　　•　 　ﾟ　　。 　　.

        　　　.　　　 　　.　　　　　。　　 。　. 　
        
        .　　 。　　　　　 ඞ 。 . 　　 • 　　　　•
        
        　　ﾟ　　 ` + scrubby + ` was not An Impostor.　 。　.
        
        　　'　　　 1 Impostor remains 　 　　。
        
        　　ﾟ　　　.　　　. ,　　　　.　 .`;
        try {
            if(!scrubby) { //if they didnt mention throw err
                message.channel.send('Error: Mention a user!');
                break;
            }
            message.delete();
            message.channel.send(msg);
        }    
        catch {
            message.channel.send("An error occured, probably due to network issues or lack of permissions.");
        }
    }
}

module.exports = eject