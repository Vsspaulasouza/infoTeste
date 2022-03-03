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
