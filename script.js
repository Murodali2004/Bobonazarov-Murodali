const loginModal = document.getElementById('loginModal');
const registerModal = document.getElementById('registerModal');
const loginCloseBtn = document.querySelectorAll('#loginModal .close')[0];
const registerCloseBtn = document.querySelectorAll('#registerModal .close')[0];

  // Функция открытия модального окна входа
function openLoginModal() {
    loginModal.style.display = 'block';
  }
  // Функция открытия модального окна регистрации
function openRegisterModal() {
  registerModal.style.display = 'block';
 }

  // Функции закрытия модальных окон
loginCloseBtn.onclick = function() {
    loginModal.style.display = "none";
  }
 registerCloseBtn.onclick = function() {
   registerModal.style.display = "none";
  }

  // Закрытие модального окна при клике вне его границ
  window.onclick = function(event) {
      if (event.target === loginModal) {
          loginModal.style.display = "none";
      }
      if (event.target === registerModal) {
          registerModal.style.display = "none";
      }
  }
let slideIndex = 1;
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
     let i;
    let slides = document.getElementsByClassName("slide");
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