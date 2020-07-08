var bg;
var cloudImage1,cloudImage2,cloudImage3;
var playerIdle,playerJump;
var player;
function preload(){
  bg = loadImage("BG.png");
  cloudImage1 = loadImage("cloud1.png");
  cloudImage2 = loadImage("cloud2.png");
  cloudImage3 = loadImage("cloud3.png");
  playerIdle = loadAnimation("idle_000.png");
  playerJump = loadAnimation("Jump_000.png","Jump_001.png","Jump_002.png","Jump_006.png","Jump_007.png","Jump_009.png");
}
function setup() {
  createCanvas(displayWidth,800);
 // createSprite(400, 200, 50, 50);
 ground = createSprite(displayWidth/2,790,displayWidth,10);
 player = createSprite(100,780);
 player.addAnimation("player1",playerIdle);
 player.addAnimation("player2",playerJump);
 player.collide(ground);
}

function draw() {
  background(bg);
  if (frameCount%250===0) {
    spawnClouds();
  } 
  if (keyWentDown(UP_ARROW)){
    player.changeAnimation("player2");
    player.velocityY = -12
  }
  player.velocityY += 0.8
  drawSprites();
}
function spawnClouds(){
  var cloud = createSprite(displayWidth,random(50,250));
  var rand = Math.round(random(1,3));
  switch(rand ){
    case 1:
      cloud.addImage(cloudImage1);
      break;

      case 2:
        cloud.addImage(cloudImage2);
        break;

        case 3:
          cloud.addImage(cloudImage3);
          break;





  }
  cloud.lifetime = 500;
  cloud.velocityX = -3;
  cloud.scale = 0.1
}