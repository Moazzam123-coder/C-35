var gameState = 0,playerCount = 0,game,player,form;
var position,database;

function setup(){
    createCanvas(500,500);
    database = firebase.database();
    game = new Game();
    game.getState();
    game.start();
    
}

function draw(){
    background("white");
    
}