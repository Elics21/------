const slider = document.querySelector('.about-us__slider');
const sliderItems = document.querySelectorAll('.about-us__slider-item');
let sliderActiveItem = document.querySelector('.active-slide');
const buttonNext = document.querySelector('#next-slide');
const buttonPrev = document.querySelector('#prev-slide'); 

function findIndexByClassName(className) {
    return Array.from(sliderItems).findIndex(item => item.classList.contains(className));
}

function sliderNextOrPrevSlide(direction) {
    const activeIndex = findIndexByClassName('active-slide');
    const nextIndex = findIndexByClassName('next-slide');
    const prevIndex = findIndexByClassName('prev-slide');
    
    sliderItems[activeIndex].classList.remove('active-slide');
    sliderItems[nextIndex].classList.remove('next-slide');
    sliderItems[prevIndex].classList.remove('prev-slide');

    if (direction === 'next') {
        sliderItems[activeIndex].classList.add('prev-slide');
        sliderItems[nextIndex].classList.add('active-slide');
        sliderItems[prevIndex].classList.add('next-slide');
    } else if (direction === 'prev') {
        sliderItems[activeIndex].classList.add('next-slide');
        sliderItems[nextIndex].classList.add('prev-slide');
        sliderItems[prevIndex].classList.add('active-slide');
    }
}

buttonNext.addEventListener('click', () => {
    sliderNextOrPrevSlide('next');
});

buttonPrev.addEventListener('click', () => {
    sliderNextOrPrevSlide('prev');
});

