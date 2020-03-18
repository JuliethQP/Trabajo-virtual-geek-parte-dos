 //si es true es content_box si es false es border-box
const modeloDeCaja=(Boolean,ancho,padding,border)=>{
    if (Boolean==true){ //si es true, es content-box
        return ancho;
    }
    else{//si es falso es border-box
        return padding;
    }
}
    


modeloDeCaja(false,45,30,15);