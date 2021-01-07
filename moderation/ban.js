const commando = require('discord.js-commando');
//const guild = message.guild; //define the guild
//const loggify = guild.channels.find(channel => channel.name === "flume-logs");

class banScrub extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'ban',
            group: 'moderation',
            memberName: 'ban',
            description: 'Bans the mentioned user from the server.'
        })
    }

    async run(message, args) {
        var target = message.mentions.members.first();
        if (message.member.hasPermission("BAN_MEMBERS")) {
            try { target.ban(); console.log("banned " + target.memberName); message.channel.sendMessage(":crossed_swords: Banned " + target.memberName + "!");}
            catch{message.reply(":warning: Failed! Either I or you do not have permission to ban " + target.memberName + "!");}
        }
    }
}
module.exports = banScrub