let button = document.getElementById('button');
button.addEventListener('click', () => {
    let message = document.getElementById('message');
    let name = document.getElementById('name').value;
    let animal = document.getElementById('animal').value;
    message.textContent = `Hi ${name} I would love to have your ${animal}`
})