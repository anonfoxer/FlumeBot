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
- Changed descriptions for Mordhau command embeds.
- Added the ability for the bot to tease you for editing a message (thank you, DriftingNitro)
- Fixed a rare crash from members joining a server while the bot is active.
- Updated &info for 3.0 announcement
- Added new strats to &haustrat
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

//editing message responses
let responses = [
    "oh? did you fuck up? did you make an oopsie there? i saw that, fuck you.",
    "lol, look at this orphan, they can't spell.",
    "HURR DURR, I MADE A FUCKY WUCKY NOW I HAVE TO EDIT MY MESSAGE HURRRRRR",
    "i saw that.",
    "oh? you thought we wouldn't see that? fuck you.",
    "stupid dumbass idiot, can't spekl...wait shit",
    "made an oopsie there? don't worry, i won't tell anyone.",
    "did that have a little boo boo?",
    "try again lol"
];

bot.on('messageUpdate', ( message ) => { //whenever you make an edit to a message it will tease you.
    let result = responses[Math.floor(Math.random()*(responses.length)-1)] //might cause a rare crash. oh well.
    message.channel.send(result);
})

bot.login('NULL');
