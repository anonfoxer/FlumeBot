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
            .setDescription('Changelog for v2.5.2')
            .setThumbnail('https://i.imgur.com/VH3jv7d.jpg')
            .addFields(
                { name: 'Changes in v2.5.2', value: 'Changed descriptions for Mordhau command embeds.\nAdded the ability for the bot to tease you for editing a message. (Thank you DriftingNitro)\nFixed a rare crash\nAdded a new strat to &haustrat' },
            )


        message.channel.send(changelogEmbed);
        }

}

module.exports = changeLog
