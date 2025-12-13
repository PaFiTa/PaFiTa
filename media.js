let slideIndex = 0;
let slideInterval = null;

function showSlides(n) {
    const slides = document.getElementsByClassName('mySlide');
    const dots = document.getElementsByClassName('dot');
    if (!slides.length) return;
    if (n >= slides.length) slideIndex = 0;
    if (n < 0) slideIndex = slides.length - 1;
    for (let i = 0; i < slides.length; i++) slides[i].style.display = 'none';
    for (let i = 0; i < dots.length; i++) dots[i].className = dots[i].className.replace(' active', '');
    slides[slideIndex].style.display = 'block';
    if (dots[slideIndex]) dots[slideIndex].className += ' active';
}

function plusSlides(n) {
    clearInterval(slideInterval);
    slideIndex += n;
    showSlides(slideIndex);
    slideInterval = setInterval(nextSlide, 4000);
}

function currentSlide(n) {
    clearInterval(slideInterval);
    slideIndex = n - 1;
    showSlides(slideIndex);
    slideInterval = setInterval(nextSlide, 4000);
}

function nextSlide() {
    slideIndex++;
    showSlides(slideIndex);
}

function startSlideshow() {
    const slides = document.getElementsByClassName('mySlide');
    if (!slides.length) return;
    slideIndex = 0;
    showSlides(slideIndex);
    slideInterval = setInterval(nextSlide, 4000);

    const container = document.querySelector('.slideshow-container');
    if (container) {
        container.addEventListener('mouseenter', () => clearInterval(slideInterval));
        container.addEventListener('mouseleave', () => { slideInterval = setInterval(nextSlide, 4000); });
    }
}

document.addEventListener('DOMContentLoaded', startSlideshow);
