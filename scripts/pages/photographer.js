// We keep the photographers's ID
const params = new URLSearchParams(document.location.search);
let displayMediaAlreadyCalled = false;

// If URL doesn't have photographer's id, we redirect user
if (!params.has("id")) {
    document.location.href = "index.html";
}

const id = parseInt(params.get("id"));

async function getPhotographers() {
        const response = await fetch("data/photographers.json");
        return await response.json();
}

async function displayHeader(photographer) {
    const headerSection = document.querySelector(".photograph-header");
    const headerModel = photographerFactory(photographer, "headerPhotographer");
    const headerDOM = headerModel.getUserHeaderDOM();
    headerSection.appendChild(headerDOM);
}

async function displayMedia(photographer, medias) {
    const mediaSection = document.querySelector(".media_section");
    const total_likes_section = document.querySelector(".photograph_sticky_total_likes");

    let total_likes = 0;
    let nbMedia = 0;

    // We sort by popularity by default
    if (displayMediaAlreadyCalled === false) {
        medias.sort((a, b) => b.likes - a.likes);
        displayMediaAlreadyCalled = true;
    }

    medias.forEach((media) => {
        total_likes += media.likes; 
        const mediaModel = mediaFactory(photographer, media, nbMedia);
        const mediaCardDOM = mediaModel.getMediaCardDOM();
        mediaSection.appendChild(mediaCardDOM);
        nbMedia++;
    });

    total_likes_section.textContent = total_likes;

}

async function init() {

    const { photographers, media } = await getPhotographers();
    const photographer = photographers.find(photographer => id === photographer.id);

    // If we can't find a photographer with current id, we redirect user
    if (photographer === undefined) {
        document.location.href = "index.html";
    }
    
    // We keep the firstname for the media path
    let firstname = photographer.name.split(" ")[0];
    if (firstname.match("-")) {
        firstname = firstname.replace("-", " ");
    } 

    const medias = media.filter(m => id === m.photographerId);

    displayHeader(photographer);
    displayMedia(firstname, medias);
    filterMedia(medias, firstname);

};

init();