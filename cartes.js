// JavaScript pour calculer et appliquer les styles dynamiques
const plafond = 500000;
const utilise = 100000;
const restant = plafond - utilise;

const progressBar = document.querySelector('.compte-progress-bar');
const progression = (utilise / plafond) * 100;

progressBar.style.width = progression + '%';

if (progression < 25) {
    progressBar.style.backgroundColor = 'green';
} else if (progression < 50) {
    progressBar.style.backgroundColor = 'yellow';
} else if (progression < 75) {
    progressBar.style.backgroundColor = 'orange';
} else {
    progressBar.style.backgroundColor = 'red';
}






// Récupérer la modale
var modal = document.getElementById("myModal");

// Récupérer le lien qui ouvre la modale
var btn = document.getElementById("infoLink");

// Récupérer l'élément <span> qui ferme la modale
var span = document.getElementsByClassName("close")[0];

// Lorsque l'utilisateur clique sur le lien, ouvrir la modale
btn.onclick = function(event) {
    event.preventDefault();  // Empêche le comportement par défaut du lien
    modal.style.display = "block";
}

// Lorsque l'utilisateur clique sur <span> (x), fermer la modale
span.onclick = function() {
    modal.style.display = "none";
}

// Lorsque l'utilisateur clique en dehors de la modale, la fermer
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}




//========GRAPHISME ET TAUX DE CHANGE============
