let image = document.querySelector('img');
let textDiv = document.getElementById('text');


image.addEventListener('mousemove', (e) =>{
    textDiv.textContent += 'Krishna ';
    let dotDiv = document.createElement('div');
    dotDiv.className = 'dot';
    document.body.appendChild(dotDiv);
    dotDiv.style.top = `${e.clientY}px`;
    dotDiv.style.left = `${e.clientX}px`;
})



