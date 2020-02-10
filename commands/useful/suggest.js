const commando = require('discord.js-commando');

class giveSuggest extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'suggest',
            group: 'useful',
            memberName: 'suggest',
            description: 'Suggest a feature!'
        })
    }

    async run(message, args) {
        message.channel.sendMessage(":pen_fountain: Have a suggestion? Found a bug? Want to give me as the creator some ups? Just fill out this form! https://forms.gle/eFUo4R8iFqnk9M6K9");   
    }
}

module.exports = giveSuggest;