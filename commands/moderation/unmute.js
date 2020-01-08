const commando = require('discord.js-commando');

class unmute extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'unmute',
            group: 'moderation',
            memberName: 'unmute',
            description: 'Unmutes a mentioned user.'
        })
    }

    async run(message, args) {
        var role = member.guild.roles.find('name', 'muted');
        var perp = message.author();
        var member = message.mentions.members.first();
        try {
            message.guild.channels.forEach(async (channel, id) => {
                await channel.overwritePermission(role, {
                    SEND_MESSAGES: false,
                    ADD_REACTIONS: false,
                });
            });
            if(member.hasPermission("MANAGE_MESSAGES")) return message.reply("You cannot mute that user!");
            if(!perp.hasPermission("ADMINISTRATOR")) return message.reply("You don't have permission!");
            member.removeRole(role);
        }
        catch(e) {
            console.log(e.stack);
        }
        }

}

module.exports = unmute