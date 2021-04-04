const commando = require('discord.js-commando');
const Discord = require('discord.js'); //create client
const pixabay = require("pixabay-api");
const pixakey = "20172613-dcbb496c2037665ce6f5a46b1";

class tortIs extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'tortoise',
            group: 'aminals',
            memberName: 'tortoise',
            description: 'Gets a pic of a tortoise'
        })
    }

    async run(message, {title}) {
        try {
            var r = await pixabay.searchImages(pixakey, 'tortoise')
            message.reply(new Discord.MessageEmbed()
                .setTitle("Random tortoise")
                .setImage(r.hits[Math.floor(Math.random() * r.hits.length)].largeImageURL))
        }
        catch(err) {
            message.reply("An error occured, contact anonfoxer#8098. Error details: " + err);
        }
    }
}

module.exports = tortIs
