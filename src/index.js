import './style.css';

const PX_MOVE = 300;
let current_img_index = 0;

const imgDiv = document.querySelector('#images');
const navigationDiv = document.querySelector('#navigation');

const buttonLeft = document.createElement('button');
const buttonRight = document.createElement('button');
const images = imgDiv.childElementCount;

buttonLeft.type = 'button';
buttonRight.type = 'button';
buttonLeft.textContent = 'Previous';
buttonRight.textContent = 'Next';

buttonLeft.addEventListener('click', () => previousImg())
buttonRight.addEventListener('click', () => nextImg())
const div = document.createElement('div');
const div2 = document.createElement('div');
div.append(buttonLeft, buttonRight);
navigationDiv.append(div);

for (let i = 0; i < images; i++) {
    const bubbleButton = document.createElement('button');
    bubbleButton.type = 'button';
    bubbleButton.classList.add('bubble-button');
    bubbleButton.addEventListener('click', () => {
        selectImg(i);
        updateActiveBubble(current_img_index);
    });
    div2.append(bubbleButton);
}
navigationDiv.prepend(div2);

const bubbleButtons = document.querySelectorAll('.bubble-button');
updateActiveBubble(current_img_index);

// In future, have it reset if user manually changes images!!! <!!!!!>
window.onload = function() {
    setInterval(nextImg, 5000);
};

function previousImg() {
    current_img_index = (current_img_index - 1 + images) % images;
    selectImg(current_img_index);
    updateActiveBubble(current_img_index);
}

function nextImg() {
    current_img_index = (current_img_index + 1) % images;
    selectImg(current_img_index);
    updateActiveBubble(current_img_index);
}

function selectImg(index) {
    imgDiv.style.right = index * PX_MOVE + 'px';
    current_img_index = index;
}

function updateActiveBubble(index) {
    bubbleButtons.forEach(button => button.classList.remove('active-img-bubble'));
    bubbleButtons[index].classList.add('active-img-bubble');
}

