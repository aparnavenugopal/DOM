const icon = document.querySelector(".icon");
const password = document.querySelector("input");

let passwordIcon = false;

icon.addEventListener("click", () => {
    if(!passwordIcon){
       console.log(password.value);
       password.type = "text";
       passwordIcon = true;
    }else{
        password.type = "password";
        passwordIcon = false;
    }
});