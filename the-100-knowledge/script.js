// =====================================================
// THE 100 KNOWLEDGE QUIZ
// Questions are stored as semantic HTML in #quiz-question-bank.
// Each .quiz-question-data has data-correct set to the zero-based
// index of the correct option.
// =====================================================

const questionBank = document.querySelectorAll(
    "#quiz-question-bank .quiz-question-data"
);

const questions = Array.from(questionBank, (item, index) => {
    const questionHeading = item.querySelector("h3");
    const optionItems = item.querySelectorAll(".quiz-question-options li");
    const correctIndex = Number.parseInt(item.dataset.correct, 10);

    if (!questionHeading || optionItems.length !== 4 ||
        !Number.isInteger(correctIndex) || correctIndex < 0 ||
        correctIndex >= optionItems.length) {
        throw new Error(`Invalid quiz question data at item ${index + 1}.`);
    }

    return {
        question: questionHeading.textContent.replace(/^\s*\d+\.\s*/, "").trim(),
        correctIndex,
        answers: Array.from(optionItems, (option, optionIndex) => [
            option.textContent.trim(),
            optionIndex === correctIndex ? 2 : 0
        ])
    };
});

if (questions.length !== 50) {
    console.warn(`The 100 quiz expected 50 questions but found ${questions.length}.`);
}

let currentQuestion = 0;
let selectedAnswers = new Array(questions.length).fill(null);

// ===============================
// ELEMENTS
// ===============================
const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");
const homeInfo = document.getElementById("home-info");

const startButton = document.getElementById("start-btn");
const restartButton = document.getElementById("restart-btn");
const shareButton = document.getElementById("share-btn");
const challengeButton = document.getElementById("challenge-btn");

const backButton = document.getElementById("back-btn");
const nextButton = document.getElementById("next-btn");
const submitButton = document.getElementById("submit-btn");

const questionNumber = document.getElementById("question-number");
const questionText = document.getElementById("question");
const answersContainer = document.getElementById("answers");
const progressBar = document.getElementById("progress-bar");

// Fail clearly rather than silently if the HTML and JS do not match.
if (!questions.length || !startButton || !quizScreen || !questionText || !answersContainer) {
    console.error("Quiz setup failed. Check that the HTML question bank and quiz element IDs are present.");
}

// ===============================
// BUTTON EVENTS
// ===============================
if (startButton) startButton.addEventListener("click", startQuiz);
if (restartButton) restartButton.addEventListener("click", restartQuiz);
if (shareButton) shareButton.addEventListener("click", shareResult);
if (challengeButton) challengeButton.addEventListener("click", shareResult);
if (backButton) backButton.addEventListener("click", goBack);
if (nextButton) nextButton.addEventListener("click", goNext);
if (submitButton) submitButton.addEventListener("click", showResult);

// ===============================
// START QUIZ
// ===============================
function startQuiz() {
    if (!questions.length) return;

    currentQuestion = 0;
    selectedAnswers = new Array(questions.length).fill(null);

    startScreen.classList.add("hidden");
    resultScreen.classList.add("hidden");
    quizScreen.classList.remove("hidden");
    homeInfo.classList.add("hidden");

    const suggestionsCard = document.getElementById("suggestions-card");
    if (suggestionsCard) suggestionsCard.classList.add("hidden");

    showQuestion();
}

// ===============================
// SHOW QUESTION
// ===============================
function showQuestion() {
    const current = questions[currentQuestion];
    if (!current) return;

    questionNumber.textContent = `Question ${currentQuestion + 1} of ${questions.length}`;
    questionText.textContent = current.question;
    answersContainer.innerHTML = "";

    const progress = ((currentQuestion + 1) / questions.length) * 100;
    progressBar.style.width = `${progress}%`;

    current.answers.forEach((answer, index) => {
        const button = document.createElement("button");
        button.className = "answer";
        button.type = "button";
        button.textContent = answer[0];
        button.setAttribute("aria-pressed", String(selectedAnswers[currentQuestion] === index));

        if (selectedAnswers[currentQuestion] === index) {
            button.classList.add("selected");
            button.style.backgroundColor = "#444";
            button.style.borderColor = "#ffffff";
            button.style.color = "#ffffff";
            button.style.fontWeight = "700";
            button.style.boxShadow = "0 0 0 2px rgba(255,255,255,0.25)";
        }

        button.addEventListener("click", () => selectAnswer(index));
        answersContainer.appendChild(button);
    });

    updateNavigation();
}

