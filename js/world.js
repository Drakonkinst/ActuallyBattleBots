const World = (function() {
    return class World {
        constructor(width, height) {
            this.width = width;
            this.height = height;
            this.botList = [];
        }
        
        static loadWorld(world) {
            createCanvas(world.width, world.height);
            currentWorld = world;
        }
        
        update() {
            if(Config.isStopped) {
                return;
            }
            
            for(let bot of this.botList) {
                bot.update();
            }
        }
        
        spawnRandomBot() {
            let x = Math.random() * this.width;
            let y = Math.random() * this.height;
            this.createBot(x, y);
        }
        
        createBot(x, y) {
            let bot = new Bot(x, y);
            this.botList.push(bot);
            return bot;
        }
    };
})();