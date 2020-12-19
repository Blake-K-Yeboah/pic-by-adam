// Mobile Navigation
document.getElementById("menu-icon").addEventListener('click', () => {
    document.querySelector('.mobile-menu').style.display = "block";
    gsap.from('.mobile-menu', { opacity: 0, duration: 1.5 });
    gsap.from('.mobile-menu .nav-item', { x: 50, duration: 1, opacity: 0, stagger: 0.25 });
});

document.getElementById("close-icon").addEventListener('click', () => {
    document.querySelector('.mobile-menu').style.display = "none";            
});