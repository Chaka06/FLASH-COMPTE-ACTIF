document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('save-form');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Empêche l'envoi du formulaire

        const amount = document.getElementById('amount').value;

        // Afficher un message de confirmation
        alert(`Votre demande d'épargne de ${amount} € est en cours de validation.`);

        // Réinitialiser le formulaire
        form.reset();
    });
});