// ===============================
// SELECT ANSWER
// ===============================
function selectAnswer(answerIndex) {
    selectedAnswers[currentQuestion] = answerIndex;

    const buttons = answersContainer.querySelectorAll(".answer");
    buttons.forEach((button, index) => {
        const chosen = index === answerIndex;
        button.classList.toggle("selected", chosen);
        button.setAttribute("aria-pressed", String(chosen));
        button.style.backgroundColor = chosen ? "#444" : "";
        button.style.borderColor = chosen ? "#ffffff" : "";
        button.style.color = chosen ? "#ffffff" : "";
        button.style.fontWeight = chosen ? "700" : "";
        button.style.boxShadow = chosen ? "0 0 0 2px rgba(255,255,255,0.25)" : "";
    });

    updateNavigation();

    // Automatically advance after selection, while allowing Back to cancel it.
    const questionAtSelection = currentQuestion;
    window.setTimeout(() => {
        if (currentQuestion === questionAtSelection &&
            selectedAnswers[questionAtSelection] === answerIndex &&
            currentQuestion < questions.length - 1) {
            currentQuestion++;
            showQuestion();
        }
    }, 180);
}

// ===============================
// NEXT / BACK
// ===============================
function goNext() {
    if (currentQuestion === questions.length - 1) {
        if (selectedAnswers.every(answer => answer !== null)) showResult();
        return;
    }

    if (selectedAnswers[currentQuestion] === null) return;
    currentQuestion++;
    showQuestion();
}

function goBack() {
    if (currentQuestion > 0) {
        currentQuestion--;
        showQuestion();
    }
}

// ===============================
// UPDATE NAVIGATION
// ===============================
function updateNavigation() {
    const isFirst = currentQuestion === 0;
    const isLast = currentQuestion === questions.length - 1;
    const currentAnswered = selectedAnswers[currentQuestion] !== null;
    const allAnswered = selectedAnswers.every(answer => answer !== null);

    backButton.disabled = isFirst;

    if (isLast) {
        if (submitButton) {
            nextButton.classList.add("hidden");
            submitButton.classList.remove("hidden");
            submitButton.disabled = !allAnswered;
            submitButton.textContent = allAnswered ? "SUBMIT" : "Answer All Questions";
        } else {
            nextButton.classList.remove("hidden");
            nextButton.textContent = "SUBMIT";
            nextButton.disabled = !allAnswered;
        }
    } else {
        if (submitButton) submitButton.classList.add("hidden");
        nextButton.classList.remove("hidden");
        nextButton.textContent = "Next →";
        nextButton.disabled = !currentAnswered;
    }
}

// ===============================
// SCORE
// ===============================
function calculateScore() {
    let score = 0;
    selectedAnswers.forEach((answerIndex, questionIndex) => {
        if (answerIndex !== null) {
            score += questions[questionIndex].answers[answerIndex][1];
        }
    });
    return score;
}

// ===============================
// SHOW RESULT
// ===============================
function showResult() {
    if (!selectedAnswers.every(answer => answer !== null)) return;

    const correctAnswers = selectedAnswers.filter(
        (answerIndex, questionIndex) => answerIndex === questions[questionIndex].correctIndex
    ).length;
    const totalQuestions = questions.length;
    const incorrectAnswers = totalQuestions - correctAnswers;
    const score = calculateScore(); // 2 points per correct answer; 100 maximum for 50 questions.
    const accuracy = Math.round((correctAnswers / totalQuestions) * 100);

    homeInfo.classList.remove("hidden");
    quizScreen.classList.add("hidden");
    resultScreen.classList.remove("hidden");

    const suggestionsCard = document.getElementById("suggestions-card");
    if (suggestionsCard) suggestionsCard.classList.remove("hidden");

    document.getElementById("final-score").textContent = `${score}%`;

    const correctCount = document.getElementById("correct-count");
    const incorrectCount = document.getElementById("incorrect-count");
    const totalCount = document.getElementById("total-count");
    const accuracyPercent = document.getElementById("accuracy-percent");

    if (correctCount) correctCount.textContent = correctAnswers;
    if (incorrectCount) incorrectCount.textContent = incorrectAnswers;
    if (totalCount) totalCount.textContent = totalQuestions;
    if (accuracyPercent) accuracyPercent.textContent = `${accuracy}%`;

    let title;
    let description;
    let survival;
    let icon;

    if (score <= 20) {
        title = "☠️ Skaikru Casualty";
        description = "Your knowledge of The 100 is still pretty limited. You might want to stay away from Polis until you've done some serious studying.";
        survival = "You'd struggle on the Ground";
        icon = "☠️";
    } else if (score <= 40) {
        title = "🗡️ Grounder Survivor";
        description = "You know some of the important characters and events, but the world of The 100 still has plenty of surprises left for you.";
        survival = "Survive the early seasons";
        icon = "🗡️";
    } else if (score <= 60) {
        title = "🛡️ Skaikru Survivor";
        description = "You've got a solid knowledge of The 100. You know the Ark, the Grounders and many of the major events.";
        survival = "Survive most of the series";
        icon = "🛡️";
    } else if (score <= 80) {
        title = "🔥 Wonkru Warrior";
        description = "You know The 100 very well. The major characters, clans, conflicts and events are clearly familiar territory.";
        survival = "Survive the apocalypse";
        icon = "🔥";
    } else if (score <= 94) {
        title = "👑 Heda";
        description = "Impressive. Your knowledge of The 100 is strong enough to make you a serious contender for Commander.";
        survival = "Lead the clans";
        icon = "👑";
    } else {
        title = "⚔️ Pramheda";
        description = "You know The 100 inside and out. From the Ark and the Grounders to Sanctum, Bardo and transcendence, almost nothing escaped your memory.";
        survival = "You know everything";
        icon = "⚔️";
    }

    document.getElementById("result-title").textContent = title;
    document.getElementById("result-description").textContent = description;

    const survivalElement = document.getElementById("survival-time");
    if (survivalElement) survivalElement.textContent = survival;

    const knowledgeLevel = document.getElementById("knowledge-level");
    if (knowledgeLevel) knowledgeLevel.textContent = survival;

    const resultIcon = document.getElementById("result-icon");
    if (resultIcon) resultIcon.textContent = icon;

    progressBar.style.width = "100%";
    window.scrollTo({ top: 0, behavior: "smooth" });
}

