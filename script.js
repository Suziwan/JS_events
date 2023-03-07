// Fonctionnalité 1 et 1-bis : Afficher "Clic numéro X" en console lors de X clics sur le footer
let footer = document.querySelector("footer");
let countClicks = 0;

footer.addEventListener("click", function() {
  countClicks += 1;
  console.log(`Clic numéro ${countClicks}`);
});

// Fonctionnalité 2 : Dérouler le "hamburger menu" lors du clic sur l'icone
let navbarBtn = document.querySelector(".navbar-toggler");
let navbarHeader = document.querySelector("#navbarHeader");

navbarBtn.addEventListener('click', function() {
  navbarHeader.classList.toggle("collapse");
});

// Fonctionnalité 3 : Changer la couleur de la première carte en rouge lors du clic sur Edit (irréversible)
let firstCardEditBtn = document.querySelector("body > main > div > div > div > div:nth-child(1) > div > div > div > div > button.btn.btn-sm.btn-outline-secondary")
let firstCard = document.querySelector("body > main > div > div > div > div:nth-child(1) > div")

firstCardEditBtn.addEventListener("click", function() {
  firstCard.style.color = 'red';
});

// Fonctionnalité 4 : Changer la couleur de la deuxième carte en vert lors du clic sur Edit (réversible)
let secondCardEditBtn = document.querySelector("body > main > div > div > div > div:nth-child(2) > div > div > div > div > button.btn.btn-sm.btn-outline-secondary")
let secondCard = document.querySelector("body > main > div > div > div > div:nth-child(2) > div")

secondCardEditBtn.addEventListener("click", function() {
  if (secondCard.style.color === 'green'){
    secondCard.style.color = ''; 
  } else {
    secondCard.style.color = 'green';
  }
});

// Fonctionnalité 5 : Faire disparaitre le Bootstrap lors du double clic sur la navbar (réversible)
let header = document.querySelector("header");
let bootstrapLink = document.querySelector("head > link");

header.addEventListener("dblclick", function() {
  if (bootstrapLink.href === "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"){
    bootstrapLink.href = "";
  } else {
    bootstrapLink.href = "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css";
  }
});

// Fonctionnalité 6 : Supprimer le texte et diminuer l'image de chaque card lorsqu'on passe sur le bouton view

// Fonctionnalité 7 : Bouton gris ==> déplace la dernière card en première place
let greyBtn = document.querySelector("body > main > section > div > p > a.btn.btn-secondary.my-2");
let lastCard = document.querySelector("body > main > div > div > div > div:nth-child(6)");
let parentDiv = document.querySelector("body > main > div > div > div");

greyBtn.addEventListener("click", actionGreyBtn);

function actionGreyBtn() {
  console.log("test grey button"); 
  // insertBefore(lastCard, firstCard)
}

// Fonctionnalité 8 : Bouton bleu <== déplace la première card en dernière place
let blueBtn = document.querySelector("body > main > section > div > p > a.btn.btn-primary.my-2");

blueBtn.addEventListener("click", actionBlueBtn);

function actionBlueBtn(event) {
  event.preventDefault()
  console.log("test blue button"); 
  // insertBefore(firstCard, lastCard.nextSibling)
}

// Fonctionnalités 9 : Lors de la sélection du logo "JS & Events" + déclenchées par touches du clavier :
let logo = document.querySelector("body > header > div.navbar.navbar-dark.bg-dark.box-shadow > div > a");

// Touche "a" : l'ensemble de la page va être condensé sur 4 colonnes Bootstrap à gauche de l'écran.
// Touche "y" : l'ensemble de la page va être condensé sur 4 colonnes Bootstrap au milieu de l'écran.
// Touche "p", l'ensemble de la page va être condensé sur 4 colonnes Bootstrap à droite de l'écran.
// Touche "b", tout redevient normal.
