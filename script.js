document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Récupérer les valeurs du formulaire
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    // Afficher un message de succès
    var formMessage = document.getElementById('form-message');
    formMessage.innerHTML = 'Merci, ' + name + '! Votre message a bien été envoyé.';

    // Réinitialiser le formulaire
    document.getElementById('contact-form').reset();
});
