var promoButtons = document.querySelectorAll(".promo-slider-button");
var promoSlides = document.querySelectorAll(".promo-item");
var body = document.querySelector("body");

promoButtons[0].classList.add("current-slide");
promoSlides[0].classList.add("promo-show");

promoButtons[0].addEventListener("click", function (evt) {
  evt.preventDefault();
  if (!promoButtons[0].classList.contains("current-slide")) {
    for(var i = 0; i < promoButtons.length; i++) {
      promoButtons[i].classList.remove("current-slide");
      promoSlides[i].classList.remove("promo-show");
    }
    promoButtons[0].classList.add("current-slide");
    promoSlides[0].classList.add("promo-show");
    body.style.backgroundColor = "#849d8f";
  }
});

promoButtons[1].addEventListener("click", function (evt) {
  evt.preventDefault();
  if (!promoButtons[1].classList.contains("current-slide")) {
    for(var i = 0; i < promoButtons.length; i++) {
      promoButtons[i].classList.remove("current-slide");
      promoSlides[i].classList.remove("promo-show");
    }
    promoButtons[1].classList.add("current-slide");
    promoSlides[1].classList.add("promo-show");
    body.style.backgroundColor = "#8996a6";
  }
});

promoButtons[2].addEventListener("click", function (evt) {
  evt.preventDefault();
  if (!promoButtons[2].classList.contains("current-slide")) {
    for(var i = 0; i < promoButtons.length; i++) {
      promoButtons[i].classList.remove("current-slide");
      promoSlides[i].classList.remove("promo-show");
    }
    promoButtons[2].classList.add("current-slide");
    promoSlides[2].classList.add("promo-show");
    body.style.backgroundColor = "#9d8b84";
  }
});
