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

/* Flume 2.5.1.2 - What's new?
    - Changed up the &info command for 3.0 (2.5.1.1)
    - Fixed a rare crash when a user joins a server.
*/

bot.on('ready', ( ) => {
    bot.user.setActivity('&help | v2.5.1 | Pretty');
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
