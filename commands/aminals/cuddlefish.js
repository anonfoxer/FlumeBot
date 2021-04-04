const commando = require('discord.js-commando');
const Discord = require('discord.js'); //create client
const pixabay = require("pixabay-api");
const pixakey = "null";

class cuddleFish extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'cuddlefish',
            group: 'aminals',
            memberName: 'cuddlefish',
            description: 'Gets a pic of a cuddlefish'
        })
    }

    async run(message, {title}) {
        try {
            var r = await pixabay.searchImages(pixakey, 'cuddlefish')
            message.reply(new Discord.MessageEmbed()
                .setTitle("Random cuddlefish")
                .setImage(r.hits[Math.floor(Math.random() * r.hits.length)].largeImageURL))
        }
        catch(err) {
            message.reply("An error occured: " + err);
        }
    }
}

module.exports = cuddleFish
