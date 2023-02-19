function photographerFactory(data, type) {
    const { id, name, portrait, city, country, tagline, price } = data;

    const picture = `assets/photographers/${portrait}`;

    if (type === "headerPhotographer") {
        return { name, picture, getUserHeaderDOM };
    }
    else if (type === "Photographer"){
        return { name, picture, getUserCardDOM };
    }
    else {
        return "Type incorrect";
    }

    function getUserCardDOM() {

        const article = document.createElement('article');

        // Photographer profile picture
        const img = document.createElement('img');
        img.setAttribute("src", picture);
        img.setAttribute("alt", "Photo de "+name);

        // Photographer name
        const h2 = document.createElement('h2');
        h2.textContent = name;

        // Photographer location (city, country) -> transforer en span
        const p_location = document.createElement("p");
        p_location.textContent = city+", "+country;

        // Photographer tagline
        const p_tagline = document.createElement("p");
        p_tagline.textContent = tagline;

        // Photographer price -> transforer en span
        const p_price = document.createElement("p");
        p_price.textContent = price+"€/jour";

        // We add links on photographer profile picture and name
        const link = document.createElement("a");
        link.setAttribute("href", "photographer.html?id="+id);
        link.appendChild(img);
        link.appendChild(h2);

        // We add elements to the article
        article.appendChild(link);
        article.appendChild(p_location);
        article.appendChild(p_tagline);
        article.appendChild(p_price);

        return (article);
    }

    function getUserHeaderDOM() {

        const section = document.createElement('section');

        const left = document.createElement('div');
        left.classList = "photograph-header-informations"

        // Photographer name
        const h1 = document.createElement('h1');
        h1.setAttribute("id", "photograph-header-name");
        h1.textContent = name;

        // Photographer location (city, country)
        const location = document.createElement("span");
        location.textContent = city+", "+country;

        // Photographer tagline
        const p_tagline = document.createElement("p");
        p_tagline.textContent = tagline;


        const mid = document.createElement("div")
        mid.classList = "photograph-header-contact"

        // Contact modal button
        const contact = document.createElement("button");
        contact.classList = "contact_button";
        contact.setAttribute("onclick", "displayModal()")
        contact.textContent = "Contactez-moi";

        const right = document.createElement("div")
        right.classList = "photograph-header-picture"

        // Photographer profile picture
        const img = document.createElement('img');
        img.setAttribute("src", picture);
        img.setAttribute("alt", "Photo de "+name);

        // Photographer price in sticky infos
        const sticky_price = document.querySelector(".photograph_sticky_price");
        sticky_price.textContent = price+"€ / jour";

        // We add elements to the section
        left.appendChild(h1);
        left.appendChild(location);
        left.appendChild(p_tagline);
        section.appendChild(left);

        mid.appendChild(contact);
        section.appendChild(mid);

        right.appendChild(img);
        section.appendChild(right);

        return (section);
    }
    
}