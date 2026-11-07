
// =========================================
// HARDVISTA — MAIN JAVASCRIPT
// =========================================


// MENU MOBILE

const menuToggle = document.getElementById("menu-toggle");
const navigation = document.getElementById("navigation");

if (menuToggle && navigation) {

    menuToggle.addEventListener("click", () => {
        navigation.classList.toggle("active");

        const isOpen = navigation.classList.contains("active");

        menuToggle.setAttribute(
            "aria-expanded",
            isOpen ? "true" : "false"
        );

        menuToggle.setAttribute(
            "aria-label",
            isOpen ? "Fechar menu" : "Abrir menu"
        );
    });


    // FECHAR MENU AO CLICAR EM UM LINK

    const navigationLinks = navigation.querySelectorAll("a");

    navigationLinks.forEach(link => {

        link.addEventListener("click", () => {
            navigation.classList.remove("active");

            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.setAttribute("aria-label", "Abrir menu");
        });

    });


    // FECHAR MENU AO CLICAR FORA DELE

    document.addEventListener("click", event => {

        const clickedInsideMenu = navigation.contains(event.target);
        const clickedToggle = menuToggle.contains(event.target);

        if (!clickedInsideMenu && !clickedToggle) {
            navigation.classList.remove("active");

            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.setAttribute("aria-label", "Abrir menu");
        }

    });

}


// =========================================
// ANO AUTOMÁTICO NO FOOTER
// =========================================

const currentYear = document.getElementById("current-year");

if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}


// =========================================
// ANIMAÇÃO DE ENTRADA DAS SEÇÕES
// =========================================

const animatedElements = document.querySelectorAll(
    ".news-card, .culture-card, .project-card"
);

if ("IntersectionObserver" in window) {

    const observer = new IntersectionObserver((entries, observer) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }

        });

    }, {
        threshold: 0.12
    });


    animatedElements.forEach(element => {
        element.classList.add("reveal");
        observer.observe(element);
    });

}


// =========================================
// ANO E IDENTIDADE HARDVISTA
// =========================================

console.log("HARDVISTA — HARD DANCE CULTURE");
console.log("Independent media platform.");
