console.log("Landing page loaded.");


// Fade-in animation when about section comes into view
const aboutSection = document.querySelector('.about');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      aboutSection.classList.add('fade-in');
    }
  });
}, {
  threshold: 0.2,
});

observer.observe(aboutSection);