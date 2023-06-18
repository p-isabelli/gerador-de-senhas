let inputElement = document.querySelector('#slider');
let btnGerador = document.querySelector('#btn-gerar-senha');
let tamanhoSenha = document.querySelector('#numero-caracteres');
let senha = document.querySelector('#senha');
let containerSenha = document.querySelector('#container-senha')

let caracteres = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*';
let novaSenha = '';

tamanhoSenha.innerHTML = inputElement.value;

slider.oninput = function(){
    tamanhoSenha.innerHTML = this.value;
}

function gerarSenha(){
    let sen = '';
    for(let i = 0, n = caracteres.length; i < inputElement.value; ++i){
      sen += caracteres.charAt(Math.floor(Math.random() * n));
    }
    
    containerSenha.classList.remove("hide");
    senha.innerHTML = sen;
    novaSenha = sen;
}

function copiarSenha(){
    alert("Senha copiada com sucesso!")
    navigator.clipboard.writeText(novaSenha);
  }