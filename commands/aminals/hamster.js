const commando = require('discord.js-commando');
const Discord = require('discord.js'); //create client
const pixabay = require("pixabay-api");
const pixakey = "NULL";

class phatGus extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'hamster',
            group: 'aminals',
            memberName: 'hamster',
            description: 'Gets a pic of a hamster'
        })
    }

    async run(message, {title}) {
        try {
            var r = await pixabay.searchImages(pixakey, 'hamster')
            message.reply(new Discord.MessageEmbed()
                .setTitle("Random hamster")
                .setImage(r.hits[Math.floor(Math.random() * r.hits.length)].largeImageURL))
        }
        catch(err) {
            message.reply("An error occured: " + err);
        }
    }
}

module.exports = phatGus
