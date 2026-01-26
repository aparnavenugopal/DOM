// delete items old school

// let buttons = document.querySelectorAll('#grocery-list li .delete');
// buttons.forEach(button => {
//     button.addEventListener('click', (e) => {
//         let li = e.target.parentElement;
//         li.parentElement.removeChild(li);
//     })
// })

//delte item new way

const remove = (e) => {
    let target = e.target;
    if(target.className == 'delete'){
        let li = target.parentElement;
        li.remove();
    }
}

let groceryListUl = document.querySelector('#grocery-list ul');
groceryListUl.addEventListener('click', remove);

//add items
let formAdd = document.getElementById('add-item');
formAdd.addEventListener('submit', (e) => {
   e.preventDefault();
   let ul = document.getElementsByTagName('ul')[0];
   let text = formAdd.querySelector('input[type=text]').value;
   formAdd.querySelector('input').value=null;
   let li = document.createElement('li');
   let groceryName = document.createElement('span');
   let deleteButton = document.createElement('span');

   li.appendChild(groceryName);
   li.appendChild(deleteButton);
   ul.appendChild(li);
   groceryName.textContent = text;
   deleteButton.textContent = "Delete";

   groceryName.classList.add('name');
   deleteButton.classList.add('delete');
});

//hide elements

let checkBox = document.querySelector('#hide');
checkBox.addEventListener('change', (e) => {
  let groceryList = document.getElementById('grocery-list');
  if(checkBox.checked){
    groceryList.style.display = 'none';
  }else{
    groceryList.style.display = 'block';
  }
});

//search input

let search = document.forms['search-item'].querySelector('input');
search.addEventListener('keyup', (e) => {
    let userText = e.target.value.toLowerCase();
    let groceryList = document.querySelector('#grocery-list ul');
    let groceries = groceryList.getElementsByTagName('li');
    let groceriesArray = Array.from(groceries);
    groceriesArray.forEach((grocery) =>{
        let groceryName = grocery.firstElementChild.textContent.toLowerCase();
        if(groceryName.indexOf(userText) == -1){
           grocery.style.display = 'none';
        }else{
            grocery.style.display = 'block';
        }
    });
});

//tabs

let headings = document.querySelector('.heading');
let panels = document.querySelectorAll('.panel');
let selectedPanel = null;
headings.addEventListener('click', (e) => {
    let target = e.target;
    let dataAttribute = e.target.dataset.clicked;
    if(target.tagName == 'LI'){
        if(selectedPanel != null){
            selectedPanel.classList.toggle('selected');
        };
        selectedPanel = target;
        selectedPanel.classList.toggle('selected');

        let targetPanel = document.querySelector(dataAttribute);
        panels.forEach((panel) => {
            if(panel == targetPanel){
                panel.classList.add('active');
            }else{
                panel.classList.remove('remove');
            }
        })
    }
});

//answer

const answer = () => {
    document.getElementById('answer').classList('show');
    document.getElementById('amswer').textContent = 'An IMPASTA';
    answerButton.style.display = 'none';
}

let answerButton = document.getElementById('showAnswer');
answerButton.addEventListener('click', answer);







