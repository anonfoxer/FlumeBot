const commando = require('discord.js-commando');
const Discord = require('discord.js'); //create client

class changeLog extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'changelog',
            group: 'useful',
            memberName: 'changelog',
            description: 'View the Changelog!'
        })
    }

    async run(message, args) {

        const changelogEmbed = new Discord.MessageEmbed()
            .setColor('#8336d6')
            .setTitle('Changelog')
            .setURL('https://github.com/anonfoxer/FlumeBot')
            .setAuthor('FlumeBot', 'https://i.imgur.com/agTGFwL.png', 'https://github.com/anonfoxer/FlumeBot')
            .setDescription('Changelog for v2.5.1.2')
            .setThumbnail('https://i.imgur.com/VH3jv7d.jpg')
            .addFields(
                { name: 'Changes in v2.5.1.2', value: 'Changed up the &info command for 3.0 (2.5.1.1)\nFixed a rare crash when a user joins a server.' },
            )


        message.channel.send(changelogEmbed);
        }

}

module.exports = changeLog
