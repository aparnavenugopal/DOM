let tabEle = document.querySelector(".tabs");
let tab = tabEle.children;

let paraEle = document.querySelector(".tab-content");
let para = paraEle.children;

for(let i = 0; i < para.length; i++){
    para[i].style.display = "none";
}

tab[0].classList.add('active');
para[0].style.display= 'block';

for(let i=0;i< tab.length; i++){
    tab[i].addEventListener("click", () => {
        for(let j=0; j<tab.length;j++){
            tab[j].classList.remove("active");
            para[j].style.display = "none";
        }
        tab[i].classList.add("active");
        para[i].style.display = "block";
    })
}
