const commando = require('discord.js-commando');

class setyourself extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'setup',
            group: 'setup',
            memberName: 'setup',
            description: 'Sets up the bot!'
        })
    }

    async run(message, args) {
        const guild = message.guild;
        message.delete();
        message.channel.send(":wrench: Hi there! Im Flume, developed by anonfoxer#8098!");
        message.channel.send(":wrench: I am going to set myself up now! This may take a few minutes depending on my connection!");

        
        guild.createChannel('flume-logs', { type: 'text' })
            .then(console.log)
            .catch(console.error);
        //const mutreole = guild.roles.find('name', 'muted');
        
        //if(!muterole) {
            guild.createRole({
            name: "muted",
            color: "#000000",
            permissions:[]    })
        //})
        
            .then(console.log)
            .catch(console.error)

            message.channel.send(":wrench: Setup Complete!");
    }



        
}

module.exports = setyourself