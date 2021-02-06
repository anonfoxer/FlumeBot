const commando = require('discord.js-commando');
const Discord = require('discord.js'); //create client
const pixabay = require("pixabay-api");
const pixakey = null;

class turtlC extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'turtle',
            group: 'aminals',
            memberName: 'turtle',
            description: 'Gets a pic of a turtle'
        })
    }

    async run(message, {title}) {
        try {
            var r = await pixabay.searchImages(pixakey, 'turtle')
            message.reply(new Discord.MessageEmbed()
                .setTitle("Random turtle")
                .setImage(r.hits[Math.floor(Math.random() * r.hits.length)].largeImageURL))
        }
        catch(err) {
            message.reply("An error occured: " + err);
        }
    }
}

module.exports = turtlC