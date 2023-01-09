//Variables
var ship, ship_animation;
//
var sea, seaImage;

//Animacion
function preload(){
  ship_animation = loadAnimation("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png");
  //
  seaImage = loadImage("sea.png");
}

//Sprites
function setup(){
  createCanvas(400,400);
  //Sea
  sea = createSprite(200,180,200,20);
  sea.addImage("ground",seaImage);
  sea.scale = 0.2;
  sea.velocityX = -4;
  //Ship
  ship = createSprite(200,200,20,20);
  ship.addAnimation("ship",ship_animation);
  ship.scale = 0.3; 
}

function draw() {
  background("aqua")

  //Reiniciar el fondo
  if (sea.x < 0) {
    sea.x = sea.width/10.42;
  }
  console.log(sea.x);

  drawSprites();
}