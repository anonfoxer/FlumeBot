const commando = require('discord.js-commando');
//const guild = message.guild; //define the guild
//const loggify = guild.channels.find(channel => channel.name === "flume-logs");

class informSetup extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'getlog',
            group: 'useful',
            memberName: 'getlog',
            description: 'Uploads the GLOBAL LOG to the channel it is run in. Please only run inside of #flume-logs'
        })
    }

    async run(message, args) {
        message.channel.send(":warning: WARNING! THIS LOG FILE IS A GLOBAL LOG FILE, AND INCLUDES DATA FROM ALL SERVERS THE BOT IS RUNNING ON! THIS WILL BE FIXED IN THE FUTURE, BUT BE AWARE YOU MAY BE DOWNLOADING A VERY LARGE AMOUNT OF GARBAGE DATA! THIS COULD CONTAIN SENSITIVE INFORMATION, I AM NOT RESPONSIBLE FOR WHAT YOU DO WITH ANY SENSITIVE INFORMATION ALTHOUGH I WILL DO MY BEST TO PREVENT THIS SORT OF INFORMATION FROM BEING INCLUDED.");
        message.channel.sendMessage('', {files: ["./devinfo/log.txt"]});
        }

}

module.exports = informSetup