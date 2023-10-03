function tocaSom (idElementoAudio) { 
    document.querySelector(idElementoAudio).play();
}


const ListadeTeclas = document.querySelectorAll('.tecla');

let contador = 0

//enquanto
white (contador < ListadeTeclas.length) {

    const tecla = ListadeTeclas[contador]

    const instrumento = ListadeTeclas[contador].classList[1];

     

     //template string

     console.log(idAudio)

     const idAudio = '#som_${instrumento}';


tecla.onclick = function () {
    tocaSom( idAudio);
}

contador = contador + 1;

console.log(contador);

}
