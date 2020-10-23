function preload(){
  pic = loadImage("hand.png");
}


function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  image(pic, 90,90,200,200);
}