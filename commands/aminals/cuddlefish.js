const commando = require('discord.js-commando');
const Discord = require('discord.js'); //create client
const pixabay = require("pixabay-api");
const pixakey = "null";

class cuddleFish extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'cuttlefish',
            group: 'aminals',
            memberName: 'cuttlefish',
            description: 'Gets a pic of a cuttlefish'
        })
    }

    async run(message, {title}) {
        try {
            var r = await pixabay.searchImages(pixakey, 'cuttlefish')
            message.reply(new Discord.MessageEmbed()
                .setTitle("Random cuttlefish")
                .setImage(r.hits[Math.floor(Math.random() * r.hits.length)].largeImageURL))
        }
        catch(err) {
            message.reply("An error occured: " + err);
        }
    }
}

module.exports = cuddleFish
