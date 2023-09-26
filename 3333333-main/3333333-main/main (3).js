//Pom
function tocaSomPom () { 
    document.querySelector('#som_tecla_pom').play();
}
const ListasDeTeclas = document.querySelectorAll('.tecla');

ListasDeTeclas[0].onclick = tocaSomPom;