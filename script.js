// index.js
// Add any interactive functionality here
const ctaButton = document.querySelector('.cta-button');
const submitButton = document.querySelector('.submit-button');

ctaButton.addEventListener('click', () => {
  const projectsSection = document.querySelector('#projects');
  projectsSection.scrollIntoView({ behavior: 'smooth' });
});

submitButton.addEventListener('click', (event) => {
  event.preventDefault();
  // Add code to handle form submission here
  alert('Form submitted!');
});