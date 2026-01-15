var slideIndex = 4;

// Constantly change banner by 3 sec
slides(1);
const interval2 = setInterval(() => {
  slides(1);
}, 5000);


function slides(n) {
    showSlides(slideIndex += n);
}

function currentSlides(n) {
    showSlides(slideIndex = n);

}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slide1");
    var dots = document.getElementsByClassName("dot");
    if(n> slides.length) {slideIndex = 1 }
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++){
        slides[i].classList.remove("active");
    }
    for (i=0;i < dots.length;i++){
        dots[i].innerHTML = "<i class='bx bx-radio-circle'></i>";
    }
    slides[slideIndex-1].classList.add("active");
    dots[slideIndex - 1].innerHTML = "<i class='bx bx-radio-circle-marked'></i>";
}