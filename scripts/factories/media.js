function mediaFactory(photographer, data) {

    const path = `assets/photographers/${photographer}/`;
    const { id, likes, price, title, video, image, date} = data;
    
    console.log(path);
    console.log(data);

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

        // We add elements to the article
        title_container.appendChild(title_span);
        title_container.appendChild(likes_span);
        media.appendChild(title_container);

        return media;
    }

    return { getMediaCardDOM };
}