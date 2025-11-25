// Fonction pour mélanger un tableau de manière aléatoire
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Fonction pour valider une adresse email
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Fonction pour valider un numéro client
function isValidClientNumber(number) {
    const clientNumberRegex = /^\d+$/; 
    return clientNumberRegex.test(number);
}

// Sélectionne tous les boutons du clavier numérique
const keypadButtons = document.querySelectorAll('.numeric-keypad .key');

// Crée un tableau des chiffres de 0 à 9
const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// Mélange les chiffres aléatoirement
const shuffledDigits = shuffleArray(digits);

// Assigner les chiffres mélangés aux boutons du clavier numérique
keypadButtons.forEach((button, index) => {
    button.textContent = shuffledDigits[index];
    button.addEventListener('click', () => {
        const secretCodeInput = document.getElementById('secretCode');
        secretCodeInput.value += button.textContent;
    });
});

// Sélectionne les éléments nécessaires pour l'authentification
const clientNumberInput = document.getElementById('clientNumber');
const secretCodeInput = document.getElementById('secretCode');
const submitButton = document.getElementById('submitButton');

// Écoute l'événement de soumission du formulaire
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Empêche l'envoi du formulaire par défaut

    // Récupère les valeurs des champs
    const identifier = clientNumberInput.value.trim();
    const secretCode = secretCodeInput.value.trim();

    // Vérifie si l'identifiant est valide (email ou numéro client)
    const isEmail = isValidEmail(identifier);
    const isClientNumber = isValidClientNumber(identifier);

    if (!isEmail && !isClientNumber) {
        alert('Veuillez entrer une adresse email valide ou un numéro client valide.');
        return;
    }

    // Définir les identifiants valides (à adapter selon vos besoins)
    const validCredentials = {
        email: 'oliviertorresmartinez@gmail.com',
        clientNumber: '14217816',
        secretCode: '2143013'
    };

    // Vérifie les informations selon le type d'identifiant
    let isValid = false;
    if (isEmail && identifier === validCredentials.email && secretCode === validCredentials.secretCode) {
        isValid = true;
    } else if (isClientNumber && identifier === validCredentials.clientNumber && secretCode === validCredentials.secretCode) {
        isValid = true;
    }

    if (isValid) {
        // Redirige vers la page suivante
        window.location.href = 'Comptes.html';
    } else {
        // Affiche une alerte pour indiquer que les informations sont incorrectes
        alert('Veuillez entrer les bonnes informations.');
        // Réinitialise le champ du code secret
        secretCodeInput.value = '';
    }
});


