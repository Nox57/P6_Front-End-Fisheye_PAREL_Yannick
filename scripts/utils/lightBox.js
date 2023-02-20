// Open the lightbox
// eslint-disable-next-line require-jsdoc, no-unused-vars
function openLightboxModal() {
    document.getElementById('lightbox_modal').style.display = 'block';
    // Removing scrollbar
    document.body.style.overflow = 'hidden';

    const main = document.querySelector('#main');
    main.setAttribute('aria-hidden', 'true');

    // We add the focus on the modal
    document.getElementById('lightbox_modal').focus();

    // We listen escape, arrow left and arrow right to navigate in the lightbox / close lightbox
    document.addEventListener('keydown', function eventHandler(e) {
        if (e.key === 'Escape') {
            closeLightboxModal();
            document.removeEventListener('keydown', eventHandler);
        } else if (e.key === 'ArrowLeft') {
            plusSlides(-1);
        } else if (e.key === 'ArrowRight') {
            plusSlides(1);
        }
    });
}

// Close the lightbox
// eslint-disable-next-line require-jsdoc
function closeLightboxModal() {
    document.getElementById('lightbox_modal').style.display = 'none';
    document.body.style.overflow = 'auto';

    const main = document.querySelector('#main');
    main.setAttribute('aria-hidden', 'false');
}

let slideIndex = 0;

// Next/previous controls
// eslint-disable-next-line require-jsdoc
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
// eslint-disable-next-line require-jsdoc, no-unused-vars
function currentSlide(n) {
    showSlides(slideIndex = n);
}

// eslint-disable-next-line require-jsdoc
function showSlides(n) {
    let i;
    const slides = document.getElementsByClassName('lightbox_slide');
    if (n > slides.length -1) {
        slideIndex = 0;
    }
    if (n < 0) {
        slideIndex = slides.length-1;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slides[slideIndex].style.display = 'block';
}
