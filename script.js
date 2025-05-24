document.addEventListener('DOMContentLoaded',function(){
    const carousel = document.getElementById('productCarousel');
    const slideIndexText = document.getElementById('slideIndex');
    
    function updateCounter(){
        const activeItem = carousel.querySelector('.carousel-item.active');
        const allItem = carousel.querySelectorAll('.carousel-item');
        const index = Array.from(allItem).indexOf(activeItem)+1;

        slideIndexText.textContent = index.toString().padStart(2,'0');
    }
    updateCounter();
    // Bootstrap ko batate hain ki ye carousel ka instance use kare
    const myCarousel = bootstrap.Carousel.getOrCreateInstance(carousel);

    carousel.addEventListener('slid.bs.carousel',updateCounter);
});

// New arrival section ka swiper 
let currentIndex = 0;

function slideLeft(){
  const slider = document.getElementById("slider2");
  const slideWidth = slider.children[0].offsetWidth + 10;

  if(currentIndex>0){
    currentIndex--;
    slider.style.transform = `translate(-${slideWidth * currentIndex}px)`;
  }
}
function slideRight() {
  const slider = document.getElementById("slider2");
  const slideWidth = slider.children[0].offsetWidth + 20;
  const maxIndex = slider.children.length - 3;
  if (currentIndex < maxIndex) {
    currentIndex++;
    slider.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
  }
}


