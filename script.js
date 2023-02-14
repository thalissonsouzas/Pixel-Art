// criando função para botão trocar as cores dos quadrados de maneira aleatória

// window.onload = () => {

//  DEFININDO VARIAVEIS PARA BOTOES E CORES DA PALETA
const botaoRandom = document.querySelector('#button-random-color');
const botaoLimpar = document.querySelector('#clear-board');
const cor1 = document.querySelector('#black');
const cor2 = document.querySelector('#cor2');
const cor3 = document.querySelector('#cor3');
const cor4 = document.querySelector('#cor4');

// REQUISITO 5 - FIZ UM IF, CASO O LOCALSTORAGE ESTEJA VAZIO, ENTÃO A FUNÇÃO DEFINE AS CORES INICIAIS PARA A PALETA.
// SE JA HOUVER HISTÓRICO SALVO NO LOCALSTORAGE, ENTAO A PALETA DE CORES SERA O QUE ESTÁ SALVO NO LOCALSTORAGE

if (localStorage.getItem('colorPalette') === null) {
  cor1.style.backgroundColor = 'black';
  cor2.style.backgroundColor = 'blue';
  cor3.style.backgroundColor = 'red';
  cor4.style.backgroundColor = 'yellow';
} else {
  const paletaSalvas = JSON.parse(localStorage.getItem('colorPalette'));

  for (let index = 1; index < paletaSalvas.length; index += 1) {
    cor1.style.backgroundColor = 'black';
    cor2.style.backgroundColor = paletaSalvas[1];
    cor3.style.backgroundColor = paletaSalvas[2];
    cor4.style.backgroundColor = paletaSalvas[3];
    console.log(paletaSalvas);
  }
}

//  ADICIONANDO EVENTO AO BOTAO RANDOM COM FUNÇÃO TROCACOR

botaoRandom.addEventListener('click', trocaCor);

//  ADICIONANDO EVENTO AO BOTAO LIMPAR COM FUNÇÃO RESETCOR

botaoLimpar.addEventListener('click', resetCor);

// FUNÇÃO PARA CRIAR NUMEROS ALEATÓRIOS INTEIROS, PARA COMPOR CORES RGB

