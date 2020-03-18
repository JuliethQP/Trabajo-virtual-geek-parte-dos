const empezar=document.querySelector('.empezar');
const listado=document.querySelector('.listado');
const inception = 'Inception';
const theButterFlyEffect = 'The butterfly effect';
const eternalSunshineOfTheSM = 'Eternal sunshine of the spotless mind';
const blueVelvet = 'Blue velvet';
const split = 'Split';
const primeraPelicula=document.querySelector('.primeraPelicula');
const segunda=document.getElementById('segunda')
const cuarta=document.querySelector('.splitpeli')



const listadoadd=()=> {
    
   
    listado.innerHTML=`<ul>
    <li  class="primeraPelicula" onclick="primeraF(event)" >${inception}</li>
    <li  onclick="segundaF(event)" id="segunda" >${theButterFlyEffect}</li>
    <li onclick="terceraF(event)">${blueVelvet}</li>
    <li class=""splitpeli" onclick="cuartaF(event)" >${split}</li>
</ul>`;
    
 }
empezar.addEventListener('click', listadoadd);



const primeraF=(event)=> {
     //alert(event.currentTarget + `${inception}`);
    alert(`${inception}`);
       
  }

  const segundaF=(event)=>{
      //alert(event.currentTarget);
      alert( `${theButterFlyEffect}`)
  }
  const terceraF=(event)=>{
    alert( `${blueVelvet }`)
  }
  const cuartaF=(event)=>{
      alert(`${ split }`);
  }


  primeraPelicula.addEventListener('click', primeraF);
  segunda.addEventListener('click', segundaF);
  
  blueVelvet.addEventListener('click', terceraF);
  splitpeli.addEventListener('click', cuartaF);
  