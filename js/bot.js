const Bot = (function() {
    const MAX_VELOCITY = 3.0;
    
    return class Bot {
        constructor(x, y) {
            this.position = new Vector(x, y);
            this.velocity = new Vector(0, 0);
            this.facing = 0;
            this.maxVelocity = MAX_VELOCITY * Math.random() + 2;
            this.steering = new SteeringManager(this);
        }
        
        update() {
            this.steering.seek(getMousePos());
            
            this.steering.update();
            this.updateFacing();
        }
        
        updateFacing() {
            if(this.velocity.magnitudeSquared != 0) {
                this.facing = Math.atan2(this.velocity.y, this.velocity.x);
            }
        }
    };
})();