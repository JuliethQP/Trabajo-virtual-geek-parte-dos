const button=document.querySelector('.alert');
const frase=document.querySelector('.nombre');

 function showAlert(){
   frase.innerHTML='Mi primer click';

 }

button.addEventListener('click', showAlert);