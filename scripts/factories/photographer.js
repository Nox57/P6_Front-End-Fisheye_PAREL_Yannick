/* eslint-disable space-before-blocks */
// eslint-disable-next-line require-jsdoc, no-unused-vars
function photographerFactory(data, type) {
    const {id, name, portrait, city, country, tagline, price} = data;

    const picture = `assets/photographers/${portrait}`;

    if (type === 'headerPhotographer') {
        return {name, picture, getUserHeaderDOM};
    } else if (type === 'Photographer'){
        return {name, picture, getUserCardDOM};
    } else {
        return 'Type incorrect';
    }

    // eslint-disable-next-line require-jsdoc
    function getUserCardDOM() {
        const article = document.createElement('article');

        // Photographer profile picture
        const img = document.createElement('img');
        img.setAttribute('src', picture);
        img.setAttribute('alt', 'Photo de '+name);

        // Photographer name
        const h2 = document.createElement('h2');
        h2.textContent = name;

        // Photographer location (city, country) -> transforer en span
        const pLocation = document.createElement('p');
        pLocation.textContent = city+', '+country;

        // Photographer tagline
        const pTagline = document.createElement('p');
        pTagline.textContent = tagline;

        // Photographer price -> transforer en span
        const pPrice = document.createElement('p');
        pPrice.textContent = price+'€/jour';

        // We add links on photographer profile picture and name
        const link = document.createElement('a');
        link.setAttribute('href', 'photographer.html?id='+id);
        link.appendChild(img);
        link.appendChild(h2);

        // We add elements to the article
        article.appendChild(link);
        article.appendChild(pLocation);
        article.appendChild(pTagline);
        article.appendChild(pPrice);

        return (article);
    }

    // eslint-disable-next-line require-jsdoc
    function getUserHeaderDOM() {
        const section = document.createElement('section');

        const left = document.createElement('div');
        left.classList = 'photograph-header-informations';

        // Photographer name
        const h1 = document.createElement('h1');
        h1.setAttribute('id', 'photograph-header-name');
        h1.textContent = name;

        // Photographer location (city, country)
        const location = document.createElement('span');
        location.textContent = city+', '+country;

        // Photographer tagline
        const pTagline = document.createElement('p');
        pTagline.textContent = tagline;


        const mid = document.createElement('div');
        mid.classList = 'photograph-header-contact';

        // Contact modal button
        const contact = document.createElement('button');
        contact.classList = 'contact_button';
        contact.setAttribute('onclick', 'displayModal()');
        contact.textContent = 'Contactez-moi';

        const right = document.createElement('div');
        right.classList = 'photograph-header-picture';

        // Photographer profile picture
        const img = document.createElement('img');
        img.setAttribute('src', picture);
        img.setAttribute('alt', 'Photo de '+name);

        // Photographer price in sticky infos
        const stickyPrice = document.querySelector('.photograph_sticky_price');
        stickyPrice.textContent = price+'€ / jour';

        // We add elements to the section
        left.appendChild(h1);
        left.appendChild(location);
        left.appendChild(pTagline);
        section.appendChild(left);

        mid.appendChild(contact);
        section.appendChild(mid);

        right.appendChild(img);
        section.appendChild(right);

        return (section);
    }
}
