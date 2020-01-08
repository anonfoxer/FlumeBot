const commando = require('discord.js-commando');

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
        message.channel.send("Hi there! Im Flume, developed by anonfoxer#8098!");
        message.channel.send("Please make sure I have the following permissions:\n\n-Admin Privs\n-Manage Roles\n-Kick & Ban Members\n-Manage Messages\nCreate Channels")
        message.channel.send("If I have all of these permissions, then run the setup command!");
        }

}

module.exports = informSetup