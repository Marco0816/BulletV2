var canvas;
var player1, player2;
var gun1, gun2;
var gun1_img, gun2_img;
var floatfloor;


function preload() {
  //car1_img = loadImage("../assets/car1.png");
  gun1_img = loadImage("../assets/Gun1_img.png")
  gun2_img = loadImage("../assets/Gun2_img.png")
}

function setup() {
  canvas = createCanvas(1500, 700);
  player1 = createSprite(200,200,20,65);
  player1.shapeColor = "black"
  player2 = createSprite(900,200,20,65);
  player2.shapeColor = "black"

  gun1 = createSprite(300,300,10,10);
  gun1.addImage(gun1_img);
  gun1.scale = 0.4;
  gun2 = createSprite(500,300,10,10);
  gun2.addImage(gun2_img);
  gun2.scale = 0.4;

}

function draw() {

player1.velocityX = -3 ;
  background("white");
  drawSprites();
}
