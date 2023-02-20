// eslint-disable-next-line require-jsdoc, no-unused-vars
function mediaFactory(photographer, data, nb) {
    const path = `assets/photographers/${photographer}/`;
    const {likes, title, video, image} = data;
    const nbOfMedia = nb;

    // eslint-disable-next-line require-jsdoc
    function getMediaCardDOM() {
        const media = document.createElement('article');
        const lightboxLink = document.createElement('a');
        lightboxLink.setAttribute('href', '#');
        const lightbox = document.querySelector('.modal-content');
        const lightboxDiv = document.createElement('div');
        lightboxDiv.setAttribute('class', 'lightbox_slide');

        // Image || Video
        if (image) {
            const thumb = document.createElement('img');
            thumb.setAttribute('src', path+image);
            thumb.setAttribute('alt', title);
            lightboxLink.addEventListener('click', () => {
                currentSlide(nbOfMedia);
                openLightboxModal();
            });
            media.appendChild(lightboxLink);
            const lightboxImg = document.createElement('img');
            lightboxImg.setAttribute('src', path+image);
            lightboxImg.setAttribute('alt', title);
            lightboxLink.appendChild(thumb);
            lightboxDiv.appendChild(lightboxImg);
        } else if (video) {
            const thumb = document.createElement('video');
            thumb.setAttribute('src', path+video);
            lightboxLink.setAttribute('aria-label', 'Ouvrir la vidéo dans la lightbox');
            lightboxLink.addEventListener('click', (e) => {
                e.preventDefault();
                currentSlide(nbOfMedia);
                openLightboxModal();
            });
            media.appendChild(lightboxLink);

            const lightboxVideo = document.createElement('video');
            lightboxVideo.setAttribute('src', path+video);
            lightboxVideo.setAttribute('controls', '');
            lightboxLink.appendChild(thumb);
            lightboxDiv.appendChild(lightboxVideo);
        }

        const titleContainer = document.createElement('div');

        // Title
        const titleLink = document.createElement('a');
        titleLink.setAttribute('href', '#');
        const titleSpan = document.createElement('span');
        const titleLightbox = document.createElement('p');
        titleSpan.classList = 'media_title';
        titleSpan.textContent = title;
        titleLightbox.textContent = title;
        titleLink.addEventListener('click', (e) => {
            currentSlide(nbOfMedia);
            openLightboxModal();
        });

        // Likes
        const likesLink = document.createElement('a');
        likesLink.setAttribute('href', '#');
        likesLink.setAttribute('aria-label', 'likes');
        const likesSpan = document.createElement('span');
        likesSpan.className = 'media_likes';
        likesSpan.innerHTML = likes + '<i class=\'fa-solid fa-heart\'></i>';

        // Likes counter
        const likesCounter = {
            likes: likes,
            liked: false,
            like: function() {
                this.likes += this.liked ? -1 : 1;
                this.total_likes += this.liked ? -1 : 1;
                this.liked = !this.liked;
            },
        };

        let totalLikesBoolean = false;

        likesLink.addEventListener('click', (event) => {
            event.preventDefault();
            const totalLikes = document.querySelector('.photograph_sticky_total_likes');
            if (totalLikesBoolean === false) {
                totalLikes.innerHTML = parseInt(totalLikes.innerHTML, 10) + 1;
                totalLikesBoolean = true;
            } else {
                totalLikes.innerHTML = parseInt(totalLikes.innerHTML, 10) - 1;
                totalLikesBoolean = false;
            }

            likesCounter.like();
            likesSpan.innerHTML = likesCounter.likes + '<i class=\'fa-solid fa-heart\'></i>';
        });

        // We add elements to the article
        titleContainer.appendChild(titleLink);
        titleLink.appendChild(titleSpan);
        titleContainer.appendChild(likesLink);
        likesLink.appendChild(likesSpan);
        media.appendChild(titleContainer);
        // We add elements to the lightbox
        lightboxDiv.appendChild(titleLightbox);
        lightbox.appendChild(lightboxDiv);

        return media;
    }

    return {getMediaCardDOM};
}
