//*********slideshow**********//
var slideIndex = 1;
  showSlides(slideIndex);

  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    if (slideIndex> slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
 }
 setInterval(plusSlides, 3000, 1); // call plusSlider, with 1 as parameter

 //***********testimonials***********//

 var testimonialSlideIndex = 1;
showTestimonials(testimonialSlideIndex);

// Next/previous controls
function plusTestimonials(n) {
  showTestimonials(testimonialSlideIndex += n);
}

// Thumbnail image controls
function currentTestimony(n) {
  showTestimonials(testimonialSlideIndex = n);
}

function showTestimonials(n) {
  var i;
  var testimonials = document.getElementsByClassName("testimonials tfade");
  var tdot = document.getElementsByClassName("tdot");
  if (n > testimonials.length) {testimonialSlideIndex = 1}
  if (n < 1) {testimonialSlideIndex = testimonials.length}
  for (i = 0; i < testimonials.length; i++) {
      testimonials[i].style.display = "none";
  }
  for (i = 0; i < tdot.length; i++) {
      tdot[i].className = tdot[i].className.replace(" active", "");
  }
  testimonials[testimonialSlideIndex-1].style.display = "block";
  tdot[testimonialSlideIndex-1].className += " active";
}