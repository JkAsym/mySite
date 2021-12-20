let btn = document.querySelector('.theme-btn');
let page = document.querySelector('#page');

btn.onclick = function () {
    page.classList.toggle('dark-theme');
    if (page.classList.contains('dark-theme')) {
        applyTheme('dark-theme');
    } else {
        applyTheme('light-theme');
    };
    page.classList.toggle('light-theme');
};

function applyTheme (themeName) {
    localStorage.setItem('theme', themeName);
};

let activeTheme = localStorage.getItem('theme');

if (activeTheme === 'dark-theme') {
    page.classList.add('dark-theme');
} else if (activeTheme === 'light-theme') {
    page.classList.remove('dark-theme');
    page.classList.add('light-theme');
}