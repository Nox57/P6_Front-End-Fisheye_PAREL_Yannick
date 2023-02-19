async function getPhotographers() {
        const response = await fetch("data/photographers.json")
        return await response.json();
}

async function displayData(photographers) {
    const photographersSection = document.querySelector(".photographer_section");

    photographers.forEach((photographer) => {
        const photographerModel = photographerFactory(photographer, "Photographer");
        const userCardDOM = photographerModel.getUserCardDOM();
        photographersSection.appendChild(userCardDOM);
    });
};

async function init() {
    const { photographers } = await getPhotographers();
    displayData(photographers);
};
    
init();