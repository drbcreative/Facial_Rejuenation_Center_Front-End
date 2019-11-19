/* Navbar Location */

/* Check to see window width */
const hero = document.querySelector('.hero'),
  header = document.querySelector('header'),
  navWrapper = document.querySelector('.nav-wrapper');

/* Load Menu location based on initial screen width */
document.addEventListener('DOMContentLoaded', () => {
  const winWidth = window.innerWidth;

  if (winWidth >= 1200) {
    hero.appendChild(navWrapper);
  } else {
    // do nothing
  }
});

/* Relocate Navbar based on Window Width */
window.addEventListener('resize', () => {
  const winWidth = window.innerWidth;
  if (winWidth >= 1200) {
    hero.appendChild(navWrapper);

  } else if (winWidth < 1200) {
    header.appendChild(navWrapper);
  }
});


/* Animation */
function animateCSS(element, animationName) {

  const node = document.querySelector(element);

  /* only on scroll */
  window.addEventListener('scroll', () => {

    if (node.getBoundingClientRect().top < window.innerHeight / 1.3) {
      node.classList.add('animated', animationName);
    }

  });

  /* only on scroll */
}

/* Animation Trigger */
animateCSS('.information', 'fadeInUp');
// animateCSS('.about-us', 'fadeInUp');
animateCSS('#laser-info', 'fadeInRight');
animateCSS('#functional-info', 'fadeInLeft');
animateCSS('.functional-health', 'fadeIn');
animateCSS('#chiro-img', 'fadeInLeft');
animateCSS('#chiro-info', 'fadeInRight');
animateCSS('#aesthetics-info', 'fadeInLeft');
animateCSS('#aesthetics-img', 'fadeInRight');
animateCSS('.visit', 'fadeInUp');
animateCSS('#mas-therapy', 'fadeInUp');
animateCSS('.footer-1', 'fadeInUp');