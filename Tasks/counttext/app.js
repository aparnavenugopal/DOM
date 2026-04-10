let text = document.querySelector(".data");
let count = document.querySelector(".count");


let sum = 0;
let total = 200;

const handleText = (e) => {
    sum = e.target.value.length;
    if(sum <= total){
          count.textContent = `${sum}/ ${total} characters`;
    }else{
        text.disabled = true;
    }
    text.disabled = false;
}

text.addEventListener("input", handleText);