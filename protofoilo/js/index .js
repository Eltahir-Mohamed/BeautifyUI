// navbar scroll animation 

// window.addEventListener('scroll', function() {
//      // Adjust selector as needed
// let navbar = document.querySelector(".nav");
    
// if (window.scrollY > 0) {
// navbar.style.background = "transparent"; 
// document.querySelector(".nav a").style.textShadow="0px 0px 3px var(--azure--)";
// document.querySelector(".se a").style.textShadow="0px 0px 3px var(--azure--)";
// navbar.style.backdropFilter = "blur(5px)"; 
// navbar.style.boxShadow="0px 0px 10px var(--azure--)"; // Change to your desired color
// } else {
// navbar.style.backgroundColor = 'var(--azure--)';
// navbar.style.boxShadow="none"; // Change to your desired color
// }
// });

// let cover1 = document.querySelector(".cover1");

//         setTimeout(()=>{
//             cover1.style.width="0%";
//             cover1.style.color="rgb(36, 35, 42)";
//         },2000)

// heder indentifers
let screenHo = document.querySelector(".screen-holder");
let screen = document.querySelector(".screen");

let a1 = document.querySelector(".a1");
let a2 = document.querySelector(".a2");
let a3 = document.querySelector(".a3");
let a4 = document.querySelector(".a4");

let myinfo = document.querySelector(".my-info");
let mypicture = document.querySelector(".my-picture");

let GDI1 = document.querySelector(".G-D-i1");
let GDI2 = document.querySelector(".G-D-i2");
let GDI3 = document.querySelector(".G-D-i3");

let Presentaions1 = document.querySelector(".Presentaions1");
let Presentaions2 = document.querySelector(".Presentaions2");
let Presentaions3 = document.querySelector(".Presentaions3");

let kevin = document.querySelector(".kevin");
let elzero = document.querySelector(".elzero");

let systemMood = document.querySelectorAll("*");


  const button = document.querySelector('.mood');
  let isDark = false;

  button.addEventListener('click', () => {
    const root = document.documentElement;
    const white = getComputedStyle(root).getPropertyValue('--azure--').trim();
    const black = getComputedStyle(root).getPropertyValue('--unblack--').trim();
    
    const owhite = getComputedStyle(root).getPropertyValue('--white--').trim();
    const oblack = getComputedStyle(root).getPropertyValue('--black--').trim();
    
    const sheerWhite = getComputedStyle(root).getPropertyValue('--sheer-white-03--').trim();
    const sheerBlack = getComputedStyle(root).getPropertyValue('--sheer-black-03--').trim();

    const sheerWhite2 = getComputedStyle(root).getPropertyValue('--sheer-white-01--').trim();
    const sheerBlack2 = getComputedStyle(root).getPropertyValue('--sheer-black-01--').trim();

    
    const moonb = getComputedStyle(root).getPropertyValue('--moon--').trim();
    const sunb = getComputedStyle(root).getPropertyValue('--sun--').trim();
    
    root.style.setProperty('--sun--', moonb);
    root.style.setProperty('--moon--', sunb);

    
    root.style.setProperty('--sheer-white-03--', sheerBlack);
    root.style.setProperty('--sheer-black-03--', sheerWhite);

    
    root.style.setProperty('--sheer-white-01--', sheerBlack2);
    root.style.setProperty('--sheer-black-01--', sheerWhite2);


    root.style.setProperty('--azure--', black);
    root.style.setProperty('--unblack--', white);

    root.style.setProperty('--white--', oblack);
    root.style.setProperty('--black--', owhite);

  
  isDark = !isDark;
  button.textContent = isDark ? 'light' : 'dark';

  });
  
  const savedTheme = localStorage.getItem('theme');

let dDark;

if (savedTheme) {
  dsDark = savedTheme === 'dark';
} else {
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  isDark = prefersDark;
}

//about me start part scripting //

// function doplicateSlides(sliderId){
//     const sliderTrack= document.querySelector('#${sliderId} .slider-track');
//     const slides = Array.form(sliderTrack.children);
//     slides.forEach((slide) => {
//         const clone = slide.cloneNode(true);
//         sliderTrack.appendChild(clone);
//     });
// }
// doplicateSlides("#slider1")
// doplicateSlides("#slider2")
// doplicateSlides("#slider3")



