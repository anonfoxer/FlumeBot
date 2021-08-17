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

/* Flume 2.5.0 - What's new?
 - Added &shark
 - Added &hamster
 - Added &badbuild + the Mordhau commands category
*/

bot.on('ready', ( ) => {
    bot.user.setActivity('&help | v2.5.0 | build roulette');
    //bot.user.setActivity('v2.5.0 indev');
    console.log("FlumeBot Online! v2.5.0 | build roulette");
    console.log("Use &help to get started!");
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

/* Stupid fun bs */
bot.on('message', (message) => { //whenever a message is sent
    /*if (message.content.includes(":envolping:")) //checking for an emoji used often. seriously just an in joke.
    { 
        try {
            message.channel.send("indubitably.");
        }
        catch {
            console.log("Tried to respond to the emoji, failed for unknown reason.");
        }
    } */
    /* if (message.content.match(badWord)) {
        try {
            var flop = Math.round(Math.random());
            if (flop == 1) {
                message.delete();
                message.reply("No p*g for you.")
            }
            else {
                return;
            }
        }
        catch(err) {
            console.log("Failed to sanitize pog. Err: " + err);
            message.channel.send("Failed to sanitize pog. Err: " + err); 
        }
    } */
  })


bot.login('NULL');
