let canvas = document.querySelector('#cobra');
let context = canvas.getContext('2d');
let box = 32;
let cobra = [];
cobra[0] = {
    x: 8 * box,
    y: 8 * box
}
let direcao = 'direita';

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

function iniciarJogo() {
    criarBackground();
    criarCobra();

    let cobraX = cobra[0].x;
    let cobraY = cobra[0].y;

    if (direcao == 'direita') cobraX += box;
    if (direcao == 'esquerda') cobraX -= box;
    if (direcao == 'cima') cobraY -= box;
    if (direcao == 'baixo') cobraY += box;

    cobra.pop();

    let novaCabeca = {
        x: cobraX,
        y: cobraY
    }

    cobra.unshift(novaCabeca);
}

let jogo = setInterval(iniciarJogo, 100);

