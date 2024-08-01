let slideIndex = 1;
let descIndex = 1;
showSlides(slideIndex);
showDesc(slideIndex);



// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
  showDesc(descIndex += n)
}

// image and text controls
function currentSlide(n) {
  showSlides(slideIndex = n);
  showDesc(descIndex = n)
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("change");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
function showDesc(n) {
  let i;
  let desc = document.getElementsByClassName("desc");
  let dots = document.getElementsByClassName("dot");
  if (n > desc.length) {descIndex = 1}
  if (n < 1) {descIndex = desc.length}
  for (i = 0; i < desc.length; i++) {
    desc[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  desc[descIndex-1].style.display = "block";
  dots[descIndex-1].className += " active";
}
