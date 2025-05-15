// Function to get computer's random choice
function getComputerChoice() {
    const randomNumber = Math.random();
  
    if (randomNumber < 1 / 3) {
      return "rock";
    } else if (randomNumber < 2 / 3) {
      return "paper";
    } else {
      return "scissors";
    }
  }
  
  // Function to get human's choice using prompt
  function getHumanChoice() {
    const input = prompt("Enter your choice: Rock, Paper, or Scissors");
    return input.toLowerCase();
  }
  
  // Play a single round and update scores
  function playRound(humanChoice, computerChoice) {
    // Normalize input
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();
  
    console.log(`You chose: ${humanChoice}`);
    console.log(`Computer chose: ${computerChoice}`);
  
    // Determine winner
    if (humanChoice === computerChoice) {
      console.log("It's a tie!");
      return "tie";
    }
  
    if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "paper" && computerChoice === "rock") ||
      (humanChoice === "scissors" && computerChoice === "paper")
    ) {
      console.log(`You win! ${humanChoice} beats ${computerChoice}`);
      return "human";
    } else {
      console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
      return "computer";
    }
  }
  
  // Play the full game (5 rounds)
  function playGame() {
    let humanScore = 0;
    let computerScore = 0;
  
    for (let round = 1; round <= 5; round++) {
      console.log(`\n--- Round ${round} ---`);
      const humanChoice = getHumanChoice();
      const computerChoice = getComputerChoice();
  
      const result = playRound(humanChoice, computerChoice);
  
      if (result === "human") {
        humanScore++;
      } else if (result === "computer") {
        computerScore++;
      }
    }
  
    console.log("\n=== Final Result ===");
    console.log(`Your Score: ${humanScore}`);
    console.log(`Computer Score: ${computerScore}`);
  
    if (humanScore > computerScore) {
      console.log("You won the game!");
    } else if (computerScore > humanScore) {
      console.log("The computer won the game!");
    } else {
      console.log("The game is a tie!");
    }
  }
  
  // Start the game
  playGame();
  