function checkGuess() {
  let secretNumber = Math.floor(Math.random() * 10) + 1;
  const guessInput = document.getElementById("guessInput");
  const guess = parseInt(guessInput.value);
  const resultMessage = document.getElementById("resultMessage");
  const result = document.getElementById("result");

  if (secretNumber === guess) {
    console.log("Correct");
    result.textContent = secretNumber;
    resultMessage.textContent = "Correct! Guessed the number";
    result.style.color = "green";
    resultMessage.style.color = "green";
  } else {
    console.log("Wrong");
    result.textContent = "The correct answer was " + secretNumber;
    resultMessage.textContent = "Wrong! Try again.";
    result.style.color = "red";
    resultMessage.style.color = "red";
  }
}
