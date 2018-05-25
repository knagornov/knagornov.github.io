'use strict';

(function () {
  var eventsContainer = document.querySelector('.events__container');
  var events = document.querySelectorAll('.event__title');

  eventsContainer.addEventListener('click', function (evt) {
    if (!evt.target.classList.contains('event__link')) {
      return;
    }

    evt.preventDefault();

    for (var i = 0; i < events.length; i++) {
      if (events[i] !== evt.target.parentElement) {
        events[i].classList.remove('event__title--show-details');
      }
    }

    evt.target.parentElement.classList.toggle('event__title--show-details');
  });
})();
