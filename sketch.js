var rect1, rect2;

function setup() {
  createCanvas(800,400);
  rect1 = createSprite(400, 20, 50, 50);
  rect1.shapeColor = "blue";
  rect1.velocityY = 3;

  rect2 = createSprite(400, 300, 50, 50);
  rect2.shapeColor = "red";
  rect2.velocityY = -3;
}

function draw() {
  background("black");
  if (rect2.x - rect1.x <= rect1.width/2 + rect2.width/2 &&
     rect1.x - rect2.x <= rect1.width/2 + rect2.width/2 )  {
       rect1.velocityX = rect1.velocityX * (-1);
       rect2.velocityX = rect2.velocityX * (-1);
       
     }

     if (rect2.y - rect1.y <= rect1.height/2 + rect2.height/2 &&
      rect1.y - rect2.y <= rect1.height/2 + rect2.height/2 )  {
        rect1.velocityY = rect1.velocityY * (-1);
        rect2.velocityY = rect2.velocityY * (-1);
        
      }
  drawSprites();
}