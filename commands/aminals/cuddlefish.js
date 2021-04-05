const commando = require('discord.js-commando');
const Discord = require('discord.js'); //create client
const pixabay = require("pixabay-api");
const pixakey = "20172613-dcbb496c2037665ce6f5a46b1";

class cuddleFish extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'cuttllefish',
            group: 'aminals',
            memberName: 'cuttllefish',
            description: 'Gets a pic of a cuttllefish'
        })
    }

    async run(message, {title}) {
        try {
            var r = await pixabay.searchImages(pixakey, 'cuttllefish')
            message.reply(new Discord.MessageEmbed()
                .setTitle("Random cuttllefish")
                .setImage(r.hits[Math.floor(Math.random() * r.hits.length)].largeImageURL))
        }
        catch(err) {
            message.reply("An error occured: " + err);
        }
    }
}

module.exports = cuddleFish