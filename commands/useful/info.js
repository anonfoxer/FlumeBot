const Discord = require('discord.js'); //create client
const commando = require('discord.js-commando');

class inform extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'info',
            group: 'useful',
            memberName: 'info',
            description: 'Gives information about the bot!'
        })
    }

    async run(message, args) {

        const infoEmbed = new Discord.MessageEmbed()
        .setColor('#8336d6')
        .setTitle('Bot info')
        .setURL('https://github.com/anonfoxer/FlumeBot')
        .setAuthor('FlumeBot', 'https://i.imgur.com/agTGFwL.png', 'https://github.com/anonfoxer/FlumeBot')
        .setDescription('Bot information')
            .addFields(
                { name: 'What is Flume?', value: 'Flume is a small Discord bot aimed at small servers with fun and moderation in mind.' },
                { name: '\u200B', value: '\u200B' },
                { name: 'Made by', value: 'anonfoxer', inline: true },
                { name: 'Permissions needed', value: 'Admin privs, manage roles, kick & ban, attatch files.', inline: true },
            )
        try {
            message.channel.send(infoEmbed);
        }
        catch(err) {
            message.reply("An error occured, contact anonfoxer#8098. Error details: " + err);
        }
    }
}

module.exports = inform