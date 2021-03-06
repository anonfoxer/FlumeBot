const Discord = require('discord.js'); //create client
const commando = require('discord.js-commando');

const bot = new commando.Client({
    commandPrefix: '&',
    
    owner: OWNER,

    disableEveryone: true
});

/* Flume 2.4.3 - What's new?
 - Fixed spelling for CUTTLE FISH.
 - Removed the anti pog routine as it slows down the current hardware too much. Will be renabled when i have a better server for Flume.
*/

bot.on('ready', ( ) => {
    bot.user.setActivity('&help | v2.4.3 | hardware\'s');
    console.log("FlumeBot Online! v2.4.3 | hardware\'s");
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
    bot.registry.registerGroup('aminals', 'Aminals');
    bot.registry.registerGroup('actions', 'Actions');
    bot.registry.registerDefaults(); //Registers default commands
    bot.registry.registerCommandsIn(__dirname + "/commands"); //commands found in <dicrec>\commands.
}
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
    } // --- Anti Pog Routine added in 2.4.2. Disabled in 2.4.3 due to lack of processing power.
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


bot.login(TOKEN);
