let notArr = [];
let inputText = document.querySelector('.notification-input');
let AddMessage = document.querySelector('.button.add-btn');
let displayTextItems = document.querySelector('.display');
let ulItem = document.createElement('ul');
displayTextItems.appendChild(ulItem);

const hideHandler = (textSpan, hidebtn) => {
    if(hidebtn.textContent === 'Hide' ){
        textSpan.style.display = 'none';
        hidebtn.textContent = 'Show';
    }else{
        textSpan.style.display = 'inline';
        hidebtn.textContent = 'Hide';
    }
}

const dismissHandler = (item) => {
   let index = notArr.indexOf(item);
   if(index> -1){
    notArr.splice(index, 1);
   }
   notificationManager();
}


const notificationManager = () => {
   ulItem.innerHTML = '';
   notArr.forEach((item) => {
     let notificationlistItem = document.createElement('li');


     let textSpan = document.createElement('span');
     textSpan.textContent = item;

     let hideButton = document.createElement('button');
     hideButton.textContent = 'Hide';

     let DismissButton = document.createElement('button');
     DismissButton.textContent = 'Dismiss';

     notificationlistItem.appendChild(textSpan);
     notificationlistItem.appendChild(hideButton);
     notificationlistItem.appendChild(DismissButton);
     ulItem.appendChild(notificationlistItem);

     hideButton.addEventListener('click', () => {
        hideHandler(textSpan,hideButton)
     });

     DismissButton.addEventListener('click', () => {
        dismissHandler(item);
     })
   })


}

AddMessage.addEventListener('click', () => {
    let notification = inputText.value.trim();
    if(!notification) return;
    notArr.push(notification);
    inputText.value= '';
    notificationManager();
})