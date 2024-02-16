const canvasSize = 16;
const canvas = document.querySelector("#canvas")

function createCanvas(size) {
    for (let i = 0; i < size*size; i++) {
        const tile = document.createElement('div');
        tile.classList.add('tile');
        tile.style.width = `calc(100% / ${size}`;
        tile.style.height = `calc(100% / ${size}`;
        canvas.appendChild(tile);
    }
}

// test if works
function updateCanvasSize(size) {
    canvasSize = size;
}

document.addEventListener('DOMContentLoaded', createCanvas(canvasSize))