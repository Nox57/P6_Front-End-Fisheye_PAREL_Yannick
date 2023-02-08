// Dom elements
const input_firstname = document.getElementById("firstname");
const input_lastname = document.getElementById("lastname");
const input_email = document.getElementById("email");
const textarea_message = document.getElementById("message");
const submitForm = document.querySelector("#modal-form");

function displayModal() {
    const modal = document.getElementById("contact_modal");
	modal.style.display = "block";
}

function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
}

// Inputs form events
input_firstname.addEventListener("change", checkName);
input_lastname.addEventListener("change", checkName);
input_email.addEventListener("change", checkEmail);
textarea_message.addEventListener("change", checkMessage);

// Submit button event
submitForm.addEventListener("submit", validate);

// Form validation
function validate(form) {
    // We cancel form submission
    form.preventDefault();
    if (checkName.call(input_firstname) && checkName.call(input_lastname) && checkEmail.call(input_email) && checkMessage.call(textarea_message)) {
        let formValidated = document.querySelector(".modal");
        formValidated.innerHTML = "<p class='formValidated'>Votre message a bien été envoyé au photographe.<br><br>Il vous recontactera très rapidement.</p>";
        formValidated.innerHTML += "<p><input class='contact_button' type='submit' value='Fermer' onclick='closeModal()'></p>";
    }
    else {
        checkName.call(input_firstname);
        checkName.call(input_lastname);
        checkEmail.call(input_email);
        checkMessage.call(textarea_message);
    }
}

// We check if input firstname and lastname are valids
function checkName() {
    // We check if it's firstname or lastname input
    let name = this.id === "firstname" ? "prénom" : "nom";
    // We check if the value is equal or greater than 2 characters & if the value is not null
    if (this.value.length >= 2 && this.value != null) {
        // We check with regex if there is no numbers [0-9] in the value
        if (!(/\d/.test(this.value))) {
            display_valid(this);
            return true;
        }
        else {
            display_error(this, "Le "+name+" ne doit pas contenir de chiffres.");
            return false;
        }
    }
    else {
        display_error(this, "Veuillez entrer 2 caractères ou plus pour le champ du "+name+".");
        return false;
    } 
}

// We check if email is valid with regex
function checkEmail() {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.value)) {
        display_valid(this);
        return true;
    }
    else {
        display_error(this, "Veuillez entrer une adresse email valide.");
        return false;
    }
}

// We check if textarea is not empy
function checkMessage() {
    if (this.value.length >= 20 && this.value != null) {
        display_valid(this);
        return true;
    }
    else {
        display_error(this, "Votre message doit contenir au moins 20 caractères.");
        return false;
    }
}

// Displaying error messages
function display_error(element, errorMessage) {
    element.classList.add("input_error");
    document.getElementById("infos-"+element.id).style.display = "block";
    document.getElementById("infos-"+element.id).classList.add("error_msg");
    document.getElementById("infos-"+element.id).textContent = errorMessage;
}

// Displaying valid inputs
function display_valid(element) {
    document.getElementById("infos-"+element.id).textContent = "";
    document.getElementById("infos-"+element.id).style.display = "none";
    element.classList.add("input_validated");
    element.classList.remove("input_error");
}