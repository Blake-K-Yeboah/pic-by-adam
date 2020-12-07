
window.addEventListener('load', () => {

    const workImages = document.querySelectorAll('.work-img');
    const overlay = document.querySelector('#overlay');

    workImages.forEach(image => {
        image.addEventListener('click', () => {
            image.classList.add('active');
            overlay.style.display = "block";
        });
    });

    overlay.addEventListener('click', () => {
        document.querySelector('.work-img.active').classList.remove('active');
        overlay.style.display = "none";
    });

})