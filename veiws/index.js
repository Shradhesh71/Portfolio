let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle("fa fa-window-close");
    navbar.classList.toggle("active");
}
// window.addEventListener('load', () => {
//     const form = document.querySelector("#form-main");
    
//     form.addEventListener('submit', (e) => {
//         e.preventDefault();
//     });
//     });

let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () =>{
    sections.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top>= offset && top< offset+height){
            navlinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a[href* =' + id +']').classList.add('active');
            });
        };
    });
    // sticky navbar

let header = document.querySelector('header');

header.classList.toggle('sticky',window.scrollY > 100);

// remove toggle navbar
menuIcon.classList.remove("fa fa-window-close");
navbar.classList.remove("active");
};

// scroll reveal
ScrollReveal({ 
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
 });

ScrollReveal().reveal('.home-content,.heading', { origin: 'top' });
ScrollReveal().reveal('.home-img,.heading,.contact form', { origin:'bottom' });
ScrollReveal().reveal('.home-content h1,.heading,.text',{origin:'left'});
ScrollReveal().reveal('.home-content p,.about-content',{origin:'right'});

const typed = new Typed('.multiple-text',{
    strings : ['Backend Developer','Blockchain Developer','Competitive Programmer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 100,
    loop: true 
});


//   project slide show
let slideIndex = 1;
let slideIndex2 = 1;
showSlides(slideIndex);
showSlidess(slideIndex2);


// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}
function plusSlidess(n) {
  showSlidess(slideIndex2 += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  // let dots = document.getElementsByClassName("dot");
  console.log(slides.length," n: ",n," slideIndex: ",slideIndex);
  if (n > slides.length-2) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  // for (i = 0; i < dots.length; i++) {
  //   dots[i].className = dots[i].className.replace(" active", "");
  // }
  slides[slideIndex-1].style.display = "block";
  slides[slideIndex+1].style.display = "block";
  slides[slideIndex].style.display = "block";
  // dots[slideIndex-1].className += "active";
  // dots[slideIndex+1].className += "active";
  // dots[slideIndex].className += "active";
}

function showSlidess(n) {
  let i;
  let slides2 = document.getElementsByClassName("mySlidess");
  console.log(slides2.length," n: ",n," slideIndex2: ",slideIndex2);
  if (n > slides2.length-2) {slideIndex2 = 1}
  if (n < 1) {slideIndex2 = slides2.length}
  for (i = 0; i < slides2.length; i++) {
    slides2[i].style.display = "none";
  }
  slides2[slideIndex2-1].style.display = "block";
  slides2[slideIndex2+1].style.display = "block";
  slides2[slideIndex2].style.display = "block";
}

// var swiper = new Swiper(".mySwiper", {
//   slidesPerView: 1,
//   spaceBetween: 50,
//   loop: true,
//   grabCursor: true,
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
// });

window.onscroll = () => {
  sections.forEach(sec => {
      let top = window.scrollY;
      let offset = sec.offsetTop - 150;
      let height = sec.offsetHeight;
      let id = sec.getAttribute('id');

      if(top >= offset && top < offset + height) {
          navLinks.forEach(links => {
              links.classList.remove('active');
              document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
          });
      };
  });
}


let TestomonialIndex = 0;
Testomonialshow();

function Testomonialshow() {
  let i;
  let slides = document.getElementsByClassName("testimonial-slide");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  TestomonialIndex++;
  if (TestomonialIndex > slides.length) {TestomonialIndex = 1}    
  slides[TestomonialIndex-1].style.display = "block";  
  setTimeout(Testomonialshow, 2000); // Change image every 2 seconds
}
 
