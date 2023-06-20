var content = document.getElementsByTagName('body')[0];
        var darkMode = document.getElementById('dark-change');
        darkMode.addEventListener('click', function(){
            darkMode.classList.toggle('active');
            content.classList.toggle('night');
        })

        function changeImage() {
        let image = document.getElementById('ph');
        if (image.src.includes('ASET/dark98.png')) {
            image.src = 'ASET/white98.png';
        } else {
            image.src = 'ASET/dark98.png';
        }

        let image2 = document.getElementById('ph2');
        if (image2.src.includes('ASET/malem.png')) {
            image2.src = 'ASET/pagi.png';
        } else {
            image2.src = 'ASET/malem.png';
        }
        }

window.addEventListener('scroll', function() {
            var scrollPosition = window.scrollY;
        
            // Mengubah posisi gambar hiasan1 saat di-scroll
            var hiasan1 = document.getElementById('hiasan1');
            hiasan1.style.transform = 'translateX(' + -scrollPosition * 1 + 'px)';
        
            // Mengubah posisi gambar hiasan2 saat di-scroll
            var hiasan2 = document.getElementById('hiasan2');
            hiasan2.style.transform = 'translateX(' + scrollPosition * 1 + 'px)';
});
const testimonialContainer = document.querySelector(".testimonial-container");
const testimonialItems = document.querySelectorAll(".testimonial-item");
const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");

let currentIndex = 0;
const slideAmount = 3;

function showTestimonials() {
  testimonialItems.forEach((item, index) => {
    if (index >= currentIndex && index < currentIndex + slideAmount) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}

function showNextTestimonials() {
  if (currentIndex + slideAmount < testimonialItems.length) {
    currentIndex++;
    showTestimonials();
  }
}

function showPreviousTestimonials() {
  if (currentIndex > 0) {
    currentIndex--;
    showTestimonials();
  }
}

prevButton.addEventListener("click", showPreviousTestimonials);
nextButton.addEventListener("click", showNextTestimonials);

showTestimonials();
