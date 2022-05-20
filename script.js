let canvas = document.querySelector('#cobra');
let context = canvas.getContext('2d');
let box = 32;

function criarBackground() {
    context.fillStyle = 'lightgreen';
    context.fillRect(0, 0, 16*box, 16*box);
}

criarBackground();