const commando = require('discord.js-commando');

class JumboCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'jumbo',
            group: 'fun',
            memberName: 'jumbo',
            description: 'ALL HAIL JUMBO'
        })
    }

    async run(message, args) {
        message.channel.send('aLl hAiL JuMbO', {files: ["./images/jumbo_standard.jpg"]}); //Sends local bot image file
    }
}

module.exports = JumboCommand