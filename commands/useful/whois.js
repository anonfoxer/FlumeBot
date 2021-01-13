const commando = require('discord.js-commando');

class whois extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'whois',
            group: 'useful',
            memberName: 'whois',
            description: 'Retrieves info about mentioned user!'
        });
    }

    async run(message, args) {
        try {
        var scrubby = message.mentions.members.first(); //mentioned user as arg
        if(!scrubby) { //if they didnt mention throw err
            message.channel.send('Error: Mention a user!');
        }
        const create = scrubby.user.createdAt;
        const join = scrubby.joinedAt;
        const id = scrubby.id;
        message.channel.send('They made their account: ' + create);
        message.channel.send('They joined the server: ' + join);
        message.channel.send('Their User ID: ' + id);
        }
        catch {
        message.channel.send("An error occured, probably due to network issues or lack of permissions.")
        }
    }
}
module.exports = whois;