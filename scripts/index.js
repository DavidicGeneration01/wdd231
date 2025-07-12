const menu = document.querySelector("#menu").addEventListener("click", () => {
    const navLinks = document.querySelector(".nav-links");
    navLinks.style.display = "block";
});

const hideMenu = document.querySelector(".close-menu").addEventListener("click", () => {
    const navLinks = document.querySelector(".nav-links");
    navLinks.style.display = "none";
});

document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('menu');
    const navLinks = document.querySelector('.nav-links');
    const closeMenu = document.querySelector('.close-menu');

    // Show menu when menu button is clicked
    menuBtn.addEventListener('click', (e) => {
        navLinks.style.display = 'block';
        e.stopPropagation();
    });

    // Hide menu when close button is clicked
    closeMenu.addEventListener('click', (e) => {
        navLinks.style.display = 'none';
        e.stopPropagation();
    });

    // Hide menu when clicking outside the nav-links
    document.addEventListener('click', (e) => {
        if (navLinks.style.display === 'block' && !navLinks.contains(e.target) && e.target !== menuBtn) {
            navLinks.style.display = 'none';
        }
    });
});



const dateObject = new Date();
const currentYear = document.querySelector("#currentYear").textContent += dateObject.getFullYear();


document.querySelector("#lastModified").textContent = 
    `Last Modified ${new Date(document.lastModified).toLocaleDateString()}`




