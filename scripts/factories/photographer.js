function photographerFactory(data) {
    const { id, name, portrait, city, country, tagline, price } = data;

    const picture = `assets/photographers/${portrait}`;

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
    return { name, picture, getUserCardDOM }
}