// Hamburger toggle and dark mode functionality
document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("navLinks");
  const darkToggle = document.getElementById('darkToggle');

  // Hamburger toggle
  if (hamburger && navLinks) {
    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("active");
      hamburger.classList.toggle("active");
    });

    // Optional: Close menu when a link is clicked (mobile UX)
    navLinks.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        hamburger.classList.remove("active");
      });
    });
  }

  // Dark mode toggle
  if (darkToggle) {
    darkToggle.addEventListener('click', function() {
      document.body.classList.toggle('dark-mode');
    });
  }
});