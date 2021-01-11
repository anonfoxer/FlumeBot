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
        try {
            message.channel.send(":wave: Hi there! Im Flume, developed by anonfoxer! https://github.com/anonfoxer/FlumeBot");
            message.channel.send(":wrench: Please make sure I have the following permissions:\n\n:red_circle: -Admin Privs\n:red_circle: -Manage Roles\n:red_circle: -Kick & Ban Members\n:red_circle: -Manage Messages\n:red_circle: -Create Channels");
        }
        catch {
            message.reply("An error occured, probably due to network issues. Contact anonfoxer by issuing a pull request or bug report.");
        }
    }
}

module.exports = inform
