let sliderElement= document.querySelector("#slider");
let buttomElem = document.querySelector("#btn");

let sizePassword = document.querySelector("#valor");
let password  = document.querySelector("#password");

let containerPass = document.querySelector("#container-password");
let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@!#&$%";
let newPass = "";

sizePassword.innerHTML = sliderElement.value;

slider.oninput = function(){
    sizePassword.innerHTML = this.value;
}


function generatePass(){

    let pass = '';
    for(let i = 0, n = charset.length; i < sliderElement.value; ++i){
      pass += charset.charAt(Math.floor(Math.random() * n));
    }

    containerPass.classList.remove("hide");
    password.innerHTML = pass;
    newPass = pass;
}   

function copyPass(){
    navigator.clipboard.writeText(newPass);
    alert("Senha copiada com sucesso ")

}
