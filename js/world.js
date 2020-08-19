const World = (function() {
    return class World {
        constructor() {
            this.botList = [];
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