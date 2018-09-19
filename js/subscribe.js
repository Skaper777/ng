'use strict';

(function () {
    var open = document.querySelector('.subscribe__open');
    var popup = document.querySelector('.subscribe-popup');
    var close = document.querySelector('.subscribe-popup__close');

    open.addEventListener('click', function() {
        popup.style.display = 'block';
    });

    close.addEventListener('click', function() {
        popup.style.display = 'none';
    })
})();