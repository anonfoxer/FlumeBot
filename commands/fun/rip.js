const commando = require('discord.js-commando');
//const guild = message.guild; //define the guild
//const loggify = guild.channels.find(channel => channel.name === "flume-logs");

class rip extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'rip',
            group: 'fun',
            memberName: 'rip',
            description: 'Kicks YOU from the server.'
        })
    }

    async run(message, args) {
        var target = message.author();
        target.kick();
        message.channel.send(":question: " + target.memberName + " just kicked themselves from the server!....rip....")
        }

}

module.exports = rip