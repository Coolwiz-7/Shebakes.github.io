let images = [
    '/images/cert-html.jpg',
    '/images/cert-intro-css.jpg',
    '/images/cert-css.jpg',
    '/images/cert-inter-css.jpg',
    '/images/cert-javascript.jpg',
    '/images/cert-javascript-int.jpg',
    '/images/cert-python.jpg'
];

let imageIndex = 0;

const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('prev');

function slideImage() {
  const image = document.getElementById('image');
  const nextImageSrc = images[imageIndex];

  image.src = nextImageSrc;
  image.style.opacity = '0';

  setTimeout(() => {
    image.style.transition = 'opacity 0.5s ease-in-out';
    image.style.opacity = '1';
  }, 250);
};

nextBtn.addEventListener('click', function() {
  imageIndex++;
  if (imageIndex >= images.length) {
    imageIndex = 0;
  }

  slideImage();
});

prevBtn.addEventListener('click', function() {
  imageIndex--;
  if (imageIndex < 0) {
    imageIndex = images.length - 1;
  }

  slideImage();
});


