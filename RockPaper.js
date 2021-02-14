
// ------------------------------------------------------STEP 1 ----------------------//
// Computer chooses rock, scissors, paper randomly
// a particular task will be performed with a function
//  and as I have a kind of list of possible answers, I use Arrays.
//  built-in method (Math.floor(Math.random() * allAnswers.length)) takes the values out of the array randomly.
// store it into a variable

const computerSelection = function computerPlay(){ 
    const allAnswers = ["Rock", "Paper", "Scissors"]; 
    let randomAnswer = allAnswers[Math.floor(Math.random() * allAnswers.length)];
    return randomAnswer;
};

computerSelection();


// ---------------------------------------------------STEP 2-----------------------------------//

// const playerSelection  = prompt("Rock, Paper or Scissors?");
let selections = document.getElementsByClassName("selections");
let rockChoice = document.getElementById("rock");
let paperChoice = document.getElementById("paper");
let scissorsChoice = document.getElementById("scissors");



const playerSelection = function playerPlay() {
    playerPlay = playerPlay.toLowerCase();
    if (playerPlay === rockChoice.addEventListener('click', function(){
        return 'rock'; 
    }) || playerPlay=== paperChoice.addEventListener('click', function(){
        playerSelection = paperChoice; 
        return 'paper';
    }) || playerPlay === scissorsChoice.addEventListener('click', function(){
        playerSelection = scissorsChoice;
        return 'scissors';
    })
    ) {
      return playerPlay();
    } else {
      console.log('not a valid choice');
    }
  };



    

function playRound (playerSelection, computerSelection){
    if (computerSelection === "Rock" && playerSelection === scissorsChoice){
        return "You Lose! Rock beats Scissors"; 
       
   } else if (computerSelection === "Rock" && playerSelection === paperChoice) {
           return "You Win! Paper beats Rock";
       
       } else if (computerSelection === "Rock" && playerSelection === rockChoice) {
           return "Nobody wins";
       
     } else if (computerSelection === "Paper" && playerSelection === scissorsChoice) {
           return "You win! Scissors beats Paper";
       
       } else if (computerSelection === "Paper" && playerSelection === rockChoice) {
            return "You Lose! Paper beats Rock";
       
       } else if (computerSelection === "Paper" && playerSelection === paperChoice) {      
              return "Nobody wins";
       
      } else if (computerSelection === "Scissors" && playerSelection === rockChoice) {
           return "You win! Rock beats Scissors";
       
      } else if (computerSelection === "Scissors" && playerSelection === paperChoice) {
         return "You Lose! Scissors beats Paper";
       
      } else if (computerSelection === "Scissors" && playerSelection === scissorsChoice) {
          return "Nobody wins";
       } else {
           return "Play is over!";
       };
                     
   
   }; 
        

console.log(playRound(playerSelection, computerSelection))






















// I write another function which plays a round.
// I will have computerSelection and playerSelection as parameters, so that I can get both answers returned
// I will return a string as a message for the case when the both players give the answers 
// I already created a function in that computer chooeses a random answer, I also need a variable which contains players answer




//for (let round = 0; round < 5; round++) {}
 


// So I use my variables which contain answers as parameters in the playRound function
//........................Lets see the possible conditions and outcomes:
// function playRound (playerSelection, computerSelection){
//     if (computerSelection === "Rock" && playerSelection === "Scissors"){
//         return "You Lose! Rock beats Scissors"; 
       
//    } else if (computerSelection === "Rock" && playerSelection === "Paper") {
//            return "You Win! Paper beats Rock";
       
//        } else if (computerSelection === "Rock" && playerSelection === "Rock") {
//            return "Nobody wins";
       
//      } else if (computerSelection === "Paper" && playerSelection === "Scissors") {
//            return "You win! Scissors beats Paper";
       
//        } else if (computerSelection === "Paper" && playerSelection === "Rock") {
//             return "You Lose! Paper beats Rock";
       
//        } else if (computerSelection === "Paper" && playerSelection === "Paper") {      
//               return "Nobody wins";
       
//       } else if (computerSelection === "Scissors" && playerSelection === "Rock") {
//            return "You win! Rock beats Scissors";
       
//       } else if (computerSelection === "Scissors" && playerSelection === "Paper") {
//          return "You Lose! Scissors beats Paper";
       
//       } else if (computerSelection === "Scissors" && playerSelection === "Scissors") {
//           return "Nobody wins";
//        } else {
//            return "Play is over!";
//        };
                     
   
//    }; 
        

// console.log(playRound(playerSelection, computerSelection))


// I do not want to promt and get a user input, but work with buttons
// So, I created three buttons for the player: Rock, paper and scissors. I want that when the player clicks, it calls playerSelection and returns us the result of the playRound function





// for score

const game = () => {
    let pScore = 0;
    let cScore = 0;
    
}





    


