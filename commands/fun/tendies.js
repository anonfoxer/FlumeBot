const commando = require('discord.js-commando');
const guild = message.guild; //define the guild
const loggify = guild.channels.find(channel => channel.name === "flume-logs");

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
        message.channel.sendMessage('', {files: ["./images/tendies.png"]});
        }

}

module.exports = tendies