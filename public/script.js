let questions = [
  {
    q: "Domanda di esempio: Chi è la sorella di Tanjiro?",
    choices: ["Mitsuri", "Shinobu", "Nezuko", "Kanae"],
    a: 2
  }
];

let current = 0;
let score = 0;
let timer;
let timeLeft = 10;

function showQuestion() {
  const q = questions[current];
  document.getElementById("question").textContent = q.q;
  const choicesDiv = document.getElementById("choices");
  choicesDiv.innerHTML = "";
  q.choices.forEach((choice, i) => {
    const btn = document.createElement("button");
    btn.textContent = choice;
    btn.onclick = () => checkAnswer(i);
    choicesDiv.appendChild(btn);
  });
  startTimer();
}

function startTimer() {
  clearInterval(timer);
  timeLeft = 10;
  document.getElementById("timer").textContent = `Tempo: ${timeLeft}`;
  timer = setInterval(() => {
    timeLeft--;
    document.getElementById("timer").textContent = `Tempo: ${timeLeft}`;
    if (timeLeft <= 0) {
      clearInterval(timer);
      nextQuestion();
    }
  }, 1000);
}

function checkAnswer(choice) {
  clearInterval(timer);
  const q = questions[current];
  if (choice === q.a) {
    score++;
    alert("Corretto!");
  } else {
    alert("Sbagliato!");
  }
  nextQuestion();
}

function nextQuestion() {
  current++;
  if (current < questions.length) {
    showQuestion();
  } else {
    document.getElementById("game").innerHTML =
      `<h2>Quiz finito! Punteggio: ${score}/${questions.length}</h2>`;
  }
}

showQuestion();