function numeroRandom(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

//  CRIANDO FUNÇÃO PARA DEFINIR NOVAS CORES PARA A PALETA JUNTO COM A FUNÇÃO DE NUMEROS INTEIROS ALEATÓRIOS - EXCETO PARA A PRIMEIRA COR QUE DEVE SE MANTER PRETO

function trocaCor () {
  const novaCor1 = 'black';
  const novaCor2 = `rgb(${numeroRandom(0, 255)},${numeroRandom(0, 255)},${numeroRandom(0, 255)})`;
  const novaCor3 = `rgb(${numeroRandom(0, 255)},${numeroRandom(0, 255)},${numeroRandom(0, 255)})`;
  const novaCor4 = `rgb(${numeroRandom(0, 255)},${numeroRandom(0, 255)},${numeroRandom(0, 255)})`;
  //  ATRIBUNDO AS NOVAS CORES AOS BLACKGROUNDS DE CADA PALETA ATRAVÉS DE UMA UMA CONSTANTE
  let corAtual2 = cor2.style.backgroundColor = novaCor2;
  let corAtual3 =  cor3.style.backgroundColor = novaCor3;
  let corAtual4 = cor4.style.backgroundColor = novaCor4;

  // SALVANDO AS ULTIMAS CORES DA PALETA NO LOCALSTORAGE
  let paletaCores = document.querySelectorAll('.color');
  let arrayPaleta = [];
  for ( let index = 0; index < paletaCores.length; index +=1){
  arrayPaleta.push(paletaCores[index].style.backgroundColor);
}

  localStorage.setItem('colorPalette', JSON.stringify(arrayPaleta));
}

function resetCor (){

  let novaCor1 = 'black'
  let novaCor2 = 'blue'
  let novaCor3 = 'red'
  let novaCor4 = 'yellow'
const pixels = document.querySelectorAll('.pixel');

  for (let index = 0; index < pixels.length; index += 1){
    pixels[index].style.backgroundColor = 'white';
    cor1.style.backgroundColor = novaCor1;
    cor2.style.backgroundColor = novaCor2;
    cor3.style.backgroundColor = novaCor3;
    cor4.style.backgroundColor = novaCor4;
 
}
let paletaCores = document.querySelectorAll('.color');
let arrayPaleta = [];
for ( let index = 0; index < paletaCores.length; index +=1){
  arrayPaleta.push(paletaCores[index].style.backgroundColor);


}

localStorage.setItem('colorPalette', JSON.stringify(arrayPaleta));

for ( let index = 0; index < todosPixels.length; index +=1){
  todosPixels[index].style.backgroundColor = 'white';
 }
 salvaPixel ()

}



// ADICIONANDO QUADRO COM 25 PIXELS
let numDePixels = 25;
for (let index = 0; index < numDePixels; index += 1){
  
let pixelDiv = document.querySelector('#pixel-board');
let criaPixel = document.createElement('div');
criaPixel.className = 'pixel';

criaPixel.style.backgroundColor = 'white';
pixelDiv.appendChild(criaPixel);


}

//REQUISITO 9 


// VARIAVEL PALETA REPRESENTA ONDE ESTÃO AS PALETAS DE CORES
let paleta = document.querySelectorAll('.color');
// VARIAVEL SELECTBACKGROUND CAPTURA A COR ESCOLHIDA 
let selectBackGround = 'black'//= document.querySelector('.cor1').style.backgroundColor;
// selectBackGround= 'black';

// DEFINIDA FUNÇÃO PARA CAPTURAR COR DA PALETA CLICADA, O ALVO ONDE O EVENTO ACONTECE, ELE VAI PEGAR O BACKGROUDCOLOR DA PALETA QUE FOR CLICADA
function selectCor (event){
for ( let index = 0; index < paleta.length; index += 1){
  paleta[index].classList.remove('selected');   //  REMOVE A CLASSE 'SELECTED' DE TODAS AS PALETAS
}

selectBackGround = event.target.style.backgroundColor; //DEFINE A VARIAVEL SELECTBACKGROUD NA COR DA PALETA CLICADA

event.target.classList.add('selected'); // ADICIONA A CLASSE SELECTED NA PALETA CLICADA
//return console.log(selectBackGround); // IMPRIME NO CONSOLE A COR DA PALETA CLICADA

//target.style.backgroundColor = '

}

// ESTRUTURA DE REPETIÇÃO PARA APLICAR O EVENTO DE CLIQUE JUNTO COM A FUNCAO SELECTCOR PARA APLICAR A TODAS AS PALETAS/ 
for ( let index = 0; index < paleta.length; index += 1){   //APLICANDO A FUNÇÃO PARA TODA A PALERA
  paleta[index].addEventListener('click', selectCor );
}


//REQUISITO 8
// definir o caminho dos pixels em uma variavel, utilzando querySelectoAll para trazer todos os pixels em um array para utilizarmos o for 
//para adicionar eventListener em todos os pixels para mudarem de cor ao receberem o click;

//DEFININDO VARIAVEL MUDACOR PARA REPRESENTAR TODOS OS PIXELS

let todosPixels = document.querySelectorAll('.pixel');
// DEFININDO VARIAVEL QUANTIDADEDEPIXEL PARA SABER QUANTOS PIXELS EXISTEM
let quantidadePixels = todosPixels.length;
// ESTRUTUTA FOR DE REPETIÇÃO PARA COLOCAR PROPRIEDADE ADDVENTLISTENER EM TODOS OS PIXELS
for(let index = 0; index < quantidadePixels;index += 1){
  todosPixels[index].addEventListener ('click', pintaPixel )
    function pintaPixel (){
todosPixels[index].style.backgroundColor = selectBackGround;

    }}






// REQUISITO 12 - SALVANDO HISTÓRICO NO LOCALSTORAGE

for(let index = 0; index < quantidadePixels;index += 1){   //adicionando o evento salvaPIxel a todos os pixels, para que a cada pixel clicado ele salve um array com as cores
  todosPixels[index].addEventListener ('click', salvaPixel )
}

let arrayPixel = [];  //definindo array vazio para posteriormente guardar as cores dos pixels

function salvaPixel (){   //definindo função para salvar as cores dos pixels
  arrayPixel = [];    //zerando array de cores dos pixels toda vez que a função for acionada, antes de salvar as novas cores


for ( let index = 0; index < todosPixels.length; index +=1){   //estrutura de repetição para: 
  arrayPixel.push(todosPixels[index].style.backgroundColor);   //- salvar a cor de cada pixel dentro do array através do push

 }

 localStorage.setItem('pixelBoard', JSON.stringify(arrayPixel)); // salvando o array com as cores no localStorage
}


if (localStorage.getItem('pixelBoard') !== null){   // verificando se o localStorage pixelBoard está vazio
let corespixel = JSON.parse(localStorage.getItem('pixelBoard')) // se ele não estiver vazio ' !== ', ira pegar as cores do local Storage e atribuir como strings no array coresPixel
 console.log(corespixel);

 for ( let index = 0; index < todosPixels.length; index +=1){  // repetição para pintar cada pixel com sua respectiva cor que está salva no array
  todosPixels[index].style.backgroundColor = corespixel[index];
 }}
//}