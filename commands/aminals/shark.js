const commando = require('discord.js-commando');
const Discord = require('discord.js'); //create client
const pixabay = require("pixabay-api");
const pixakey = "null";

class sharkies extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'shark',
            group: 'aminals',
            memberName: 'shark',
            description: 'Gets a pic of a shark'
        })
    }

    async run(message, {title}) {
        try {
            var r = await pixabay.searchImages(pixakey, 'shark')
            message.reply(new Discord.MessageEmbed()
                .setTitle("Random shark")
                .setImage(r.hits[Math.floor(Math.random() * r.hits.length)].largeImageURL))
        }
        catch(err) {
            message.reply("An error occured: " + err);
        }
    }
}

module.exports = sharkies
