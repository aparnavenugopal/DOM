let icon = document.querySelectorAll('.fa-solid.fa-chevron-down');

icon.forEach((icon, index) => {
    let item = icon.parentElement;
    let para = item.querySelector('p');
    if(index === 0){
       para.style.display= 'block';
       item.classList.add('open');
    }
    icon.addEventListener('click', (e) => {

        if(para.style.display === 'block'){
            para.style.display ='none';
            item.classList.remove('open');
        }else{
            para.style.display = 'block';
            item.classList.add('open');
        }
    })
});