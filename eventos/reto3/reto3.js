const div=document.querySelector('.div');
const text=document.querySelector('.texto')
const textoadd=document.querySelector('.textoadd');

const showAlert=()=> {
    
   
    textoadd.innerHTML=`<h2>El trozo de texto estándar de Lorem Ipsum usado desde el año 1500 es reproducido debajo para aquellos interesados. Las secciones 1.10.32 y 1.10.33 de "de Finibus Bonorum et Malorum" por Cicero son también reproducidas en su forma original exacta, acompañadas por versiones en Inglés de la traducción realizada en 1914 por H. Rackham.</h2>`;
    
 }
text.addEventListener('mouseover', showAlert);