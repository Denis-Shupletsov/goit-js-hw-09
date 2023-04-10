
const bodyEl = document.querySelector('body');
const startEl = document.querySelector('button[data-start]');
const stopEl = document.querySelector('button[data-stop]');

stopEl.disabled = true;
let intervalID = null;

const generatorRandomColors = {
    DELAY: 1000,

    getRandomHexColor() {
        return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
    },

    interval() {
        intervalID = setInterval(() => {
            randomChangeColor();
        }, this.DELAY);
        stopEl.disabled = false;
    },

    start() {
        startEl.addEventListener('click', () => {
            this.interval();
            startEl.disabled = true;
            stopEl.disabled = false;
        });
        stopEl.addEventListener('click', this.stop);
    },

    stop() {
        clearInterval(intervalID);
        stopEl.disabled = true;
        startEl.disabled = false;
    },
};

function randomChangeColor() {
    bodyEl.style.backgroundColor = `${generatorRandomColors.getRandomHexColor()}`;
}

generatorRandomColors.start();
