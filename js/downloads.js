// Initialize Lucide icons
document.addEventListener("DOMContentLoaded", () => {
  lucide.createIcons();
});

// ===== Hamburger Menu =====
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector("nav ul");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("show");
});

// Close menu when clicking a link (for mobile)
document.querySelectorAll("nav ul li a").forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("show");
  });
});

// ===== Optional glow effect on download cards =====
const cards = document.querySelectorAll(".download-card");
cards.forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(192,177,148,0.08), var(--card-bg))`;
  });
  card.addEventListener("mouseleave", () => {
    card.style.background = "var(--card-bg)";
  });
});

// ===== Navbar link glow animation =====
const navLinks = document.querySelectorAll("nav ul li a");
navLinks.forEach((link) => {
  link.addEventListener("mouseenter", () => {
    link.style.textShadow = "0 0 8px #c9b194";
  });
  link.addEventListener("mouseleave", () => {
    link.style.textShadow = "none";
  });
});
