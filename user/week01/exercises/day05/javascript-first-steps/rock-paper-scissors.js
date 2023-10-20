function getRandomMove(){
    const moves = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);

}

function checkMove( move, computerMove ){
    if (move === computerMove) {
        return "draw";
      } else if (
        (0 === "rock" && computerMove === "scissors") ||
        (1 === "paper" && computerMove === "rock") ||
        (2 === "scissors" && computerMove === "paper")
      ) {
        return "won";
      } else if (
        (0 === "rock" && computerMove === "paper") ||
        (1 === "paper" && computerMove === "scissors") ||
        (2 === "scissors" && computerMove === "rock")
      ) {
        return "lost";
      } else {
        return "invalid move";
      }
}

// I am confused 
 