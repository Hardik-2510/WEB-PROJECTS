// Improved Script for Quiz Application

const configContainer = document.querySelector(".config-container");
const quizContainer = document.querySelector(".quiz-container");
const answerOptions = document.querySelector(".answer-options");
const nextQuestionBtn = document.querySelector(".next-question-btn");
const questionStatus = document.querySelector(".question-status");
const timerDisplay = document.querySelector(".time-duration");
const resultContainer = document.querySelector(".result-container");

const QUIZ_TIME_LIMIT = 15;
let currentTime = QUIZ_TIME_LIMIT;
let timer = null;
let quizCategory = "Web Development"; // Default category
let numberOfQuestions = 5; // Default question count
let currentQuestion = null;
let questionIndexHistory = [];
let correctAnswerCount = 0;

const showQuizResult = () => {
    quizContainer.style.display = "none";
    resultContainer.style.display = "block";

    const resultText = `You answered <b>${correctAnswerCount}</b> out of <b>${numberOfQuestions}</b> questions correctly. Great Effort!`;
    document.querySelector(".result-message").innerHTML = resultText;
};

// Clear and reset the timer
const resetTimer = () => {
    clearInterval(timer);
    currentTime = QUIZ_TIME_LIMIT;
    timerDisplay.textContent = `${currentTime}s`;
};

// Start the timer
const startTimer = () => {
    timer = setInterval(() => {
        currentTime--;
        timerDisplay.textContent = `${currentTime}s`;

        if (currentTime <= 0) {
            clearInterval(timer);
            highlightCorrectAnswer();

            // Disable further interactions
            answerOptions.querySelectorAll(".answer-option").forEach(option => option.style.pointerEvents = "none");
            nextQuestionBtn.style.visibility = "visible";
        }
    }, 1000);
};

// Fetch Random Question
const getRandomQuestion = () => {
    const categoryQuestions = questions.find(cat => cat.category.toLowerCase() === quizCategory.toLowerCase()).questions || [];

    if (questionIndexHistory.length >= Math.min(categoryQuestions.length, numberOfQuestions)) {
        return showQuizResult();
    }

    const availableQuestions = categoryQuestions.filter((_, index) => !questionIndexHistory.includes(index));

    if (availableQuestions.length === 0) return showQuizResult();

    const randomQuestion = availableQuestions[Math.floor(Math.random() * availableQuestions.length)];
    questionIndexHistory.push(categoryQuestions.indexOf(randomQuestion));
    return randomQuestion;
};

const highlightCorrectAnswer = () => {
    const correctOption = answerOptions.querySelectorAll(".answer-option")[currentQuestion.correctAnswer];
    correctOption.classList.add("correct");

    const iconHTML = `<span class="material-symbols-rounded">check_circle</span>`;
    correctOption.insertAdjacentHTML("beforeend", iconHTML);
};

const handleAnswer = (option, answerIndex) => {
    clearInterval(timer);
    const isCorrect = currentQuestion.correctAnswer === answerIndex;
    option.classList.add(isCorrect ? "correct" : "incorrect");
    !isCorrect ? highlightCorrectAnswer() : correctAnswerCount++;
    const iconHTML = `<span class="material-symbols-rounded">${isCorrect ? "check_circle" : "cancel"}</span>`;
    option.insertAdjacentHTML("beforeend", iconHTML);

    answerOptions.querySelectorAll(".answer-option").forEach(option => option.style.pointerEvents = "none");
    nextQuestionBtn.style.visibility = "visible";
};

// Render the current question and its options
const renderQuestion = () => {
    currentQuestion = getRandomQuestion();
    if (!currentQuestion) return;

    resetTimer();
    startTimer();

    answerOptions.innerHTML = "";
    nextQuestionBtn.style.visibility = "hidden";
    document.querySelector(".question-text").textContent = currentQuestion.question;
    questionStatus.innerHTML = `<b>${questionIndexHistory.length}</b> of <b>${numberOfQuestions}</b> Questions`;

    currentQuestion.options.forEach((option, index) => {
        const li = document.createElement("li");
        li.classList.add("answer-option");
        li.textContent = option;
        answerOptions.appendChild(li);
        li.addEventListener("click", () => handleAnswer(li, index));
    });
};

// Reset the quiz
const resetQuiz = () => {
    resetTimer();
    correctAnswerCount = 0;
    questionIndexHistory = [];
    configContainer.style.display = "block";
    quizContainer.style.display = "none";
    resultContainer.style.display = "none";
};

// Category selection
document.querySelectorAll(".category-option").forEach(button => {
    button.addEventListener("click", () => {
        document.querySelectorAll(".category-option").forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");
        quizCategory = button.textContent;
    });
});

// Question count selection
document.querySelectorAll(".question-option").forEach(button => {
    button.addEventListener("click", () => {
        document.querySelectorAll(".question-option").forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");
        numberOfQuestions = parseInt(button.textContent, 10);
    });
});

// Start Quiz button
document.querySelector(".start-quiz-btn").addEventListener("click", () => {
    configContainer.style.display = "none";
    quizContainer.style.display = "block";
    renderQuestion();
});

// Next Question button
nextQuestionBtn.addEventListener("click", renderQuestion);

// Try Again button
document.querySelector(".try-again-btn").addEventListener("click", resetQuiz);
