// ===== Mobile menu toggle =====
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const iconOpen = document.getElementById('icon-open');
const iconClose = document.getElementById('icon-close');

if (menuBtn && mobileMenu && iconOpen && iconClose) {
  const closeMenu = () => {
    mobileMenu.classList.add('hidden');
    iconOpen.classList.remove('hidden');
    iconClose.classList.add('hidden');
    menuBtn.setAttribute('aria-expanded', 'false');
  };

  const toggleMenu = () => {
    const isHidden = mobileMenu.classList.toggle('hidden');
    iconOpen.classList.toggle('hidden', !isHidden);
    iconClose.classList.toggle('hidden', isHidden);
    menuBtn.setAttribute('aria-expanded', String(!isHidden));
  };

  menuBtn.addEventListener('click', toggleMenu);
  document.querySelectorAll('.mobile-link').forEach((link) => {
    link.addEventListener('click', closeMenu);
  });
}

// ===== Header shadow on scroll =====
const header = document.getElementById('header');
if (header) {
  const onScroll = () => {
    header.classList.toggle('shadow-lg', window.scrollY > 8);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

// ===== Contact form (front-end only demo) =====
const contactForm = document.getElementById('contact-form');
const contactStatus = document.getElementById('form-status');

if (contactForm && contactStatus) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = contactForm.name.value.trim();
    const email = contactForm.email.value.trim();
    const message = contactForm.message.value.trim();
    const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (!name || !emailValid || !message) {
      contactStatus.textContent = 'Please fill in all fields with a valid email. ⚠️';
      contactStatus.classList.remove('hidden', 'text-green-600');
      contactStatus.classList.add('text-brand-orange');
      return;
    }

    contactStatus.textContent = `Thanks ${name}! Your message has been sent. ✅`;
    contactStatus.classList.remove('hidden', 'text-brand-orange');
    contactStatus.classList.add('text-green-600');
    contactForm.reset();
  });
}

// ===== Newsletter form (front-end only demo) =====
const newsletterForm = document.getElementById('newsletter-form');
const newsletterStatus = document.getElementById('newsletter-status');

if (newsletterForm && newsletterStatus) {
  newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = newsletterForm.email.value.trim();
    const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (!emailValid) {
      newsletterStatus.textContent = 'Please enter a valid email address. ⚠️';
      newsletterStatus.classList.remove('hidden', 'text-green-300');
      newsletterStatus.classList.add('text-orange-200');
      return;
    }

    newsletterStatus.textContent = "You're subscribed! Check your inbox. ✅";
    newsletterStatus.classList.remove('hidden', 'text-orange-200');
    newsletterStatus.classList.add('text-green-300');
    newsletterForm.reset();
  });
}

// ===== Footer year =====
document.querySelectorAll('.year').forEach((el) => {
  el.textContent = new Date().getFullYear();
});
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();