a1.onclick = function(){

a1.style.color="var(--unblue--)";
a2.style.color="var(--unblack--)";
a3.style.color="var(--unblack--)";
a4.style.color="var(--unblack--)";

myinfo.style.transform="translateX(100%)";
mypicture.style.transform="translateY(0%)";

mypicture.style.transition="1s ease 1s";
myinfo.style.transition="1s ease 1s";

GDI1.style.transform="translateX(-120%)";
GDI2.style.transform="translateX(120%)";
GDI3.style.transform="translateY(150%)";


GDI1.style.transition="1s ease";
GDI2.style.transition="1s ease";
GDI3.style.transition="1s ease";


Presentaions1.style.transform="translateX(-120%)";
Presentaions3.style.transform="translateX(120%)";

Presentaions1.style.transition="1s ease";
Presentaions3.style.transition="1s ease";


kevin.style.transform="translateY(-120%)";
elzero.style.transform="translateY(120%)";


kevin.style.transition="1s ease";
elzero.style.transition="1s ease";
};

//about me end part scripting //

//Graphics designs start part scripting //
a2.onclick = function(){

a2.style.color="var(--unblue--)";
a1.style.color="var(--unblack--)";
a3.style.color="var(--unblack--)";
a4.style.color="var(--unblack--)";

myinfo.style.transform="translateX(0%)";
mypicture.style.transform="translatey(100%)";


mypicture.style.transition="1s ease";
myinfo.style.transition="1s ease";

GDI1.style.transform="translateX(0%)";
GDI2.style.transform="translateX(0%)";
GDI3.style.transform="translateY(0%)";


GDI1.style.transition="1s ease 1s";
GDI2.style.transition="1s ease 1s";
GDI3.style.transition="1s ease 1s";


Presentaions1.style.transform="translateX(-120%)";
Presentaions3.style.transform="translateX(120%)";


Presentaions1.style.transition="1s ease";
Presentaions3.style.transition="1s ease";


kevin.style.transform="translateY(-120%)";
elzero.style.transform="translateY(120%)";


kevin.style.transition="1s ease";
elzero.style.transition="1s ease";
};

//Graphics designs end scripting //


//apps designs start part scripting //
a3.onclick = function(){

a3.style.color="var(--unblue--)";
a1.style.color="var(--unblack--)";
a2.style.color="var(--unblack--)";
a4.style.color="var(--unblack--)";

myinfo.style.transform="translateX(0%)";
mypicture.style.transform="translatey(100%)";


mypicture.style.transition="1s ease";
myinfo.style.transition="1s ease";

GDI1.style.transform="translateX(-120%)";
GDI2.style.transform="translateX(120%)";
GDI3.style.transform="translateY(150%)";


GDI1.style.transition="1s ease";
GDI2.style.transition="1s ease";
GDI3.style.transition="1s ease";

Presentaions1.style.transform="translateX(0%)";
Presentaions3.style.transform="translateX(0%)";


Presentaions1.style.transition="1s ease 1s";
Presentaions3.style.transition="1s ease 1s";


kevin.style.transform="translateY(-120%)";
elzero.style.transform="translateY(120%)";


kevin.style.transition="1s ease";
elzero.style.transition="1s ease";
};

//apps designs end part scripting //


//myinfo start part scripting //
a4.onclick = function(){

a4.style.color="var(--unblue--)";
a1.style.color="var(--unblack--)";
a2.style.color="var(--unblack--)";
a3.style.color="var(--unblack--)";

myinfo.style.transform="translateX(0%)";
mypicture.style.transform="translatey(100%)";


mypicture.style.transition="1s ease";
myinfo.style.transition="1s ease";

GDI1.style.transform="translateX(-120%)";
GDI2.style.transform="translateX(120%)";
GDI3.style.transform="translateY(150%)";


GDI1.style.transition="1s ease";
GDI2.style.transition="1s ease";
GDI3.style.transition="1s ease";


Presentaions1.style.transform="translateX(-120%)";
Presentaions3.style.transform="translateX(120%)";

Presentaions1.style.transition="1s ease";
Presentaions3.style.transition="1s ease";


kevin.style.transform="translateY(0%)";
elzero.style.transform="translateY(0%)";


kevin.style.transition="1s ease 1s";
elzero.style.transition="1s ease 1s";
};
//myinfo end scripting //



// animate scripting
// 
// element.classlist.add("");