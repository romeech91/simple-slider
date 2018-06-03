document.querySelector('.slider__button-next').onclick = sliderLeft;
document.querySelector('.slider__button-prev').onclick = sliderRight;
let left = 0;
var list = document.querySelector('.slider__list');

function sliderLeft() {
    left = left - 400;

    if (left < -1200) {
        left = 0;
    }

    list.style.left = left + 'px';
};

function sliderRight() {
    left = left + 400;

    if (left > 399) {
        left = -1200;
    }

    list.style.left = left + 'px';
};

