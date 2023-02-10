let playerScore = 0;
let cpuScore = 0;
const playerButtons = document.querySelectorAll(".player-wrapper > a");
const cpuButtons = document.querySelectorAll(".cpu-wrapper > a");
let cpuSelectedButton = null;
let playerSelectedButton = null;
const playerScoreHeader = document.querySelector(".player-section>h1");
const cpuScoreHeader = document.querySelector(".cpu-section>h1");
const gameOverModal = document.querySelector(".modal");
const gameOverModalText = document.querySelector(".modal>h1");

function getCpuChoice(){
    
    let cpuMove = cpuButtons[Math.floor(Math.random() * cpuButtons.length)]
    let cpuSelected= cpuMove.className;
    console.log(typeof(cpuSelected));
    console.log(cpuSelected);
    changeColor(cpuMove);
    return cpuSelected;
}

  for (let index = 0; index < playerButtons.length; index++) {
        playerButtons[index].addEventListener("click", function(){
            removeClass();
            let playerSelection = this.className;
            console.log(typeof(playerSelection) );
            console.log(playerSelection);
            playRound(playerSelection, getCpuChoice())
            changeColor(this);
        });
        
    }


    function changeColor(elementToChange){
        
        let element = elementToChange;
        element.classList.add("selected");
    }
//function getPlayerChoice() {
    
    //for (let index = 0; index < playerButtons.length; index++) {
       // playerButtons[index].addEventListener("click", function(){
            //return
      //  });
        
   // }

    //let choice = prompt("choose rock, paper, scissor");
    //let choiceLowerCase = choice.toLowerCase();
    //alert("you choose " + choiceLowerCase);
    // return choiceLowerCase;
    
//}

function playRound(playerchoice, cpuchoice){
    
    if (playerchoice === `player-rock` && cpuchoice ===`cpu-scissors` || 
    playerchoice === "player-paper" && cpuchoice === "cpu-rock" ||
    playerchoice === "player-scissors" && cpuchoice === "cpu-paper" ) {
        
        playerScore = playerScore + 1;
        updateScoreText(playerScoreHeader, "YOU", playerScore);
        checkGameEnd(playerScore, cpuScore);
        
    } else if(playerchoice === `player-rock` && cpuchoice ===`cpu-rock` || 
    playerchoice === "player-paper" && cpuchoice === "cpu-paper" ||
    playerchoice === "player-scissors" && cpuchoice === "cpu-scissors" ){
        
        
    } else {
      
        cpuScore = cpuScore + 1;
        updateScoreText(cpuScoreHeader, "CPU", cpuScore);
        checkGameEnd(playerScore, cpuScore);
        
    }

    

}

function removeClass(){
    let coloredButtons = document.querySelectorAll(".selected");
    coloredButtons.forEach(element => {
        element.classList.remove("selected");
    });
}

function updateScoreText(textElement, who, score){
    textElement.innerText = `${who}: ${score}`;
}


function checkGameEnd(playerScore, cpuScore){
    if (playerScore == 5) {
        gameOverModalText.innerText = "YOU WIN! YAAAAY :)";
        gameOverModal.classList.add("modal-display");
    }else if(cpuScore == 5){
        
        gameOverModalText.innerText = "YOU LOSE! POOPIE :(";
        gameOverModal.classList.add("modal-display");
    }
}


//function playGame(){
    //for (let index = 0; index < 5; index++) {
       // playRound(getPlayerChoice(), getCpuChoice());
       // console.log(cpuScore , playerScore);
        
   // }
   // alert("your score " + playerScore);
    //alert("cpu score " + cpuScore );
//}

