function photographerFactory(data) {
    const { name, portrait, city, country, tagline, price  } = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement('article');
        const img = document.createElement('img');
        img.setAttribute("src", picture)
        const h2 = document.createElement('h2');
        h2.textContent = name;
        // city & country
        const p_location = document.createElement("p");
        p_location.textContent = city+", "+country;
        // tagline
        const p_tagline = document.createElement("p");
        p_tagline.textContent = tagline;
        // price
        const p_price = document.createElement("p");
        p_price.textContent = price+"€/jour";
        article.appendChild(img);
        article.appendChild(h2);
        article.appendChild(p_location);
        article.appendChild(p_tagline);
        article.appendChild(p_price);
        return (article);
    }
    return { name, picture, getUserCardDOM }
}