'use strict';

(function () {
    var menuOpenButton = document.querySelector('.nav__open-button');
    var menu = document.querySelector('.nav__menu-mobile');
    var menuCloseButton = document.querySelector('.nav__close-button');
    
    var menuOpen = function () {
        menu.style.display = 'flex';
        menuOpenButton.style.display = 'none';
        menuCloseButton.style.display = 'block';
        menuOpenButton.removeEventListener('click', menuOpen);
        menuCloseButton.addEventListener('click', menuClose);
    };
    
    var menuClose = function () {
        menu.style.display = 'none';
        menuCloseButton.style.display = 'none';
        menuOpenButton.style.display = 'block';
        menuCloseButton.removeEventListener('click', menuClose);
        menuOpenButton.addEventListener('click', menuOpen);
    };
    
    menuOpenButton.addEventListener('click', menuOpen);
    menuCloseButton.addEventListener('click', menuClose);
})();