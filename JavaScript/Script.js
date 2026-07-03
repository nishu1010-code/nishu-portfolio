document.addEventListener("DOMContentLoaded",()=>{

//=========================
// Typing Animation
//=========================


const words = [

"Front-End Developer",

"Web Designer",

"React Learner"

];

let wordIndex = 0;
let charIndex = 0;

const typing = document.getElementById("typing");

function typeEffect(){

if(charIndex < words[wordIndex].length){

typing.textContent += words[wordIndex].charAt(charIndex);

charIndex++;

setTimeout(typeEffect,100);

}else{

setTimeout(eraseEffect,1500);

}

}

function eraseEffect(){

if(charIndex>0){

typing.textContent=words[wordIndex].substring(0,charIndex-1);

charIndex--;

setTimeout(eraseEffect,50);

}else{

wordIndex++;

if(wordIndex>=words.length){

wordIndex=0;

}

setTimeout(typeEffect,300);

}

}

if (typing) {
    typeEffect();
}



/*=========================
    SCROLL REVEAL
=========================*/

const sr = ScrollReveal({
    distance: "50px",
    duration: 800,
    delay: 100,
    reset: false,
    easing: "ease"
});

sr.reveal(".hero-content", {
    origin: "left"
});

sr.reveal(".hero-image, .about-image",{
    origin:"right",
    distance:"40px",
    duration:700
});


sr.reveal(".about-content", {
    origin: "right"
});

sr.reveal(".section-title", {
    origin: "top"
});

sr.reveal(".skill-card",{

origin:"bottom",

interval:100,

distance:"30px"

});

sr.reveal(".project-card", {
    origin: "bottom",
    interval: 200
});

sr.reveal(".contact-info", {
    origin: "left"
});

sr.reveal(".contact-form", {
    origin: "right"
});

sr.reveal(".footer", {
    origin: "bottom"
});

/*=========================
    ACTIVE NAVBAR
=========================*/

const sections=document.querySelectorAll("section");
const navLinks=document.querySelectorAll("nav a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const sectionTop=section.offsetTop-120;

if(window.scrollY >= sectionTop){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});


/*=========================
    SMOOTH SCROLL
=========================*/
document.querySelectorAll('nav a').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        const target=document.querySelector(this.getAttribute("href"));

        target.scrollIntoView({

            behavior:"smooth",

            block:"center"

        });

    });

});

});





