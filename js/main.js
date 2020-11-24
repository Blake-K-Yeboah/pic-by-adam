// Carousel Functionality

window.addEventListener('load', () => {

    const moveImages = () => {
        document.querySelectorAll(".carousel-image").forEach((image) => {
        
            if (image.classList.contains("image-6")) {
                image.classList.remove("image-6");
                image.classList.add("image-1");
            } else {
                const imageValue = parseInt(image.classList.value.split('-')[2]);
                image.classList.remove(`image-${imageValue}`);
                image.classList.add(`image-${imageValue + 1}`);
            }
        });
    }

    setInterval(moveImages, 4000);
})