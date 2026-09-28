/* =====================================================
   GLOBAL / RESET
   ===================================================== */

* {
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    margin: 0;
    min-height: 100vh;

    font-family: Arial, Helvetica, sans-serif;

    color: #f2f2f2;

    background-color: #c5ad82;
    background-image: url("/images/parchment-bg.png");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;

    display: flex;
    flex-direction: column;

    padding: 0;
}

.hidden {
    display: none !important;
}


/* =====================================================
   SITE HEADER
   ===================================================== */

.site-header {
    position: relative;

    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    min-height: 100px;

    padding: 40px 60px;

    background: #080808;
    color: #ffffff;

    border-bottom: 1px solid #292929;
}

.site-title {
    color: #ffffff;

    font-family: Georgia, "Times New Roman", serif;

    font-size: clamp(1.45rem, 3vw, 2rem);
    font-weight: 900;

    letter-spacing: 2px;
    line-height: 1;

    text-align: center;
    user-select: none;
}


/* =====================================================
   MENU TOGGLE
   ===================================================== */

.menu-toggle {
    position: absolute;

    left: 18px;
    top: 50%;

    display: flex;
    flex-direction: column;
    justify-content: center;

    gap: 5px;

    width: 42px;
    height: 42px;

    padding: 8px;

    border: none;

    background: transparent;

    cursor: pointer;

    transform: translateY(-50%);
}

.menu-toggle span {
    display: block;

    width: 25px;
    height: 3px;

    margin: 0 auto;

    border-radius: 2px;

    background: #ffffff;

    transition:
        transform 0.2s ease,
        opacity 0.2s ease;
}

.menu-toggle[aria-expanded="true"] span:nth-child(1) {
    transform: translateY(8px) rotate(45deg);
}

.menu-toggle[aria-expanded="true"] span:nth-child(2) {
    opacity: 0;
}

.menu-toggle[aria-expanded="true"] span:nth-child(3) {
    transform: translateY(-8px) rotate(-45deg);
}


/* =====================================================
   SITE MENU
   ===================================================== */

.site-menu {
    position: absolute;

    top: 72px;
    left: 18px;

    z-index: 1000;

    width: 300px;

    padding: 10px;

    border: 1px solid #333333;
    border-radius: 12px;

    background: #111111;

    box-shadow:
        0 15px 40px rgba(0, 0, 0, 0.45);
}

.menu-links {
    display: flex;
    flex-direction: column;

    gap: 3px;
}

.menu-links a {
    display: block;

    padding: 13px 14px;

    border-radius: 7px;

    color: #ffffff;

    font-size: 0.95rem;
    font-weight: 600;

    text-decoration: none;

    transition:
        background 0.2s ease,
        padding-left 0.2s ease;
}

.menu-links a:hover {
    background: #242424;

    padding-left: 18px;
}

.menu-divider {
    height: 1px;

    margin: 8px 8px;

    background: #333333;
}


/* =====================================================
   MAIN CONTAINER
   ===================================================== */

.container {
    position: relative;
    z-index: 1;

    width: 100%;
    max-width: 760px;

    margin: 20px auto;
}


/* =====================================================
   COMMON SCREEN
   ===================================================== */

.screen {
    background: rgba(12, 12, 12, 0.96);

    border: 1px solid #3a3a3a;
    border-radius: 18px;

    padding: 45px;

    box-shadow:
        0 25px 80px rgba(0, 0, 0, 0.8),
        0 0 0 1px rgba(255, 255, 255, 0.02);

    animation: appear 0.4s ease;
}


/* =====================================================
   START SCREEN
   ===================================================== */

#start-screen {
    text-align: center;
}

.intro-card {
    background: rgba(12, 12, 12, 0.96);

    border: 1px solid #3a3a3a;
    border-radius: 18px;

    padding: 45px;

    box-shadow:
        0 25px 80px rgba(0, 0, 0, 0.8),
        0 0 0 1px rgba(255, 255, 255, 0.02);

    animation: appear 0.4s ease;
}


/* =====================================================
   START IMAGE
   ===================================================== */

.quiz-start-image {
    display: block;

    width: 100%;
    max-width: 670px;

    height: auto;

    aspect-ratio: 16 / 9;

    object-fit: cover;

    margin: 0 auto 25px;

    border-radius: 12px;
}


/* =====================================================
   START SCREEN TYPOGRAPHY
   ===================================================== */

