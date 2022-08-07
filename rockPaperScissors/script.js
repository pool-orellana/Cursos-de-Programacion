// Algorithm: Rock, Paper, Scissors

// Variables
let player = 0;
let javascript = 0;

// CHOICE PLAYER OPTION

// Function player choice
function playerInput(choice){
    choice = prompt("Seleciona tu juego: \n 1: Piedra \n 2: Papel \n 3: Tijera");
    while (choice < 1 || choice > 3){
        choice = prompt("Seleciona tu juego: \n 1: Piedra \n 2: Papel \n 3: Tijera");
    }
    return choice;
}

player = playerInput(player);

// Function javascript choice
function javascriptInput(choice){
    // Random number generator
    choice = Math.floor(Math.random() * 3) + 1;
    return choice;
}

javascript = javascriptInput(javascript);


// Asign choice player
function asignPlayers(players){
    if (players == 1){
        return console.log(players + " Escogio Piedra");
    } else if(players == 2){
        return console.log(players + " Escogio Papel");
    } else {
        return console.log(players + " Escogio Tijera");
    }
}

// See choice player
asignPlayers(player);
asignPlayers(javascript);

// Battle
if (player == 2 && javascript == 2){
    console.log("Empate");
} else if (player == 1 && javascript == 3){
    console.log("Player Gana");
} else if (player == 3 && javascript == 2){
    console.log("Player Gana");
} else if (player == 2 && javascript == 1){
    console.log("Player Gana");
} else{
    console.log("Javascript Gana");
}

