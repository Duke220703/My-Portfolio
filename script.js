// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Smooth scrolling for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
    navLinks.classList.remove('active'); // Close menu on click
  });
});

// Explore My Work button scroll to Projects
const exploreBtn = document.getElementById("exploreBtn");
const projectSection = document.getElementById("projects");

exploreBtn.addEventListener("click", function () {
  projectSection.scrollIntoView({ behavior: "smooth" });

  setTimeout(() => {
    projectSection.classList.add("fade-in");
  }, 400);
});

// Dummy form submit behavior
const form = document.querySelector('.contact-form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Message sent successfully!');
  form.reset();
});


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });

        // Optional: fade-in trigger for #projects
        if (target.id === "projects") {
            setTimeout(() => {
                target.classList.add("fade-in");
            }, 400);
        }

        // Close mobile menu
        navLinks.classList.remove('active');
    });
});
