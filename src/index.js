const header = document.querySelector(".header");

function debounce(func, wait, immediate) {
  let timeout;
  return function (...args) {
    const context = this;
    const later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

function handleScroll() {
  if (window.scrollY === 0) header.classList.remove("shadow-active");
  else header.classList.add("shadow-active");
}

window.addEventListener("scroll", debounce(handleScroll, 20));

const linksInternos = document.querySelectorAll('a[href^="#"]');

function scrollToSection(event) {
  event.preventDefault();
  const href = event.currentTarget.getAttribute("href");
  const section = document.querySelector(href);
  scrollTo(0, section.offsetTop - 153);
}

linksInternos.forEach((link) =>
  link.addEventListener("click", scrollToSection)
);
