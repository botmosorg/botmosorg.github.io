NAMES = {
    "BotMoses": "Teaches the new player",
    "Betty": "Gambles a lot",
    "Bender": "From Futurama, round head, bowl head",
    // ...
}

// It's a little bit like PacMan, spirits jump into the player.
SPIRITS = {
    "WorkBot": "Basic pawn",
    "AeroBot": "Basic server, serving goo/oil and such to bots",
    //...
    "PioneerBot": "Absolute slayer bots, needs to play as WorkBot first, brotherhood of ultimate warriors",
    "ValkyrBot": "Female Godess from the sky, needs to play as AeroBot first",
    // ...
    "RichBot": "Shiny metal ass, owns a spacestation, is the brain so to say",
    // ...
    "PirateBot": "Needs to be unlocked, achieve ship mastery",
}

/*
* Spawns a new bot from one of the selected spirits, after player death
*/
MAX_NUMBER_PLAYERS = 1000000000; // Placeholder
function spawn(spirit, mapId) {
    return {
        "ID": Math.floor(Math.random() * MAX_NUMBER_PLAYERS),
        "spirit": spirit,
        "mapId": mapId,
    };
}
