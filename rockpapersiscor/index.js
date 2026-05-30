
 
        const rockBtn = document.querySelector(".rock");
        const paperBtn = document.querySelector(".paper");
     const scissorsBtn = document.querySelector(".scissors");

     let resultText = document.querySelector(".results");
     let scoreUpdt = document.querySelector(".score");


        
        let humanScore = 0;
let computerScore = 0;
let playround =0;

function getComputerChoice() {
    let randomNum = Math.random();
    if (randomNum < 1/3) {
        return "rock";
    } else if (randomNum < 2/3) {
        return "paper";
    } else {
        return "scissors";
    }
}



function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {

        resultText.textContent =`It's a TIE! You both chose ${humanChoice}`;
    } 
    else if (humanChoice== 'rock'){
        if(computerChoice=='paper'){
            computerScore+=1;
            resultText.textContent =`Lost ${computerChoice} beats ${humanChoice}`;
            
        }
        else if(computerChoice=='scissors'){
            humanScore+=1;
             resultText.textContent =`Won ${humanChoice} beats ${computerChoice}`;

        }
    }

    else if (humanChoice== 'paper'){
        if(computerChoice=='scissors'){
            computerScore+=1;
            resultText.textContent =`Lost ${computerChoice} beats ${humanChoice}`;
        }
        else if(computerChoice=='rock'){
            humanScore+=1;
             resultText.textContent =`Won ${humanChoice} beats ${computerChoice}`;

        }
    }

    else if (humanChoice== 'scissors'){
        if(computerChoice=='rock'){
            computerScore+=1;
            resultText.textContent =`Lost ${computerChoice} beats ${humanChoice}`;
        }
        else if(computerChoice=='paper'){
            humanScore+=1;
             resultText.textContent =`Won ${humanChoice} beats ${computerChoice}`;

        }
    }

    playround+=1;


}


// function playGame() {

//     for (let i = 0; i < 3; i++) {
//         console.log(`ROUND: ${i+1}`);
//         playRound(getHumanChoice(), getComputerChoice());

//     }

//     console.log(`FINAL SCORE `);
//     console.log(`Human: ${humanScore} | Computer: ${computerScore}`);
    
//     if (humanScore > computerScore) {
//         console.log("CONGRATULATIONS! You won the match!");
//     } else if (computerScore>humanScore){
//         console.log("GAME OVER. The bot defeated you.");
//     } 
//     else if(computerScore==humanScore){
//         console.log("TIE");
//     }
// }

function updateScore(){
    scoreUpdt.textContent= `RoundNo: ${playround}
    Comp: ${computerScore}, You: ${humanScore}`;
}

function finalScore(){
    if(computerScore>humanScore){
            resultText.textContent = "You lose";
        }
        else if (humanScore>computerScore){
            resultText.textContent = "You win";

        }
        else{
            resultText.textContent = "Its a tie";
        }
}

function click(choice){
         playRound(choice,getComputerChoice());
    updateScore();

    if(playround>=3){
            finalScore();
            return;
        }

}




 rockBtn.addEventListener("click",()=>{
     click("rock");

 });
  paperBtn.addEventListener("click",()=>{
        click("paper");

 });
  scissorsBtn.addEventListener("click",()=>{
    click("scissors");
   
 });







