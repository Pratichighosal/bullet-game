var wall,thickness;
var bullet,speed,weight;

function setup() {
  createCanvas(1200,400);
  
  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83);
   
  bullet = createSprite(50, 200, 80,10);
  bullet.shapeColor = "white"

  wall = createSprite(1000, 200,thickness ,200);

}

function draw() {
  background("black");  

  bullet.velocityX = -(1 * speed);

  if(bullet.hasCollided(wall)){
     
    bullet.velocityX = 0;
    
    var damage = (0.5 * weight * speed * speed)/(thickness * thickness * thickness);

    if(damage > 10){
      
      wall.shapeColor = "red";

}

    if(damage < 10){

      wall.shapeColor = "green";

}
    
}


  drawSprites();
}
