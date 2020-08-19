function setup() {
    console.log("Setup complete!");
}

function draw() {
    //console.log("Drawing!");
}

$(document).ready(function() {
    console.log("Ready!");
    let v1 = new Vector(3, 2);
    let v2 = Vector.of(3, 2);
    v2.add(v1);
    v2.scale(v1);
    v2.divide(2.0);
    
    let bot = new Bot();
    for(let i = 0; i < 10; i++) {
        bot.update();
    }
});