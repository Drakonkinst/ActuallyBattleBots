const Graphics = (function() {
    function toRadians(degrees) {
        return degrees * (Math.PI / 180);
    }
    
    function toDegrees(radians) {
        return radians * (180 / Math.PI);
    }
    
    function vectorVertex(vector) {
        vertex(vector.x, vector.y);
    }
    
    return {
        draw() {
            clear();
            background(200);
            
            this.drawBots();
        },
        
        drawBots() {
            for(let bot of currentWorld.botList) {
                this.drawBot(bot);
            }
        },
        
        drawBot: (function() {
            const r1 = 2.0;
            const r2 = 10.0;
            const theta = Math.atan2(1, 1.5);
            
            return function(bot) {
                let pos = bot.position;
                
                // angle in radians
                let facing = bot.facing;
                
                let facingA = Math.PI + facing;
                let pointA = pos.copy().add(new Vector(
                    r1 * Math.cos(facingA),
                    r1 * Math.sin(facingA)
                ));
                
                let facingB = Math.PI + facing - theta;
                let pointB = pos.copy().add(new Vector(
                    r2 * Math.cos(facingB),
                    r2 * Math.sin(facingB)
                ));
                
                let facingC = facing + theta;
                let pointC = pos.copy().add(new Vector(
                    r2 * Math.cos(facingC),
                    r2 * Math.sin(facingC)
                ));
                
                let facingD = facing - theta;
                let pointD = pos.copy().add(new Vector(
                    r2 * Math.cos(facingD),
                    r2 * Math.sin(facingD)
                ));
                
                let facingE = Math.PI + facing + theta;
                let pointE = pos.copy().add(new Vector(
                    r2 * Math.cos(facingE),
                    r2 * Math.sin(facingE)
                ));
                
                beginShape();
                vectorVertex(pointA);
                vectorVertex(pointB);
                vectorVertex(pointC);
                vectorVertex(pointD);
                vectorVertex(pointE);
                endShape(CLOSE);
            };
        })(),
    };
})();