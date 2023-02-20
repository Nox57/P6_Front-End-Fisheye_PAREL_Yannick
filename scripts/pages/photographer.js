// We keep the photographers's ID
const params = new URLSearchParams(document.location.search);
let displayMediaAlreadyCalled = false;

// If URL doesn't have photographer's id, we redirect user
if (!params.has('id')) {
    document.location.href = 'index.html';
}

const id = parseInt(params.get('id'));

// eslint-disable-next-line require-jsdoc
async function getPhotographers() {
    const response = await fetch('data/photographers.json');
    return await response.json();
}

// eslint-disable-next-line require-jsdoc
async function displayHeader(photographer) {
    const headerSection = document.querySelector('.photograph-header');
    const headerModel = photographerFactory(photographer, 'headerPhotographer');
    const headerDOM = headerModel.getUserHeaderDOM();
    headerSection.appendChild(headerDOM);
}

// eslint-disable-next-line require-jsdoc
async function displayMedia(photographer, medias) {
    const mediaSection = document.querySelector('.media_section');
    const totalLikesSection = document.querySelector('.photograph_sticky_total_likes');

    let totalLikes = 0;
    let nbMedia = 0;

    // We sort by popularity by default
    if (displayMediaAlreadyCalled === false) {
        medias.sort((a, b) => b.likes - a.likes);
        displayMediaAlreadyCalled = true;
    }

    medias.forEach((media) => {
        totalLikes += media.likes;
        const mediaModel = mediaFactory(photographer, media, nbMedia);
        const mediaCardDOM = mediaModel.getMediaCardDOM();
        mediaSection.appendChild(mediaCardDOM);
        nbMedia++;
    });

    totalLikesSection.textContent = totalLikes;
}

// eslint-disable-next-line require-jsdoc
async function init() {
    const {photographers, media} = await getPhotographers();
    const photographer = photographers.find((photographer) => id === photographer.id);

    // If we can't find a photographer with current id, we redirect user
    if (photographer === undefined) {
        document.location.href = 'index.html';
    }

    // We keep the firstname for the media path
    let firstname = photographer.name.split(' ')[0];
    if (firstname.match('-')) {
        firstname = firstname.replace('-', ' ');
    }

    const medias = media.filter((m) => id === m.photographerId);

    displayHeader(photographer);
    displayMedia(firstname, medias);
    filterMedia(medias, firstname);
};

init();