.intro-icon {
    font-size: 60px;

    margin-bottom: 10px;

    filter: grayscale(20%);
}

.icon {
    font-size: 80px;

    margin-bottom: 10px;

    filter: grayscale(20%);
}

h1 {
    font-size: clamp(32px, 7vw, 52px);

    line-height: 1.05;

    margin: 10px 0 22px;

    letter-spacing: -1px;
}

.subtitle {
    max-width: 560px;

    margin: auto;

    color: #aaa;

    font-size: 18px;

    line-height: 1.7;
}

.info {
    display: flex;

    justify-content: center;
    align-items: center;

    flex-wrap: wrap;

    gap: 14px;

    margin: 28px 0;

    color: #777;

    font-size: 14px;

    text-transform: uppercase;

    letter-spacing: 1px;
}


/* =====================================================
   BUTTONS
   ===================================================== */

button {
    border: none;
    border-radius: 9px;

    padding: 17px 20px;

    font-size: 15px;
    font-weight: 700;

    letter-spacing: 0.7px;

    cursor: pointer;

    transition:
        transform 0.15s,
        background 0.15s,
        border-color 0.15s;
}

#start-btn,
#restart-btn,
#share-btn,
#challenge-btn {
    width: 100%;

    margin-top: 10px;

    background: #b51f1f;

    color: white;
}

#start-btn:hover,
#restart-btn:hover {
    background: #d32929;

    transform: translateY(-2px);
}

#challenge-btn {
    background: #3a3a3a;

    border: 1px solid #555;
}

#challenge-btn:hover {
    background: #4a4a4a;

    transform: translateY(-2px);
}

#share-btn {
    background: #222;

    border: 1px solid #444;
}

#share-btn:hover {
    background: #303030;

    transform: translateY(-2px);
}


/* =====================================================
   QUIZ SCREEN
   ===================================================== */


/* -------------------------------
   Quiz Header
   ------------------------------- */

.quiz-header {
    display: flex;

    justify-content: space-between;
    align-items: center;

    gap: 15px;

    color: #777;

    font-size: 13px;

    text-transform: uppercase;

    letter-spacing: 1px;
}


/* -------------------------------
   Progress Bar
   ------------------------------- */

.progress {
    height: 6px;

    margin-top: 14px;

    background: #292929;

    border-radius: 10px;

    overflow: hidden;
}

#progress-bar {
    height: 100%;

    width: 0%;

    background: #b51f1f;

    transition: width 0.3s ease;
}


/* -------------------------------
   Questions
   ------------------------------- */

h2 {
    min-height: 86px;

    margin: 35px 0 25px;

    font-size: clamp(22px, 5vw, 31px);

    line-height: 1.4;

    overflow-wrap: break-word;
}


/* -------------------------------
   Answers
   ------------------------------- */

#answers {
    min-height: 250px;
}

.answer {
    display: block;

    width: 100%;

    margin: 12px 0;

    padding: 19px;

    text-align: left;

    color: #ddd;

    background: #171717;

    border: 1px solid #333;
    border-radius: 10px;

    line-height: 1.45;

    overflow-wrap: break-word;

    transition:
        background 0.15s ease,
        border-color 0.15s ease,
        transform 0.15s ease;
}

.answer:hover {
    background: #242424;

    border-color: #666;

    transform: translateX(3px);
}

.answer.selected {
    background: #292929;

    border-color: #b51f1f;

    box-shadow:
        0 0 0 1px rgba(181, 31, 31, 0.25);
}


/* -------------------------------
   Quiz Navigation
   ------------------------------- */

.quiz-navigation {
    display: flex;

    justify-content: space-between;
    align-items: center;

    gap: 12px;

    width: 100%;

    margin-top: 28px;
}

.nav-btn {
    flex: 0 1 auto;

    min-width: 110px;
    min-height: 46px;

    padding: 12px 17px;

    border-radius: 8px;

    font-size: 13px;
    font-weight: 700;

    cursor: pointer;

    transition:
        transform 0.15s ease,
        background 0.15s ease,
        border-color 0.15s ease;
}

.nav-btn:hover:not(:disabled) {
    transform: translateY(-1px);
}

.nav-btn:disabled {
    cursor: not-allowed;
}


/* -------------------------------
   Back Button
   ------------------------------- */

#back-btn {
    background: #171717;

    color: #aaa;
}

#back-btn:hover:not(:disabled) {
    background: #242424;

    color: #ddd;
}

