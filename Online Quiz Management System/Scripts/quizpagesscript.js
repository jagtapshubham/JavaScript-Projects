window.onload = function () {
  let totalTime = 120;
  var timerElement = document.getElementById("display-timer");

  let countdown = setInterval(function () {
    let minutes = Math.floor(totalTime / 60);
    let seconds = totalTime % 60;

    var formattedTime =
      (minutes < 10 ? "0" : "") +
      minutes +
      ":" +
      (seconds < 10 ? "0" : "") +
      seconds;

    timerElement.textContent = "Time Left: " + formattedTime;
    totalTime--;
    if (totalTime < -1) {
      clearInterval(countdown);
      window.location.href = "/Pages/scoredisplay.html";
    }
  }, 1000);
  const submitQuiz = document.getElementById("submit-quiz");
  if (submitQuiz) {
    submitQuiz.addEventListener("click", () => {
      window.location.href = "/Pages/scoredisplay.html";
    });
  }

  const quizName = document
    .querySelector(".quiz-page-nav")
    .children[1].innerHTML.trim();
  sessionStorage.setItem("QuizName", quizName);
  console.log(quizName);
};

/* Score Page */
const displayName = document.getElementById("name");
const testName = document.getElementById("test-name");
const firstName = sessionStorage.getItem("firstName").toUpperCase();
const lastName = sessionStorage.getItem("lastName").toUpperCase();

displayName.textContent = `${firstName} ${lastName}`;
testName.textContent = sessionStorage.getItem("QuizName");

// Close button
const closeScoreBtn = document.getElementById("close-score-btn");

closeScoreBtn.addEventListener("click", () => {
  window.location.href = "/Pages/quizmenu.html";
});
