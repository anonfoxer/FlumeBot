const commando = require('discord.js-commando');
const Discord = require('discord.js'); //create client

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

        const whoIsEmbed = new Discord.MessageEmbed()
            .setColor('#8336d6')
            .setTitle('Who is')
            .setURL('https://github.com/anonfoxer/FlumeBot')
            .setAuthor('FlumeBot', 'https://i.imgur.com/agTGFwL.png', 'https://github.com/anonfoxer/FlumeBot')
            .setDescription('Results of a whois search on ' + scrubby.displayName)
            .addFields(
                { name:'Account Created',value: create},
                { name:'Server joined at',value: join},
                { name:'UID',value: id},
            )
            message.channel.send(whoIsEmbed);
    }
        catch(err) {
            message.reply("An error occured, contact anonfoxer#8098. Error details: " + err);
        }
    }
}
module.exports = whois;