const commando = require('discord.js-commando');

class mute extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'mute',
            group: 'moderation',
            memberName: 'mute',
            description: 'Mutes a mentioned user.'
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
            if(member.hasPermission("MANAGE_MESSAGES")) return message.reply(":exclamation: You cannot mute that user!");
            if(!perp.hasPermission("ADMINISTRATOR")) return message.reply(":exclamation: You don't have permission!");
            member.addRole(role);//Add this role as var role
            message.channel.sendMessage(':nazar_amulet: ' + member + ' was muted! ');
        }
        catch(e) {
            console.log(e.stack);
        }
        }

}

module.exports = mute