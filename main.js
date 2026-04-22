document.addEventListener('DOMContentLoaded', function () {
  // Load shared header
  fetch('nav.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('header-placeholder').innerHTML = data;
      // After loading header, set up nav functionality
      setupNav();
    })
    .catch(error => console.error('Error loading header:', error));

  // Load shared footer
  fetch('footer.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('footer-placeholder').innerHTML = data;
    })
    .catch(error => console.error('Error loading footer:', error));

  function setupNav() {
    const navToggle = document.querySelector('.nav-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
    const navLinks = document.querySelectorAll('.navbar-links a');

    if (navToggle && mobileMenu) {
      navToggle.addEventListener('click', function () {
        mobileMenu.classList.toggle('open');
        navToggle.setAttribute('aria-expanded', mobileMenu.classList.contains('open'));
      });
    }

    const currentPath = window.location.pathname.split('/').pop();
    navLinks.forEach((link) => {
      const linkPath = link.getAttribute('href');
      if (linkPath === currentPath || (linkPath === 'index.html' && currentPath === '')) {
        link.classList.add('active');
      }
    });
  }
});