#back-btn:disabled {
    background: #111;

    border-color: #292929;

    color: #444;

    cursor: not-allowed;

    opacity: 0.7;

    transform: none;
}


/* -------------------------------
   Next Button
   ------------------------------- */

#next-btn {
    background: #b51f1f;

    border-color: #b51f1f;

    color: white;
}

#next-btn:hover:not(:disabled) {
    background: #d32929;

    border-color: #d32929;
}


/* -------------------------------
   Submit Button
   ------------------------------- */

#submit-btn {
    background: #b51f1f;

    border-color: #b51f1f;

    color: white;
}

#submit-btn:hover:not(:disabled) {
    background: #d32929;

    border-color: #d32929;
}

#submit-btn:disabled {
    background: #222;

    border-color: #333;

    color: #666;

    cursor: not-allowed;

    opacity: 0.7;

    transform: none;
}


/* =====================================================
   RESULTS SCREEN
   ===================================================== */

.result-label {
    text-align: center;

    color: #777;

    font-size: 13px;

    letter-spacing: 3px;
}

#result-title {
    margin-top: 10px;

    font-size: clamp(30px, 7vw, 46px);

    text-align: center;
}

.result-score {
    text-align: center;

    margin: 20px 0;

    font-size: 56px;

    font-weight: 800;
}

#result-description {
    max-width: 600px;

    margin: auto;

    color: #bbb;

    font-size: 17px;

    line-height: 1.7;

    text-align: center;
}


/* =====================================================
   RESULT — KNOWLEDGE LEVEL
   ===================================================== */

.survival-box {
    display: block;

    width: 100%;
    max-width: 500px;

    margin: 30px auto 24px;

    padding: 20px 22px;

    background: #171717;

    border: 1px solid #333;
    border-radius: 14px;

    text-align: center;
}

.survival-box strong {
    display: block;

    width: 100%;

    margin: 0 0 8px;

    color: #777;

    font-size: 11px;
    font-weight: 700;

    letter-spacing: 2px;

    text-transform: uppercase;

    text-align: center;
}

.survival-box span {
    display: block;

    width: 100%;

    margin: 0;

    color: #eee;

    font-size: 24px;
    font-weight: 700;

    line-height: 1.2;

    text-align: center;
}


/* =====================================================
   RESULT — BREAKDOWN
   ===================================================== */

.result-breakdown {
    display: grid;

    grid-template-columns: repeat(4, 1fr);

    gap: 12px;

    width: 100%;
    max-width: 700px;

    margin: 24px auto 30px;
}

.result-stat {
    display: flex;

    flex-direction: column;

    align-items: center;
    justify-content: center;

    min-height: 92px;

    padding: 16px 10px;

    background: #171717;

    border: 1px solid #333;
    border-radius: 12px;

    text-align: center;

    transition:
        background 0.2s ease,
        border-color 0.2s ease,
        transform 0.2s ease;
}

.result-stat:hover {
    background: #1d1d1d;

    border-color: #4a4a4a;

    transform: translateY(-2px);
}

.result-stat-label {
    display: block;

    margin-bottom: 8px;

    color: #888;

    font-size: 11px;
    font-weight: 700;

    letter-spacing: 1.4px;

    text-transform: uppercase;
}

.result-stat strong {
    display: block;

    color: #eee;

    font-size: 26px;
    font-weight: 800;

    line-height: 1;
}


/* =====================================================
   HOMEPAGE / QUIZ INFORMATION
   ===================================================== */

#home-info {
    display: grid;

    grid-template-columns: 1fr;

    gap: 20px;

    margin-top: 30px;
}

.home-info {
    margin-top: 0;

    padding: 30px;

    background: rgba(12, 12, 12, 0.96);

    border: 1px solid #3a3a3a;
    border-radius: 18px;
}

.home-info h2 {
    min-height: 0;

    margin: 0 0 12px;

    font-size: 26px;

    line-height: 1.25;
}

.home-info p {
    color: #aaa;

    font-size: 15px;

    line-height: 1.7;
}

.home-info h3 {
    margin-top: 28px;
    margin-bottom: 8px;

    color: #ddd;

    font-size: 18px;

    line-height: 1.35;
}

.home-info h3:first-of-type {
    margin-top: 20px;
}


/* =====================================================
   STANDALONE INFORMATION PAGES
   ===================================================== */

.info-page {
    max-width: 760px;

    margin: 40px auto;
}

