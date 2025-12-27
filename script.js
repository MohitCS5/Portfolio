// particles background

tsParticles.load("particles", {
  fpsLimit: 60,
  particles: {
    number:   { value: 90, density: { enable: true, area: 800 } },
    color:    { value: "#00c3ff" },
    links:    {
      enable: true,
      color:  "#a673d2ff",
      distance: 150,
      opacity: 0.6,  
    },
    move: { enable: true, speed: 2 }
  },
  interactivity: {
    detectsOn: "canvas",
    events: {
      onHover: { enable: true, mode: "repel" }
    }
  }
});

// tilt effect on cards
VanillaTilt.init(document.querySelectorAll(".project-card"),{
  max:15,speed:400,glare:true,"max-glare":0.3
});

// auto year
document.getElementById('year').textContent = new Date().getFullYear();

// scroll fade-ins
const faders=document.querySelectorAll('.glass,.project-card,#skills');
const appearOptions={threshold:0.2,rootMargin:"0px 0px -100px 0px"};
const appearOnScroll=new IntersectionObserver(function(entries,observer){
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add('in');
      observer.unobserve(entry.target);
    }
  });
},appearOptions);
faders.forEach(el=>el.classList.add('scroll-fade'));
faders.forEach(el=>appearOnScroll.observe(el));
/* ------ nav highlight + mobile ------ */
const sections=document.querySelectorAll('section');
const navLinks=document.querySelectorAll('.nav-link');
const hamburger=document.getElementById('hamburger');
const navUL=document.querySelector('.nav-links');

window.addEventListener('scroll',()=>{
  let current='';
  sections.forEach(sec=>{
    const secTop=sec.offsetTop;
    if(scrollY>=secTop-60) current=sec.getAttribute('id');
  });
  navLinks.forEach(link=>{
    link.classList.remove('active');
    if(link.getAttribute('href').slice(1)===current) link.classList.add('active');
  });
});

hamburger.addEventListener('click',()=>navUL.classList.toggle('open'));
