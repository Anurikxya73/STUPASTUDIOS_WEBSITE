// js/team.js
(() => {
  const hamburger = document.querySelector('.hamburger');
  const nav = document.querySelector('nav');
  const navLinks = document.querySelectorAll('nav a');

  if (!hamburger || !nav) return;

  // Accessibility attributes
  hamburger.setAttribute('role', 'button');
  hamburger.setAttribute('aria-label', 'Toggle navigation');
  hamburger.setAttribute('aria-expanded', 'false');
  nav.setAttribute('aria-hidden', 'true');

  function openMenu() {
    hamburger.classList.add('open');
    nav.classList.add('active');
    hamburger.setAttribute('aria-expanded', 'true');
    nav.setAttribute('aria-hidden', 'false');
    // prevent body scroll on mobile when nav open
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    hamburger.classList.remove('open');
    nav.classList.remove('active');
    hamburger.setAttribute('aria-expanded', 'false');
    nav.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  function toggleMenu() {
    if (nav.classList.contains('active')) closeMenu();
    else openMenu();
  }

  // click on hamburger
  hamburger.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleMenu();
  });

  // close menu when a nav link is clicked (mobile)
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      // small delay to allow link navigation animation if any
      closeMenu();
    });
  });

  // close when clicking outside the nav (on document)
  document.addEventListener('click', (e) => {
    if (!nav.classList.contains('active')) return;
    if (!nav.contains(e.target) && !hamburger.contains(e.target)) {
      closeMenu();
    }
  });

  // close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && nav.classList.contains('active')) {
      closeMenu();
    }
  });

  // Optional: close on resize if desktop (prevents stuck open)
  window.addEventListener('resize', () => {
    if (window.innerWidth > 768 && nav.classList.contains('active')) {
      closeMenu();
    }
  });
})();
