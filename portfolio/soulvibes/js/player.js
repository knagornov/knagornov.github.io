'use strict';

(function () {
  var player = document.querySelector('.player__container');
  var playlist = player.querySelector('.playlist');

  player.addEventListener('click', function (evt) {
    var target = evt.target.closest('.player__button');

    if (!target || target.classList.contains('player__button--prev') ||
        target.classList.contains('player__button--next')) {
      return;
    }

    if (target.classList.contains('player__button--play')) {
      target.classList.toggle('player__button--playing');
      return;
    }

    if (target.classList.contains('player__button--playlist')) {
      playlist.classList.toggle('playlist--show');
    }

    target.classList.toggle('player__button--active');
  });
})();
