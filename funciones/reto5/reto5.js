const multiplicacion=(a,b)=>{
    return a*b;
}
multiplicacion(2,3);

const media=(a,b,c,d)=>{
    return (a+b+c+d)/4;
}
media(2,3,4,5);

const precioIVA=precio=>{
    coniva=precio*0.21 + precio;
    return 'precio sin IVA: ' + precio +' IVA :21% '+ ' y total '+ coniva ;
}
precio=parseInt(prompt('digite el precio'));
precioIVA(precio);