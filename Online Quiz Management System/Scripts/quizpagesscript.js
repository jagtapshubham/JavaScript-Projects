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
      alert("Time is up!");
      window.location.href = "/quizmenu.html";
    }
  }, 1000);
  const submitQuiz = document.getElementById("submit-quiz");
  submitQuiz.addEventListener("click", () => {
    alert("Submitted Quiz Successfully, Check Result.");
    window.location.href = "/quizmenu.html";
  });
};
