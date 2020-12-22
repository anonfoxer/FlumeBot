const Discord = require('discord.js'); //create client
const commando = require('discord.js-commando');
const {TOKEN} = require('./secret');
const {OWNER} = require('./secret2');

const bot = new commando.Client({
    commandPrefix: '&',
    
    owner: OWNER,

    disableEveryone: true
});

/* Flume 2.0 - What's new? 
- Rewrite of some of the code base.
- Cleaned up entry (flume.js) 
- Added kick & ban commands
- Removed mute & unmute
- Removed setup commands.
- Added info command.
*/

bot.on('ready', ( ) => {
    bot.user.setActivity('&help')
    console.log("FlumeBot Online!");
    console.log("Use &help to get started!");
})

bot.on('guildMemberAdd', member => {
    console.log("User " + member.user.username + " Joined!"); //announce new member to the server.
    message.channel.sendMessage("Hello there, " + member.user.username, + "!");
})

/* allocate commands */
registerCommands();

function registerCommands() { //registers all commands. Not neccissarily reserved as a func but useful to name it this
    bot.registry.registerGroup('fun', 'Fun');
    bot.registry.registerGroup('useful', 'Useful');
    bot.registry.registerGroup('moderation', 'Moderation');
    bot.registry.registerDefaults(); //Registers default commands
    bot.registry.registerCommandsIn(__dirname + "/commands"); //commands found in <dicrec>\commands.
}


bot.login(TOKEN);
