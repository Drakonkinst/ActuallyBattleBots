let canvas;
let currentWorld;

function getMousePos() {
    return new Vector(mouseX, mouseY);
}

function setup() {
    canvas = createCanvas(800, 500);
    
    currentWorld = new World();
    
    for(let i = 0; i < 100; i++) {
        let x = Math.random() * 100 + 100;
        let y = Math.random() * 100 + 100;
        currentWorld.createBot(x, y);
    }
    
    console.log("Setup complete!");
}

function draw() {
    //console.log("Drawing!");
    Graphics.draw();
    currentWorld.update();
}

$(document).ready(function() {
    console.log("Ready!");
});