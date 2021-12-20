let position = 0;
const slidesToShow = 2;
const slidesToScroll = 1;
const container = document.querySelector('.slider-container');
const track = document.querySelector('.slider-track');
const item = document.querySelector('.slider-item');
const btnUp = document.querySelector('.arr-btn-up');
const btnDown = document.querySelector('.arr-btn-down');
const items = document.querySelectorAll('.slider-item');
const slidesCount = items.length;
const itemHeight = (container.clientHeight - 40) / slidesToShow;
const movePosition = slidesToScroll * itemHeight;

items.forEach((item) => {
    item.style.minHeight = `${itemHeight}px`;
});

btnUp.addEventListener('click', () => {
    position += movePosition + 20;
    setPosition();
    checkBtns();
});

btnDown.addEventListener('click', () => {
    position -= movePosition + 20;
    setPosition();
    checkBtns();
});

const setPosition = () => {
    track.style.transform = `translateY(${position}px)`;
};

const checkBtns = () => {
    btnUp.disabled = position === 0;
    btnDown.disabled = position <= -(slidesCount - slidesToShow) * itemHeight;
};

checkBtns();