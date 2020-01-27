const commando = require('discord.js-commando');
const guild = message.guild; //define the guild
const loggify = guild.channels.find(channel => channel.name === "flume-logs");

class purge extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'purge',
            group: 'useful',
            memberName: 'purge',
            description: 'Deletes 100 messages from the channel its used in.'
        })
    }

    async run(message, args) {
        /*let msg = message.content.toUpperCase();
        let sender = message.author;
        let length = message.length;
        let cont = message.content.slice(length).split(" ");
        let args = cont.slice(1);*/
        
        async function purge() { //purge function
            message.delete(); //deletes the command message.

            /*if(isNaN(args[0])){ //If args is not number
                message.channel.sendMessage('```Please input a number of messages tp purge.\n Usage: r.purge <amount>```')
                return;
            }*/

            const fetched = await message.channel.fetchMessages({limit: 100}); //grabs <args> number of messages in channel
            console.log(':gear: ' + fetched.size + ' messages found, purging.'); //reports deleted messages to console.

            //delete func
            message.channel.bulkDelete(fetched)
            message.channel.sendMessage(`:white_circle: Purged ` + fetched.size + ' messages')
            message.channel.sendMessage(':gear: Purge inititated by ' + message.author);
            console.log('Purge inititated by ' + message.author); //delete fetched messages
                /*.catch(error => message.channel.send(`Error: ${error}`)); //If error occurs, type in channel.*/
        }

        //purge func call
        purge();
    }
}

module.exports = purge
