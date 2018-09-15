'use strict';

(function () {
    var check1 = document.getElementById('btn1');
    var check2 = document.getElementById('btn2');

    var slide1 = document.getElementById('slide1');
    var slide2 = document.getElementById('slide2');

    

    check1.addEventListener('click', function() {
        if (check1.checked) {
            slide1.style.display = 'block';
            slide2.style.display = 'none';
        } else if (check2.checked) {
            slide2.style.display = 'block';
            slide1.style.display = 'none';
        }
    });

    check2.addEventListener('click', function() {
        if (check1.checked) {
            slide1.style.display = 'block';
            slide2.style.display = 'none';
        } else if (check2.checked) {
            slide2.style.display = 'block';
            slide1.style.display = 'none';
        }
    });
})();