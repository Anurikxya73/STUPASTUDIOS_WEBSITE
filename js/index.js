// 🌌 Parallax hero movement
document.addEventListener("mousemove", (e) => {
  const hero = document.querySelector(".hero");
  if (!hero) return;
  const moveX = (e.clientX / window.innerWidth - 0.5) * 12;
  const moveY = (e.clientY / window.innerHeight - 0.5) * 12;
  hero.style.transform = `translate(${moveX}px, ${moveY}px)`;
});

// 🌟 Navbar glow animation
const navLinks = document.querySelectorAll("nav ul li a");
navLinks.forEach((link) => {
  link.addEventListener("mouseenter", () => {
    link.style.textShadow = "0 0 10px #c9b194, 0 0 20px #a08963";
  });
  link.addEventListener("mouseleave", () => {
    link.style.textShadow = "none";
  });
});

// ===== Hamburger Menu =====
document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const nav = document.querySelector("nav");

  if (hamburger && nav) {
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("open");
      nav.classList.toggle("active"); // slides in
    });

    // Close menu on link click
    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        hamburger.classList.remove("open");
        nav.classList.remove("active");
      });
    });
  }

  // Lucide icons
  lucide.createIcons();
});


// ===== Hero fade-in and smooth effects =====
window.addEventListener("load", () => {
  const heroLogo = document.querySelector(".hero-logo");
  const heroText = document.querySelector(".hero h2");
  if (heroLogo) heroLogo.style.opacity = "1";
  if (heroText) heroText.style.opacity = "1";
});
