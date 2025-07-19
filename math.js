let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;
let gameOver = false;

function checkGuess() {
    const guessInput = document.getElementById("guess");
    const result = document.getElementById("result");
    const guess = Number(guessInput.value.trim());

    if (gameOver) {
        result.textContent = "The game is over! Refresh the page to play again.";
        return;
    }

    if (!guess || guess < 1 || guess > 100) {
        result.textContent = "⚠️ Please enter a number between 1 and 100.";
        return;
    }

    attempts++;

    if (guess === randomNumber) {
        result.textContent = `🎉 Woohoo! You guessed it right in ${attempts} attempt${attempts > 1 ? "s" : ""}. Great job!`;
        guessInput.disabled = true;
        gameOver = true;
    } else if (guess < randomNumber) {
        result.textContent = `🔍 Not quite! Try something a bit higher. Attempt #${attempts}.`;
    } else {
        result.textContent = `🔍 Oops! That’s a bit too high. Give a lower number a try. Attempt #${attempts}.`;
    }

    guessInput.value = "";
    guessInput.focus();
}
