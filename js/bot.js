const Bot = (function() {
    const MAX_VELOCITY = 2.0;
    
    return class Bot {
        constructor(x, y) {
            this.position = new Vector(x, y);
            this.velocity = new Vector(0, 0);
            this.facing = 0;
            this.maxVelocity = MAX_VELOCITY * Math.random() + 2;
            this.steering = new SteeringManager(this);
            this.isAvoiding = false;
        }
        
        update() {
            //this.steering.flee(Input.getMousePos());
            this.doAvoidanceBehavior();
            
            if(!this.isAvoiding) {
                this.steering.wander();
            }
            
            this.steering.update();
            this.updateFacing();
        }
        
        updateFacing() {
            if(this.velocity.magnitudeSquared != 0) {
                this.facing = Math.atan2(this.velocity.y, this.velocity.x);
            }
        }
        
        doAvoidanceBehavior() {
            let isOutOfBounds = this.steering.checkBounds();
            if(isOutOfBounds) {
                this.steering.seek(this.getNearestCenter());
            } else if(this.isAvoiding) {
                // reset wander angle
                let center = this.getNearestCenter();
                this.steering.setWanderAngle(center);
            }
            this.isAvoiding = isOutOfBounds;
            
        }
        
        isValid(point) {
            return (point.x >= 0 && point.x <= currentWorld.width && point.y >= 0 && point.y <= currentWorld.height);
        }
        
        getNearestCenter() {
            return new Vector(currentWorld.width / 2, currentWorld.height / 2);
        }
    };
})();