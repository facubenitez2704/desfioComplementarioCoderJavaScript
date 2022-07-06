//primer desafio complementario 

let numeroDeLaSuerte = parseInt(prompt ("Hola , decime un numero menor a 3 y mayor a 0 plis"));

for ( let i = numeroDeLaSuerte ; i <= 5; i++){
    if (i === 1){
        alert( "tu numero es el mejor,sos un genix");
    }
    else if (i === 2) {
        alert("tu numero es el mas elegido, que genix");
    }
    else if (i === 3) {
        alert(" tu numero es el mas lindo, que genix");
    }
    else if(i === 4) {
        alert(" tu numero es el mas feo , lo siento");
    }
    else{
        alert( " el impensado felicitaciones");
    }
}


let nombreDeUsuario = prompt("decime tu nombre plis");

for( let u = 0 ; u <=3 ; u++){
    if (u === 0){
        alert(nombreDeUsuario + " " + "que lindo nombre");
    }
    else if (u === 1){
        alert(nombreDeUsuario +" " + "sos grosx");
    }
    else if (u === 2){
        alert(nombreDeUsuario + " " + "te esperan cosas preciosas");
    }
    else if ( u ===3){
        alert(nombreDeUsuario + " " + "sera un año increible");
    }
}


let numero = parseInt (prompt ("decime un numero"));

for( let x = 0; x <= numero ; x++){
    alert("hola");
}
