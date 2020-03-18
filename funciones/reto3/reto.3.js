const precioIVA=function(precio){
    coniva=precio*0.21 + precio;
    return 'precio sin IVA: ' + precio +' IVA :21% '+ ' y total '+ coniva ;
}
precio=parseInt(prompt('digite el precio'));
precioIVA(precio);