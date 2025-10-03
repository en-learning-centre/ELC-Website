const menuToggle = document.getElementById('mobile-menu');
const nav = document.querySelector('.nav');

menuToggle.addEventListener('click', () => {
  nav.classList.toggle('active');
  menuToggle.classList.toggle('active');
});
// Highlight active navbar link
document.addEventListener("DOMContentLoaded", () => {
  const currentPath = window.location.pathname.split("/").pop(); // get current file name
  const navLinks = document.querySelectorAll(".navbar .nav li a");

  navLinks.forEach(link => {
    const href = link.getAttribute("href");
    if (href === currentPath) {
      link.classList.add("active");
    }
  });
});
