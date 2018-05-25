'use strict';

(function () {
  var slider = document.querySelector('.player__slider');
  var sliderBar = slider.querySelector('.player__slider-bar');
  var sliderThumb = sliderBar.querySelector('.player__slider-thumb');
  var thumbShift = Math.ceil(sliderThumb.offsetWidth / 2);
  var SHIFT_BY_ARROW = 5;
  var startX;

  var KeyCode = {
    LEFT_ARROW: 37,
    RIGHT_ARROW: 39
  };

  var SliderMoveRange = {
    LEFT: 0,
    right: sliderBar.offsetWidth - sliderThumb.offsetWidth
  };

  var getElementX = function (elem) {
    return elem.getBoundingClientRect().left + pageXOffset;
  };

  var moveThumb = function (newLeft) {
    if (newLeft < SliderMoveRange.LEFT) {
      newLeft = SliderMoveRange.LEFT;
    }
    if (newLeft > SliderMoveRange.right) {
      newLeft = SliderMoveRange.right;
    }

    sliderThumb.style.left = newLeft + 'px';
    sliderBar.style.backgroundImage = 'linear-gradient(to right, #72040d '
        + (newLeft + thumbShift) + 'px, transparent '
        + (newLeft + thumbShift) + 'px)';
  };

  sliderThumb.addEventListener('mousedown', function (downEvt) {
    downEvt.preventDefault();

    startX = downEvt.clientX;

    var moveThumbByMouse = function (evt) {
      var shiftX = startX - evt.clientX + thumbShift;

      moveThumb(evt.pageX - shiftX - getElementX(sliderBar));
      startX = evt.clientX;
    };

    var onMouseMove = function (moveEvt) {
      moveEvt.preventDefault();

      moveThumbByMouse(moveEvt);
    };

    var onMouseUp = function (upEvt) {
      upEvt.preventDefault();

      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };

    moveThumb(downEvt);

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });

  slider.addEventListener('focus', function () {
    var onSliderKeyDown = function (evt) {
      if (evt.keyCode === KeyCode.LEFT_ARROW) {
        moveThumb(sliderThumb.offsetLeft - SHIFT_BY_ARROW);
      }
      if (evt.keyCode === KeyCode.RIGHT_ARROW) {
        moveThumb(sliderThumb.offsetLeft + SHIFT_BY_ARROW);
      }
    };

    document.addEventListener('keydown', onSliderKeyDown);
    slider.addEventListener('blur', function () {
      document.removeEventListener('keydown', onSliderKeyDown);
    });
  });
})();
