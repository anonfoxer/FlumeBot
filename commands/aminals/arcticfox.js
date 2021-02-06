const commando = require('discord.js-commando');
const Discord = require('discord.js'); //create client
const pixabay = require("pixabay-api");
const pixakey = null;

class snowFop extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'arcticfox',
            group: 'aminals',
            memberName: 'arcticfox',
            description: 'Gets a pic of an arctic fox'
        })
    }

    async run(message, {title}) {
        try {
            var r = await pixabay.searchImages(pixakey, 'arctic fox')
            message.reply(new Discord.MessageEmbed()
                .setTitle("Random arctic fox")
                .setImage(r.hits[Math.floor(Math.random() * r.hits.length)].largeImageURL))
        }
        catch(err) {
            message.reply("An error occured: " + err);
        }
    }
}

module.exports = snowFop