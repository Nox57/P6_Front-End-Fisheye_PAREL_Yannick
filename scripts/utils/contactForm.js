// Dom elements
const inputFirstname = document.getElementById('firstname');
const inputLastname = document.getElementById('lastname');
const inputEmail = document.getElementById('email');
const textareaMessage = document.getElementById('message');
const submitForm = document.querySelector('#modal-form');
const titleForm = document.querySelector('#title_contact_modal');

// eslint-disable-next-line require-jsdoc, no-unused-vars
function displayModal() {
    // We add the photographer's name in the modal's h2
    const photographersName = document.querySelector('#photograph-header-name');
    titleForm.innerHTML = 'Contactez-moi<span>' + photographersName.textContent + '</span>';

    const main = document.querySelector('#main');
    main.setAttribute('aria-hidden', 'true');

    // We display the modal
    const modal = document.getElementById('contact_modal');
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    // We add the focus on the modal
    document.getElementById('contact_modal').focus();

    // We listen to the esc key
    document.addEventListener('keydown', function eventHandler(e) {
        if (e.key === 'Escape') {
            closeModal();
            document.removeEventListener('keydown', eventHandler);
        }
    });
}

// eslint-disable-next-line require-jsdoc
function closeModal() {
    const modal = document.getElementById('contact_modal');
    const main = document.querySelector('#main');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
    main.setAttribute('aria-hidden', 'false');
}

// Inputs form events
inputFirstname.addEventListener('change', checkName);
inputLastname.addEventListener('change', checkName);
inputEmail.addEventListener('change', checkEmail);
textareaMessage.addEventListener('change', checkMessage);

// Submit button event
submitForm.addEventListener('submit', validate);

// Form validation
// eslint-disable-next-line require-jsdoc
function validate(form) {
    // We cancel form submission
    form.preventDefault();
    if (checkName.call(inputFirstname) && checkName.call(inputLastname) &&
    checkEmail.call(inputEmail) && checkMessage.call(textareaMessage)) {
        const formValidated = document.querySelector('.modal');
        formValidated.innerHTML = '<p class=\'formValidated\'>Votre message a bien été envoyé au photographe.<br>';
        formValidated.innerHTML += '<br>Il vous recontactera très rapidement.</p>';
        // eslint-disable-next-line max-len
        formValidated.innerHTML += '<p><input class=\'send_message_button\' type=\'submit\' value=\'Fermer\' onclick=\'closeModal()\'></p>';
        console.log({
            firstname: inputFirstname.value,
            lastname: inputLastname.value,
            email: inputEmail.value,
            message: textareaMessage.value,
        });
    } else {
        checkName.call(inputFirstname);
        checkName.call(inputLastname);
        checkEmail.call(inputEmail);
        checkMessage.call(textareaMessage);
    }
}

// We check if input firstname and lastname are valids
// eslint-disable-next-line require-jsdoc
function checkName() {
    // We check if it's firstname or lastname input
    const name = this.id === 'firstname' ? 'prénom' : 'nom';
    // We check if the value is equal or greater than 2 characters & if the value is not null
    if (this.value.length >= 2 && this.value != null) {
        // We check with regex if there is no numbers [0-9] in the value
        if (!(/\d/.test(this.value))) {
            displayValid(this);
            return true;
        } else {
            displayError(this, 'Le '+name+' ne doit pas contenir de chiffres.');
            return false;
        }
    } else {
        displayError(this, 'Veuillez entrer 2 caractères ou plus pour le champ du '+name+'.');
        return false;
    }
}

// We check if email is valid with regex
// eslint-disable-next-line require-jsdoc
function checkEmail() {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.value)) {
        displayValid(this);
        return true;
    } else {
        displayError(this, 'Veuillez entrer une adresse email valide.');
        return false;
    }
}

// We check if textarea is not empy
// eslint-disable-next-line require-jsdoc
function checkMessage() {
    if (this.value.length >= 20 && this.value != null) {
        displayValid(this);
        return true;
    } else {
        displayError(this, 'Votre message doit contenir au moins 20 caractères.');
        return false;
    }
}

// Displaying error messages
// eslint-disable-next-line require-jsdoc
function displayError(element, errorMessage) {
    element.classList.add('input_error');
    document.getElementById('infos-'+element.id).style.display = 'block';
    document.getElementById('infos-'+element.id).classList.add('error_msg');
    document.getElementById('infos-'+element.id).textContent = errorMessage;
}

// Displaying valid inputs
// eslint-disable-next-line require-jsdoc
function displayValid(element) {
    document.getElementById('infos-'+element.id).textContent = '';
    document.getElementById('infos-'+element.id).style.display = 'none';
    element.classList.add('input_validated');
    element.classList.remove('input_error');
}
