let subtract = document.querySelector(".subtract");
let add = document.querySelector(".add");
let counter = document.querySelector(".counter");
let reset = document.querySelector(".reset");

let sum = Number(localStorage.getItem("count") || 0);


function udateUI(){
  counter.textContent = sum;
  localStorage.setItem("count", sum)
  if(sum <= 0){
        subtract.disabled = true;
        subtract.style .cursor = "not-allowed";
        subtract.style.background = "gray";
    }

  if(sum > 0){
    subtract.disabled = false;
    subtract.style.cursor = "pointer"; 
    subtract.style.background = "red";
}
}
udateUI();

subtract.addEventListener("click", () => {
    
    if(sum > 0){
        sum = sum -1;
    }
    udateUI();
});

add.addEventListener("click", () => {
    sum = sum+1;
    udateUI(); 
});

reset.addEventListener("click", () => {
    sum = 0;
    localStorage.removeItem("count");
    udateUI(); 
})