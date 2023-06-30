
// // Get the carousel and the bullets elements
// const carousel = document.querySelector('.Trending_area');
// const bulletsContainer = document.querySelector('.d1bulles');
// const bullets = bulletsContainer.querySelectorAll('.d1bulles_item');

// // Calculate the number of slides and the width of each slide
// const slideWidth = carousel.querySelector('.boxx2').offsetWidth;
// const numSlides = carousel.querySelectorAll('.boxx2').length;

// // Update the active bullet based on the current slide
// function updateActiveBullet() {
//   const activeSlideIndex = Math.floor(carousel.scrollLeft / slideWidth);
//   bullets.forEach((bullet, index) => {
//     if (index === activeSlideIndex) {
//       bullet.classList.add('d1active_bulles');
//     } else {
//       bullet.classList.remove('d1active_bulles');
//     }
//   });
// }

// // Add event listeners to the carousel and the bullets container
// carousel.addEventListener('scroll', updateActiveBullet);
// carousel.addEventListener('mouseover', () => {
//   bulletsContainer.style.display = 'flex';
// });
// carousel.addEventListener('mouseout', () => {
//   bulletsContainer.style.display = 'none';
// });


// // Initialize the active bullet
// updateActiveBullet();
