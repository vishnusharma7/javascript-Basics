const correctAnswer = ["D", "B", "C", "D"];
const form = document.querySelector(".quiz-form");
const result = document.querySelector(".result");
const questions = document.querySelectorAll(".question");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let score = 0;
  const userAnswer = [
    form.q1.value,
    form.q2.value,
    form.q3.value
  ];

  userAnswer.forEach((answer, index) => {
    if (answer === correctAnswer[index]) {
      score += 1;
      questions[index].classList.add("correct");
    } else {
      questions[index].classList.add("wrong");
    }
  });

  scrollTo(0, 0);
  result.classList.remove("hide");
  result.querySelector("p").textContent = `You score ${score}/3`;
});