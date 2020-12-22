const commando = require('discord.js-commando');
//const guild = message.guild; //define the guild
//const loggify = guild.channels.find(channel => channel.name === "flume-logs");

class cat extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'cat',
            group: 'fun',
            memberName: 'cat',
            description: 'Repeats what you tell it to!'
        })
    }

    async run(message, args) {
        message.delete();
        message.channel.send(message.content.slice(5, message.content.length));
        }

}

module.exports = cat