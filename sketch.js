var quadrado 
function setup() {
  createCanvas(400, 400);
  quadrado = createSprite(200,200,30,30)
}

function draw() {
  background(30);
  if (keyIsDown(RIGHT_ARROW)) {
    quadrado.x +=1
  }
  if (keyIsDown(LEFT_ARROW)) {
    quadrado.x -=1
  }
  if (keyIsDown(UP_ARROW)) {
    quadrado.y -=1
  }
  if (keyIsDown(DOWN_ARROW)) {
    quadrado.y +=1
  }
drawSprites()
}




