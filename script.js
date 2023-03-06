// Fonctionnalité 1 et 1-bis : Afficher "Clic numéro X" en console lors de X clics sur le footer
let footer = document.querySelector("footer");
let countClicks = 0;

footer.addEventListener("click", function() {
  countClicks += 1;
  console.log(`Clic numéro ${countClicks}`);
});

// Fonctionnalité 2 : Dérouler le "hamburger menu"
// elementDuDOM.classList.toggle("nomDeLaClasse")
//let navbarBtn = document.querySelector("navbar-toggler");
//let navbarHeader = document.querySelector("#navbarHeader");

//navbarBtn?.addEventListener('click', function() {
//  navbarHeader.classList.toggle("collapse");
//  console.log('You clicked the button');
//});

// Fonctionnalité 3 : Changer la couleur de la première carte en rouge lors du clic sur Edit (irréversible)
let firstCardEditBtn = document.querySelector("body > main > div > div > div > div:nth-child(1) > div > div > div > div > button.btn.btn-sm.btn-outline-secondary")
let firstCardText = document.querySelector("body > main > div > div > div > div:nth-child(1) > div > div > p")

firstCardEditBtn.addEventListener("click", function() {
  firstCardText.style.color = 'red';
});

// Fonctionnalité 4 : Changer la couleur de la deuxième carte en vert lors du clic sur Edit (réversible)
let secondCardEditBtn = document.querySelector("body > main > div > div > div > div:nth-child(2) > div > div > div > div > button.btn.btn-sm.btn-outline-secondary")
let secondCardText = document.querySelector("body > main > div > div > div > div:nth-child(2) > div > div > p")

secondCardEditBtn.addEventListener("click", function() {
  if (secondCardText.style.color === 'green'){
    secondCardText.style.color = '' ; 
  } else {
    secondCardText.style.color = 'green' ;
  }
});

// Fonctionnalité 5 : Faire disparaitre le Bootstrap lors du double clic sur la navbar (réversible)
// Indice : Cherche sur Google comment désactiver le tag <link> avec JavaScript.

// Fonctionnalité 6

// Fonctionnalité 7

// Fonctionnalité 8

// Fonctionnalité 9
