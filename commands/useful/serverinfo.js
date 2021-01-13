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
        const name = guild.name;
        const owner = guild.owner;
        const region = guild.region;
        const level = guild.verificationLevel;
        const defrole = guild.defaultRole;
        const time = guild.createdAt;
        const id = guild.id;
        const afk = guild.afkChannel;
        const url = guild.iconURL;
        const count = guild.memberCount;

        var infoMessage = "Server Name: " + name + "\nServer Owner: " + owner + "\nServer Region: " + region + "\nServer Moderation Level: " + level + "\nDefault Role: " + defrole + "\nCreated at: " + time + "\nServer ID: " + id + "\nAFK Channel: " + afk + "\nServer Icon: " + url + "\nMember Count (Bot Inclusive): " + count;
        /* const guild = message.guild; //define the guild
        const name = guild.name;
        const owner = guild.owner;
        const region = guild.region;
        const level = guild.verificationLevel;
        const defrole = guild.defaultRole;
        const time = guild.createdAt;
        const id = guild.id;
        const afk = guild.afkChannel;
        const url = guild.iconURL;
        const count = guild.memberCount;
        const infoEmbed = new Discord.MessageEmbed()
            .setColor('#34eb95')
	        .setTitle('Server Info')
	        .setURL('https://github.com/anonfoxer/FlumeBot')
            .setAuthor('Server Info Grab', 'https://i.imgur.com/agTGFwL.png', 'https://github.com/anonfoxer/FlumeBot')
	        .setDescription('Info of currently requesting server')
	        .setThumbnail('https://i.imgur.com/VH3jv7d.jpg')
	        .addFields(
		        { name: 'Server Name', value: name },
		        { name: '\u200B', value: '\u200B' },
                { name: 'Owner', value: owner, inline: true },
                { name: 'Server ID', value: id, inline: true },
                { name: 'Server Region', value: region, inline: true },
                { name: 'Verification Level', value: level, inline: true },
                { name: 'Default Role', value: defrole, inline: true },
                { name: 'Created at', value: time, inline: true },
                { name: 'AFK Channel', value: afk, inline: true },
                { name: 'Server Image', value: url, inline: true },  I WILL GET THIS TO WORK SOMEDAY
                { name: 'Member Count Inclusive', value: count, inline: true },

	        )
	        .setImage('https://i.imgur.com/VH3jv7d.jpg')
	        .setTimestamp()
	        .setFooter('Flume - The worst thing to happen to Discord', 'https://i.imgur.com/agTGFwL.png'); */ 
        try {
            message.channel.send(infoMessage);
        }
        catch {
            message.reply("An error occured, probably due to network issues or lack of permissions.");
        }
    }
}

module.exports = serverInfo