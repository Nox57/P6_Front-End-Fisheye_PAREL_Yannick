function photographerFactory(data) {
    const { id, name, portrait, city, country, tagline, price } = data;

    const picture = `assets/photographers/${portrait}`;
    const link = `photographer.html?id=${id}`;

    function getUserCardDOM() {
        // const card = `
        // <article>
        //     <a href="${link}">
        //         <img src="${picture}">
        //         <h2>${name}</h2>
        //     </a>
        //     <p>${city}, ${country}</p>
        //     <p>${tagline}</p>
        //     <p>${price}</p>
        // </article>
        // `;

        // return card;

        let article = document.createElement('article');
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
        article.innerHTML = `<a href="${link}">${article.innerHTML}</a>`;
        console.log(article)
        return (article);
    }
    return { name, picture, getUserCardDOM }
}