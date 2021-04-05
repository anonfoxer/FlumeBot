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
        message.channel.send(':gear: They made their account: ' + create);
        message.channel.send(':gear: They joined the server: ' + join);
        message.channel.send(':gear: Their User ID: ' + id);
        }
        catch(err) {
            message.reply("An error occured, contact anonfoxer#8098. Error details: " + err);
        }
    }
}
module.exports = whois;