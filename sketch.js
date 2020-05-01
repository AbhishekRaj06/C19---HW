var car,wall;
var speed,weight;
function setup() {
  createCanvas(1600,400);
  speed = random(55,90);
  weight = random(400,1500);
  car = createSprite(50, 200, 50, 50);
  car.velocityX = speed;
  car.shapeColor = "blue";
  wall = createSprite(1200,200,60,height/2);
  wall.shapeColor = "black";
}

function draw() {
  background(255,255,255); 
  var deform = 0.5*weight*speed*speed/22500;
  if (deform>180){
    car.shapeColor = "red";
  }
  if(deform>100&&deform<180){
    car.shapeColor = "yellow";
  }
  if(deform<100){
    car.shapeColor = "green";
  }
  drawSprites();
}