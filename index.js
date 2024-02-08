function pres(){
    document.querySelector('.side_bar').classList.toggle('show')
}
function cls(){
    document.querySelector('.side_bar').classList.toggle('show')
}
function hr(){
    document.querySelector('.side_bar').classList.remove('show')
}


function sun(){
    var r=document.querySelector(':root')
    var rs = getComputedStyle(r);
    var sun =document.getElementById('sun')
    var moon =document.getElementById('moon')
    r.style.setProperty('--bg-color','white')
    r.style.setProperty('--second-bg-color','white')
    r.style.setProperty('--text-color','black')
    sun.style.display='none'
    moon.style.display='flex'

}
function moon(){
    var r=document.querySelector(':root')
    var rs = getComputedStyle(r);
    var sun =document.getElementById('sun')
    var moon =document.getElementById('moon')
    r.style.setProperty('--bg-color','black')
    r.style.setProperty('--second-bg-color','black')
    r.style.setProperty('--text-color','white')
    moon.style.display='none'
    sun.style.display='flex'

}

const text=document.querySelector('.second-text');

// arrow function
const load=()=>{
    setTimeout(()=>{
        text.textContent='Freelancer';
    },0);
    setTimeout(()=>{
        text.textContent='Web Developer';
    },4000);
    
}
load();


function arrow(){
    document.querySelector('.edu_s2').classList.toggle('edu_h')
}

function arwone(){
    document.querySelector('.edu_s3').classList.toggle('edu_h')
}


// scroll behaviour
document.addEventListener('DOMContentLoaded', () => {
    const animatedElement = document.getElementById('Experience');
  
    function handleScroll() {
      const scrollPosition = window.scrollY + window.innerHeight;
      const elementPosition = animatedElement.offsetTop;
  
      if (scrollPosition > elementPosition) {
        animatedElement.classList.toggle('visible');
      } 
    }
  
    window.addEventListener('scroll', handleScroll);
  
    // Optionally, you can use the Intersection Observer API for a more efficient solution.
    // See: https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
  });


  document.addEventListener('DOMContentLoaded', () => {
    const animatedElement = document.querySelector('.Edu__details');
  
    function handleScroll() {
      const scrollPosition = window.scrollY + window.innerHeight;
      const elementPosition = animatedElement.offsetTop;
  
      if (scrollPosition > elementPosition) {
        animatedElement.classList.toggle('visible');
      } 
    }
  
    window.addEventListener('scroll', handleScroll);
  
    // Optionally, you can use the Intersection Observer API for a more efficient solution.
    // See: https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
  });


  document.addEventListener('DOMContentLoaded', () => {
    const animatedElement = document.querySelector('.portfolio_container');
  
    function handleScroll() {
      const scrollPosition = window.scrollY + window.innerHeight;
      const elementPosition = animatedElement.offsetTop;
  
      if (scrollPosition > elementPosition) {
        animatedElement.classList.toggle('visible');
      } 
    }
  
    window.addEventListener('scroll', handleScroll);
  
    // Optionally, you can use the Intersection Observer API for a more efficient solution.
    // See: https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
  });