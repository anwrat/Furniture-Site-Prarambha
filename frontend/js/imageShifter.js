// Get the slider and slides elements
const slider = document.querySelector('.slider');
const slides = document.querySelector('.slides');

// Set the initial slide index
let slideIndex = 0;

// Add event listeners for touch and mouse events
slides.addEventListener('touchstart', handleTouchStart);
slides.addEventListener('touchmove', handleTouchMove);
slides.addEventListener('touchend', handleTouchEnd);
slides.addEventListener('mousedown', handleMouseDown);
slides.addEventListener('mousemove', handleMouseMove);
slides.addEventListener('mouseup', handleMouseUp);

// Define the touch and mouse event handlers
function handleTouchStart(event) {
  // Get the initial touch position
  const touch = event.touches[0];
  const startX = touch.clientX;
  const startY = touch.clientY;

  // Set the initial slide position
  const slideWidth = slides.children[0].offsetWidth;
  const slideLeft = slides.scrollLeft;

  // Store the initial values
  slides.dataset.startX = startX;
  slides.dataset.startY = startY;
  slides.dataset.slideLeft = slideLeft;
  slides.dataset.slideWidth = slideWidth;
}

function handleTouchMove(event) {
  // Get the current touch position
  const touch = event.touches[0];
  const currentX = touch.clientX;
  const currentY = touch.clientY;

  // Calculate the delta X value
  const deltaX = currentX - parseInt(slides.dataset.startX);

  // Update the slide position
  const slideLeft = parseInt(slides.dataset.slideLeft) + deltaX;
  slides.scrollLeft = slideLeft;
}

function handleTouchEnd(event) {
  // Get the final touch position
  const touch = event.changedTouches[0];
  const endX = touch.clientX;
  const endY = touch.clientY;

  // Calculate the final delta X value
  const deltaX = endX - parseInt(slides.dataset.startX);

  // Update the slide index
  if (deltaX > 0) {
    slideIndex = Math.max(slideIndex - 1, 0);
  } else if (deltaX < 0) {
    slideIndex = Math.min(slideIndex + 1, slides.children.length - 1);
  }

  // Update the slide position
  const slideWidth = parseInt(slides.dataset.slideWidth);
  const slideLeft = slideIndex * slideWidth;
  slides.scrollLeft = slideLeft;
}

function handleMouseDown(event) {
  // Get the initial mouse position
  const startX = event.clientX;
  const startY = event.clientY;

  // Set the initial slide position
  const slideWidth = slides.children[0].offsetWidth;
  const slideLeft = slides.scrollLeft;

  // Store the initial values
  slides.dataset.startX
}