.info-page h1 {
    text-align: center;
}

.info-page h2 {
    min-height: 0;

    margin: 35px 0 12px;

    font-size: 24px;

    line-height: 1.3;
}

.info-page p {
    color: #bbb;

    font-size: 16px;

    line-height: 1.7;
}

.info-page a {
    color: #d32929;

    text-decoration: none;
}

.info-page a:hover {
    text-decoration: underline;
}


/* =====================================================
   SUGGESTED QUIZZES
   ===================================================== */

.suggestions-card {
    margin-top: 20px;

    padding: 30px;

    background: rgba(12, 12, 12, 0.96);

    border: 1px solid #3a3a3a;
    border-radius: 18px;

    box-shadow:
        0 25px 80px rgba(0, 0, 0, 0.8),
        0 0 0 1px rgba(255, 255, 255, 0.02);

    animation: appear 0.4s ease;
}

.suggested-quizzes {
    margin: 0;

    padding: 0;

    border: none;
}

.suggested-quizzes h2 {
    margin: 0 0 8px;

    text-align: center;

    font-size: 26px;
}

.suggested-subtitle {
    margin: 0 0 25px;

    color: #888;

    font-size: 14px;

    text-align: center;

    line-height: 1.6;
}

.suggested-grid {
    display: grid;

    grid-template-columns: repeat(3, 1fr);

    gap: 14px;
}

.suggested-card {
    display: flex;

    flex-direction: column;

    align-items: stretch;
    justify-content: flex-start;

    min-height: 260px;

    padding: 12px;

    background: #171717;

    border: 1px solid #333;
    border-radius: 12px;

    color: #ddd;

    text-decoration: none;

    text-align: center;

    overflow: hidden;

    transition:
        transform 0.2s ease,
        background 0.2s ease,
        border-color 0.2s ease;
}

.suggested-image {
    display: block;

    width: 100%;

    aspect-ratio: 16 / 9;

    object-fit: cover;

    margin-bottom: 14px;

    border-radius: 8px;
}

.suggested-card:hover {
    background: #222;

    border-color: #666;

    transform: translateY(-4px);
}

.suggested-title {
    display: block;

    margin-bottom: 9px;

    color: #fff;

    font-size: 16px;
    font-weight: 700;

    line-height: 1.3;
}

.suggested-description {
    display: block;

    color: #999;

    font-size: 13px;

    line-height: 1.5;
}


/* =====================================================
   MORE QUIZZES CTA
   ===================================================== */

.more-quizzes-section {
    width: 100%;

    margin: 30px 0 0;

    padding-top: 28px;

    border-top: 1px solid #303030;

    text-align: center;
}

.more-quizzes-section h3 {
    margin: 0 0 8px;

    text-align: center;

    font-size: 1.25rem;
}

.more-quizzes-section p {
    max-width: 550px;

    margin: 0 auto 18px;

    color: #bbb;

    line-height: 1.5;

    text-align: center;

    opacity: 0.9;
}

.more-quizzes-section .more-quizzes-btn {
    display: block;

    width: fit-content;

    margin: 0 auto;

    padding: 12px 24px;

    background: #22c55e;

    color: #ffffff;

    text-decoration: none;

    font-size: 0.95rem;
    font-weight: 700;

    border-radius: 8px;

    box-shadow:
        0 3px 10px rgba(34, 197, 94, 0.25);

    transition:
        background 0.2s ease,
        transform 0.2s ease,
        box-shadow 0.2s ease;
}

.more-quizzes-section .more-quizzes-btn:hover {
    background: #16a34a;

    transform: translateY(-2px);

    box-shadow:
        0 5px 14px rgba(34, 197, 94, 0.35);
}


/* =====================================================
   SITE FOOTER
   ===================================================== */

.site-footer {
    width: 100%;

    margin-top: auto;

    padding: 10px 20px;

    background: #080808;

    color: #ffffff;

    border-top: 1px solid #292929;
}

.footer-inner {
    width: min(100%, 1100px);

    margin: auto;

    text-align: center;
}

.footer-brand {
    margin-bottom: 24px;

    color: #ffffff;

    font-size: 1.15rem;
    font-weight: 800;

    letter-spacing: 0.5px;

    text-align: center;
}

.footer-links {
    display: flex;

    justify-content: center;

    flex-wrap: wrap;

    gap: 10px 24px;

    margin-bottom: 26px;
}

