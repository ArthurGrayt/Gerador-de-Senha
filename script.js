let sliderElement = document.querySelector("#slider");
let buttonElement=document.querySelector("#button");

let sizePassword=document.querySelector("#valor");
let password=document.querySelector("#password");

let containerPassword=document.querySelector("#container-password");

let charset="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
let novaSenha="";

sizePassword.innerHTML=15; // valor padrão para caracteres

slider.oninput= function(){
    sizePassword.innerHTML=this.value;
}
function generatePassword(){
    alert("A senha está sendo gerada")


let pass="";
for(let i=0,n = charset.length; i < sliderElement.value;  ++i){
    pass += charset.charAt(Math.floor(Math.random() * n ));

}
containerPassword.classList.remove("hide");
password.innerHTML=pass;
novaSenha=pass;
}

function copyPassword(){
    alert("A senha foi copiada com sucesso!")
    navigator.clipboard.writeText(novaSenha);
}

