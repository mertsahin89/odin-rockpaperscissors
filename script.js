let playerScore = 0;
let cpuScore = 0;

function getCpuChoice(){
    let selectionList = ["rock", "paper", "scissor"]
    let cpuSelected = selectionList[Math.floor(Math.random() * selectionList.length)];
    alert("cpu chooses " + cpuSelected);
    return cpuSelected;
}

function getPlayerChoice() {
    let choice = prompt("choose rock, paper, scissor");
    let choiceLowerCase = choice.toLowerCase();
    alert("you choose " + choiceLowerCase);
    return choiceLowerCase;
    
}

function playRound(playerchoice, cpuchoice){
    
    if (playerchoice === "rock" && cpuchoice ==="scissor" || 
    playerchoice === "paper" && cpuchoice ==="rock" ||
    playerchoice === "scissor" && cpuchoice ==="paper" ) {
        alert("you win");
        playerScore = playerScore + 1;
        
    } else if(playerchoice === cpuchoice){
        alert ("draw, go again!");
        
    } else {
        alert("you lose!")
        cpuScore = cpuScore + 1;
    }

}

function playGame(){
    for (let index = 0; index < 5; index++) {
        playRound(getPlayerChoice(), getCpuChoice());
        console.log(cpuScore , playerScore);
        
    }
    alert("your score " + playerScore);
    alert("cpu score " + cpuScore );
}

playGame();