element.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {

            element.classList.add("active");

        }

    });

}


window.addEventListener(
    "scroll",
    revealOnScroll
);


revealOnScroll();


const currentYear =
    document.getElementById("currentYear");

currentYear.textContent =
    new Date().getFullYear();