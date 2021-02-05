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
        var msg = "Kid behind you, Helen Keller, is that you, you're literally dogshit, look at you, packed out like your mom last night, you're literally free, so free, kids on mcdonalds wifi, look at this kid, he has no earnings, literally no pr, he's dogshit, a walking shitter, kid your iq's lower than an e-girl, go make me a sandwich, you have no talent, god this kid hes so lost, more lost than helen keller looking for her glasses, literally free, so free, *doGSHIT, SHUT THE FUCK UP, KID, YOU HAVE NO EARNINGS,* you play on a radio, you're literally free, i packed you out, kids are lost, so braindead, literally dogwater, dollar tree pc, you're dogshit, kids are free, behind you, your dad's never coming home, you're literally dogshit, look at you, literally *free*, so free, you have to play with TV sound, you're literally ass, my god, kid looks free, 0 earnings, 0 pr, 0 iq, he's literally dogshit, oh my god, say hi to jesus for me, you're literally ass";
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