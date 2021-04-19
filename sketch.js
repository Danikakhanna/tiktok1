var hr
var min
var sec
function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  angleMode(DEGREES)
}

function draw() {
  background(0); 
  hr=hour();
  min=minute();
  sec=second(); 
  translate(200,200)
  rotate(-90)
  push ()
  noFill()
  strokeWeight(8)
  stroke("red")
  scmap=map(sec,0,60,0,360)
  clock=arc(0,0,300,300,0,scmap)
  pop()
  push ()
  noFill()
  strokeWeight(8)
  stroke("green")
  mimap=map(min,0,60,0,360)
  clock=arc(0,0,280,280,0,mimap)
  pop()
  push ()
  noFill()
  strokeWeight(8)
  stroke("blue")
  hrmap=map(hr%12,0,11,0,360)
  clock=arc(0,0,260,260,0,hrmap)
  pop()
  
  push ()
  rotate (scmap)
  strokeWeight(4)
  stroke("red")
  line(0,0,100,0)
  pop()

  push ()
  rotate (mimap)
  strokeWeight(4)
  stroke("green")
  line(0,0,75,0)
  pop()

  push ()
  rotate (hrmap)
  strokeWeight(4)
  stroke("blue")
  line(0,0,50,0)
  pop()
  drawSprites();
}