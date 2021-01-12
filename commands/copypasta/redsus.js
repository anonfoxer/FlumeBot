const commando = require('discord.js-commando');

class redSuuuus extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'redsus',
            group: 'copypasta',
            memberName: 'redsus',
            description: 'Red Suuuuuuus. I said, red suuuuuuuuuuuuuuuuuus!'
        })
    }

    async run(message, args) {
        var msg = "Red sus. Red suus. I said red, sus, hahahahaha. Why arent you laughing? I just made a reference to the popular video game Among Us! How can you not laugh at it? Emergency meeting! Guys, this here guy doesnt laugh at my funny Among Us memes! Lets beat him to death! Dead body reported! Skip! Skip! Vote blue! Blue was not an impostor. Among us in a nutshell hahaha. What?! You Are still not laughing your ass off? I made SEVERAL funny references to Among Us and YOU STILL ARENT LAUGHING??!!! Bruh. Ya hear that? Wo00000osh. Whats woooosh? Oh, nothing. Just the sound of a joke flying over your head. Whats that? You think im annoying? Kinda sus, bro. Hahahaha! Anyway, yea, gotta go do tasks. Hahahaha!";
        try {
            message.delete();
            message.channel.send(msg);
        }    
        catch {
            message.channel.send("An error occured, probably due to network issues or lack of permissions.");
        }
    }
}

module.exports = redSuuuus