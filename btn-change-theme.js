let btn = document.querySelector('.theme-btn');
let page = document.querySelector('.page');

btn.onclick = function () {
    page.classList.toggle('dark-theme');
    page.classList.toggle('light-theme');
};