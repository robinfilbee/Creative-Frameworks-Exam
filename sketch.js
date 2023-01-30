let myFont;
let x;
let img;


function preload(){
myFont = loadFont("Font.otf");
img = loadImage("Luis.png");
}




function setup() {
  createCanvas(windowWidth, windowHeight);
  x = width;

}

function draw() {
  background(255);

  

 
  
  // Moving Font
  textFont(myFont);
  textSize(1200);
  fill(0);
  x -= 10;
  if (x < -textWidth(text)) {
    x = width;
  }
  text("1,853 years and 9 days' imprisonment (2001) 835 years' imprisonment (2000) 22 years' imprisonment in Ecuador (2007)", x, 800);//

  //Bigger text
  textFont(myFont);
  textSize(100);
  fill("#FF160C");
  textLeading(80);
  text("Luis\nGaravito",50, windowHeight/2);
  textAlign(LEFT);

  
  image(img, 800, 300);
}
