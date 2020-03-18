'use strict';

const div=document.querySelector('.div');
var letra;

const  changeClass=(event)=> {
    letra=event.keyCode;
   
    
    if ( letra==114){
        div.classList.add('fondo-rojo');
        div.classList.remove('fondo-morado');
    }
    else if(letra==109){
        div.classList.add('fondo-morado');
        div.classList.remove('fondo-rojo');
    }
}

div.addEventListener('keypress', changeClass);