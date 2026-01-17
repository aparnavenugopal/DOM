// grab elements
let titleEle = document.getElementById('title');
let para1 = document.getElementById('first-paragraph');
let para2 = document.getElementById('second-paragraph');
let blueBtn = document.querySelector('.blue');

// function
const blue = () => {
  titleEle.style.color = 'blue';
  para1.style.color = 'blue';
  para2.style.color = 'blue';
};

// event
blueBtn.addEventListener('click', blue);