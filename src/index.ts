let prevScrollpos = window.pageYOffset;
const navbar = document.querySelector('.navigation');

// Create an IntersectionObserver instance
const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      const currentScrollPos = window.pageYOffset;
      if (!entry.isIntersecting) {
        // If we're scrolling down, hide the navbar
        if (prevScrollpos < currentScrollPos) {
          navbar.style.transform = 'translateY(-120%)';
        }
      } else {
        // If we're scrolling up, show the navbar
        if (prevScrollpos > currentScrollPos) {
          navbar.style.transform = 'translateY(0)';
        }
      }
      prevScrollpos = currentScrollPos;
    });
  },
  { threshold: [0.1] }
); // 10% of the element is visible

// Start observing an element
const target = document.querySelector('#hero');
observer.observe(target);
