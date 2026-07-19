/* ===================================
   MOBILE MENU
=================================== */

const menuIcon = document.querySelector(".menu-icon");
const nav = document.querySelector("nav");

if (menuIcon) {
    menuIcon.addEventListener("click", () => {

        if (nav.style.display === "block") {

            nav.style.display = "none";

        } else {

            nav.style.display = "block";

        }

    });
}



/* ===================================
   SMOOTH SCROLL
=================================== */

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function (e) {

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            e.preventDefault();

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});

/* ===================================
   ACTIVE NAVIGATION LINK
=================================== */

const currentPage = window.location.pathname.split("/").pop();

document.querySelectorAll("nav a").forEach(link => {

    const href = link.getAttribute("href");

    if (href === currentPage || (currentPage === "" && href === "index.html")) {

        link.classList.add("active");

    }

});

/* ===================================
   BUTTON HOVER EFFECT
=================================== */

document.querySelectorAll(".btn,.btn2").forEach(button => {

    button.addEventListener("mouseenter", () => {

        button.style.transform = "scale(1.05)";

    });

    button.addEventListener("mouseleave", () => {

        button.style.transform = "scale(1)";

    });

});

/* ===================================
   PAGE LOADED
=================================== */

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

    console.log("CalculatorHubs.site Loaded Successfully!");

});
/* ===================================
   ANIMATED COUNTERS
=================================== */

const counters = document.querySelectorAll(".stats-grid h2");

function animateCounter(counter) {

    let text = counter.innerText;

    let number = parseInt(text.replace(/\D/g, ""));

    let suffix = text.replace(/[0-9]/g, "");

    let count = 0;

    let speed = Math.max(10, Math.floor(number / 100));

    const update = () => {

        count += speed;

        if (count >= number) {

            counter.innerText = number + suffix;

        } else {

            counter.innerText = count + suffix;

            requestAnimationFrame(update);

        }

    };

    update();

}

const statsSection = document.querySelector(".stats");

if (statsSection) {

    let counterStarted = false;

    window.addEventListener("scroll", () => {

        const position = statsSection.getBoundingClientRect().top;

        if (position < window.innerHeight && !counterStarted) {

            counterStarted = true;

            counters.forEach(animateCounter);

        }

    });

}

/* ===================================
   SCROLL ANIMATION
=================================== */

const animatedElements = document.querySelectorAll(
".category-card,.calculator-card,.latest-card,.article-card,.why-card,.faq-item"
);

function revealOnScroll() {

    animatedElements.forEach(item => {

        const top = item.getBoundingClientRect().top;

        if (top < window.innerHeight - 100) {

            item.style.opacity = "1";
            item.style.transform = "translateY(0)";

        }

    });

}

animatedElements.forEach(item => {

    item.style.opacity = "0";
    item.style.transform = "translateY(40px)";
    item.style.transition = ".7s";

});

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

/* ===================================
   SCROLL TO TOP BUTTON
=================================== */

const topButton = document.createElement("button");

topButton.innerHTML = "↑";

topButton.id = "topButton";

document.body.appendChild(topButton);

topButton.style.position = "fixed";
topButton.style.right = "20px";
topButton.style.bottom = "20px";
topButton.style.width = "50px";
topButton.style.height = "50px";
topButton.style.border = "none";
topButton.style.borderRadius = "50%";
topButton.style.background = "#2563eb";
topButton.style.color = "#fff";
topButton.style.fontSize = "24px";
topButton.style.cursor = "pointer";
topButton.style.display = "none";
topButton.style.boxShadow = "0 8px 20px rgba(0,0,0,.2)";
topButton.style.zIndex = "9999";

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        topButton.style.display = "block";

    } else {

        topButton.style.display = "none";

    }

});

topButton.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

/* ===================================
   HEADER SHADOW ON SCROLL
=================================== */

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.boxShadow = "0 5px 20px rgba(0,0,0,.15)";

    } else {

        header.style.boxShadow = "0 2px 10px rgba(0,0,0,.08)";

    }

});
/* ===================================
   FAQ ACCORDION
=================================== */

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

    const answer = item.querySelector("p");

    if (answer) {

        answer.style.display = "none";

        item.addEventListener("click", () => {

            const isOpen = answer.style.display === "block";

            faqItems.forEach(faq => {
                const p = faq.querySelector("p");
                if (p) p.style.display = "none";
            });

            answer.style.display = isOpen ? "none" : "block";

        });

    }

});

