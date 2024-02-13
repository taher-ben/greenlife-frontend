const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const slideWidth = slides[0].clientWidth;
const controls = document.querySelectorAll('.controls button');
let interval;

let counter = 0;

function moveToSlide(index) {
    counter = index;
    slider.style.transition = 'transform 0.5s ease-in-out';
    slider.style.transform = `translateX(${-slideWidth * counter}px)`;
    restartCounter();
}

function startSlide() {
    interval = setInterval(() => {
        counter++;
        if (counter === slides.length) {
            counter = 0;
        }
        moveToSlide(counter);
    }, 8000);
}

function restartCounter() {
    clearInterval(interval);
    startSlide();
}

controls.forEach(button => {
    button.addEventListener('click', () => {
        const index = Array.from(controls).indexOf(button);
        moveToSlide(index);
        counter = index; // تحديث قيمة counter بعد النقر على الزر
    });
});

startSlide();
