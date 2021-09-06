const commando = require('discord.js-commando');
const Discord = require('discord.js'); //create client

const { readFileSync } = require('fs');

const array = readFileSync('./commands/mordhau/strats.txt').toString().replace(/\r\n/g,'\n').split('\n');
console.log("Strats.txt loaded. Strat count: " + array.length);

class stratLette extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'haustrat',
            group: 'mordhau',
            memberName: 'haustrat',
            description: 'Generates a random, probably garbage strat for your next game of Mordhau.'
        })
    }

    async run(message, args) {
        try {
            //let name = message.author();
            let myStrat = array[Math.floor(Math.random()*(array.length))];
        
            const stratEmbed = new Discord.MessageEmbed()
                .setColor('#8336d6')
                .setTitle('Strat roulette results')
	            .setURL('https://github.com/anonfoxer/FlumeBot')
                .setAuthor('FlumeBot', 'https://i.imgur.com/agTGFwL.png', 'https://github.com/anonfoxer/FlumeBot')
	            .setDescription('Results for strat roulette')
                .addFields(
                    { name: 'Strat', value: myStrat},
                )
            message.channel.send(stratEmbed);
        }
        catch(err) {
            message.reply("An error occured: " + err);
        }
    }
}

module.exports = stratLette