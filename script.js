let canvas = document.querySelector('#cobra');
let context = canvas.getContext('2d');
let box = 32;
let cobra = [];
cobra[0] = {
    x: 8 * box,
    y: 8 * box
}
let direcao = 'direita';
let comida =  {
    x: Math.floor(Math.random() * 15 + 1) * box,
    y: Math.floor(Math.random() * 15 + 1) * box
}

function criarBackground() {
    context.fillStyle = 'lightgreen';
    context.fillRect(0, 0, 16*box, 16*box);
}

function criarCobra() {
    for (i=0; i<cobra.length; i++) {
        context.fillStyle = 'green';
        context.fillRect(cobra[i].x, cobra[i].y, box, box);
    }
}

function insereComida() {
    context.fillStyle = 'red';
    context.fillRect (comida.x, comida.y, box, box);

}

document.addEventListener('keydown', atualiza);

function atualiza(evento) {
    if(evento.keyCode == 37 && direcao != 'direita') direcao = 'esquerda';
    if(evento.keyCode == 38 && direcao != 'baixo') direcao = 'cima';
    if(evento.keyCode == 39 && direcao != 'esquerda') direcao = 'direita';
    if(evento.keyCode == 40 && direcao != 'cima') direcao = 'baixo';
}

function iniciarJogo() {
    if(cobra[0].x > 15 * box && direcao == 'direita') cobra[0].x = 0;
    if(cobra[0].x < 0 && direcao == 'esquerda') cobra[0].x = 15 * box;
    if(cobra[0].y > 15 * box && direcao == 'baixo') cobra[0].y = 0;
    if(cobra[0].y < 0 && direcao == 'cima') cobra[0].y = 15 * box;

    for (i=1; i<cobra.length; i++) {
        if (cobra[0].x == cobra[i].x && cobra[0].y == cobra[i].y) {
            clearInterval(jogo);
            document.body.innerHTML = `<h1>Game Over!</h1>`
        }
    }

    criarBackground();
    criarCobra();
    insereComida();

    let cobraX = cobra[0].x;
    let cobraY = cobra[0].y;

    if (direcao == 'direita') cobraX += box;
    if (direcao == 'esquerda') cobraX -= box;
    if (direcao == 'cima') cobraY -= box;
    if (direcao == 'baixo') cobraY += box;

    if(cobraX != comida.x || cobraY != comida.y) {
        cobra.pop();
    } else {
        comida.x = Math.floor(Math.random() * 15 + 1) * box;
        comida.y = Math.floor(Math.random() * 15 + 1) * box;
    }


    let novaCabeca = {
        x: cobraX,
        y: cobraY
    }

    cobra.unshift(novaCabeca);
}

let jogo = setInterval(iniciarJogo, 100);

