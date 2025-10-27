// Typed.js
const typed = new Typed('.typed', {
  strings: document.querySelector('.typed').getAttribute('data-typed-items').split(','),
  typeSpeed: 100,
  backSpeed: 50,
  backDelay: 1500,
  loop: true
});

// AOS init
AOS.init({
  duration: 1000,
  once: true
});
