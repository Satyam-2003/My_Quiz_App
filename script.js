const questions = [
  {
    question: "Which is the largest animal in this world ?",
    answers: [
      {
        text: "Shark",
        correct: false,
      },
      {
        text: "Whale",
        correct: true,
      },
      {
        text: "Elephant",
        correct: false,
      },
      {
        text: "Giraffe",
        correct: false,
      },
    ],
  },
  {
    question: "Which animal is known as the 'Ship of the Desert ?",
    answers: [
      {
        text: "Camel",
        correct: true,
      },
      {
        text: "Tiger",
        correct: false,
      },
      {
        text: "Fox",
        correct: false,
      },
      {
        text: "Giraffe",
        correct: false,
      },
    ],
  },
  {
    question: "How many days are there in a week ?",
    answers: [
      {
        text: "1",
        correct: false,
      },
      {
        text: "5",
        correct: false,
      },
      {
        text: "7",
        correct: true,
      },
      {
        text: "6",
        correct: false,
      },
    ],
  },
  {
    question: "How many letters are there in the English alphabet ?",
    answers: [
      {
        text: "33",
        correct: false,
      },
      {
        text: "29",
        correct: false,
      },
      {
        text: "26",
        correct: true,
      },
      {
        text: "34",
        correct: false,
      },
    ],
  },
  {
    question: "Baby frog is known as.......",
    answers: [
      {
        text: "Dog",
        correct: false,
      },
      {
        text: "Baby Frog",
        correct: false,
      },
      {
        text: "Tadpole",
        correct: true,
      },
      {
        text: "Duck",
        correct: false,
      },
    ],
  },
  {
    question: "Name the National bird of India ?",
    answers: [
      {
        text: "Dog",
        correct: false,
      },
      {
        text: "Frog",
        correct: false,
      },
      {
        text: "Peacock",
        correct: true,
      },
      {
        text: "Duck",
        correct: false,
      },
    ],
  },
  {
    question: "Which animal is known as the king of the jungle?",
    answers: [
      {
        text: "Dog",
        correct: false,
      },
      {
        text: "Frog",
        correct: false,
      },
      {
        text: "Lion",
        correct: true,
      },
      {
        text: "Duck",
        correct: false,
      },
    ],
  },
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}

function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButton.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}

function resetState() {
  nextButton.style.display = "none";
  while (answerButton.firstChild) {
    answerButton.removeChild(answerButton.firstChild);
  }
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("incorrect");
  }
  Array.from(answerButton.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextButton.style.display = "block";
}

function showScore() {
  resetState();
  questionElement.innerHTML = `Your score is ${score} out of ${questions.length}`;
  nextButton.innerHTML = "Play Again";
  nextButton.style.display = "block";
}

function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});

startQuiz();
