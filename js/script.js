/**
 * All rights reserved, nz-projekts 2024.
 */
// Constantes)
const printMe = document.querySelector(".downloadIcon")
const flipCard = document.querySelector("#flipCard")
const navLinks = document.querySelectorAll(".navIcons")
const contents = document.querySelectorAll(".content");
const Age = document.querySelector("#Age");
const catchPhrase = document.querySelector(".highlighted")
const slideIn = document.querySelector(".slideInText");
const slideOut = document.querySelector(".slideOutText");

// Variables d'initialisation
let activeLink = navLinks[0];
let activeContent = contents[0];
let citations = [
    "“ Il n’y a qu’une seule façon d’échouer, c’est d’abandonner avant d’avoir réussi. ”",
    "“ Le succès ne consiste pas à ne jamais faire d’erreur, mais à ne jamais faire la même erreur deux fois. ”",
    "“ Le plus grand plaisir de la vie est de réaliser ce que les autres vous pensent incapable de réaliser. ”",
    "“ Tout ce que l’esprit de l’homme peut concevoir et croire, il peut l’accomplir. ”"
]
let i = 1;

// Initialisation
catchPhrase.innerHTML = catchPhrase.getAttribute("data-text");
slideIn.innerHTML = slideIn.getAttribute("data-text");
slideOut.style.display = "none";

// Animations
let slideAnimation = setInterval(() => {

    slideOut.style.display = "block";
    slideOut.setAttribute("data-text", slideIn.getAttribute("data-text"));
    slideOut.innerHTML = slideOut.getAttribute("data-text");
    slideOut.classList.add("slide-out");

    slideIn.setAttribute("data-text", citations[i % citations.length]);
    slideIn.innerHTML = slideIn.getAttribute("data-text");
    slideIn.classList.add("slide-in");
    slideIn.style.display = "block";

    i++

    setTimeout(() => {
        slideOut.classList.remove("slide-out");
        slideOut.style.display = "none";
        setTimeout(() => {
            slideIn.classList.remove("slide-in");
        }, 1000);
    }, 1000);

}, 5000);

flipCard.addEventListener("click", () => {
    flipCard.classList.toggle("flipped");
    if (flipCard.classList.contains("flipped")) {
        flipCard.addEventListener("mouseleave", () => {
            flipCard.classList.remove("flipped");
        });
    }
});

navLinks.forEach(link => {
    let event = window.innerWidth < 1024 ? "touchend" : "click";
    link.addEventListener(event, () => {
        activeLink.classList.remove("activeLink");
        link.classList.add("activeLink");
        activeLink = link;
        contents.forEach(content => {
            if (content.getAttribute("id") === link.getAttribute("id").replace("Tab", "") + "Content") {
                activeContent.classList.remove("activeContent");
                content.classList.add("activeContent");
                activeContent = content;
                delay = 0;
            }
        });
    });
});


// Fonctions
function getCurrentAge() {
    const formattedDate = new Date().toLocaleDateString("fr-FR");

    let day = formattedDate.slice(0, 2) - 7
    let month = formattedDate.slice(3, 5) - 7
    let year = formattedDate.slice(6) - 2002

    if (month < 0 || (month <= 0 && day < 0)) {
        year--;
    }

    return year;
}
Age.innerHTML = getCurrentAge() + " ans";

(function konamiCodeHandler() {
    const konamiCode = [
        "arrowup",
        "arrowup",
        "arrowdown",
        "arrowdown",
        "arrowleft",
        "arrowright",
        "arrowleft",
        "arrowright",
        "b",
        "a",
    ];

    let konamiCodeIndex = 0;
    let backspacePresses = 0;
    document.addEventListener("keydown", function (event) {
        ;
        if (event.key.toLowerCase() === konamiCode[konamiCodeIndex]) {
            konamiCodeIndex++;

            if (konamiCodeIndex === konamiCode.length) {

                let main = document.querySelector("main");
                let konami = document.createElement("div");
                konami.style.position = "fixed";
                konami.style.top = "0";
                konami.style.left = "0";
                konami.style.width = "100%";
                konami.style.height = "100%";
                konami.style.backgroundColor = "rgba(0,0,0,0.8)";
                konami.style.color = "white";
                konami.style.display = "flex";
                konami.style.flexDirection = "column";
                konami.style.alignItems = "center";
                konami.style.justifyContent = "center";
                konami.style.zIndex = "1000";
                konami.innerHTML = `
                <p>Appuyez deux fois sur la touche "Espace" pour fermer cette fenêtre.</p>
                <iframe 
                    width="800" 
                    height="800" 
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" 
                    title="Rick Astley - Never Gonna Give You Up (Official Music Video)" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;" allowfullscreen>
                </iframe>
                `;

                main.appendChild(konami);

                document.addEventListener("keydown", function (event) {
                    if (event.key === " ") {
                        backspacePresses++;
                        if (backspacePresses === 2) {
                            konami.remove();
                            backspacePresses = 0;
                        }
                    }
                });
            }

        }

        else {
            konamiCodeIndex = 0;
        }
    });
})();

(function godMode() {
    let activated = false;
    let godModeIndex = 0;
    let godModeCode = [
        "arrowup",
        "arrowright",
        "a",
        "b",
        "a",
        "arrowdown",
        "a",
        "l",
        "l"
    ];

    document.addEventListener("keydown", function (event) {
        if (event.key.toLowerCase() === godModeCode[godModeIndex]) {
            godModeIndex++;
            if (godModeIndex === godModeCode.length) {
                godModeIndex = 0;
                activated = !activated;

                let body = document.body;
                let godMode = document.createElement("img");
                godMode.style.position = "fixed";
                godMode.style.top = "0";
                godMode.style.left = "0";
                godMode.style.zIndex = "1000";

                if (activated) {
                    godMode.src = "./images/godMode.png";
                    body.appendChild(godMode);
                    setTimeout(() => {
                        godMode.remove();
                    }, 3000);
                }
                else {
                    godMode.src = "./images/godModeOff.png";
                    body.appendChild(godMode);
                    setTimeout(() => {
                        godMode.remove();
                    }, 3000);
                }
            }
        }
        else {
            godModeIndex = 0;
        }
    });
})()

const colors = {
    'php': '#4F5D95',
    'javascript': '#F7DF1E',
    'typescript': '#007ACC',
    'html': '#E34F26',
    'css': '#264DE4',
    'python': '#306998',
    'java': '#007396',
    'c#': '#239120',
    'c++': '#00599C',
    'ruby': '#CC342D',
    'swift': '#FA7343',
    'shell': '#89E051',
}

function displayRepos() {
    const repos = reposData;
    const reposContainer = document.querySelector("#projectsContent .mainContent");

    repos.forEach(repo => {
        const repoCard = document.createElement("a");
        repoCard.href = repo.html_url;
        repoCard.classList.add("repoCard");

        const repoName = document.createElement("h3");
        repoName.textContent = repo.name;
        repoName.classList.add("repoName");

        const repoDescription = document.createElement("p");
        repoDescription.textContent = repo.description || "Aucune description disponible.";
        repoDescription.classList.add("repoDescription");

        const repoLanguage = document.createElement("p");
        repoLanguage.textContent = repo.language || "Aucun langage spécifié.";
        repoLanguage.classList.add("repoLanguage");
        repoLanguage.style.color = colors[repo.language.toLowerCase()] || "#000";

        repoCard.appendChild(repoName);
        repoCard.appendChild(repoDescription);
        repoCard.appendChild(repoLanguage);

        reposContainer.appendChild(repoCard);
    });
}

displayRepos();
