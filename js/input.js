function mouseClicked() {
    Input.mouseClicked();
}

const Input = (function() {
    return {
        setup() {
            
        },
        
        mouseClicked() {
            let buttonList = Button.getButtons();
            let mousePos = Input.getMousePos();
            
            for(let button of buttonList) {
                if(button.wasPressed(mousePos)) {
                    button.onClick();
                    return;
                }
            }
        },
        
        getMousePos() {
            return new Vector(mouseX, mouseY);
        },
        
        isMousePressed() {
            return mouseIsPressed;
        }
    };
})();