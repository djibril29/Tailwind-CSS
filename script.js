// ===== Mobile menu toggle =====
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const iconOpen = document.getElementById('icon-open');
const iconClose = document.getElementById('icon-close');

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

// ===== Header shadow on scroll =====
const header = document.getElementById('header');
const onScroll = () => {
  header.classList.toggle('shadow-lg', window.scrollY > 8);
};
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// ===== Contact form (front-end only demo) =====
const form = document.getElementById('contact-form');
const status = document.getElementById('form-status');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();
  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  if (!name || !emailValid || !message) {
    status.textContent = 'Please fill in all fields with a valid email. ⚠️';
    status.classList.remove('hidden', 'text-green-600');
    status.classList.add('text-brand-orange');
    return;
  }

  status.textContent = `Thanks ${name}! Your message has been sent. ✅`;
  status.classList.remove('hidden', 'text-brand-orange');
  status.classList.add('text-green-600');
  form.reset();
});

// ===== Footer year =====
document.getElementById('year').textContent = new Date().getFullYear();
