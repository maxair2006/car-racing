var database;
var form,game,player;
var gameState=0;
var playercount = 0;
function setup(){
  createCanvas(400,400)
  database= firebase.database()
  game = new Game()
  game.getState()
  game.start()

}
function preload(){
  image = loadImage("background.jpg")
}
function draw(){
  background(image);
}