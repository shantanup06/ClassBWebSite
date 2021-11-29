const navTitle = document.getElementById('brand-con');
const navOptionCon = document.getElementById('nav-link-con');
const navButton = document.getElementById('nav-btn');
const navOptions = document.querySelector('.nav-links');

// Used for making sure 100vw doesn't overflow horizontally
// Keywords : Horizontal Overflow
function setVw() {
  let vw = document.documentElement.clientWidth / 100;
  document.documentElement.style.setProperty('--vw', `${vw}px`);
}

setVw();
window.addEventListener('resize', setVw);
// Used for making sure 100vw doesn't overflow horizontally

// Navbar toggler
function isHidden(el) {
    return (el.offsetParent === null);
}

function loadNavBar() {
  if (navTitle.classList.contains('visible')) {
    navTitle.classList.remove('visible');
    navOptions.classList.remove('visible');
    navOptionCon.classList.remove('visible');
  } else {
    navTitle.classList.add('visible');
    navOptions.classList.add('visible');
    navOptionCon.classList.add('visible');
  }
}

navButton.addEventListener("click", loadNavBar);

// Hide navbar on scroll
var prevScrollpos = window.pageYOffset;

window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-6.9rem";
    navTitle.classList.remove('visible');
    navOptions.classList.remove('visible');
    navOptionCon.classList.remove('visible');
  }
  prevScrollpos = currentScrollPos;
}
