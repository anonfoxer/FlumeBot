const commando = require('discord.js-commando');
const Discord = require('discord.js'); //create client
const pixabay = require("pixabay-api");
const pixakey = null;

class notSnowFop extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'fox',
            group: 'aminals',
            memberName: 'fox',
            description: 'Gets a pic of a fox'
        })
    }

    async run(message, {title}) {
        try {
            var r = await pixabay.searchImages(pixakey, 'fox')
            message.reply(new Discord.MessageEmbed()
                .setTitle("Random fox")
                .setImage(r.hits[Math.floor(Math.random() * r.hits.length)].largeImageURL))
        }
        catch(err) {
            message.reply("An error occured: " + err);
        }
    }
}

module.exports = notSnowFop