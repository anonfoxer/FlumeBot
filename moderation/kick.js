const commando = require('discord.js-commando');
//const guild = message.guild; //define the guild
//const loggify = guild.channels.find(channel => channel.name === "flume-logs");

class kickScrub extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'kick',
            group: 'moderation',
            memberName: 'kick',
            description: 'Kicks the mentioned user from the server.'
        })
    }

    async run(message, args) {
        var target = message.mentions.members.first();
        if (message.member.hasPermission("KICK_MEMBERS")) {
            try { target.kick(); console.log("kicked " + target.memberName); message.channel.sendMessage(":crossed_swords: Kicked " + target.memberName + "!");}
            catch{message.reply(":warning: Failed! Either I or you do not have permission to kick " + target.memberName + "!");}
        }
    }
}
module.exports = kickScrub