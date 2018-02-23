var servicesButtons = document.querySelectorAll(".services-button");
var servicesSlides = document.querySelectorAll(".services-slides-item");

servicesButtons[0].classList.add("current-service");
servicesSlides[0].classList.add("service-show");

servicesButtons[0].addEventListener("click", function (evt) {
  evt.preventDefault();
  if (!servicesButtons[0].classList.contains("current-service")) {
    for(var i = 0; i < servicesButtons.length; i++) {
      servicesButtons[i].classList.remove("current-service");
      servicesSlides[i].classList.remove("service-show");
    }
    servicesButtons[0].classList.add("current-service");
    servicesSlides[0].classList.add("service-show");
  }
});

servicesButtons[1].addEventListener("click", function (evt) {
  evt.preventDefault();
  if (!servicesButtons[1].classList.contains("current-service")) {
    for(var i = 0; i < servicesButtons.length; i++) {
      servicesButtons[i].classList.remove("current-service");
      servicesSlides[i].classList.remove("service-show");
    }
    servicesButtons[1].classList.add("current-service");
    servicesSlides[1].classList.add("service-show");
  }
});

servicesButtons[2].addEventListener("click", function (evt) {
  evt.preventDefault();
  if (!servicesButtons[2].classList.contains("current-service")) {
    for(var i = 0; i < servicesButtons.length; i++) {
      servicesButtons[i].classList.remove("current-service");
      servicesSlides[i].classList.remove("service-show");
    }
    servicesButtons[2].classList.add("current-service");
    servicesSlides[2].classList.add("service-show");
  }
});
