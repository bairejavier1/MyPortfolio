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
                <p><strong>Project Overview: </strong>${project.description}</p>
                <a href="${project.github}" target="_blank">GitHub</a>
                <a href="${project.live}" target="_blank">Live Link</a>
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
        image: "https://media.istockphoto.com/id/2218205726/photo/continuous-learning-digital-evolution.jpg",
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

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        } else {
            entry.target.classList.remove("visible");
        }
    });
}, { threshold: 0.4 });

fadeSections.forEach(section => observer.observe(section));
