/* ===============================
GLOBAL SITE MENU
=============================== */

const menuToggle =
document.getElementById("menu-toggle");

const siteMenu =
document.getElementById("site-menu");

if (menuToggle && siteMenu) {

    // OPEN / CLOSE WITH HAMBURGER

    menuToggle.addEventListener(
        "click",
        function (event) {

            event.stopPropagation();

            const isOpen =
                menuToggle.getAttribute(
                    "aria-expanded"
                ) === "true";

            siteMenu.hidden = isOpen;

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


    // CLOSE WHEN CLICKING OUTSIDE

    document.addEventListener(
        "click",
        function (event) {

            if (
                !siteMenu.hidden &&
                !siteMenu.contains(event.target) &&
                !menuToggle.contains(event.target)
            ) {

                siteMenu.hidden = true;

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


    // CLOSE AFTER CLICKING A MENU LINK

    siteMenu
        .querySelectorAll("a")
        .forEach(function (link) {

            link.addEventListener(
                "click",
                function () {

                    siteMenu.hidden = true;

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

        });

}


/* ===============================
CATEGORY ACCORDIONS
=============================== */

document.addEventListener(
"DOMContentLoaded",
function () {

    const buttons =
        document.querySelectorAll(
            ".category-toggle"
        );


    buttons.forEach(
        function (button) {

            button.addEventListener(
                "click",
                function () {

                    const dropdownId =
                        button.getAttribute(
                            "aria-controls"
                        );

                    const dropdown =
                        document.getElementById(
                            dropdownId
                        );


                    if (!dropdown) {
                        return;
                    }


                    const isOpen =
                        button.getAttribute(
                            "aria-expanded"
                        ) === "true";


                    button.setAttribute(
                        "aria-expanded",
                        String(!isOpen)
                    );


                    dropdown.hidden =
                        isOpen;

                }
            );

        }
    );


    /* ===============================
    CATEGORY PAGINATION
    =============================== */

    const CATEGORY_RESULTS_PER_PAGE = 20;


    document
        .querySelectorAll(".category-accordion")
        .forEach(function (category) {

            const dropdown =
                category.querySelector(
                    ".category-dropdown"
                );


            if (!dropdown) {
                return;
            }


            /*
             * Get only the quiz links.
             *
             * :scope > a prevents the pagination
             * buttons from being counted as quizzes.
             */

            const quizLinks =
                Array.from(
                    dropdown.querySelectorAll(
                        ":scope > a"
                    )
                );


            if (quizLinks.length === 0) {
                return;
            }


            /*
             * Automatically update the
             * "X Quizzes" number.
             */

            const countElement =
                category.querySelector(
                    ".category-content > span"
                );


            if (countElement) {

                const count =
                    quizLinks.length;

                countElement.textContent =
                    `${count} Quiz${count === 1 ? "" : "zes"}`;

            }


            /*
             * If the category has 20 or fewer
             * quizzes, don't create pagination.
             */

            if (
                quizLinks.length <=
                CATEGORY_RESULTS_PER_PAGE
            ) {

                return;

            }


            /*
             * Calculate total pages.
             */

            const totalPages =
                Math.ceil(
                    quizLinks.length /
                    CATEGORY_RESULTS_PER_PAGE
                );


            /*
             * Create pagination wrapper.
             */

            const paginationWrapper =
                document.createElement(
                    "div"
                );

            paginationWrapper.className =
                "pagination-wrapper category-pagination";


            const pagination =
                document.createElement(
                    "div"
                );

            pagination.className =
                "pagination";


            paginationWrapper.appendChild(
                pagination
            );


            /*
             * Put pagination after
             * all quiz links.
             */

            dropdown.appendChild(
                paginationWrapper
            );


            /*
             * Each category has its own
             * independent current page.
             */

            let currentPage = 1;


            /*
             * Display a specific page.
             */

            function renderCategoryPage(page) {

                currentPage = page;


                /*
                 * Calculate which quizzes
                 * should be visible.
                 */

                const start =
                    (currentPage - 1) *
                    CATEGORY_RESULTS_PER_PAGE;


                const end =
                    start +
                    CATEGORY_RESULTS_PER_PAGE;


                quizLinks.forEach(
                    function (link, index) {

                        link.style.display =
                            index >= start &&
                            index < end
                                ? ""
                                : "none";

                    }
                );


                /*
                 * Rebuild pagination buttons.
                 */

                pagination.innerHTML = "";


                /* ==========================
                FIRST PAGE
                ========================== */

                if (currentPage === 1) {

                    const first =
                        document.createElement(
                            "span"
                        );

                    first.className =
                        "pagination-btn disabled";

                    first.textContent =
                        "First Page";

                    pagination.appendChild(
                        first
                    );

                } else {

                    const first =
                        document.createElement(
                            "button"
                        );

                    first.className =
                        "pagination-btn";

                    first.type = "button";

                    first.textContent =
                        "First Page";

                    first.addEventListener(
                        "click",
                        function () {

                            renderCategoryPage(1);

                        }
                    );

                    pagination.appendChild(
                        first
                    );

                }


                /* ==========================
                BACK
                ========================== */

                if (currentPage === 1) {

                    const back =
                        document.createElement(
                            "span"
                        );

                    back.className =
                        "pagination-btn disabled";

                    back.textContent =
                        "Back";

                    pagination.appendChild(
                        back
                    );

                } else {

                    const back =
                        document.createElement(
                            "button"
                        );

                    back.className =
                        "pagination-btn";

                    back.type = "button";

                    back.textContent =
                        "Back";

                    back.addEventListener(
                        "click",
                        function () {

                            renderCategoryPage(
                                currentPage - 1
                            );

                        }
                    );

                    pagination.appendChild(
                        back
                    );

                }


                /* ==========================
                PAGE NUMBERS
                ========================== */

                for (
                    let pageNumber = 1;
                    pageNumber <= totalPages;
                    pageNumber++
                ) {

                    if (
                        pageNumber ===
                        currentPage
                    ) {

                        const pageButton =
                            document.createElement(
                                "span"
                            );

                        pageButton.className =
                            "pagination-btn active";

                        pageButton.textContent =
                            pageNumber;

                        pagination.appendChild(
                            pageButton
                        );

                    } else {

                        const pageButton =
                            document.createElement(
                                "button"
                            );

                        pageButton.className =
                            "pagination-btn";

                        pageButton.type =
                            "button";

                        pageButton.textContent =
                            pageNumber;

                        pageButton.addEventListener(
                            "click",
                            function () {

                                renderCategoryPage(
                                    pageNumber
                                );

                            }
                        );

                        pagination.appendChild(
                            pageButton
                        );

                    }

                }


                /* ==========================
                NEXT
                ========================== */

                if (
                    currentPage ===
                    totalPages
                ) {

                    const next =
                        document.createElement(
                            "span"
                        );

                    next.className =
                        "pagination-btn disabled";

                    next.textContent =
                        "Next";

                    pagination.appendChild(
                        next
                    );

                } else {

                    const next =
                        document.createElement(
                            "button"
                        );

                    next.className =
                        "pagination-btn";

                    next.type =
                        "button";

                    next.textContent =
                        "Next";

                    next.addEventListener(
                        "click",
                        function () {

                            renderCategoryPage(
                                currentPage + 1
                            );

                        }
                    );

                    pagination.appendChild(
                        next
                    );

                }


                /* ==========================
                LAST PAGE
                ========================== */

                if (
                    currentPage ===
                    totalPages
                ) {

                    const last =
                        document.createElement(
                            "span"
                        );

                    last.className =
                        "pagination-btn disabled";

                    last.textContent =
                        "Last Page";

                    pagination.appendChild(
                        last
                    );

                } else {

                    const last =
                        document.createElement(
                            "button"
                        );

                    last.className =
                        "pagination-btn";

                    last.type =
                        "button";

                    last.textContent =
                        "Last Page";

                    last.addEventListener(
                        "click",
                        function () {

                            renderCategoryPage(
                                totalPages
                            );

                        }
                    );

                    pagination.appendChild(
                        last
                    );

                }

            }


            /*
             * Start category on page 1.
             */

            renderCategoryPage(1);

        });

});
