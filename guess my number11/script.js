let secretNumber = Math.trunc(Math.random() * 10) + 1;

let score = 10;

let highscore = 0;

const displaymessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  console.log(guess, typeof guess);

  if (!guess) {
    // document.querySelector(".message").textContent = "no number";
    displaymessage("no number");
    //====================================
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "correct number";
    document.querySelector(".number").textContent = secretNumber;

    document.querySelector("body").style.backgroundColor = "#3ca71bff";

    document.querySelector(".number").style.width = "30rem";
    //when high============================================================================
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "too high";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "you lost the game";
      document.querySelector("body").style.backgroundColor = "#d81111ff";

      document.querySelector(".number").style.width = "30rem";
      document.querySelector(".score").textContent = 0;
    }

    //when low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "too low";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "you lost the game";
      document.querySelector("body").style.backgroundColor = "#d81111ff";

      document.querySelector(".number").style.width = "30rem";
      document.querySelector(".score").textContent = 0;
    }
  }
  //=================================================================================================
  document.querySelector(".again").addEventListener("click", function () {
    score = 10;
    secretNumber = Math.trunc(Math.random() * 10) + 1;

    document.querySelector(".message").textContent = "start guessing...";
    document.querySelector(".score").textContent = score;
    document.querySelector(".number").textContent = "?";
    document.querySelector(".guess").value = " ";

    document.querySelector("body").style.backgroundColor = "#222";

    document.querySelector(".number").style.width = "15rem";
  });
});
