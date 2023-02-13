// Open the lightbox
function openLightboxModal() {
    document.getElementById("lightbox_modal").style.display = "block";
    //removing scrollbar
    document.body.style.overflow = "hidden";

    document.addEventListener('keydown', function eventHandler(e) {
        if (e.key === "Escape") {
            closeLightboxModal();
            document.removeEventListener('keydown', eventHandler);
        }
        else if (e.key === "ArrowLeft") {
            plusSlides(-1);
        }
        else if (e.key === "ArrowRight") {
            plusSlides(1);
        }
    });
}
  
// Close the lightbox
function closeLightboxModal() {
    document.getElementById("lightbox_modal").style.display = "none";
    document.body.style.overflow = "auto"; 
}

var slideIndex = 0;

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("lightbox_slide");
    if (n > slides.length -1) {slideIndex = 0}
    if (n < 0) {slideIndex = slides.length-1}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slides[slideIndex].style.display = "block";
}