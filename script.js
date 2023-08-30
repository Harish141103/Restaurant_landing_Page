
const images = ['img/img1.jpg', 'img/img2.jpg', 'img/img3.jpg','img/img4.jpg','img/img5.jpg'];

const slideshowImage = document.querySelector('.slideshow-image');

let currentIndex = 0;

function changeSlide() {
    slideshowImage.style.backgroundImage = `url(${images[currentIndex]})`;
    currentIndex = (currentIndex + 1) % images.length;
}

function startSlideAnimation() {
    changeSlide();
    setInterval(changeSlide, 4000); // Change slide every 5 seconds
}

startSlideAnimation();
