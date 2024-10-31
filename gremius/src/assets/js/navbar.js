document.addEventListener('DOMContentLoaded', () => {
    const mobileMenu = document.getElementById('mobile-menu');
    const navbar = document.querySelector('.navbar');

    mobileMenu.addEventListener('click', () => {
        navbar.classList.toggle('active');
    });
});
