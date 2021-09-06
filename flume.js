const Discord = require('discord.js'); //create client
const commando = require('discord.js-commando');
const pixabay = require("pixabay-api");
const pixakey = "NULL";
//const badWord = /pog|Pog/g;

const bot = new commando.Client({
    commandPrefix: '&',
    
    owner: "NULL",

    disableEveryone: true
});

/* Flume 2.5.1 - What's new?
    - Added embeds to messages where appropriate.
    - Added &haustrat
    - Removed tenacious and friendly perks from &badbuild
    - Removed broken message.author() calls to prevent errors with the new version of discord.js
*/

bot.on('ready', ( ) => {
    bot.user.setActivity('&help | v2.5.1 | Pretty');
})

bot.on('guildMemberAdd', member => {
    console.log("User " + member.user.username + " Joined!"); //announce new member to the server.
    message.channel.sendMessage("Hello there, " + member.user.username, + "!");
})

/* allocate commands */
registerCommands();

function registerCommands() { //registers all commands. 
    bot.registry.registerGroup('fun', 'Fun');
    bot.registry.registerGroup('useful', 'Useful');
    bot.registry.registerGroup('moderation', 'Moderation');
    bot.registry.registerGroup('copypasta', 'Copypasta');
    bot.registry.registerGroup('aminals', 'Aminals');
    bot.registry.registerGroup('actions', 'Actions');
    bot.registry.registerGroup('mordhau', 'mordhau');
    bot.registry.registerDefaults(); //Registers default commands
    bot.registry.registerCommandsIn(__dirname + "/commands"); //commands found in <dicrec>\commands.
}

bot.login('NULL');
