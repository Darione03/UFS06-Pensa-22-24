const navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const href = link.getAttribute('href');
    const section = document.querySelector(href);
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const windowHeight = window.innerHeight;
    const scrollPos = sectionTop - (windowHeight - sectionHeight) / 2;
    window.scrollTo({ top: scrollPos, behavior: 'smooth' });
  });
});
