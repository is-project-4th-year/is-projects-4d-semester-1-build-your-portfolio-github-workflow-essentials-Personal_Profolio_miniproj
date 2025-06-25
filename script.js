// Project Card Interactions
document.querySelectorAll('.project-card').forEach(card => {
  // Add clickable whole card effect
  card.style.cursor = 'pointer';
  card.addEventListener('click', (e) => {
    if (!e.target.closest('a')) { // Don't trigger if clicking a link
      const link = card.querySelector('.project-link');
      if (link) window.location.href = link.href;
    }
  });

  // Dynamic tag coloring
  const tags = card.querySelectorAll('.project-tags span');
  tags.forEach(tag => {
    const randomHue = Math.floor(Math.random() * 360);
    tag.style.backgroundColor = `hsla(${randomHue}, 80%, 90%, 1)`;
    tag.style.color = `hsl(${randomHue}, 60%, 30%)`;
  });
});

// Animate project links on hover
document.querySelectorAll('.project-link').forEach(link => {
  link.addEventListener('mouseenter', () => {
    link.style.transform = 'translateX(5px)';
  });
  link.addEventListener('mouseleave', () => {
    link.style.transform = 'translateX(0)';
  });
});

// Smooth scrolling for navigation
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    if (this.hash) {
      e.preventDefault();
      document.querySelector(this.hash).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Dynamic year in footer (if you add one)
const yearSpan = document.createElement('span');
yearSpan.textContent = new Date().getFullYear();
document.body.appendChild(document.createElement('footer'))
  .appendChild(document.createElement('div'))
  .appendChild(yearSpan);