const SteeringManager = (function() {
    const MAX_FORCE = 0.1;
    const DEFAULT_SLOWING_DISTANCE = 20;
    const DOUBLE_PI = 2.0 * Math.PI;
    
    const WANDER_CIRCLE_DISTANCE = 1.0;
    const WANDER_CIRCLE_RADIUS = 3.0;
    const MAX_ANGLE_CHANGE = toRadians(15.0);
    
    function truncate(vector, max) {
        if(vector.magnitude() > max) {
            vector.scaleToMagnitude(max);
        }
        
        /*
        if(vector.magnitudeSquared() > max * max) {
            vector.scaleToMagnitude(max);
        }
        */
    }
    
    function toRadians(degrees) {
        return degrees * (Math.PI / 180);
    }
    
    return class SteeringManager {
        constructor(unit) {
            this.host = unit;
            this.wanderAngle = Math.random() * DOUBLE_PI;
            this.reset();
        }
        
        reset() {
            this.steering = new Vector();
        }
        
        update() {
            let host = this.host;
            
            truncate(this.steering, MAX_FORCE);
            host.velocity.add(this.steering);
            truncate(host.velocity, host.maxVelocity);
            host.position.add(host.velocity);
            
            this.reset();
        }
        
        seek(targetPos, slowingRadius) {
            if(targetPos == null) {
                debug("Null seek command!");
                return;
            }
            
            slowingRadius = slowingRadius || DEFAULT_SLOWING_DISTANCE;
            
            let host = this.host;
            let seekForce = targetPos.copy().subtract(host.position);
            let distance = host.position.distance(targetPos);
            let maxVelocity = host.maxVelocity;
            
            if(distance < slowingRadius) {
                seekForce.scaleToMagnitude(maxVelocity * (distance / slowingRadius));
            } else {
                seekForce.scaleToMagnitude(maxVelocity);
            }
            
            seekForce.subtract(host.velocity);
            this.steering.add(seekForce);
        }
        
        flee(avoidPos) {
            if(avoidPos == null) {
                debug("Null flee command!");
                return;
            }

            let host = this.host;
            let fleeForce = host.position.copy().subtract(avoidPos);
            fleeForce.scaleToMagnitude(host.maxVelocity);
            fleeForce.subtract(host.velocity);
            this.steering.add(fleeForce);
        }
        
        wander() {
            let circleCenter = this.host.velocity.copy().scaleToMagnitude(WANDER_CIRCLE_DISTANCE);
            
            this.wanderAngle += (Math.random() * 2 - 1) * MAX_ANGLE_CHANGE;
            this.wanderAngle = this.wanderAngle % DOUBLE_PI;
            
            let displacement = new Vector(
                Math.cos(this.wanderAngle),
                Math.sin(this.wanderAngle)
            ).scale(WANDER_CIRCLE_RADIUS);
            
            let wanderForce = circleCenter.add(displacement);
            this.steering.add(wanderForce);
        }
    }
})();