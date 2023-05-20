class Box{
    constructor(){
        this.x=100
        this.y=150
        this.width=100
        this.height=100
    }
    display(){
        rect(this.x,this.y,this.width,this.height)
    }
    xvelocity(){
        this.x+=2
    }
}