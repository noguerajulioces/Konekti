const header = document.getElementById('header');
let isTop = true;

window.addEventListener('scroll', function() {
  if (window.scrollY === 0) {
    isTop = true;
    header.classList.remove('sticky');
  } else {
    if (isTop) {
      isTop = false;
      header.classList.add('sticky');
    }
  }
});