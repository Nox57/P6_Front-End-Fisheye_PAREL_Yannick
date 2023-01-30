function mediaFactory(photographer, data) {

    const path = `assets/photographers/${photographer}/`;
    const { id, likes, price, title, video, image, date} = data;
    
    //console.log(data);

    function getMediaCardDOM() {
        const media = document.createElement("article");

        // Image || Video
        if (image) {
            const thumb = document.createElement("img");
            thumb.setAttribute("src", path+image);
            media.appendChild(thumb);
        }
        else if (video) {
            const thumb = document.createElement("video");
            thumb.setAttribute("src", path+video);
            thumb.setAttribute("controls", "");
            media.appendChild(thumb);
        }

        const title_container = document.createElement("div");

        // Title
        const title_span = document.createElement("span");
        title_span.classList = "media_title"
        title_span.textContent = title;

        // Likes
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



        likes_span.addEventListener("click", (event) => {
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
        title_container.appendChild(title_span);
        title_container.appendChild(likes_span);
        media.appendChild(title_container);

        return media;
    }

    return { getMediaCardDOM };
}