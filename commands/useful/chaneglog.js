const commando = require('discord.js-commando');

class changeLog extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'changelog',
            group: 'useful',
            memberName: 'changelog',
            description: 'View the Changelog!'
        })
    }

    async run(message, args) {
        message.channel.send(":gear: Version 2.4.1 Changelog\n - Spelled **tortoise** correctly.\n- Added &cuddlefish\n - Added catch(err) throws to all catch statements where applicable to aid in debugging. If you expirience an error, please send it to the bot owner or open a pull request.");
        }

}

module.exports = changeLog