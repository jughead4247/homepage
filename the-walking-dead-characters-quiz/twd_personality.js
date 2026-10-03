(() => {

"use strict";

/* ============================================================
DOM ELEMENTS
============================================================ */

const startScreen =
document.getElementById("start-screen");

const quizScreen =
document.getElementById("quiz-screen");

const resultScreen =
document.getElementById("result-screen");

const homeInfo =
document.getElementById("home-info");

const suggestionsCard =
document.getElementById("suggestions-card");

/* -------------------------
Main Buttons
------------------------- */

const startBtn =
document.getElementById("start-btn");

const backBtn =
document.getElementById("back-btn");

const nextBtn =
document.getElementById("next-btn");

const submitBtn =
document.getElementById("submit-btn");

const restartBtn =
document.getElementById("restart-btn");

const shareBtn =
document.getElementById("share-btn");

const challengeBtn =
document.getElementById("challenge-btn");

/* -------------------------
Quiz Elements
------------------------- */

const questionNumber =
document.getElementById("question-number");

const progressText =
document.getElementById("progress-text") ||
document.getElementById("score-display");

const progressBar =
document.getElementById("progress-bar");

const questionElement =
document.getElementById("question");

const answersElement =
document.getElementById("answers");

/* -------------------------
Result Elements
------------------------- */

const resultTitle =
document.getElementById("result-title");

const winnerImage =
document.getElementById("winner-image");

const matchScore =
document.getElementById("match-score");

const resultDescription =
document.getElementById("result-description");

const topMatches =
document.getElementById("top-matches");

const strongestTraits =
document.getElementById("strongest-traits");

const lowestTraits =
document.getElementById("lowest-traits");

const traitProfile =
document.getElementById("trait-profile");

/* ============================================================
ENGINE CHECK
============================================================ */

/*
   twd_personality_complete.js must load BEFORE this file.

   The personality engine exports:
   window.TWD_QUESTIONS
   window.calculatePersonality
   window.calculateFinalPersonality
*/

const questions =
    window.TWD_QUESTIONS || [];

if (
    !questions.length ||
    typeof window.calculatePersonality !== "function" ||
    typeof window.calculateFinalPersonality !== "function"
) {

    console.error(
        "TWD personality engine was not loaded correctly."
    );

    if (startBtn) {

        startBtn.disabled = true;

        startBtn.textContent =
            "QUIZ DATA ERROR";
    }

    return;
}

/* ============================================================
QUIZ STATE
============================================================ */

/*
   IMPORTANT:

   The engine expects an ARRAY:

   [
       answerIndexForQuestion1,
       answerIndexForQuestion2,
       ...
   ]

   Therefore the UI also stores answers as an array.
*/

let currentQuestion = 0;

let answerIndexes = [];

let lastResult = null;

/* ============================================================
SCREEN CONTROL
============================================================ */

function showScreen(screen) {

    if (!screen) {
        return;
    }

    if (startScreen) {
        startScreen.classList.add("hidden");
    }

    if (quizScreen) {
        quizScreen.classList.add("hidden");
    }

    if (resultScreen) {
        resultScreen.classList.add("hidden");
    }

    screen.classList.remove("hidden");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}

/* ============================================================
START QUIZ
============================================================ */

function startQuiz() {

    currentQuestion = 0;

    answerIndexes = [];

    lastResult = null;

    if (submitBtn) {
        submitBtn.disabled = false;
    }

    if (homeInfo) {

        homeInfo.classList.add(
            "hidden"
        );
    }

    if (suggestionsCard) {

        suggestionsCard.classList.add(
            "hidden"
        );
    }

    showScreen(
        quizScreen
    );

    renderQuestion();

}

/* ============================================================
GET CURRENT ANSWER
============================================================ */

function getSelectedIndex() {

    const question =
        questions[currentQuestion];

    if (!question) {
        return null;
    }

    const index =
        answerIndexes[currentQuestion];

    if (
        Number.isInteger(index) &&
        index >= 0 &&
        index < question.answers.length
    ) {

        return index;
    }

    return null;

}

/* ============================================================
RENDER CURRENT QUESTION
============================================================ */

function renderQuestion() {

    const question =
        questions[currentQuestion];

    if (!question) {
        return;
    }

    if (!questionNumber) {

        console.error(
            "Missing HTML element: #question-number"
        );

        return;
    }

    if (!progressBar) {

        console.error(
            "Missing HTML element: #progress-bar"
        );

        return;
    }

    if (!questionElement) {

        console.error(
            "Missing HTML element: #question"
        );

        return;
    }

    if (!answersElement) {

        console.error(
            "Missing HTML element: #answers"
        );

        return;
    }

    questionNumber.textContent =
        `Question ${currentQuestion + 1} of ${questions.length}`;

    const percent =
        Math.round(
            ((currentQuestion + 1) /
                questions.length) * 100
        );

    if (progressText) {

        progressText.textContent =
            `${percent}%`;
    }

    progressBar.style.width =
        `${percent}%`;

    questionElement.textContent =
        question.question;

    answersElement.innerHTML = "";

    const selectedIndex =
        getSelectedIndex();

    question.answers.forEach(
        (answer, index) => {

            const button =
                document.createElement("button");

            button.type =
                "button";

            button.className =
                "answer";

            button.textContent =
                answer.text;

            if (
                selectedIndex === index
            ) {

                button.classList.add(
                    "selected"
                );
            }

            button.addEventListener(
                "click",
                () => {

                    selectAnswer(index);

                }
            );

            answersElement.appendChild(
                button
            );

        }
    );

    updateNavigation();

}

/* ============================================================
SELECT ANSWER
============================================================ */

function selectAnswer(answerIndex) {

    const question =
        questions[currentQuestion];

    if (!question) {
        return;
    }

    /*
       Store answer by QUESTION INDEX.

       This matches the personality engine's expected format.
    */

    answerIndexes[currentQuestion] =
        answerIndex;

    const buttons =
        answersElement.querySelectorAll(
            ".answer"
        );

    buttons.forEach(
        (button, index) => {

            button.classList.toggle(
                "selected",
                index === answerIndex
            );

        }
    );

    updateNavigation();

    /*
       Automatically advance after a short delay.
       The delay prevents accidental double clicks.
    */

    const questionAtSelection =
        currentQuestion;

    const selectedAnswerAtSelection =
        answerIndex;

    setTimeout(() => {

        const selectedQuestion =
            questions[
                questionAtSelection
            ];

        if (!selectedQuestion) {
            return;
        }

        const currentSavedAnswer =
            answerIndexes[
                questionAtSelection
            ];

        if (
            currentQuestion ===
                questionAtSelection &&

            currentSavedAnswer ===
                selectedAnswerAtSelection &&

            currentQuestion <
                questions.length - 1
        ) {

            currentQuestion++;

            renderQuestion();
        }

    }, 180);

}

/* ============================================================
NEXT BUTTON
============================================================ */

function goNext() {

    if (
        getSelectedIndex() === null
    ) {

        return;
    }

    if (
        currentQuestion ===
        questions.length - 1
    ) {

        submitQuiz();

        return;
    }

    currentQuestion++;

    renderQuestion();

}

/* ============================================================
BACK BUTTON
============================================================ */

function goBack() {

    if (currentQuestion <= 0) {
        return;
    }

    currentQuestion--;

    renderQuestion();

}

/* ============================================================
CHECK IF ALL QUESTIONS ANSWERED
============================================================ */

function allQuestionsAnswered() {

    return questions.every(
        (question, index) => {

            const indexSelected =
                answerIndexes[index];

            return (
                Number.isInteger(indexSelected) &&
                indexSelected >= 0 &&
                indexSelected <
                    question.answers.length
            );

        }
    );

}

/* ============================================================
UPDATE NAVIGATION BUTTONS
============================================================ */

function updateNavigation() {

    const isFirst =
        currentQuestion === 0;

    const isLast =
        currentQuestion ===
        questions.length - 1;

    const currentAnswered =
        getSelectedIndex() !== null;

    const allAnswered =
        allQuestionsAnswered();

    /* BACK stays visible, disabled only on Question 1 */

    if (backBtn) {

        backBtn.disabled =
            isFirst;
    }

    if (isLast) {

        if (nextBtn) {

            nextBtn.classList.add(
                "hidden"
            );
        }

        if (submitBtn) {

            submitBtn.classList.remove(
                "hidden"
            );

            submitBtn.disabled =
                !allAnswered;

            submitBtn.textContent =
                allAnswered
                    ? "SEE MY RESULT"
                    : "Answer All Questions";
        }

        return;
    }

    if (submitBtn) {

        submitBtn.classList.add(
            "hidden"
        );
    }

    if (nextBtn) {

        nextBtn.classList.remove(
            "hidden"
        );

        nextBtn.textContent =
            "Next →";

        nextBtn.disabled =
            !currentAnswered;
    }

}

/* ============================================================
SUBMIT QUIZ
============================================================ */

function submitQuiz() {

    const unanswered =
        questions.filter(
            (question, index) => {

                const answer =
                    answerIndexes[index];

                return (
                    !Number.isInteger(answer) ||
                    answer < 0 ||
                    answer >=
                        question.answers.length
                );

            }
        );

    if (unanswered.length > 0) {

        console.error(
            "Quiz is incomplete. Unanswered question numbers:",
            unanswered.map(
                question =>
                    questions.indexOf(question) + 1
            )
        );

        return;
    }

    if (submitBtn) {
        submitBtn.disabled = true;
    }

    try {

        /*
           Send the ARRAY directly to the personality engine.
        */

        const result =
            window.calculateFinalPersonality(
                answerIndexes
            );

        if (
            !result ||
            !result.winner
        ) {

            throw new Error(
                "No personality result returned."
            );
        }

        lastResult =
            result;

        renderResult(
            result
        );

        showScreen(
            resultScreen
        );

        if (homeInfo) {

            homeInfo.classList.remove(
                "hidden"
            );
        }

        if (suggestionsCard) {

            suggestionsCard.classList.remove(
                "hidden"
            );
        }

    } catch (error) {

        console.error(
            "Unable to calculate TWD result:",
            error
        );

        if (submitBtn) {
            submitBtn.disabled = false;
        }

        alert(
            "There was a problem calculating your result. Please refresh the page and try again."
        );
    }

}

/* ============================================================
FORMAT SCORE
============================================================ */

function formatScore(score) {

    const value =
        Number(score);

    if (!Number.isFinite(value)) {
        return "0%";
    }

    return `${value.toFixed(1)}%`;

}

/* ============================================================
RENDER RESULT
============================================================ */

function renderResult(result) {

    const winner =
        result.winner;

    if (!winner) {
        return;
    }

    if (resultTitle) {

        resultTitle.textContent =
            `You are most like ${winner.name}`;
    }

    if (matchScore) {

        matchScore.textContent =
            formatScore(winner.score);
    }

    if (winnerImage) {

        if (winner.image) {

            winnerImage.src =
                winner.image;

            winnerImage.alt =
                winner.name;

        } else {

            winnerImage.removeAttribute(
                "src"
            );

            winnerImage.alt =
                "";
        }

    }

    if (resultDescription) {

        resultDescription.textContent =
            `${winner.name} is your closest personality match based on your 16-trait profile. ` +
            `Your decisions produced a ${formatScore(winner.score)} match with this character.`;
    }

    /* -------------------------
       TOP 3 MATCHES
       ------------------------- */

    if (
        Array.isArray(result.results)
    ) {

        renderTopMatches(
            result.results.slice(0, 3)
        );
    }

    /* -------------------------
   STRONGEST TRAITS
   ------------------------- */

if (
    Array.isArray(
        result.strongestTraits
    )
) {

    const strongest =
        result.strongestTraits
            .slice()
            .sort(
                (a, b) =>
                    Number(b.score) -
                    Number(a.score)
            )
            .slice(0, 5);

    renderTraitList(
        strongestTraits,
        strongest
    );
}


/* -------------------------
   LOWEST TRAITS
   ------------------------- */

if (
    result.profile &&
    lowestTraits
) {

    const lowest =
        Object.entries(
            result.profile
        )
        .map(
            ([key, score]) => ({

                trait: key,

                label:
                    window.TWD_TRAITS?.[key] ||
                    key,

                score:
                    Number(score)

            })
        )
        .sort(
            (a, b) =>
                a.score - b.score
        )
        .slice(0, 5);

    renderTraitList(
        lowestTraits,
        lowest
    );
}


/* -------------------------
   FULL PROFILE
   ------------------------- */

if (
    result.profile
) {

    renderFullProfile(
        result.profile
    );
}

/* ============================================================
RENDER TOP 3 MATCHES
============================================================ */

function renderTopMatches(matches) {

    if (!topMatches) {
        return;
    }

    topMatches.innerHTML =
        "";

    matches.forEach(
        (match, index) => {

            const row =
                document.createElement(
                    "div"
                );

            row.className =
                "match-item";

            const rank =
                document.createElement(
                    "div"
                );

            rank.className =
                "match-rank";

            rank.textContent =
                `#${index + 1}`;

            const image =
                document.createElement(
                    "img"
                );

            image.className =
                "match-thumb";

            if (match.image) {

                image.src =
                    match.image;
            }

            image.alt =
                match.name;

            image.loading =
                "lazy";

            const name =
                document.createElement(
                    "div"
                );

            name.className =
                "match-name";

            name.textContent =
                match.name;

            const percent =
                document.createElement(
                    "div"
                );

            percent.className =
                "match-percent";

            percent.textContent =
                formatScore(match.score);

            row.append(
                rank,
                image,
                name,
                percent
            );

            topMatches.appendChild(
                row
            );

        }
    );

}

/* ============================================================
RENDER TRAIT LIST
============================================================ */

function renderTraitList(
    container,
    traits
) {

    if (!container) {
        return;
    }

    container.innerHTML =
        "";

    if (!Array.isArray(traits)) {
        return;
    }

    traits.forEach(
        trait => {

            const row =
                document.createElement(
                    "div"
                );

            row.className =
                "trait-row";

            const top =
                document.createElement(
                    "div"
                );

            top.className =
                "trait-top";

            const name =
                document.createElement(
                    "span"
                );

            name.className =
                "trait-name";

            name.textContent =
                trait.label ||
                trait.name ||
                trait.trait ||
                trait.id ||
                "";

            const value =
                document.createElement(
                    "span"
                );

            value.className =
                "trait-value";

            const numericScore =
                Number(trait.score);

            value.textContent =
                Number.isFinite(numericScore)
                    ? `${Math.round(numericScore)}%`
                    : "0%";

            top.append(
                name,
                value
            );

            const bar =
                document.createElement(
                    "div"
                );

            bar.className =
                "trait-bar";

            const fill =
                document.createElement(
                    "div"
                );

            fill.className =
                "trait-fill";

            fill.style.width =
                `${Math.max(
                    0,
                    Math.min(
                        100,
                        Number.isFinite(numericScore)
                            ? numericScore
                            : 0
                    )
                )}%`;

            bar.appendChild(
                fill
            );

            row.append(
                top,
                bar
            );

            container.appendChild(
                row
            );

        }
    );

}

/* ============================================================
RENDER FULL TRAIT PROFILE
============================================================ */

function renderFullProfile(
    profile
) {

    if (!traitProfile) {
        return;
    }

    traitProfile.innerHTML =
        "";

    /*
       Correct globals exported by the engine.
    */

    const keys =
        window.TWD_TRAIT_KEYS || [];

    const labels =
        window.TWD_TRAITS || {};

    keys.forEach(
        key => {

            const score =
                Number(
                    profile[key] ?? 65
                );

            const row =
                document.createElement(
                    "div"
                );

            row.className =
                "profile-row";

            const label =
                document.createElement(
                    "div"
                );

            label.className =
                "profile-label";

            const name =
                document.createElement(
                    "span"
                );

            name.textContent =
                labels[key] || key;

            const value =
                document.createElement(
                    "span"
                );

            value.textContent =
                Math.round(score);

            label.append(
                name,
                value
            );

            const track =
                document.createElement(
                    "div"
                );

            track.className =
                "profile-track";

            const fill =
                document.createElement(
                    "div"
                );

            fill.className =
                "profile-fill";

            fill.style.width =
                `${Math.max(
                    0,
                    Math.min(
                        100,
                        score
                    )
                )}%`;

            track.appendChild(
                fill
            );

            row.append(
                label,
                track
            );

            traitProfile.appendChild(
                row
            );

        }
    );

}

/* ============================================================
RESTART QUIZ
============================================================ */

function restartQuiz() {

    startQuiz();

}

/* ============================================================
SHARE RESULT
============================================================ */

async function shareResult() {

    if (
        !lastResult ||
        !lastResult.winner
    ) {

        return;
    }

    const winner =
        lastResult.winner;

    const text =
        `I got ${winner.name} in the Walking Dead Personality Quiz — ` +
        `${formatScore(winner.score)} match!`;

    const url =
        window.location.href;

    if (navigator.share) {

        try {

            await navigator.share({

                title:
                    "My Walking Dead Personality Result",

                text:
                    text,

                url:
                    url

            });

            return;

        } catch (error) {

            if (
                error.name ===
                "AbortError"
            ) {

                return;
            }

            console.log(
                "Native sharing unavailable."
            );
        }
    }

    const shareText =
        `${text}\n${url}`;

    try {

        await copyText(
            shareText
        );

        alert(
            "Your result and quiz link have been copied!"
        );

    } catch (error) {

        prompt(
            "Copy your result:",
            shareText
        );
    }

}

/* ============================================================
CHALLENGE FRIENDS
============================================================ */

async function challengeFriends() {

    let text =
        "I just took the Walking Dead Personality Quiz.";

    if (
        lastResult &&
        lastResult.winner
    ) {

        text +=
            ` I got ${lastResult.winner.name} ` +
            `with a ${formatScore(lastResult.winner.score)} match.`;
    }

    text +=
        " Which Walking Dead character will you get?";

    const url =
        window.location.href;

    if (navigator.share) {

        try {

            await navigator.share({

                title:
                    "Walking Dead Personality Quiz",

                text:
                    text,

                url:
                    url

            });

            return;

        } catch (error) {

            if (
                error.name ===
                "AbortError"
            ) {

                return;
            }

            console.log(
                "Native sharing unavailable."
            );
        }
    }

    const challengeText =
        `${text}\n${url}`;

    try {

        await copyText(
            challengeText
        );

        alert(
            "Challenge message and quiz link copied!"
        );

    } catch (error) {

        prompt(
            "Copy this challenge:",
            challengeText
        );
    }

}

/* ============================================================
COPY TEXT
============================================================ */

async function copyText(text) {

    if (
        navigator.clipboard &&
        window.isSecureContext
    ) {

        await navigator.clipboard.writeText(
            text
        );

        return;
    }

    const textarea =
        document.createElement(
            "textarea"
        );

    textarea.value =
        text;

    textarea.style.position =
        "fixed";

    textarea.style.left =
        "-9999px";

    textarea.style.top =
        "0";

    textarea.style.opacity =
        "0";

    document.body.appendChild(
        textarea
    );

    textarea.focus();

    textarea.select();

    const successful =
        document.execCommand(
            "copy"
        );

    textarea.remove();

    if (!successful) {

        throw new Error(
            "Copy operation failed."
        );
    }

}

/* ============================================================
EVENT LISTENERS
============================================================ */

if (startBtn) {

    startBtn.addEventListener(
        "click",
        startQuiz
    );
}

if (backBtn) {

    backBtn.addEventListener(
        "click",
        goBack
    );
}

if (nextBtn) {

    nextBtn.addEventListener(
        "click",
        goNext
    );
}

if (submitBtn) {

    submitBtn.addEventListener(
        "click",
        submitQuiz
    );
}

if (restartBtn) {

    restartBtn.addEventListener(
        "click",
        restartQuiz
    );
}

if (shareBtn) {

    shareBtn.addEventListener(
        "click",
        shareResult
    );
}

if (challengeBtn) {

    challengeBtn.addEventListener(
        "click",
        challengeFriends
    );
}

/* ============================================================
DEBUG / EXTERNAL ACCESS
============================================================ */

window.TWD_QUIZ_UI = {

    startQuiz,

    renderQuestion,

    submitQuiz,

    getAnswers: () => [
        ...answerIndexes
    ]

};

/* ============================================================
END QUIZ IIFE
============================================================ */

})();

/* ================================================================
GLOBAL SITE MENU
================================================================ */

const menuToggle =
document.getElementById("menu-toggle");

const siteMenu =
document.getElementById("site-menu");

if (
menuToggle &&
siteMenu
) {

/* ------------------------------------------------------------
   OPEN / CLOSE WITH HAMBURGER
   ------------------------------------------------------------ */

menuToggle.addEventListener(
    "click",
    function (event) {

        event.stopPropagation();

        const isOpen =
            menuToggle.getAttribute(
                "aria-expanded"
            ) === "true";

        siteMenu.hidden =
            isOpen;

        menuToggle.setAttribute(
            "aria-expanded",
            String(!isOpen)
        );

        menuToggle.setAttribute(
            "aria-label",
            isOpen
                ? "Open navigation"
                : "Close navigation"
        );

    }
);

/* ------------------------------------------------------------
   CLOSE WHEN CLICKING OUTSIDE
   ------------------------------------------------------------ */

document.addEventListener(
    "click",
    function (event) {

        if (
            !siteMenu.hidden &&
            !siteMenu.contains(
                event.target
            ) &&
            !menuToggle.contains(
                event.target
            )
        ) {

            siteMenu.hidden =
                true;

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

            menuToggle.setAttribute(
                "aria-label",
                "Open navigation"
            );

        }

    }
);

/* ------------------------------------------------------------
   CLOSE AFTER CLICKING MENU LINK
   ------------------------------------------------------------ */

siteMenu
    .querySelectorAll("a")
    .forEach(
        function (link) {

            link.addEventListener(
                "click",
                function () {

                    siteMenu.hidden =
                        true;

                    menuToggle.setAttribute(
                        "aria-expanded",
                        "false"
                    );

                    menuToggle.setAttribute(
                        "aria-label",
                        "Open navigation"
                    );

                }
            );

        }
    );

}
