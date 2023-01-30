let myFont;
let x;
let array = [img1, img2, img3, img4]


function preload(){
myFont = loadFont("Font.otf");
img1 = loadImage("smile face.png");
img2 = loadImage("vase.png");
img3 = loadImage("Harvey Ball.jpeg");
img4 = loadImage("PEACE AND SMILEY.png");
}




function setup() {
  createCanvas(windowWidth, 5000);
  x = width;

}

function draw() {
  background("#EADDCA");
  

 
  
  // Moving Font
  textFont(myFont);
  textSize(800);
  fill("#FF160C");
  x -= 10;
  if (x < -textWidth(text)) {
    x = width;
  }
  text("THE HISTORY OF A SMILEY FACE", x, 700);//

  image(img3, 0, 1750, 1500, 900);
  image(img1, 50, 300);


  //Bigger text
  textFont(myFont);
  textSize(100);
  fill(255);
  textLeading(80);
  text("THE WORLD'S\nOLDEST EMOJI",50, 900);
  textAlign(LEFT);

  
  image(img2, 50, 1000);

  fill(255);
  textSize(20);
  textLeading(20);
  text("A 3,700-year-old jug featuring the oldest recorded smile\nwas discovered by archaeologists from the University of Bologna in 2017.\nThe jug belonged to the Hittites, an ancient culture that ruled over\npresent-day Turkeyand Syria during biblical times.", 550, 1300)
  
  fill(255);
  textSize(20);
  textLeading(20);
  text("Harvey Ross Ball is considered to be the creator of the iconic smiley face.\nIn a mere 10 minutes and for just $45, he brought forth a pop culture icon.\nHis design, a simple yellow circular face with black oval eyes and a broad\ngrin, was a instant success. It was initially distributed on posters and\nbuttons as part of a friendship campaign to employees. The image soon gained\nwidespread popularity and was featured on a variety of items, ranging from\nt-shirts to stickers.", 520, 2100)
  
  image(img4, -330, 2300, 800, 1000)

}
