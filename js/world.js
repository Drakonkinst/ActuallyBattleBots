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
            for(let bot of this.botList) {
                bot.update();
            }
        }
        
        createBot(x, y) {
            let bot = new Bot(x, y);
            this.botList.push(bot);
            return bot;
        }
    };
})();