showSlides(1);

function currentSlide(n) {
showSlides(n);
}

function showSlides(n) {
var slideIndex = n;
var i;
var slides = document.getElementsByClassName("mySlides");
var bars = document.getElementsByClassName("bar");

for (i = 0; i < slides.length; i++) {
  slides[i].style.display = "none";  
}
for (i = 0; i < bars.length; i++) {
  bars[i].className = bars[i].className.replace(" activebar", "");
}

slides[slideIndex-1].style.display = "block";  
bars[slideIndex-1].className += " activebar";
}

function openTopNav() {
  var x = document.getElementById("myTopnav");
  x.className += " overlay";
}

function closeTopNav() {
  var x = document.getElementById("myTopnav");
  x.className = "topnav";
}

function myFunction() {
  var x = document.getElementById("topNav");
  if (x.className === "main-navbar") {
    x.className += " responsive";
  } else {
    x.className = "main-navbar";
  }
}