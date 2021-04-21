//create vars
var car ,wall
var speed , weight

function setup() {
  createCanvas(800,400);
//giving speed value
speed=random(55,90)
wight=random(400,1500)
//creating var for car
car = createSprite (50,200,50,50);
car.velocityX= speed;

car.shapeColor=color(225)
//creating var for wall
wall=createSprite(400,200,60,height/2)
wall.shapeColor=color(180)
}

function draw() {
  background(0);
  
  //giving the condition
  if(wall.x-car.x <(car.width+wall.width/20)){
car.velocityX=0;
var deformation=0.5*weight*speed*speed/22500;
// showing color red
if(deformation>180)
{
  car.shapeColor=color(255,0,0)
}
// showing color yellow
if(deformation<180 && deformation >100)
{
  car.shapeColor=color(225,225,10)
}
// showing color green
if(deformation<100)
{
  car.shapeColor=color(0,225,0)
}
 }  
  drawSprites();
}