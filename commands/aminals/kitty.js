const commando = require('discord.js-commando');
const Discord = require('discord.js'); //create client
const pixabay = require("pixabay-api");
const pixakey = null;

class kitTy extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'kitty',
            group: 'aminals',
            memberName: 'kitty',
            description: 'Gets a pic of a kitty'
        })
    }

    async run(message, {title}) {
        try {
            var r = await pixabay.searchImages(pixakey, 'kitty')
            message.reply(new Discord.MessageEmbed()
                .setTitle("Random kitty")
                .setImage(r.hits[Math.floor(Math.random() * r.hits.length)].largeImageURL))
        }
        catch(err) {
            message.reply("An error occured: " + err);
        }
    }
}

module.exports = kitTy