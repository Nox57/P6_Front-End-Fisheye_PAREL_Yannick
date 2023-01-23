    async function getPhotographers() {
        // return fetch("data/photographers.json")
        //     .then(function(res) {
        //         if (res.ok) {
        //             return res.json();
        //         }
        //     })
        //     .catch(function(err) {
        //         console.log(err)
        //     });
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
        // Récupère les datas des photographes
        const { photographers } = await getPhotographers();
        displayData(photographers);
    };
    
    init();
    
