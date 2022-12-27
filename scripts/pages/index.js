    async function getPhotographers() {
        return fetch("data/photographers.json")
            .then(function(res) {
                if (res.ok) {
                    console.log(res.json);
                    return res.json();
                }
            })
            .catch(function(err) {
                console.log(err)
            });
    }

    async function displayData(photographers) {
        const photographersSection = document.querySelector(".photographer_section");

        photographers.forEach((photographer) => {
            const photographerModel = photographerFactory(photographer);
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
    
