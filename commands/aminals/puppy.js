const commando = require('discord.js-commando');
const Discord = require('discord.js'); //create client
const pixabay = require("pixabay-api");
const pixakey = null;

class pupPy extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'puppy',
            group: 'aminals',
            memberName: 'puppy',
            description: 'Gets a pic of a puppy'
        })
    }

    async run(message, {title}) {
        try {
            var r = await pixabay.searchImages(pixakey, 'puppy')
            message.reply(new Discord.MessageEmbed()
                .setTitle("Random puppy")
                .setImage(r.hits[Math.floor(Math.random() * r.hits.length)].largeImageURL))
        }
        catch(err) {
            message.reply("An error occured: " + err);
        }
    }
}

module.exports = pupPy