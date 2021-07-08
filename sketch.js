function preload() {
  bg= loadImage("images/iss.png")
  sleep = loadAnimation("images/sleep.png")
  brush = loadAnimation("images/brush.png")
  gym = loadAnimation("images/gym1.png",                ) 
  eat = loadAnimation("images/eat1.png")
  drink = loadAnimation("images/drink1.png")
  move = loadAnimation("images/move.png")


}


function setup() {
  createCanvas(800,400);

  astronaut = createSprite(300,230);
  astronaut.addAnimation("sleeping", sleep);
  astronaut.scale = 0.1;

  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255); 

  image(bg, 0, 0, width, height);
  
    if(keyDown("UP_ARROW")) {
      astronaut.addAnimation("brushing",brush);
      astronaut.changeAnimation("brushing");
      astronaut.y = 200;
      astronaut.velocityX = 0;
      astronaut.velocityY = 0;
    }

    if(keyDown("DOWN_ARROW")) {
      astronaut.addAnimation("exercising",gym);
      astronaut.changeAnimation("exercising");
      astronaut.y = 200;
      astronaut.velocityX = 0;
      astronaut.velocityY = 0;
    }
    if(keyDown("RIGHT_ARROW")) {
      astronaut.addAnimation("eating",eat);
      astronaut.changeAnimation("eating");
      astronaut.y = 200;
      astronaut.velocityX = 0;
      astronaut.velocityY = 0;
    }
    
    if(keyDown("LEFT_ARROW")){
      astronaut.addAnimation("drinking",drink);
      astronaut.changeAnimation("drinking");
      astronaut.y = 200;
      astronaut.velocityX = 0;
      astronaut.velocityY = 0;
    }

    if(keyDown("M")){
      astronaut.addAnimation("moving",move);
      astronaut.changeAnimation("moving");
      astronaut.y = 200;
      astronaut.velocityX = 0;
      astronaut.velocityY = 0;
    }



    

  drawSprites();
}