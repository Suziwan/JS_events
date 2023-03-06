// Fonctionnalité 1 et 1-bis : Afficher "Clic numéro X" en console lors de X clics sur le footer
let footerEl = document.querySelector("footer");
let countClicks = 0;

footerEl.addEventListener("click", function() {
  countClicks += 1;
  console.log(`Clic numéro ${countClicks}`);
});

// Fonctionnalité 2 : Dérouler le hamburger menu
// elementDuDOM.classList.toggle("nomDeLaClasse")

// Fonctionnalité 3 : Changer la couleur de la première carte en rouge (irréversible)
// rajoute un style ="color: red"

// Fonctionnalité 4 : Changer la couleur de la deuxième carte en vert (réversible)
// if (secondCard.style.color === 'green'){
// secondCard.style.color = '' ;
// }else …

// Fonctionnalité 5 : Faire disparaitre le Bootstrap lors du double clic sur la navbar (réversible)
// Indice : Cherche sur Google comment désactiver le tag <link> avec JavaScript.

// Fonctionnalité 6

// Fonctionnalité 7

// Fonctionnalité 8

// Fonctionnalité 9
