function setup() {
  // put setup code here
  createCanvas(1024, 512);
  background(0);

}

function draw() {
  // put drawing code here
	stroke(255);
	fill(random(255));
	strokeWeight(10);
if(mouseIsPressed){
	line(mouseX, mouseY, pmouseX, pmouseY);
	}
}
