let myFont;
let x;
let array = [img1, img2, img3, img4, img5. img6, img7, img8]; //images


function preload(){
myFont = loadFont("Font.otf");
img1 = loadImage("smile face.png");
img2 = loadImage("vase.png");
img3 = loadImage("Harvey Ball.jpeg");
img4 = loadImage("PEACE AND SMILEY.png");
img5 = loadImage("Smileystamp.png");
img6 = loadImage("ring.png");
img7 = loadImage("Lego Head.png");
img8 = loadImage("smile-toilet-.jpeg");
}




function setup() {
  createCanvas(windowWidth, 4300);
  x = width;

}

function draw() {
  background("#EADDCA");
  

 
  
  // Bold Moving Font
  textFont(myFont);
  textSize(800);
  fill("#FF160C");
  x -= 10;
  if (x < -textWidth(text)) {
    x = width;
  }
  text("THE HISTORY OF A SMILEY FACE", x, 700);

  image(img3, 0, 1750, 1500, 900);// old man
  image(img1, 50, 300);// smile face


  //Bigger title text
  textFont(myFont);
  textSize(100);
  fill(255);
  textLeading(80);
  text("THE WORLD'S\nOLDEST EMOJI",50, 900);
  textAlign(LEFT); 

  
  image(img2, 50, 1000);// Vase

  // Body text
  fill(255);
  textSize(20);
  textLeading(20);
  text("A 3,700-year-old jug featuring the oldest recorded smile\nwas discovered by archaeologists from the University of Bologna in 2017.\nThe jug belonged to the Hittites, an ancient culture that ruled over\npresent-day Turkeyand Syria during biblical times.", 550, 1300)
  
  //Body text
  fill(255);
  textSize(20);
  textLeading(20);
  text("Harvey Ross Ball is considered to be the creator of the iconic smiley face.\nIn a mere 10 minutes and for just $45, he brought forth a pop culture icon.\nHis design, a simple yellow circular face with black oval eyes and a broad\ngrin, was a instant success. It was initially distributed on posters and\nbuttons as part of a friendship campaign to employees. The image soon gained\nwidespread popularity and was featured on a variety of items, ranging from\nt-shirts to stickers.", 520, 2100)
  
  image(img4, -330, 2300, 800, 1000);// peace and smiley

  image(img6, 100, 1900, 2400, 3000);// ring

  //Body text
  fill(255);
  textSize(20);
  textLeading(20);
  text("The Spanish brothers from Philadelphia created the smiley face symbol by\nadjusting Harvey Ball's design and adding the slogan Have a Happy Day.\nThey copyrighted it in 1971 and sold 50 million smiley buttons by the end of 1972,\ngenerating $1.5 million in revenue. The brothers took credit for the design on\nthe TV show What's My Line in 1971, despite acknowledging it was Harvey's\noriginal creation.", 520, 2900)

  image(img5, -330, 2300, 800, 1000);//smiley stamp

  image(img8, 0, 3460, 1500, 900);//toilet image

  //Body text
  fill(255);
  textSize(20);
  textLeading(20);
  text("The iconic smiling faces in history, ranging from\nthe Mona Lisa to the Joker, number in the hundreds\nif not thousands. Yet, none is more recognizable\nor profitable than the cheerful yellow grin.\nThe Smiley Company, now a global licensing giant\nworth over $500 million annually, has had a tumultuous\njourney - starting as an uplifting symbol for an insurance\nfirm and facing multi-million dollar lawsuits.", 50,4100)


}