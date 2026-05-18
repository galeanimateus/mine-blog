const grid = document.querySelector('.grid'); // querySelector procura o elemento no 'document' com o atributo do CSS (no caso é a class .grid)

const itens = [
     "argila",
     "balde-leite",
     "bola-de-slime", 
     "bussola", 
     "cenoura", 
     "diamante", 
     "lagrima-de-ghast", 
     "perola-do-fim", 
     "tesoura", 
     "vara-de-pesca"
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

    return carta;
}

function carregarJogo(){

    itens.forEach((item) => {

        const carta = criarCarta(item);
        grid.appendChild(carta);

    });
}

carregarJogo();