let butEle = document.querySelector('.click');
let overlay = document.querySelector('.overlay');
let closeBtn = document.querySelector('.close');
let saveBtn = document.querySelector('.save');

butEle.addEventListener('click', () => {
    overlay.style.display = 'flex';
});

closeBtn.addEventListener('click', () => {
    overlay.style.display = 'none';
});

saveBtn.addEventListener('click', () => {
   console.log('data saved');
   overlay.style.display = 'none';
})
