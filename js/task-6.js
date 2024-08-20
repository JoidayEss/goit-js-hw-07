`use strict`

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controls = document.querySelector('#controls');
const input = controls.querySelector('input');
const createButton = controls.querySelector('[data-create]');
const destroyButton = controls.querySelector('[data-destroy]');
const boxes = document.querySelector('#boxes');

createButton.addEventListener('click', () => {
  const amount = parseInt(input.value);

if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
  }
});

destroyButton.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
  boxes.innerHTML = '';

  const boxElements = [];

  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    const size = 30 + i * 10; 

    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    box.style.margin = '5px';

    boxElements.push(box);
  }

  boxes.append(...boxElements);
}

function destroyBoxes() {
  boxes.innerHTML = '';
}