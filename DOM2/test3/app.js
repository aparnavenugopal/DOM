let circle = document.getElementById('circle');
let para = document.getElementById('note');

para.textContent = 'This is pure DOM manipulation';

const changeColor = () => {
    let randomColor = Math.floor(Math.random()*16777216).toString();
    randomColor = randomColor.padStart(6, 0);
    circle.style.backgroundColor = `#${randomColor}`
}

circle.addEventListener('click', changeColor);



