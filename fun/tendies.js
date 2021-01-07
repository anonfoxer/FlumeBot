const commando = require('discord.js-commando');
//const guild = message.guild; //define the guild
//const loggify = guild.channels.find(channel => channel.name === "flume-logs");

class tendies extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'tendies',
            group: 'fun',
            memberName: 'tendies',
            description: 'Sends Tendies!'
        })
    }

    async run(message, args) {
        try {
            message.delete();
            message.channel.sendMessage('', {files: ["./images/tendies.png"]});
        }
        catch {
            message.reply("Failed to send image, probably due to lack of permissions.");
        }
    }

}

module.exports = tendies