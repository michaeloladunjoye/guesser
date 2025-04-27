let secretNumber = Math.floor(Math.random() * 10) + 1;
let attempt = 0;

function checkGuess() {
  const guessInput = document.getElementById("guessInput");
  const guess = parseInt(guessInput.value);
  const resultMessage = document.getElementById("resultMessage");
  const result = document.getElementById("result");
  const attemptDisplay = document.getElementById("attempts");
  const playAgain = document.getElementById("resetButton");
  const display=document.getElementById("attmps");
  attempt++;

  if (attempt > 3) {
    result.textContent = "you have used all your 3 attempts and got it wrong";
    result.textContent = "now the number wil reset";
    playAgain.style.display = "inline-block";
    guessInput.disabled = true;
  } else {
    if (secretNumber === guess) {
      console.log("Correct");
      result.textContent = secretNumber;
      resultMessage.textContent = "Correct! Guessed the number";
      result.style.color = "green";
      resultMessage.style.color = "green";
      playAgain.style.display = "inline-block";
      guessInput.disabled = true;
    } else {
      resultMessage.textContent = "wrong retry your almost there";
      resultMessage.style.color ="red"
    }
  }
  display.textContent = `attempts: ${attempt}`;
  display.style.color="red"
}

function resetGame() {
  attempt = 0;
  secretNumber = Math.floor(Math.random() * 10) + 1;
  document.getElementById("guessInput").value = "";
  document.getElementById("resultMessage").textContent = "";
  document.getElementById("result").textContent = "";
  document.getElementById("attempts").textContent = "";
  document.getElementById("guessInput").disabled = false;
  document.getElementById("resetButton").style.display ="none"
}
