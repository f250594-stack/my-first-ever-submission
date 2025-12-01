
const imgSlides = document.querySelectorAll('.image-slide');
let imgCurrent = 0;

function showImgSlide(index) {
  imgSlides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
  });
}

setInterval(() => {
  imgCurrent = (imgCurrent + 1) % imgSlides.length;
  showImgSlide(imgCurrent);
}, 4000);

let cartCount = 0;

function addToCart(product, price) {
  cartCount++;
  document.getElementById('cart-count').textContent = cartCount;
  alert(product + " added to cart! (Price: Rs. " + price + ")");
}

const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    alert("Thank you for your contact. I will get response soon.");
    contactForm.reset();
  });
}