const commando = require('discord.js-commando');
const Discord = require('discord.js'); //create client

class buildRoulette extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'badbuild',
            group: 'mordhau',
            memberName: 'badbuild',
            description: 'Generates a random, probably garbage build, consisting of armor for head, chest and legs, a main weapon, a side arm, a third weapon, and 3 perks. Not all builds will actually be possible.'
        })
    }

    async run(message, args) {
        try {
            let armorTiers = ["None","1","2","3"];
            let weapList = ["GS","LS","ES","Short Spear","Spear","AS","BS","Short Sword", "Dagger", "Wooden Mallet", "Blacksmith Hammer", "Lute", "Heavy Branch", "Cleaver", "Carving Knife", "Nothing", "Warhammer", "Axe", "HHandaxe", "Sickle", "Frying Pan", "Quarter Staff", "Falchion", "Mace", "Rapier", "Messer", "Polehammer", "Poleaxe", "Bardouche", "Skillhook", "Training Sword", "Wooden Shovel", "Pitchfork", "Rake", "Hoe", "WAxe", "BAxe", "Club", "Pickaxe", "Rusty Shovel", "Scythe", "Sledgehammer", "Estoc", "Falx", "Exec Sword", "Halberd", "Zweihander", "Buckler", "Rock", "Targe", "Kite Shield", "Heater Shield", "Round Shield", "Bandage", "Toolbox", "Pavise Shield", "Smoke bomb", "Fire bomb", "Bear trap", "Medic Bag", "Longbow", "Crossbow", "Javelin", "Throwing axe", "Throwing Knife", "Maul", "Recurve Bow"];
            let perks = ["Smith","Wrecker","Scavenger","Cat","Friendly","Tenacious","Fireproof","Dwarf","Tank","Acrobat","Ranger","Brawler","Fury","Bloodlust","Huntsman","Second Wind", "Flesh Wound","Rat","Rush","Dodge","Butcher","Peasant","Mule","Supplied"];
            /*
            I WILL THINK OF A BETTER WAY EVENTUALLY
            DEAL WITH IT
            NERDS
            HAHAHAHAHA
            IM NOT CRYING YOURE CRYING
            I WILL FIGURE OUT A BETTER WAY OF DOING THIS SOON.
            */
            let selHead = armorTiers[Math.floor(Math.random()*(armorTiers.length))]; //head armor
            let selChest = armorTiers[Math.floor(Math.random()*(armorTiers.length))]; //chest armor
            let selLegs = armorTiers[Math.floor(Math.random()*(armorTiers.length))]; //leg armor
            let mW = weapList[Math.floor(Math.random()*(weapList.length))]; //main weap
            let sW = weapList[Math.floor(Math.random()*(weapList.length))]; //sec weap
            let tW = weapList[Math.floor(Math.random()*(weapList.length))]; //third weap
            let p1 = perks[Math.floor(Math.random()*(perks.length))]; //perk 1
            let p2 = perks[Math.floor(Math.random()*(perks.length))]; //perk 2
            let p3 = perks[Math.floor(Math.random()*(perks.length))]; //perk 3

            message.channel.send("Note: Your build is not guaranteed to be possible. Substitue when needed.\nYour build is as follows:\n" + selHead + " " + selChest + " " + selLegs  + "\nMain Weapon: " + mW + "\nSecondary Weapon: " + sW + "\nThird Weapon: " + tW + "\nPerk 1: " + p1 + "\nPerk 2: " + p2 + "\nPerk 3: " + p3);
        }
        catch(err) {
            message.reply("An error occured: " + err);
        }
    }
}

module.exports = buildRoulette