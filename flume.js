const Discord = require('discord.js'); //create client
const commando = require('discord.js-commando');
import TOKEN from "./secret.js"
//const bot = new Discord.Client();
//let cooldown = new.Set();
//let cdseconds = 20;
const bot = new commando.Client({
    commandPrefix: '&',

    owner: '198230389423210497',

    disableEveryone: true
});

bot.on('ready', ( ) => {
    bot.user.setActivity('&help')
    console.log('Flume is Online')
    message.channel.send('Raidmode is OFF by default.')
})

let raidmode = off;

bot.on('guildMemberAdd', member => {
    console.log("User " + member.user.username + " Joined!"); //announce new member to the server.
    message.channel.sendMessage("Hello there, " + member.user.username, + "!");
})

/* allocate commands */
registerCommands();

/* bot.on('message', (message) =>{ //Raidmode Commands


    if(message.content == '~raidmode ON'){ 
        if(raidmode = on) return;
        if(raidmode = off) {
            let raidmode = on;
            if(!message.member)
        }

    }

}); */


function registerCommands() { //registers all commands. Not neccissarily reserved as a func but useful to name it this
    bot.registry.registerGroup('setup', 'Setup'); //Sets command group Random
    bot.registry.registerGroup('fun', 'Fun');
    bot.registry.registerGroup('useful', 'Useful');
    bot.registry.registerGroup('moderation', 'Moderation');
    bot.registry.registerDefaults(); //Registers default commands
    bot.registry.registerCommandsIn(__dirname + "/commands"); //commands found in <dicrec>\commands.
}



bot.login(TOKEN); //login bot 