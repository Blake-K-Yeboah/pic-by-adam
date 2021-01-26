const portfolioOverlay = document.querySelector(".portfolio-overlay");
const portfolioPopupImage = document.querySelector(".portfolio-popup-image");
        
const showImagePopUp = (source) => {

    portfolioOverlay.style.display = 'block';

    gsap.to('.portfolio-overlay', { opacity: 1, duration: .5 });

    portfolioPopupImage.style.display = 'block';
    portfolioPopupImage.src = source;

    gsap.to('.portfolio-popup-image', { opacity: 1, duration: .5, height: '90vh' });

}

const hideImagePopUp = () => {

    gsap.to('.portfolio-overlay', { opacity: 0, duration: .5 });
    gsap.to('.portfolio-popup-image', { opacity: 0, duration: .5 });

    setTimeout(() => {

        portfolioOverlay.style.display = 'none';
        portfolioPopupImage.style.display = 'none';

    }, 500);

}

const workImages = document.querySelectorAll('.work-image');
        
workImages.forEach(image => {

    image.addEventListener('click', showImagePopUp.bind(this, image.src));

});

portfolioOverlay.addEventListener('click', hideImagePopUp);