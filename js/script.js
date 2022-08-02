// Activate Links
const links = document.querySelectorAll(".header-menu a");

function activateLinks(link) {
  const url = location.href;
  const href = link.href;

  if (url.includes(href)) {
    link.classList.add('active')
  }
}

links.forEach(activateLinks);


// Activate Product
const parameters = new URLSearchParams(location.search);

function activateProduct(parameter) {
  const element = document.getElementById(parameter);

  if (element) {
    element.checked = true;
  }
}

parameters.forEach(activateProduct);

// Gallery
const gallery = document.querySelectorAll('.bike-img img');
const galleryContainer = document.querySelector('.bike-img');

function changeImg(event) {
  const img = event.currentTarget;
  const media = matchMedia('(min-width: 936px').matches;
  
  if (media) {
    galleryContainer.prepend(img);
  }
}

function eventGallery(img) {
  img.addEventListener('click', changeImg)
}

gallery.forEach(eventGallery);

// Questions
const questions = document.querySelectorAll('.questions button');

function activeQuestion(event) {
  const question = event.currentTarget;
  const controls = question.getAttribute('aria-controls');
  const answer = document.getElementById(controls);

  answer.classList.toggle('active')
  const active = answer.classList.contains('active');
  question.setAttribute('aria-expanded', active);
}

function eventQuestion(question) {
  question.addEventListener('click', activeQuestion);
} 

questions.forEach(eventQuestion);

// Animation
if (window.SimpleAnime) {
  new SimpleAnime();
}