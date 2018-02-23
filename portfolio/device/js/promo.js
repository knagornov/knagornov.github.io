var promoButtons = document.querySelectorAll(".promo-button");
var promoSlides = document.querySelectorAll(".promo-slides-item");

promoButtons[0].classList.add("current-promo");
promoSlides[0].classList.add("promo-show");

promoButtons[0].addEventListener("click", function (evt) {
  evt.preventDefault();
  if (!promoButtons[0].classList.contains("current-promo")) {
    for(var i = 0; i < promoButtons.length; i++) {
      promoButtons[i].classList.remove("current-promo");
      promoSlides[i].classList.remove("promo-show");
    }
    promoButtons[0].classList.add("current-promo");
    promoSlides[0].classList.add("promo-show");
  }
});

promoButtons[1].addEventListener("click", function (evt) {
  evt.preventDefault();
  if (!promoButtons[1].classList.contains("current-promo")) {
    for(var i = 0; i < promoButtons.length; i++) {
      promoButtons[i].classList.remove("current-promo");
      promoSlides[i].classList.remove("promo-show");
    }
    promoButtons[1].classList.add("current-promo");
    promoSlides[1].classList.add("promo-show");
  }
});

promoButtons[2].addEventListener("click", function (evt) {
  evt.preventDefault();
  if (!promoButtons[2].classList.contains("current-promo")) {
    for(var i = 0; i < promoButtons.length; i++) {
      promoButtons[i].classList.remove("current-promo");
      promoSlides[i].classList.remove("promo-show");
    }
    promoButtons[2].classList.add("current-promo");
    promoSlides[2].classList.add("promo-show");
  }
});