/* ===================================
   NEWSLETTER VALIDATION
=================================== */

const newsletterForm = document.querySelector(".newsletter form");

if (newsletterForm) {

    newsletterForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const email = this.querySelector("input").value.trim();

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (email === "") {

            alert("Please enter your email address.");

            return;

        }

        if (!emailPattern.test(email)) {

            alert("Please enter a valid email address.");

            return;

        }

        alert("Thank you for subscribing!");

        this.reset();

    });

}


/* ===================================
   DARK MODE
=================================== */

const darkButton = document.createElement("button");

darkButton.innerHTML = "🌙";

darkButton.id = "darkMode";

document.body.appendChild(darkButton);

darkButton.style.position = "fixed";
darkButton.style.left = "20px";
darkButton.style.bottom = "20px";
darkButton.style.width = "50px";
darkButton.style.height = "50px";
darkButton.style.border = "none";
darkButton.style.borderRadius = "50%";
darkButton.style.background = "#111827";
darkButton.style.color = "#fff";
darkButton.style.cursor = "pointer";
darkButton.style.zIndex = "9999";

let dark = false;

darkButton.addEventListener("click", () => {

    dark = !dark;

    if (dark) {

        document.body.style.background = "#111827";
        document.body.style.color = "#ffffff";

        document.querySelectorAll(".category-card,.calculator-card,.latest-card,.article-card,.why-card,.faq-item")
        .forEach(card => {

            card.style.background = "#1f2937";
            card.style.color = "#ffffff";

        });

        darkButton.innerHTML = "☀️";

    } else {

        location.reload();

    }

});

/* ===================================
   CURRENT YEAR
=================================== */

const yearElement = document.querySelector(".copyright p");

if (yearElement) {

    yearElement.innerHTML =
        "© " + new Date().getFullYear() +
        " CalculatorHubs.site. All Rights Reserved.";

}

/* ===================================
   CONSOLE MESSAGE
=================================== */

console.log("%cCalculatorHubs.site", "color:#2563eb;font-size:22px;font-weight:bold;");
console.log("%cWebsite Loaded Successfully!", "color:green;font-size:14px;");
console.log(window.location.href);
console.log(document.getElementById("searchInput").value);


 /*  SEARCH REDIRECT
=================================== */
const pages = {
  "finance": "Finance-calculator.html",
  "health": "Health-calculator.html",
  "math": "Math-calculator.html",
  "education": "Education-calculator.html",
  "converter": "Converter-calculator.html",
  "converters": "Converter-calculator.html",
  "date": "Date & Time-calculator.html",
  "home": "Home-calculator.html",
  "developer": "Developer-calculator.html",

  "age": "calculators/age-calculator.html",
  "bmi": "calculators/bmi-calculator.html",
  "emi": "calculators/emi-calculator.html",
  "gst": "calculators/gst-calculator.html",
  "percentage": "calculators/percentage-calculator.html",
  "sip": "calculators/sip-calculator.html",
  "loan": "calculators/loan-calculator.html",
  "fd": "calculators/fd-calculator.html",
  "currency": "calculators/currency-converter.html",

  "loan eligibility": "calculators/loan-eligibility-calculator.html",
  "savings goal": "calculators/savings-goal-calculator.html",
  "inflation": "calculators/inflation-calculator.html",
  "emergency fund": "calculators/emergency-fund-calculator.html",
  "net worth": "calculators/net-worth-calculator.html"
   "quadratic": "calculators/quadratic-calculator.html",
   "matrix": "calculators/matrix-calculator.html",
   "variance": "calculators/variance-calculator.html",
   "pythagorean": "calculators/pythagorean-calculator.html",
   "prime": "calculators/prime-number-calculator.html"
};
document.getElementById("searchButton").addEventListener("click", function () {
  let query = document.getElementById("searchInput").value.toLowerCase().trim();

  if (pages[query]) {
    window.location.href = pages[query];
  } else {
    alert("Calculator not found!");
  }
});

document.getElementById("searchInput").addEventListener("keypress", function(e) {
  if (e.key === "Enter") {
    document.getElementById("searchButton").click();
  }
});
