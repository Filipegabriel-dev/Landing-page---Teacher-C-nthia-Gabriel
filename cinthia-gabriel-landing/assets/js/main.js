/**
 * Cínthia Gabriel - Landing Page
 * Vanilla JS para interações e acessibilidade
 */

document.addEventListener('DOMContentLoaded', () => {
  // Smooth scroll para âncoras
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href === '#') return;
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      // Fechar menu mobile ao clicar em link
      const mobileNav = document.getElementById('mobile-nav');
      const menuToggle = document.getElementById('menu-toggle');
      if (mobileNav && mobileNav.classList.contains('block')) {
        mobileNav.classList.add('hidden');
        mobileNav.classList.remove('block');
        menuToggle?.setAttribute('aria-expanded', 'false');
        document.getElementById('menu-icon')?.classList.remove('hidden');
        document.getElementById('menu-close')?.classList.add('hidden');
      }
    });
  });

  // Toggle menu hambúrguer (mobile)
  const menuToggle = document.getElementById('menu-toggle');
  const mobileNav = document.getElementById('mobile-nav');
  const menuIcon = document.getElementById('menu-icon');
  const menuClose = document.getElementById('menu-close');

  if (menuToggle && mobileNav) {
    menuToggle.addEventListener('click', () => {
      const isOpen = mobileNav.classList.contains('block');
      mobileNav.classList.toggle('hidden', isOpen);
      mobileNav.classList.toggle('block', !isOpen);
      menuToggle.setAttribute('aria-expanded', !isOpen);
      if (menuIcon) menuIcon.classList.toggle('hidden', !isOpen);
      if (menuClose) menuClose.classList.toggle('hidden', isOpen);
    });
  }
});