.footer-links a {
    color: #dddddd;

    text-decoration: none;

    font-size: 0.92rem;
    font-weight: 600;

    transition: color 0.2s ease;
}

.footer-links a:hover {
    color: #ffffff;

    text-decoration: underline;
}

.copyright {
    margin-top: 12px;

    color: #999999;

    font-size: 0.8rem;
}


/* =====================================================
   MOBILE
   ===================================================== */

@media (max-width: 600px) {

    /* -------------------------------
       Body
       ------------------------------- */

    body {
        padding: 10px;
    }


    /* -------------------------------
       Header
       ------------------------------- */

    .site-header {
        min-height: 64px;

        padding: 10px 52px;

        margin: -10px -10px 0;

        width: calc(100% + 20px);
    }

    .site-title {
        font-size: 1.25rem;

        letter-spacing: 1.3px;
    }


    /* -------------------------------
       Menu
       ------------------------------- */

    .menu-toggle {
        left: 10px;
    }

    .site-menu {
        top: 64px;

        left: 10px;

        width: calc(100% - 20px);

        max-width: 340px;
    }


    /* -------------------------------
       Screens
       ------------------------------- */

    .screen,
    .intro-card {
        padding: 30px 20px;

        border-radius: 14px;
    }


    /* -------------------------------
       Start Screen
       ------------------------------- */

    .intro-icon {
        font-size: 50px;
    }

    .icon {
        font-size: 60px;
    }

    .subtitle {
        font-size: 16px;
    }

    .info {
        gap: 8px;

        font-size: 11px;
    }


    /* -------------------------------
       Quiz
       ------------------------------- */

    .quiz-header {
        font-size: 11px;
    }

    h2 {
        margin-top: 28px;

        font-size: 23px;
    }

    .answer {
        padding: 17px 15px;

        font-size: 15px;
    }


    /* -------------------------------
       Results
       ------------------------------- */

    .result-score {
        font-size: 48px;
    }

    #result-title {
        font-size: 32px;
    }

    #result-description {
        font-size: 16px;
    }

    .survival-box {
        width: 100%;
        max-width: 500px;

        margin: 25px auto 20px;

        padding: 18px 15px;

        text-align: center;
    }

    .survival-box strong {
        width: 100%;

        text-align: center;
    }

    .survival-box span {
        width: 100%;

        font-size: 22px;

        text-align: center;
    }

    .result-breakdown {
        grid-template-columns: repeat(2, 1fr);

        gap: 10px;

        margin: 20px auto 25px;
    }

    .result-stat {
        min-height: 82px;

        padding: 13px 8px;
    }

    .result-stat-label {
        margin-bottom: 7px;

        font-size: 10px;

        letter-spacing: 1.1px;
    }

    .result-stat strong {
        font-size: 23px;
    }


    /* -------------------------------
       Information
       ------------------------------- */

    .home-info {
        padding: 25px 20px;
    }


    /* -------------------------------
       Quiz Navigation
       ------------------------------- */

    .quiz-navigation {
        gap: 10px;

        margin-top: 24px;
    }

    .nav-btn {
        flex: 1;

        min-width: 0;
        min-height: 48px;

        padding: 12px 10px;

        font-size: 12px;
    }


    /* -------------------------------
       Suggested Quizzes
       ------------------------------- */

    .suggested-quizzes {
        margin-top: 30px;

        padding-top: 25px;
    }

    .suggested-quizzes h2 {
        font-size: 23px;
    }

    .suggested-grid {
        grid-template-columns: 1fr;

        gap: 12px;
    }

    .suggested-card {
        min-height: auto;

        padding: 12px;
    }


    /* -------------------------------
       Footer
       ------------------------------- */

    .site-footer {
        width: calc(100% + 20px);

        margin-left: -10px;
        margin-right: -10px;
        margin-bottom: -10px;

        padding: 18px 15px;
    }

    .footer-brand {
        margin-bottom: 20px;

        font-size: 1.05rem;
    }

    .footer-links {
        gap: 10px 18px;

        margin-bottom: 22px;
    }

    .footer-links a {
        font-size: 0.88rem;
    }

    .copyright {
        margin-top: 10px;

        font-size: 0.75rem;
    }
}


/* =====================================================
   ANIMATIONS
   ===================================================== */

@keyframes appear {

    from {
        opacity: 0;

        transform: translateY(12px);
    }

    to {
        opacity: 1;

        transform: translateY(0);
    }
}
