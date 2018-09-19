'use strict';

(function () {
    var open = document.querySelector('.popup__open');
    var popup = document.querySelector('.popup');
    var close = document.querySelector('.popup__close');

    open.addEventListener('click', function() {
        popup.style.display = 'block';
    });

    close.addEventListener('click', function() {
        popup.style.display = 'none';
    })
})();