const Discord = require('discord.js'); //create client
const commando = require('discord.js-commando');

class serverInfo extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'serverinfo',
            group: 'useful',
            memberName: 'serverinfo',
            description: 'Gives information about the server the command is run in!'
        })
    }

    async run(message, args) {
        const guild = message.guild; //define the guild
        const name = guild.name; // Server Name
        const region = guild.region; // Server Region
        const level = guild.verificationLevel; // Server Moderation Level
        const defrole = guild.defaultRole; // Default Server Role
        const time = guild.createdAt; // Server start Date
        const id = guild.id; // Server ID
        const afk = guild.afkChannel; // Server AFK channel ID
        const count = guild.memberCount; // Server member count.

        //var infoMessage = ":gear: Server Name: " + name + "\n:gear: Server Owner: " + owner + "\n:gear: Server Region: " + region + "\n:gear: Server Moderation Level: " + level + "\n:gear: Default Role: " + defrole + "\n:gear: Created at: " + time + "\n:gear: Server ID: " + id + "\n:gear: AFK Channel: " + afk + "\n:gear: Server Icon: " + url.iconURL + "\n:gear: Member Count (Bot Inclusive): " + count;

        const infoEmbed = new Discord.MessageEmbed()
            .setColor('#8336d6')
	        .setTitle('Server Info')
	        .setURL('https://github.com/anonfoxer/FlumeBot')
            .setAuthor('FlumeBot', 'https://i.imgur.com/agTGFwL.png', 'https://github.com/anonfoxer/FlumeBot')
	        .setDescription('Info of ' + name)
	        .addFields(
		        { name: 'Server Name', value: name },
		        { name: '\u200B', value: '\u200B' },
                { name: 'Server ID', value: id, inline: true },
                { name: 'Server Region', value: region, inline: true },
                { name: 'Verification Level', value: level, inline: true },
                { name: 'Default Role', value: defrole, inline: true },
                { name: 'Created at', value: time, inline: true },
                { name: 'AFK Channel', value: afk, inline: true },
                { name: 'Member Count (Bot Inclusive)', value: count, inline: true },
	        )
	        .setTimestamp()
	        .setFooter('Flume - The worst thing to happen to Discord', 'https://i.imgur.com/agTGFwL.png'); 
        try {
            message.channel.send(infoEmbed);
        }
        catch(err) {
            message.reply("An error occured, contact anonfoxer#8098. Error details: " + err);
        }
    }
}

module.exports = serverInfo