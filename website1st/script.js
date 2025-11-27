// auto year
document.getElementById('year').textContent = new Date().getFullYear();

// smooth scroll offset for sticky nav
const links = document.querySelectorAll('a[href^="#"]');
links.forEach(l => l.addEventListener('click', e => {
  e.preventDefault();
  const target = document.querySelector(l.getAttribute('href'));
  if(target) target.scrollIntoView({behavior:'smooth', block:'start'});
}));