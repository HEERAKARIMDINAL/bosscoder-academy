var swiper = new Swiper('.mySwiper', {
  slidesPerView: 3,
  spaceBetween: 50,
  loop: true,
  // freeMode: true,
  // cssMode: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
// sticky head
const head = document.querySelector('.head-body');
const sticky = document.querySelector('.head');
const sticky_nav = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) {
    sticky.classList.add('sticky');
  } else {
    sticky.classList.remove('sticky');
  }
};
const setsticky = new IntersectionObserver(sticky_nav, {
  root: null,
  threshold: 0,
});
setsticky.observe(head);
// animation scrolling
const sections = document.querySelectorAll('.section');
const showSection = function (entries, observe) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;
  else {
    entry.target.classList.remove('section-hidden');
  }
  observe.unobserve(entry.target);
};
const animationection = new IntersectionObserver(showSection, {
  root: null,
  threshold: 0.2,
});
sections.forEach(section => {
  section.classList.add('section-hidden');
  animationection.observe(section);
});
