const questions = [
    {
        question: "What is the most important thing in a relationship?",
        options: ["Trust", "Love", "Communication", "Fun"],
        correct: 0
    },
    {
        question: "How often should couples go on dates?",
        options: ["Once a week", "Once a month", "Whenever possible", "Never"],
        correct: 2
    },
    {
        question: "What’s the best way to resolve an argument?",
        options: ["Yell louder", "Talk calmly", "Ignore it", "Compromise"],
        correct: 3
    },
    {
        question: "What makes a couple strong?",
        options: ["Similar interests", "Respect", "Shared goals", "All of the above"],
        correct: 3
    },
    {
        question: "How do you show love?",
        options: ["Gifts", "Words", "Actions", "All ways"],
        correct: 3
    }
];

let currentQuestion = 0;
let score = 0;
let selectedOption = null;

document.addEventListener('DOMContentLoaded', () => {
    loadQuestion();
});

function loadQuestion() {
    if (currentQuestion >= questions.length) {
        showResult();
        return;
    }
    const q = questions[currentQuestion];
    document.getElementById('question').textContent = q.question;
    const optionsDiv = document.getElementById('options');
    optionsDiv.innerHTML = '';
    q.options.forEach((option, index) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn btn';
        btn.textContent = option;
        btn.onclick = () => selectOption(index);
        optionsDiv.appendChild(btn);
    });
    updateProgress();
    document.getElementById('next-btn').style.display = 'none';
}

function selectOption(index) {
    selectedOption = index;
    document.querySelectorAll('.option-btn').forEach((btn, i) => {
        btn.classList.remove('selected');
        if (i === index) btn.classList.add('selected');
    });
    document.getElementById('next-btn').style.display = 'block';
}

function nextQuestion() {
    if (selectedOption === questions[currentQuestion].correct) score++;
    currentQuestion++;
    selectedOption = null;
    loadQuestion();
}

function updateProgress() {
    const progress = ((currentQuestion) / questions.length) * 100;
    document.getElementById('progress').style.width = progress + '%';
}

function showResult() {
    document.getElementById('quiz-container').style.display = 'none';
    document.getElementById('quiz-result').style.display = 'block';
    document.getElementById('score').textContent = `You scored ${score} out of ${questions.length}!`;
}

document.getElementById('next-btn').addEventListener('click', nextQuestion);