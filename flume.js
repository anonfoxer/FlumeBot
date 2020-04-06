const Discord = require('discord.js'); //create client
const commando = require('discord.js-commando');
const {TOKEN} = require('./secret');
const {OWNER} = require('./secret2');
var fs = require('fs');

//const bot = new Discord.Client();
//let cooldown = new.Set();
//let cdseconds = 20;
const bot = new commando.Client({
    commandPrefix: '&',
    
    owner: OWNER,

    disableEveryone: true
});

bot.on('ready', ( ) => {
    bot.user.setActivity('&help')
    console.log("FlumeBot Online!")
    //message.channel.send('Raidmode is OFF by default.')
})

let raidmode = 0;

bot.on('guildMemberAdd', member => {
    console.log("User " + member.user.username + " Joined!"); //announce new member to the server.
    message.channel.sendMessage("Hello there, " + member.user.username, + "!");
})

/* allocate commands */
registerCommands();
logit();
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

//THE BELOW FUNCTION IS A *GLOBAL LOG!* IF YOU DOWNLOAD THIS LOG YOU ARE LOOKING AT THE BOTS RUN HISTORY FOR ITS UPTIME, ACROSS ALL SERVERS IT IS IN!

function logit(message) {
    var now = new Date();
    var message = "FlumeBot Online! Started on: " + Date.now() + "\n";
    console.log(message);
    fs.writeFileSync('./devinfo/log.txt', message, err=> {
        if (err) {
            console.error(err)
            return
        }
    })
}



bot.login(TOKEN); //login bot 