// ===============================
// RESTART QUIZ
// ===============================
function restartQuiz() {
    currentQuestion = 0;
    selectedAnswers = new Array(questions.length).fill(null);

    resultScreen.classList.add("hidden");
    quizScreen.classList.add("hidden");
    startScreen.classList.remove("hidden");
    homeInfo.classList.remove("hidden");

    const suggestionsCard = document.getElementById("suggestions-card");
    if (suggestionsCard) suggestionsCard.classList.add("hidden");

    if (submitButton) {
        submitButton.classList.add("hidden");
        submitButton.disabled = true;
    }

    nextButton.classList.remove("hidden");
    nextButton.textContent = "Next →";
    nextButton.disabled = true;
    progressBar.style.width = "0%";

    window.scrollTo({ top: 0, behavior: "smooth" });
}

// ===============================
// SHARE RESULT
// ===============================
async function shareResult() {
    const title = document.getElementById("result-title").textContent;
    const survivalElement = document.getElementById("survival-time");
    const knowledgeElement = document.getElementById("knowledge-level");
    const finalScore = document.getElementById("final-score").textContent;

    const survival = survivalElement
        ? survivalElement.textContent
        : (knowledgeElement ? knowledgeElement.textContent : "");

    const shareText =
        `⚔️ I scored ${finalScore} on The 100 Quiz!\n\n` +
        `${title}\n${survival}\n\n` +
        `How well do YOU know The 100?`;

    const shareData = {
        title: "How Well Do You Know The 100?",
        text: shareText,
        // Keep this URL in sync with the page's canonical URL.
        url: "https://apocalypsequizzes.com/the-100-knowledge/"
    };

    try {
        if (navigator.share) {
            await navigator.share(shareData);
        } else if (navigator.clipboard && navigator.clipboard.writeText) {
            await navigator.clipboard.writeText(
                `${shareText}\n\nhttps://apocalypsequizzes.com/the-100-knowledge/`
            );
            alert("Your result has been copied! You can paste it anywhere.");
        } else {
            window.prompt("Copy your quiz result:", `${shareText}\n\nhttps://apocalypsequizzes.com/the-100-knowledge/`);
        }
    } catch (error) {
        // A share dialog being dismissed is normal; avoid treating it as a failure.
        console.log("Sharing cancelled or unavailable.");
    }
}

// ===============================
// GLOBAL SITE MENU
// ===============================
const menuToggle = document.getElementById("menu-toggle");
const siteMenu = document.getElementById("site-menu");

if (menuToggle && siteMenu) {
    menuToggle.addEventListener("click", function (event) {
        event.stopPropagation();
        const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
        siteMenu.hidden = isOpen;
        menuToggle.setAttribute("aria-expanded", String(!isOpen));
        menuToggle.setAttribute("aria-label", isOpen ? "Open navigation" : "Close navigation");
    });

    document.addEventListener("click", function (event) {
        if (!siteMenu.hidden && !siteMenu.contains(event.target) && !menuToggle.contains(event.target)) {
            siteMenu.hidden = true;
            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.setAttribute("aria-label", "Open navigation");
        }
    });

    siteMenu.querySelectorAll("a").forEach(function (link) {
        link.addEventListener("click", function () {
            siteMenu.hidden = true;
            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.setAttribute("aria-label", "Open navigation");
        });
    });
}
