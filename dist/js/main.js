const scrollButton = document.querySelector('.scroll');

window.onscroll = function () {
  showButton();
};

function showButton() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    scrollButton.style.display = 'block';
  } else {
    scrollButton.style.display = 'none';
  }
}

// Scroll document to top onclick
scrollButton.addEventListener('click', scroller);

function scroller() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
