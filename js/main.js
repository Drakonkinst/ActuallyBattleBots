let canvas;
let currentWorld;

function getMousePos() {
    return new Vector(mouseX, mouseY);
}

function setup() {
    canvas = createCanvas(800, 500);
    
    currentWorld = new World();
    currentWorld.createBot(100, 100);
    
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