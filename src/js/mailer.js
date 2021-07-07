(function () {
    /**Mailer */

    try {
        emailjs.init('user_2fVJEKoP7Hyvko2yIOixO');
    } catch (error) {}
    // form submit
    const form = document.getElementById('form');
    const submitButton = document.getElementById('submitButton');
    const closeButton = document.getElementById('closeButton');
    form.addEventListener('submit', function (ev) {
        ev.preventDefault();
        disableForm();
        emailjs
            .sendForm(
                'service_hp9vzrd',
                'template_yqw6umy',
                form
            )
            .then(
                () => {
                    enableForm();
                    form.reset();
                    showPopup('success');
                    closeButton.click();
                },
                (err) => {
                    enableForm();
                    showPopup();
                }
            );
    });


    const popupContainer = document.getElementById('popup');
    const popupText = document.getElementById('popup-text');

    function showPopup(type) {
        if (popupContainer.style.display !== '' || popupContainer.style.display !== null) {
            const delay = type === 'success' ? 6000 : 4000;
            popupContainer.style.display = 'block';

            if (type === 'success') {
                popupContainer.classList.remove('error');
                popupContainer.classList.add('success');
                popupText.innerHTML = 'Vous avez été enregistré(e), <br> vous serez contacté(e) par nos services, lorsque la solution sera disponible.';
            } else {
                popupContainer.classList.remove('success');
                popupContainer.classList.add('error');
                popupText.innerHTML = 'Une erreur s\'est produite. Veuillez réessayer.'
            }

            setTimeout(() => {
                popupContainer.style.display = 'none';
            }, delay);
        }
    }

    function enableForm() {
        submitButton.innerText = 'Enregistrez-moi';
        submitButton.removeAttribute("disabled");;
    }

    function disableForm() {
        submitButton.innerText = 'Chargement...';
        submitButton.setAttribute('disabled', true);
    }
})();