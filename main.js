
function tocaSom(seletorAudio){
    const elemento = document.querySelector(seletorAudio);


    if (elemento && elemento.localName === 'audio'){        
        elemento.play();        
    }
    else{
        //alert('Elemento não encontrado');
        console.log('Elemento não encontrado ou seletor invalido')
    }
    
}

const listaDeTeclas = document.querySelectorAll('.tecla');

//para
for(let contador = 0; contador < listaDeTeclas.length; contador ++){
    const tecla = listaDeTeclas[contador];

    const instrumento = tecla.classList[1];
  
    const idAudio = `#som_${instrumento}`;  //template string

    tecla.onclick = function(){
    tocaSom(idAudio);
        }
        //eventos do teclado
        tecla.onkeydown = function (evento) {
            if(evento.code === 'Space' || evento.code === 'Enter')/*true */{
            tecla.classList.add('ativa');
            } 
        }
        tecla.onkeyup = function (){
            tecla.classList.remove('ativa');
        }
    }
/*
//enquanto
let contador = 0;
while (contador < listaDeTeclas.length ){
    const tecla = listaDeTeclas[contador];

const instrumento = tecla.classList[1];

//template string
const idAudio = `#som_${instrumento}`;

    tecla.onclick = function(){
        tocaSom(idAudio);
    };

    contador = contador + 1;

    console.log(contador);
}*/


// Então no onclick eu vou remover o tocaSom por enquanto e vou escrever uma função anônima, ou seja, uma função sem nome. E essas funções sem nome só podem ser utilizadas nesse contexto de quando elas são o valor de algum atributo ou estão sendo armazenadas dentro de alguma referência constante ou variável

//E a crase é uma outra forma de criar strings (textos) dentro dos JavaScript.
//agora tudo que é variável dentro da minha string eu preciso envolver entre chaves, porém iniciando $ antes da abertura das chaves
//Esse ${} faz uma abertura para o código de JavaScript de dentro da string, eu posso acessar variáveis, métodos fazer contas aqui dentro, é incrível. E o nome desse recurso que utilizamos da linguagem JavaScript é template string. Eu até vou escrever para vocês conhecerem.











/*maneira mais demorada-muito repetitivo- pra fazer:

//2som Clap--------------------------------------------------------------------------
function tocaSomClap(){
    document.querySelector('#som_tecla_clap').play();
}
document.querySelector('.tecla_clap').onclick = tocaSomClap;


//3som Tim---------------------------------------------------------------------------
function tocaSomTim(){
    document.querySelector('#som_tecla_tim').play();
}
document.querySelector('.tecla_tim').onclick = tocaSomTim;


//4som Puff--------------------------------------------------------------------------
function tocaSomPuff(){
    document.querySelector('#som_tecla_puff').play();
}
document.querySelector('.tecla_puff').onclick = tocaSomPuff;


//5som Splash------------------------------------------------------------------------
function tocaSomSplash(){
    document.querySelector('#som_tecla_splash').play();
}
document.querySelector('.tecla_splash').onclick = tocaSomSplash;


//6som Toim--------------------------------------------------------------------------
function tocaSomToim(){
    document.querySelector('#som_tecla_toim').play();
}
document.querySelector('.tecla_toim').onclick = tocaSomToim;


//7som Psh---------------------------------------------------------------------------
function tocaSomPsh(){
    document.querySelector('#som_tecla_psh').play();
}
document.querySelector('.tecla_psh').onclick = tocaSomPsh;


//8som Tic----------------------------------------------------------------------------
function tocaSomTic(){
    document.querySelector('#som_tecla_tic').play();
}
document.querySelector('.tecla_tic').onclick = tocaSomTic;


//9som Tom-----------------------------------------------------------------------------
function tocaSomTom(){
    document.querySelector('#som_tecla_tom').play();
}
document.querySelector('.tecla_tom').onclick = tocaSomTom;

*/
