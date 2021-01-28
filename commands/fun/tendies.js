const commando = require('discord.js-commando');

class tendies extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'tendies',
            group: 'fun',
            memberName: 'tendies',
            description: 'Sends Tendies!'
        })
    }

    async run(message, args) {
            message.delete();
            message.channel.send('', {files: ["./images/tendies.png"]});
    }

}

module.exports = tendies