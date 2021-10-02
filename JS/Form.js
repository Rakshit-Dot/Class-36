class Form {
    constructor() {
        this.input = createInput("").attribute("placeHolder", "Display your Name")
        this.playButton = createButton("play")
        //this.titleImg=createImg("")
        this.greeting = createElement("h2")
    }
    setElementposition() {
        this.input.position(width / 2, height / 2);
        this.playButton.position(width / 2, height / 2 + 40);
        this.greeting.position(width / 2, height / 2 + 60);


    }
    setElementStyle(){
    this.playButton.class("buttonStyle");
    }

    controlButtonPress() {
        this.playButton.mousePressed(() => {
            this.input.hide();
            this.playButton.hide();
            this.greeting.html("hello, " + this.input.value())
        })
    }
    display() {
        this.setElementposition()
        this.controlButtonPress();
        this.setElementStyle();
    }
}

