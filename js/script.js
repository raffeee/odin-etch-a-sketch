const canvas = document.querySelector("#canvas")
let canvasSize = 16;
let isDrawing = false;

function createCanvas(size) {
    for (let i = 0; i < size*size; i++) {
        const tile = document.createElement('div');
        tile.classList.add('tile');
        tile.style.width = `calc(100% / ${size}`;
        tile.style.height = `calc(100% / ${size}`;
        tile.addEventListener('mouseover', () => {
            if (isDrawing) {
                colorTile(tile);
            }
        })
        tile.addEventListener('mousedown', () => {
            isDrawing = true;
            colorTile(tile);
        })
        tile.addEventListener('mouseup', () => {
            isDrawing = false;
        })
        canvas.appendChild(tile);
    }
}

// step 4 func
function updateCanvasSize(size) {
    canvasSize = size;
}

function colorTile(tile) {
    tile.style.backgroundColor = `#000000`
}

document.addEventListener('DOMContentLoaded', createCanvas(canvasSize))