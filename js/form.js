class Form{
constructor(){

}
display()
{
    var title = createElement("h2");
    title.html("CAR RACING GAME");
    title.position(130,0);
    var input = createInput("name");
    var button = createButton("Play");
    var greeting = createElement("h3")
    input.position(130,160);
    button.position(240,200);
    button.mousePressed(function()
    {
    input.hide()
    button.hide()
    var name = input.value()
    playerCount++
    player.update(name)
    player.updateCount(playerCount)
    greeting.html("HELLO "+name)
    greeting.position(130,160)
    })
}


}