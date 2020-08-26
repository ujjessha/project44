var shirt;
var button;
var pocket;
var collar;
function preLoad(){
  shirtImg1=loadImage("shirt1.jpg");
  shirtImg2=loadImage("shirt2.jpg");
}


function setup() {
  createCanvas(800,800);
  
  shirt=new Shirt(400,400,200,200);
  button=new Button(600,300,50,50);
  pocket=new Pocket(600,200,50,50);
  collar=new Collar(600,400,50,50);
}

function draw() {
  background(255,255,255);  

  shirt.display();
  pocket.display();
  button.display();
  collar.display();
  
}
