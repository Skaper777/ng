'use strict';

(function () {
    var open = document.querySelector('.callback__open');
    var popup = document.querySelector('.callback-popup');
    var close = document.querySelector('.callback-popup__close');

    open.addEventListener('click', function() {
        popup.style.display = 'block';
    });

    close.addEventListener('click', function() {
        popup.style.display = 'none';
    })
})();