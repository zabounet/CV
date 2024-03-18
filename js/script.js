// Constantes
const printMe = document.querySelector(".downloadIcon")
const flipCard = document.querySelector("#flipCard")
const navLinks = document.querySelectorAll(".navIcons")
const contents = document.querySelectorAll(".content");
const Age = document.querySelector("#Age");

// Variables d'initialisation
let activeLink = navLinks[0];
let activeContent = contents[0];

// Ecouteurs d'événements
printMe.addEventListener("click", () => {
    alert(`
            Merci votre intêret pour mon profil !
            Mais pourquoi ne pas me contacter directement par mail ?
            Vous pouvez aussi me retrouver sur LinkedIn ou GitHub !
        `)
    print()
});

flipCard.addEventListener("click", () => {
    flipCard.classList.toggle("flipped");
    if (flipCard.classList.contains("flipped")) {
        flipCard.addEventListener("mouseleave", () => {
            flipCard.classList.remove("flipped");
        });
    }
});

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        activeLink.classList.remove("activeLink");
        link.classList.add("activeLink");
        activeLink = link;
        contents.forEach(content => {
            if (content.getAttribute("id") === link.getAttribute("id").replace("Tab", "") + "Content") {
                activeContent.classList.remove("activeContent");
                content.classList.add("activeContent");
                activeContent = content;
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