var sliderContainer = document.querySelector(".works__list");
var sliderItems = document.querySelectorAll(".works__item");
var nextButton = document.querySelector(".works__button--next");
var prevButton = document.querySelector(".works__button--prev");

function sliderInitial() {
  position = 0;
  sliderContainer.style.marginLeft = "0";

  if (window.innerWidth >= 1300 && sliderItems.length > 4) {
    itemRightIndex = 3;
    hideSliderItems();
  } else if (window.innerWidth >= 768 && window.innerWidth < 1300 && sliderItems.length > 2) {
    itemRightIndex = 1;
    hideSliderItems();
  } else {
    disableSlider();
  }
  return itemRightIndex;
};

function hideSliderItems() {
  for (var i = 0; i < sliderItems.length; i++) {
    if (i <= itemRightIndex) {
      sliderItems[i].classList.remove("works__item--hidden");
    } else {
      sliderItems[i].classList.add("works__item--hidden");
    }
  }
  prevButton.classList.add("works__button--disabled");
  nextButton.classList.remove("works__button--disabled");
}

function disableSlider() {
  sliderContainer.style.marginLeft = "0";
  for (var i = 0; i < sliderItems.length; i++) {
    sliderItems[i].classList.remove("works__item--hidden");
  }
  prevButton.classList.add("works__button--disabled");
  nextButton.classList.add("works__button--disabled");
}


var page = document.querySelector(".page-main__wrapper");
var currentPageWidth = page.offsetWidth;

if (window.innerWidth >= 768) {
  var position = 0;
  var itemRightIndex = sliderInitial();
};

window.addEventListener("resize", function () {
  if (window.innerWidth >= 768 && currentPageWidth != page.offsetWidth) {
    itemRightIndex = sliderInitial();
    currentPageWidth = page.offsetWidth;
  } else if (window.innerWidth < 768 && currentPageWidth != page.offsetWidth) {
    disableSlider();
    currentPageWidth = page.offsetWidth;
  }
});

var marginRight = 10;
var shift = sliderItems[0].offsetWidth + marginRight;

nextButton.addEventListener("click", function () {
  if (window.innerWidth >= 1300) {
    sliderItems[itemRightIndex + 1].classList.remove("works__item--hidden");
    sliderItems[itemRightIndex - 3].classList.add("works__item--hidden");
  } else if (window.innerWidth >= 768) {
    sliderItems[itemRightIndex - 1].classList.add("works__item--hidden");
    sliderItems[itemRightIndex + 1].classList.remove("works__item--hidden");
  }
  itemRightIndex++;
  if (itemRightIndex === sliderItems.length - 1) {
    nextButton.classList.add("works__button--disabled");
  }
  position -= shift;
  sliderContainer.style.marginLeft = position + "px";
  prevButton.classList.remove("works__button--disabled");
});

prevButton.addEventListener("click", function () {
  itemRightIndex--;
  if (window.innerWidth >= 1300) {
    sliderItems[itemRightIndex - 3].classList.remove("works__item--hidden");
    sliderItems[itemRightIndex + 1].classList.add("works__item--hidden");
  } else if (window.innerWidth >= 768) {
    sliderItems[itemRightIndex - 1].classList.remove("works__item--hidden");
    sliderItems[itemRightIndex + 1].classList.add("works__item--hidden");
  }
  position += shift;
  if (position === 0) {
    prevButton.classList.add("works__button--disabled");
  }
  sliderContainer.style.marginLeft = position + "px";
  nextButton.classList.remove("works__button--disabled");
});
