const params = new URLSearchParams(document.location.search);

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

    //console.log(medias);

    // Sort by popularity by default 
    medias.sort(sortFunction);

    function sortFunction(a, b) {
        if (a["likes"] === b["likes"]) {
            return 0;
        }
        else {
            return (a["likes"] > b["likes"]) ? -1 : 1;
        }
    }

    //console.log(medias);

    medias.forEach((media) => {
        const mediaModel = mediaFactory(photographer, media);
        const mediaCardDOM = mediaModel.getMediaCardDOM();
        mediaSection.appendChild(mediaCardDOM);
    });  
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

};

init();