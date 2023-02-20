// eslint-disable-next-line require-jsdoc
async function getPhotographers() {
    const response = await fetch('data/photographers.json');
    return await response.json();
}

// eslint-disable-next-line require-jsdoc
async function displayData(photographers) {
    const photographersSection = document.querySelector('.photographer_section');

    photographers.forEach((photographer) => {
        const photographerModel = photographerFactory(photographer, 'Photographer');
        const userCardDOM = photographerModel.getUserCardDOM();
        photographersSection.appendChild(userCardDOM);
    });
};

// eslint-disable-next-line require-jsdoc
async function init() {
    const {photographers} = await getPhotographers();
    displayData(photographers);
};

init();
