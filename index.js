function pres(){
    document.querySelector('.side_bar').classList.toggle('show')
}
function cls(){
    document.querySelector('.side_bar').classList.toggle('show')
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
