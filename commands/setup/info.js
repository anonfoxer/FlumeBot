const commando = require('discord.js-commando');
//const guild = message.guild; //define the guild
//const loggify = guild.channels.find(channel => channel.name === "flume-logs");

class informSetup extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'info',
            group: 'setup',
            memberName: 'info',
            description: 'Setup Information!'
        })
    }

    async run(message, args) {
        message.channel.send(":wrench: Hi there! Im Flume, developed by anonfoxer#8098!");
        message.channel.send(":wrench: Please make sure I have the following permissions:\n\n:red_circle: -Admin Privs\n:red_circle: -Manage Roles\n:red_circle: -Kick & Ban Members\n:red_circle: -Manage Messages\n:red_circle: -Create Channels");
        message.channel.send(":wrench: Make sure you have a file named ```log.txt``` inside of the folder named ```devinfo```");
        message.channel.send(":wrench: If I have all of these permissions, then run the setup command!");
        }

}

module.exports = informSetup