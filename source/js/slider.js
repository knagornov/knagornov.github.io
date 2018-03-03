var sliderContainer = document.querySelector(".works__list");
var sliderItems = document.querySelectorAll(".works__item");
var nextButton = document.querySelector(".works__button--next");
var prevButton = document.querySelector(".works__button--prev");

var widthSliderItem = 290;
var position = 0;

var sliderInitial = function () {
  position = 0;
  sliderContainer.style.marginLeft = "0";
  nextButton.classList.remove("works__button--disabled");
  if (window.innerWidth >= 1300) {
    var itemRightIndex = 3;
    for (var i = 0; i <= itemRightIndex; i++) {
      sliderItems[i].classList.remove("works__item--hidden");
    }
    prevButton.classList.add("works__button--disabled");
  } else if (window.innerWidth >= 768) {
    var itemRightIndex = 1;
    for (var i = 0; i <= itemRightIndex; i++) {
      sliderItems[i].classList.remove("works__item--hidden");
    }
    prevButton.classList.add("works__button--disabled");
  } else if (window.innerWidth < 768) {
    for (var i = 0; i < sliderItems.length; i++) {
      sliderItems[i].classList.remove("works__item--hidden");
    }
  }
  for (var i = itemRightIndex + 1; i < sliderItems.length; i++) {
    sliderItems[i].classList.add("works__item--hidden");
  }
  return itemRightIndex;
};

if ((window.innerWidth >= 768 && sliderItems.length <= 2) || (window.innerWidth >= 1300 && sliderItems.length <= 4)) {
  nextButton.classList.add("works__button--disabled");
  prevButton.classList.add("works__button--disabled");
} else if (window.innerWidth >= 768) {
  var itemRightIndex = sliderInitial();
}

window.addEventListener("resize", function () {
  if (window.innerWidth >= 768) {
    itemRightIndex = sliderInitial();
  } else {
    sliderContainer.style.marginLeft = "0";
    for (var i = 0; i < sliderItems.length; i++) {
      sliderItems[i].classList.remove("works__item--hidden");
    }
  }
});

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
  position -= widthSliderItem;
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
  position += widthSliderItem;
  if (position === 0) {
    prevButton.classList.add("works__button--disabled");
  }
  sliderContainer.style.marginLeft = position + "px";
  nextButton.classList.remove("works__button--disabled");
});
