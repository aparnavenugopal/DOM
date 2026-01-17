//step-1: grab the div and the button

let myDiv = document.getElementById('content');
let btn = document.getElementById('show-more');

//step-2 ading event listner and handler via inline property approach

btn.addEventListener('click', () => {
    if(myDiv.className == ''){
        //expand the div
        myDiv.className = 'open';
        btn.innerHTML = 'Collapse now';
    }else{
        //collapse the div
        myDiv.className = '';
        btn.innerHTML = 'expand';
    }
})