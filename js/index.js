contador = 0;


function comenzar(){
    document.getElementById("scena1").style.display = "none";
    document.getElementById("scena2").style.display = "block";
    continuar1();
}


function continuar1(){
    setTimeout(() => {
        document.getElementById("continuar").style.display = "flex";
    }, 25000);
}

function continuar3(){
    setTimeout(() => {
        document.getElementById("continuar").style.display = "flex";
    }, 25000);
    document.getElementById("scena2").style.display = "none";
    document.getElementById("scena3").style.display = "block";
}

function seleccionar(a){
    document.getElementById("scena3").style.display = "none"; 
    document.getElementById("scena6").style.display = "none"; 
    document.getElementById("scena8").style.display = "none"; 
    document.getElementById("scena11").style.display = "none"; 
    if(a == "fuerte" && contador == 0){
        document.getElementById("scena4").style.display = "block"; 
    }else if(a == "mujer" && contador == 1){
        document.getElementById("scena7").style.display = "block"; 
    }else if(a == "alzheimer" && contador == 2){
        document.getElementById("scena9").style.display = "block"; 
    }else if(a == "interprete" && contador == 3){
        document.getElementById("scena12").style.display = "block"; 
    }else{
        document.getElementById("scenaend").style.display = "block"; 
    }
}

function seleccionarHerr(b){
    document.getElementById("scena4").style.display = "none"; 
    document.getElementById("scena9").style.display = "none"; 
    document.getElementById("scena12").style.display = "none";
    console.log(contador) 
    if(b == 'cuchara' && contador == 0){
        document.getElementById("scena5").style.display = "block"; 
    }else if(b == 'linterna' && contador == 2){
        document.getElementById("scena10").style.display = "block"; 
    }else if(b == 'quipitos' && contador == 3){
        document.getElementById("scena13").style.display = "block"; 
    }else{
        document.getElementById("scenaend").style.display = "block"; 
    }
}

function continuar4(){
    document.getElementById("scena5").style.display = "none";
    document.getElementById("scena6").style.display = "block";
    contador = contador +1;
}

function continuar5(){
    document.getElementById("scena7").style.display = "none";
    document.getElementById("scena8").style.display = "block";
    contador = contador +1;
}

function continuar6(){
    document.getElementById("scena10").style.display = "none";
    document.getElementById("scena11").style.display = "block";
    contador = contador +1;
}

function continuar7(){
    document.getElementById("scena13").style.display = "none";
    document.getElementById("scena14").style.display = "block";
    contador = contador +1;
}

function continuar8(){
    document.getElementById("scena14").style.display = "none";
    document.getElementById("scena15").style.display = "block";
    contador = contador +1;
}

function continuar9(){
    document.getElementById("scena15").style.display = "none";
    document.getElementById("scenawinner").style.display = "block";
    contador = contador +1;
}

function reiniciar(){
    location.reload()
}
