
var fixedobj , movingobj


function setup() {
  createCanvas(800,400);

  fixedobj = createSprite(400, 200, 50, 50);
  movingobj = createSprite(300, 200, 50, 50);

  fixedobj.shapeColor = "green";
  movingobj.shapeColor = "green";

 
}

function draw() {
  background(0);  

movingobj.x = mouseX;
movingobj.y = mouseY;

console.log(fixedobj.width/2 + movingobj.width/2);
console.log(movingobj.x - fixedobj.x)

if( movingobj.x - fixedobj.x < fixedobj.width/2 + movingobj.width/2 && 
  fixedobj.x - movingobj.x < fixedobj.width/2 + movingobj.width/2 && 
  movingobj.y - fixedobj.y < fixedobj.width/2 + movingobj.width/2 && 
  fixedobj.y - movingobj.y < fixedobj.width/2 + movingobj.width/2)
{
  fixedobj.shapeColor = "red";
  movingobj.shapeColor = "red";
}
else{
  fixedobj.shapeColor = "green";
  movingobj.shapeColor = "green";
}

  drawSprites();
}