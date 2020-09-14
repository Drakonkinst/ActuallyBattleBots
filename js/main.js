let canvas;
let currentWorld;

function setup() {
    
    World.loadWorld(new World(1000, 800));
    Input.setup();
    
    for(let i = 0; i < 100; i++) {
        currentWorld.spawnRandomBot();
    }
    
    Button.addButton(new Button("Hello World", Vector.of(10, 10), 125, 50, function() {
        Config.isStopped = !Config.isStopped;
    }, "red"));
    
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