
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
var i;
var slides = document.getElementsByClassName("slides");
var dots = document.getElementsByClassName("dot");

if (n > slides.length) {slideIndex = 1}
if (n < 1) {slideIndex = slides.length}

for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    console.log("Display None");
}
for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
    console.log("Replaced Active class");
}

slides[slideIndex-1].style.display = "block";
dots[slideIndex-1].className += " active";
console.log("Showing img");
}


// Figure out how to get this to record form data to google sheet

// var $form = $('form#contact-form'),
//     url = 'https://script.google.com/macros/s/AKfycbzY9i-OPb2n1WkxnyGLe6O0PcKduiwjYMLg6FOkeTd3dvwfYVRVvNPSqJHdTDHyFZKr/exec'

// $('#submit-form').on('click', function(e) {
//   e.preventDefault();
//   var jqxhr = $.ajax({
//     url: url,
//     method: "GET",
//     dataType: "json",
//     data: $form.serializeObject()
//   }).success(
//     // do something
//   );
// })
