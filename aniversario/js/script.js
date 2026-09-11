/*CAMBIO DE PANTALLAS*/

const pantalla1 = document.getElementById("pantalla1");
const pantalla2 = document.getElementById("pantalla2");
const pantalla3 = document.getElementById("pantalla3");


/*Al cargar la página mostramos
   la primera pantalla.*/

window.addEventListener("load", () => {

    pantalla1.classList.add("activa");

});


/*PANTALLA 1 → PANTALLA 2*/

function mostrarPantalla2() {

    pantalla1.classList.remove("activa");

    setTimeout(() => {

        pantalla2.classList.add("activa");

    }, 300);

}


/*PANTALLA 2 → PANTALLA 3*/

function mostrarPantalla3() {

    pantalla2.classList.remove("activa");

    setTimeout(() => {

        pantalla3.classList.add("activa");

    }, 300);

}


/*CARTA*/

function abrirCarta() {

    const carta = document.getElementById("carta");

    carta.classList.toggle("abierta");

}


/*FOTOS*/

const fotos = [

    "img/A1.jpg",

    "img/A3.jpg",

    "img/A4.jpg",

];

let fotoActual = 0;

const imagen = document.getElementById("fotoActual");


/*Cambiar fotografía cada 2 segundos*/

setInterval(() => {

    /*Primero hacemos desaparecer
      la fotografía actual.*/

    imagen.classList.add("cambiando");


    setTimeout(() => {

        /*Cambiamos el índice*/

        fotoActual++;

        if (fotoActual >= fotos.length) {

            fotoActual = 0;

        }


        /*Cambiamos la imagen*/

        imagen.src = fotos[fotoActual];


        /*Volvemos a mostrarla*/

        imagen.classList.remove("cambiando");

    }, 700);


}, 3000);