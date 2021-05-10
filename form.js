class Form{
    constructor(){}
    
    display(){
        var title = createElement('h2')
        title.html("Car Racing Game")
        title.position(130,0)
        var input = createInput("Name")
        input.position(130,160)
        var button = createButton('Submit')
        button.position(250,200)
    }
}