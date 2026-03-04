// ================= PROJECTS =================
const projects = [
    {
        name: "IT Ticketing System",
        logo: "images/IT_Ticketing_System_Logo.png",
        techStack: "Python, React, FastAPI, Supabase (PostgreSQL)",
        description: "Full-stack IT support platform implementing role-based access control, secure authentication, and RESTful CRUD API operations.",
        github: "https://github.com/bairejavier1/IT_Ticketing_System",
        live: "#"
    },
    {
        name: "EntertainmentHub",
        logo: "images/EntertainmentHub_Logo.png",
        techStack: "React, Vite, Supabase (PostgreSQL)",
        description: "Dynamic forum platform supporting real-time posts, filtering, and relational database integrity.",
        github: "https://github.com/bairejavier1/Web102_Week9_EntertainmentHub_Web_App",
        live: "#"
    }
];

const projectsContainer = document.getElementById("projectsContainer");

projects.forEach(project => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
        <div class="card-inner">
            <div class="card-front">
                <img src="${project.logo}" alt="${project.name} Logo">
            </div>
            <div class="card-back">
                <h3>${project.name}</h3>
                <p><strong>Tech Stack Used:</strong> ${project.techStack}</p>
                <p><strong>Project Overview:</strong> ${project.description}</p>
                <div class="card-links">
                    <a href="${project.github}" target="_blank">GitHub</a>
                    <a href="${project.live}" target="_blank">Live Link</a>
                </div>
            </div>
        </div>
    `;

    projectsContainer.appendChild(card);
});

// ================= INTERESTS =================
const interests = [
    {
        name: "Ping Pong",
        image: "https://images.unsplash.com/photo-1708268418738-4863baa9cf72?q=80&w=1814&auto=format&fit=crop",
        links: [
            { name: "Adam Bobrow", url: "https://www.youtube.com/@AdamBobrow" },
            { name: "WTT Global", url: "https://www.youtube.com/@wttglobal" }
        ]
    },
    {
        name: "Basketball",
        image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=1780&auto=format&fit=crop",
        links: [
            { name: "ProfessorLive", url: "https://www.youtube.com/@Professorlive" },
            { name: "BallIsLife", url: "https://www.youtube.com/@ballislife" }
        ]
    },
    {
        name: "Soccer",
        image: "https://plus.unsplash.com/premium_photo-1733342559406-34859aaf2c4d?q=80&w=1738&auto=format&fit=crop",
        links: [
            { name: "SportsHD", url: "https://www.youtube.com/@SportsHD" }
        ]
    },
    {
        name: "Baseball",
        image: "https://plus.unsplash.com/premium_photo-1664304917046-1dc50564cd46?q=80&w=1740&auto=format&fit=crop",
        links: [
            { name: "MLB", url: "https://www.youtube.com/@MLB" }
        ]
    },
    {
        name: "Learning & Growth",
        image: "https://images.unsplash.com/photo-1548393488-ae8f117cbc1c?q=80&w=830&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        links: [
            { name: "BroCodez", url: "https://www.youtube.com/@BroCodez" },
            { name: "Programming with Mosh", url: "https://www.youtube.com/@programmingwithmosh" },
            { name: "NeetCode", url: "https://www.youtube.com/@NeetCode" },
            { name: "TEDx", url: "https://www.youtube.com/@TEDx" },
            { name: "freeCodeCamp", url: "https://www.youtube.com/@freecodecamp" },
            { name: "The Bearded IT Dad", url: "https://www.youtube.com/@TheBeardedITDad" }
        ]
    }
];

const interestsContainer = document.getElementById("interestsContainer");

interests.forEach(interest => {
    const card = document.createElement("div");
    card.classList.add("card");

    const linksHTML = interest.links
        .map(link => `<li><a href="${link.url}" target="_blank">${link.name}</a></li>`)
        .join("");

    card.innerHTML = `
        <img src="${interest.image}" alt="${interest.name}">
        <h3>${interest.name}</h3>
        <ul>${linksHTML}</ul>
    `;

    interestsContainer.appendChild(card);
});

// ================= FADE-IN ON SCROLL =================
const fadeSections = document.querySelectorAll(".fade-section");

const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            } else {
                entry.target.classList.remove("visible");
            }
        });
    },
    { threshold: 0.25 }
);

fadeSections.forEach(section => observer.observe(section));

// ================= THEME & ACCENT TOGGLES =================
const body = document.body;
const themeToggleBtn = document.getElementById("themeToggle");
const accentToggleBtn = document.getElementById("accentToggle");

const accentColors = ["#00e0ff", "#00ff88", "#a970ff", "#ffb400"];
let accentIndex = 0;

// ========== Updated applyAccent function ==========
function applyAccent() {
    const color = accentColors[accentIndex];
    document.documentElement.style.setProperty("--accent", color);

    // Update project cards glow/border dynamically
    const projectCards = document.querySelectorAll(".card-front, .card-back");
    projectCards.forEach(card => {
        card.style.border = `2px solid ${color}`;
        card.style.boxShadow = `0 0 12px ${color}`;
    });
}

function toggleTheme() {
    const current = body.getAttribute("data-theme");
    const next = current === "dark" ? "light" : "dark";
    body.setAttribute("data-theme", next);
}

themeToggleBtn.addEventListener("click", toggleTheme);

accentToggleBtn.addEventListener("click", () => {
    accentIndex = (accentIndex + 1) % accentColors.length;
    applyAccent();
});

// initial accent
applyAccent();

// ================= SMOOTH, PRECISE NAV SCROLL =================
const navbar = document.querySelector(".navbar");
const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(link => {
    link.addEventListener("click", event => {
        event.preventDefault();

        const targetId = link.dataset.target;
        const target = document.getElementById(targetId);
        if (!target) return;

        const navHeight = navbar.offsetHeight;
        const targetTop = target.offsetTop - navHeight;

        window.scrollTo({
            top: targetTop,
            behavior: "smooth"
        });
    });
});

// ================= LOGO TYPEWRITER =================
window.addEventListener("DOMContentLoaded", () => {

    const logoText = document.getElementById("logoText");

    // Safety check (prevents errors if element not found)
    if (!logoText) return;

    const text = logoText.textContent.trim();
    const characters = Array.from(text); // emoji-safe
    logoText.textContent = "";

    let index = 0;

    function typeLogo() {
        if (index === 0) {
            logoText.classList.add("typing"); // start cursor blink
        }

        if (index < characters.length) {
            logoText.textContent += characters[index];
            index++;
            setTimeout(typeLogo, 110);
        } else {
            logoText.classList.remove("typing"); // stop cursor
        }
    }

    typeLogo();
});

// ================= SCROLL TYPEWRITER (USES EXISTING HTML TEXT) =================
window.addEventListener("DOMContentLoaded", () => {

    const scrollMessage = document.getElementById("scrollMessage");
    if (!scrollMessage) return;

    // Grab the text already inside HTML
    const originalText = scrollMessage.textContent.trim();
    const characters = Array.from(originalText); // emoji-safe
    scrollMessage.textContent = ""; // clear initially

    let scrollTriggered = false;
    let typingTimeout = null;

    function typeMessage(index = 0) {
        if (index === 0) {
            scrollMessage.classList.add("typing");
        }

        if (index < characters.length) {
            scrollMessage.textContent += characters[index];
            typingTimeout = setTimeout(() => {
                typeMessage(index + 1);
            }, 90);
        } else {
            scrollMessage.classList.remove("typing");
            typingTimeout = null;
        }
    }

    window.addEventListener("scroll", () => {

        const scrollTop = window.scrollY;
        const windowHeight = window.innerHeight;
        const docHeight = document.documentElement.scrollHeight;

        // When user reaches bottom
        if (!scrollTriggered && scrollTop + windowHeight >= docHeight - 50) {
            scrollMessage.classList.add("show");
            scrollMessage.textContent = "";
            typeMessage();
            scrollTriggered = true;
        }

        // Reset if user scrolls up
        if (scrollTop + windowHeight < docHeight - 120) {
            if (typingTimeout) clearTimeout(typingTimeout);
            scrollMessage.textContent = "";
            scrollMessage.classList.remove("show");
            scrollMessage.classList.remove("typing");
            scrollTriggered = false;
        }
    });
});