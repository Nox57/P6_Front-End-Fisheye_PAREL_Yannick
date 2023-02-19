function mediaFactory(photographer, data, nb) {

    const path = `assets/photographers/${photographer}/`;
    const { id, likes, price, title, video, image, date} = data;
    const nbOfMedia = nb;
    //console.log(data);

    function getMediaCardDOM() {
        const media = document.createElement("article");
        const lightbox_link = document.createElement("a");
        lightbox_link.setAttribute("href", "#");
        const lightbox = document.querySelector(".modal-content");
        const lightbox_div = document.createElement("div");
        lightbox_div.setAttribute("class", "lightbox_slide");

        // Image || Video
        if (image) {
            const thumb = document.createElement("img");
            thumb.setAttribute("src", path+image);
            thumb.setAttribute("alt", title);
            lightbox_link.addEventListener("click", () => {
                currentSlide(nbOfMedia);
                openLightboxModal();
            });
            media.appendChild(lightbox_link);
            const lightbox_img = document.createElement("img");
            lightbox_img.setAttribute("src", path+image);
            lightbox_img.setAttribute("alt", title)
            lightbox_link.appendChild(thumb);
            lightbox_div.appendChild(lightbox_img);
        }
        else if (video) {
            const thumb = document.createElement("video");
            thumb.setAttribute("src", path+video);
            lightbox_link.setAttribute("aria-label", "Ouvrir la vidéo dans la lightbox");
            lightbox_link.addEventListener("click", (e) => {
                e.preventDefault();
                currentSlide(nbOfMedia);
                openLightboxModal(); 
            })
            media.appendChild(lightbox_link);

            const lightbox_video = document.createElement("video");
            lightbox_video.setAttribute("src", path+video);
            lightbox_video.setAttribute("controls", "");
            lightbox_link.appendChild(thumb);
            lightbox_div.appendChild(lightbox_video);
        }

        const title_container = document.createElement("div");

        // Title
        const title_link = document.createElement("a");
        title_link.setAttribute("href", "#")
        const title_span = document.createElement("span");
        const title_lightbox = document.createElement("p");
        title_span.classList = "media_title"
        title_span.textContent = title;
        title_lightbox.textContent = title;
        title_link.addEventListener("click", (e) => {
            currentSlide(nbOfMedia);
            openLightboxModal();
        })

        // Likes
        const likes_link = document.createElement("a");
        likes_link.setAttribute("href", "#")
        likes_link.setAttribute("aria-label", "likes")
        const likes_span = document.createElement("span");
        likes_span.className = "media_likes";
        likes_span.innerHTML = likes + "<i class='fa-solid fa-heart'></i>";

        ///////////////////////////////////////////////////////////
        let likes_counter = {
            likes: likes,
            liked: false,
            like: function() {
                this.likes += this.liked ? -1 : 1;
                this.total_likes += this.liked ? -1 : 1;
                this.liked = !this.liked;
            }
        }




        let total_likes_boolean = false;



        likes_link.addEventListener("click", (event) => {
            event.preventDefault();
            let total_likes = document.querySelector(".photograph_sticky_total_likes");
            if (total_likes_boolean === false) {
                total_likes.innerHTML = parseInt(total_likes.innerHTML, 10) + 1;
                total_likes_boolean = true;
            }
            else {
                total_likes.innerHTML = parseInt(total_likes.innerHTML, 10) - 1;
                total_likes_boolean = false;
            }

            likes_counter.like();
            likes_span.innerHTML = likes_counter.likes + "<i class='fa-solid fa-heart'></i>";

        });
        ///////////////////////////////////////////////////////////


        // We add elements to the article
        title_container.appendChild(title_link);
        title_link.appendChild(title_span);
        title_container.appendChild(likes_link);
        likes_link.appendChild(likes_span);
        media.appendChild(title_container);
        // We add elements to the carrousel
        lightbox_div.appendChild(title_lightbox);
        lightbox.appendChild(lightbox_div);


        return media;
    }

    return { getMediaCardDOM };
}