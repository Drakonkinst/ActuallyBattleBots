const Button = (function() {
    const buttonList = [];
    const DEFAULT_TEXT = "text"
    const DEFAULT_WIDTH = 20;
    const DEFAULT_HEIGHT = 10;
    const DEFAULT_COLOR = "white";
    const DEFAULT_TEXT_SIZE = 16;
    const DEFAULT_TEXT_COLOR = "black";
    
    return class Button {
        static getButtons() {
            return buttonList;
        }
        
        static addButton(button) {
            buttonList.push(button);
        }
        
        constructor(text, position, width, height, onClick, color, textSize, textColor) {
            this.text = text || DEFAULT_TEXT;
            this.position = position || Vector.of(0, 0);
            this.width = width || DEFAULT_WIDTH;
            this.height = height || DEFAULT_HEIGHT;
            this.onClick = onClick || function() {};
            this.color = color || DEFAULT_COLOR;
            this.textSize = textSize || DEFAULT_TEXT_SIZE;
            this.textColor = textColor || DEFAULT_TEXT_COLOR;
        }
        
        wasPressed(point) {
            let minX = this.position.x;
            let maxX = this.position.x + this.width;
            let minY = this.position.y;
            let maxY = this.position.y + this.height;
            
            return point.x >= minX && point.x <= maxX && point.y >= minY && point.y <= maxY;
        }
        
        
    };
})();