const radius = 100;
let x,y;
let score = 0;
let r,g,b;

function setup() {
createCanvas(windowWidth,windowHeight);
newCircle();

}

function draw() {
background(220);
fill(r,g,b);
noStroke();
ellipse(x,y,radius*2,radius*2);
fill('red');
text("Score: " + score,10,20);
}

function mousePressed(){
  let d = dist(mouseX,mouseY,x,y);

  if(d < radius){
    newCircle();
    score++;
    setInterval(newCircle,1000);
    if(score > 2){
      radius /= 2;
    }
  }
}

function newCircle() {
  r = random(255);
  g = random(255);
  b = random(255);
  x = random(windowWidth);
  y = random(windowHeight);
}
