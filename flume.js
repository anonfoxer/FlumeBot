const Discord = require('discord.js'); //create client
const commando = require('discord.js-commando');

const bot = new commando.Client({
    commandPrefix: '&',
    
    owner: OWNER,

    disableEveryone: true
});

/* Flume 2.3.0 - What's new?
 - Changed class names for certian commands, surprised it worked at all without me doing this.
 - added &based, &dogwater, and &cringe (thanks to FaunaBoops for the suggestion of the last one.)
 - Added command group "actions" as well as some starter commands for there. Sorry furbot.
*/

bot.on('ready', ( ) => {
    bot.user.setActivity('&help | v2.3.0 | dogwater n hugs');
    console.log("FlumeBot Online! v2.3.0 | dogwater n hugs");
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
    bot.registry.registerGroup('copypasta', 'Copypasta');
    bot.registry.registerGroup('actions', 'Actions');
    bot.registry.registerDefaults(); //Registers default commands
    bot.registry.registerCommandsIn(__dirname + "/commands"); //commands found in <dicrec>\commands.

/* Stupid fun bs */
bot.on('message', (message) => { //whenever a message is sent
    if (message.content.includes(":envolping:")) //checking for an emoji used often. seriously just an in joke.
    { 
        try {
            message.channel.send("indubitably.");
        }
        catch {
            console.log("Tried to respond to the emoji, failed for unknown reason.");
        }
    }
  })


bot.login(TOKEN);
