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
        message.channel.send(":wrench: Hi there! Im Flume, developed by anonfoxer#8098!");
        message.channel.send(":wrench: Please make sure I have the following permissions:\n\n:wrench: -Admin Privs\n:wrench: -Manage Roles\n:wrench: -Kick & Ban Members\n:wrench: -Manage Messages\n:wrench: Create Channels")
        message.channel.send(":wrench: If I have all of these permissions, then run the setup command!");
        }

}

module.exports = informSetup