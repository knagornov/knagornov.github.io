var popupButton = document.querySelector(".search-hotel-button");
var popup = document.querySelector(".search-popup");

popupButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.toggle("show-popup");
});


var increaseButton = document.querySelectorAll(".increase-button");
var decreaseButton = document.querySelectorAll(".decrease-button");
var personsNumber = document.querySelectorAll(".persons-number");

increaseButton[0].addEventListener("click", function (evt) {
  if (personsNumber[0].getAttribute("data-max") > personsNumber[0].value) {
    personsNumber[0].value++;
  }
});
decreaseButton[0].addEventListener("click", function (evt) {
  if (personsNumber[0].getAttribute("data-min") < personsNumber[0].value) {
    personsNumber[0].value--;
  }
});

increaseButton[1].addEventListener("click", function (evt) {
  if (personsNumber[1].getAttribute("data-max") > personsNumber[1].value) {
    personsNumber[1].value++;
  }
});
decreaseButton[1].addEventListener("click", function (evt) {
  if (personsNumber[1].getAttribute("data-min") < personsNumber[1].value) {
    personsNumber[1].value--;
  }
});
