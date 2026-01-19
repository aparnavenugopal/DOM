
let output = document.getElementById('output');
let nameText = document.querySelector('input[type="text"')
document.querySelector('form').addEventListener('submit',(e) => {
e.preventDefault();
  output.textContent = `Asubmit event has been fired at ${e.timeStamp}`
});

nameText.addEventListener('input', () => {
    output.textContent = `the value entered is ${nameText.value}`
});

nameText.addEventListener('focus', (e) => {
    e.target.style.background = 'lightblue';
    e.target.style.color = "black"
})