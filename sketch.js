var bgimg
var groundimg,ground
var cannonimg,cannon

function preload(){
bgimg=loadImage("images/bg.png")
groundimg=loadImage("images/ground.png")
cannonimg=loadImage("images/cannon ball.png")

}

function setup() {
  createCanvas(1200,700);
  ground=createSprite(500,300,20,20)
  ground.addImage(groundimg)
  ground.scale=0.2

  cannon=createSprite(500,550,20,20)
  cannon.addImage(cannonimg)
  cannon.scale=0.2
}

function draw() 
{
  background(bgimg);
  drawSprites();
  

}
// create cannon balls
// create the box
// create the square with images




