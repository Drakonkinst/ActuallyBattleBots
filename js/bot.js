const Bot = (function() {
    return class Bot {
        constructor() {
            this.position = new Vector();
            this.velocity = new Vector(1, 0);
        }
        
        update() {
            this.position.add(this.velocity);
            console.log(this.position.toString());
        }
    };
})();