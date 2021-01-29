// Mobile Navigation
document.getElementById("menu-icon").addEventListener('click', () => {
    document.querySelector('.mobile-menu').style.display = "block";
    gsap.from('.mobile-menu', { opacity: 0, duration: 1.5 });
    gsap.from('.mobile-menu .nav-item', { x: 50, duration: 1, opacity: 0, stagger: 0.25 });
});

document.getElementById("close-icon").addEventListener('click', () => {
    document.querySelector('.mobile-menu').style.display = "none";            
});

// Dropdown Menu Animation
const portfolioNavItem = document.querySelector('.portfolio-nav-item');
const dropdown = document.getElementById('dropdown');

portfolioNavItem.addEventListener('mouseenter', () => {
    
    if (dropdown.style.display != 'flex') {
        dropdown.style.display = 'flex';
        gsap.to('#dropdown', { opacity: 1, duration: 1 });
    }
});

portfolioNavItem.addEventListener('mouseleave', () => {

    if (dropdown.style.display !== 'none') {
        gsap.to('#dropdown', { opacity: 0, duration: 1 });
        setTimeout(() => { dropdown.style.display = 'none' }, 1000);
    }
})