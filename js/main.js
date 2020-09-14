let canvas;
let currentWorld;

function setup() {
    
    World.loadWorld(new World(1000, 800));
    
    for(let i = 0; i < 100; i++) {
        let x = Math.random() * 100 + width / 2 - 50;
        let y = Math.random() * 100 + height / 2 - 50;
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