function mediaFactory(photographer, data) {

    const path = `assets/photographers/${photographer}/`;
    const { id, likes, price, title, video, image, date} = data;
    
    console.log(path)
    console.log(data)

    function getMediaCardDOM() {
        const media = document.createElement('article');

        // Image || Video
        if (image) {
            const thumb = document.createElement("img");
            thumb.setAttribute("src", path+image)
            media.appendChild(thumb);
        }
        else if (video) {
            const thumb = document.createElement("video");
            thumb.setAttribute("src", path+video)
            media.appendChild(thumb);
        }

        // Title
        const title_span = document.createElement("span");
        title_span.textContent = title;

        // Likes
        const likes_span = document.createElement("span");
        likes_span.textContent = likes;

        // We add elements to the article
        media.appendChild(title_span);
        media.appendChild(likes_span);

        return media;
    }

    return { getMediaCardDOM };
}