var astronaut;
var bg, sleep, brush, gym, eat, drink, move;

function preload() {
  bg = loadImage("images/iss.png");
  sleep = loadAnimation("images/sleep.png");
  brush = loadAnimation("images/brush.png");
  gym = loadAnimation("images/gym1.png","images/gym2.png","images/gym11.png","images/gym12.png");
  eat = loadAnimation("images/eat1.png", "images/eat2.png");
  drink = loadAnimation("images/drink1.png", "images/drink2.png");
  move = loadAnimation("images/move.png", "images/move1.png");
}
function setup() {
  createCanvas(400, 400);
  astronaut = createSprite(300,230,50,50);
  astronaut.addAnimation("sleeping",sleep);
  astronaut.scale = 0.1;
  bg = createSprite(300,300);
  bg.addImage(bg);
}

function draw() {
  background(220);
  drawSprites();
}