let person = document.getElementById('anime');
let onPersonClick = (e) => {
  let mustache = document.getElementById('mustache');
  let top = e.clientY;
  let left = e.clientX;
  mustache.style.top = `${top}px`;
  mustache.style.left = `${left}px`;
}

person.addEventListener('click', onPersonClick);