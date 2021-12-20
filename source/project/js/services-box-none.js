let servicesBox = document.querySelectorAll('.img__text');
let btnArrows = document.querySelectorAll('.btn-arr');

for (let i = 0; i < servicesBox.length; i++) {
    btnArrows[i].addEventListener('click', function () {
        for (let j = 0; j < servicesBox.length; j++) {
            if(!servicesBox[j].classList.contains('disp-none')) {
                servicesBox[j].classList.add('disp-none');
            }
        }
        servicesBox[i].classList.remove('disp-none');
    })
}

