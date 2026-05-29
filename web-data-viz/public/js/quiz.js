const grid = document.querySelector('.grid'); // querySelector procura o elemento no 'document' com o atributo do CSS (no caso é a class .grid)
const spanUsuario = document.querySelector('.nome-usuario');

const temporizador = document.querySelector('.temporizador');

const itens = [
        "argila",
        "balde-leite",
        "bola-de-slime", 
        "bussola", 
        "cenoura",
        "crafting-table",
        "diamante",
        "elytra",
        "lagrima-de-ghast", 
        "perola-do-fim", 
        "tesoura", 
        "vara-de-pesca",
    ]  // array com os nomes das imagens

// Função para criar as cartas
function criarElemento(tag, className){ // Pede o parametro 'tag' e o 'className'

    const element = document.createElement(tag); // Cria a constante, ela vai criar um elemento com a tag que você quizer (ex: div)
    element.className = className; // Atribui uma classe para a const criada
    return element; // Retorna o valor da const
}

function criarCarta(item){
    
    const carta = criarElemento('div', 'carta'); // cria a div 
    const frente = criarElemento('div', 'face frente'); 
    const costas = criarElemento('div', 'face costas');
    
    frente.style.backgroundImage = `url('./css/assets/quiz/${item}.png')`
    
    carta.appendChild(frente);
    carta.appendChild(costas);
    
    carta.addEventListener('click', revelarCarta);

    carta.setAttribute('data-item', item);
    
    return carta;
}

function verificarFimDoJogo(){

    const cartasDisabilitadas = document.querySelectorAll('.disable-carta');

    if(cartasDisabilitadas.length == 24){
        
        clearInterval(loopTempo);

        alert(`Parabéns! Você conseguiu em ${temporizador.innerHTML} segundos!`);
        location.reload();
    }
}


let primeiraCarta = ``;
let segundaCarta = ``;
let cliques = 0;
let loopTempo;

function checarCartas(){
    const primeiroItem = primeiraCarta.getAttribute('data-item');
    const segundoItem = segundaCarta.getAttribute('data-item');

    if(primeiroItem == segundoItem){

        primeiraCarta.firstChild.classList.add('disable-carta');
        segundaCarta.firstChild.classList.add('disable-carta');

        primeiraCarta = ``;
        segundaCarta = ``;

        setTimeout(verificarFimDoJogo, 1000);        
    
    } else {
        // arrow function () => {} uma função que não precisa nomear porque vai ser usada uma única vez no código, aqui. '{}' vai conter o que a função vai rodar
        setTimeout(() => {  
            primeiraCarta.classList.remove('revelar-carta');
            segundaCarta.classList.remove('revelar-carta');

            primeiraCarta = ``;
            segundaCarta = ``;
        }, 500);
    }
}

function revelarCarta(alvo){

    if(alvo.target.parentNode.className.includes('revelar-carta')){
        return;
    }

    cliques++;
    document.querySelector('.contador-cliques').innerHTML = `${cliques}`

    if(primeiraCarta == ``){
        
        alvo.target.parentNode.classList.add('revelar-carta');
        primeiraCarta = alvo.target.parentNode;

    } else if (segundaCarta == ``){

        alvo.target.parentNode.classList.add('revelar-carta');
        segundaCarta = alvo.target.parentNode;

        checarCartas();
    }

}

function iniciarTemporizador(){

    loopTempo = setInterval(() => {

        const tempoAtual = Number(temporizador.innerHTML);
        temporizador.innerHTML = tempoAtual + 1;

    }, 1000)
}

function carregarJogo(){
    
    const duplicarItens = [...itens, ...itens];

    const listaEnbaralhada = duplicarItens.sort( () => Math.random() - 0.5);

    listaEnbaralhada.forEach((item) => {

        const carta = criarCarta(item); // usar for 
        grid.appendChild(carta);

    });
}

window.onload = () => {

    // spanUsuario.innerHTML = localStorage.getItem('usuario');

    iniciarTemporizador();
    carregarJogo();


}
