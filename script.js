// one way to select by ID
const p1 = document.querySelector("#p1");

// another way to select by ID (notice no octothorpe)
const p2 = document.getElementById("p2");

const playToChoice = document.querySelector("input");

const playToNum = document.querySelector(".play-to");

let p1Score = 0;
let p2Score = 0;

let playToScore = 5;

playToNum.innerText = playToScore;

/**
 * Updates the winning score if the entered choice is higher than both current scores
 * Toggles color of winning score if one had previously been achieved and is now not winning
 * Turns off game over message if win state had existed and winning score was increased 
 * (could handle color changes through a CSS class toggle as well)
 */
playToChoice.addEventListener("input", function (event) {
    if(p1Score < playToChoice.value && p2Score < playToChoice.value) {
        playToScore = this.value;
        playToNum.innerText = playToScore;
        if(p1ScoreDisplay.style.color === "green") {
            p1ScoreDisplay.style.color = "black";
        }
        if(p2ScoreDisplay.style.color === "green") {
            p2ScoreDisplay.style.color = "black";
        }
        if(document.querySelector("h2").textContent === "GAME OVER!!")
        {
            document.querySelector("h2").textContent = "";
        }
    }
})


const p1ScoreDisplay = document.querySelector(".player-one");
const p2ScoreDisplay = document.querySelector(".player-two");

const reset = document.querySelector("#reset");

/**
 * Updates player 1 score as long as a winner doesn't exist
 */
p1.addEventListener("click", function () {
    if (p1Score < playToScore && p2Score != playToScore) {
        p1Score++;
        p1ScoreDisplay.textContent = p1Score;
        // we are comparing a number to a string, so we don't do a strict comparison
        // (or, we could cast or the other variable as a type to match)
        if (p1Score == playToScore) {
            p1ScoreDisplay.style.color = "green";
            document.querySelector("h2").textContent = "GAME OVER!!";
        }
    }
})
/**
 * Updates player 2 score as long as a winner doesn't exist
 */
p2.addEventListener("click", function () {
    if (p2Score < playToScore && p1Score != playToScore) {
        p2Score++;
        p2ScoreDisplay.textContent = p2Score;
        if (p2Score == playToScore) {
            p2ScoreDisplay.style.color = "green";
            document.querySelector("h2").textContent = "GAME OVER!!";
        }
    }
})

/**
 * Resets all conditions to initial values
 */
reset.addEventListener("click", function () {
    p1Score = 0;
    p2Score = 0;
    p1ScoreDisplay.textContent = p1Score;
    p2ScoreDisplay.textContent = p2Score;
    p1ScoreDisplay.style.color = "black";
    p2ScoreDisplay.style.color = "black";
    playToChoice.value = 0;
    document.querySelector("h2").textContent = "";
    playToScore = 5;
    playToNum.innerText = 5;
})

