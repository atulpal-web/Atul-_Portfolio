// Navbar reveal
ScrollReveal().reveal('.navbar', {
  origin: 'top',
  distance: '20px',
  duration: 800,
  delay: 200,
  opacity: 0
});

// Hero Section
ScrollReveal().reveal('.hero-left', {
  origin: 'left',
  distance: '50px',
  duration: 1000,
  delay: 300,
  opacity: 0
});
ScrollReveal().reveal('.hero-right', {
  origin: 'right',
  distance: '50px',
  duration: 1000,
  delay: 500,
  opacity: 0
});

// About Section
ScrollReveal().reveal('.about-img', {
  origin: 'left',
  distance: '50px',
  duration: 1000,
  delay: 200,
  opacity: 0
});
ScrollReveal().reveal('.about-content', {
  origin: 'right',
  distance: '50px',
  duration: 1000,
  delay: 300,
  opacity: 0
});

// Skills Section (staggered cards)
ScrollReveal().reveal('.skill-card', {
  origin: 'bottom',
  distance: '40px',
  duration: 800,
  interval: 200,   // 👈 ek ek karke aayega
  opacity: 0
});

// Projects Section (cards with stagger)
ScrollReveal().reveal('.project-card', {
  origin: 'bottom',
  distance: '60px',
  duration: 1000,
  interval: 250,   // 👈 har project ek ek karke reveal hoga
  opacity: 0
});

// Contact Section
ScrollReveal().reveal('.contact-section', {
  origin: 'bottom',
  distance: '60px',
  duration: 1000,
  delay: 300,
  opacity: 0
});

// Footer
ScrollReveal().reveal('.footer', {
  origin: 'bottom',
  distance: '30px',
  duration: 800,
  delay: 200,
  opacity: 0
});
