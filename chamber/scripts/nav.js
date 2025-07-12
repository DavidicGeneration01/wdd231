document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const mobileNav = document.querySelector('.mobile-nav'); // We need to add this to HTML if we want a slide-out menu

    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', () => {
            // For a basic toggle, we can just change the display of the mobile navigation.
            // If you implement a full slide-out menu, you'd toggle a class here.
            console.log('Mobile menu toggled (functionality to be added if a mobile nav element is present)');
            // Example if you add a .mobile-nav element that is initially display: none;
            // if (mobileNav) {
            //     mobileNav.classList.toggle('active'); // You'd define 'active' in CSS to show it
            // }
        });
    }
});