const input=document.querySelector('.input');
const button=document.querySelector('.button');
const saludo=document.querySelector('.saludo');

const showAlert=()=> {
    
   
    saludo.innerHTML='hola ' + input.value;
    
 }
button.addEventListener('click', showAlert);