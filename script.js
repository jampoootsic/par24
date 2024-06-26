const slides = document.querySelectorAll(".slide");
const radioButton = document.querySelectorAll(".button");
let counter = 0;

slides.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`;
});

const goNext = () => {
    counter++;
    slideImage();
};

const goPrev = () => {
    counter--;
    slideImage();
};

const slideImage = () => {
    slides.forEach((slide) => {
        counter <= slides.length - 1 ?
            slide.style.transform = `translateX(-${counter * 100}%)` :
            counter = slides.length - 1;
    });

    radioButton.forEach((radio, i) => {
        radio.checked = i === counter;
    });
};

const changeSlide = (slideNumber) => {
    counter = slideNumber;
    slides.forEach((slide) => {
        counter <= slides.length - 1 ?
            slide.style.transform = `translateX(-${counter * 100}%)` :
            counter = slides.length - 1;
    });
};

// Event listeners for arrow keys
document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft') {
        goPrev();
    } else if (event.key === 'ArrowRight') {
        goNext();
    }
});
