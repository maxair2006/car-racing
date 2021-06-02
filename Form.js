class Form{
constructor(){

}
display(){
   var title=createElement("h1")
    title.html("CAR RACING GAME")
    title.position(100,100)
    var input = createInput("name")
    var greeting=createElement("h1")
    input.position(100,160)   
    var button= createButton("play") 
    button.position(100,200);
    buttton.mousePressed(function(){
        input.hide()
        button.hide()
        var name = input.value()
        playercount+=1
        player.update(name)
        player.updateCount(playercount)
        greeting.html("hello"+name)
        greeting.position(100,160)
    })
}
}