const commando = require('discord.js-commando');
const Discord = require('discord.js'); //create client
const pixabay = require("pixabay-api");
const pixakey = null;

class tortIs extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'tortise',
            group: 'aminals',
            memberName: 'tortise',
            description: 'Gets a pic of a tortise'
        })
    }

    async run(message, {title}) {
        try {
            var r = await pixabay.searchImages(pixakey, 'tortise')
            message.reply(new Discord.MessageEmbed()
                .setTitle("Random tortise")
                .setImage(r.hits[Math.floor(Math.random() * r.hits.length)].largeImageURL))
        }
        catch(err) {
            message.reply("An error occured: " + err);
        }
    }
}

module.exports = tortIs