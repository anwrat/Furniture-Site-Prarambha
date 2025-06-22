let slideIndex = 0;

showSlides();

function showSlides() {
  const dots = document.getElementsByClassName("dot");
  const slides = document.getElementsByClassName("background");
  const images = [
    '../images/home-1.png',
    '../images/home-2.png',
    '../images/home-3.png',
    '../images/home-4.png',
  ];

  for (let i = 0; i < slides.length; i++) {
    slides[i].src = `${images[slideIndex]}`;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  dots[slideIndex].className += " active"; 
  slideIndex = (slideIndex + 1) % images.length; 

  setTimeout(showSlides, 4000); 
}