var canvas;
var backgroundImg;
var greetings = 1;
var play = 0;
var battle_backgroundImg;
var gameState="greetings";

var baby_alien1Img;
var baby_alien2Img;
var baby_alien3Img;
var baby_alien4Img;
var baby_alien5Img;
var baby_alien6Img;

var playerImg;
var bulletImg;
var evil_alienImg;


function preload(){
    backgroundImg = loadImage("background.webp");
    battle_backgroundImg = loadImage("battle_background.jpg");

    baby_alien1Img = loadImage("baby_alien1.png");
    baby_alien2Img = loadImage("baby_alien2.png");
    baby_alien3Img = loadImage("baby_alien3.png");
    baby_alien4Img = loadImage("baby_alien4.png");
    baby_alien5Img = loadImage("baby_alien5.png");
    baby_alien6Img = loadImage("baby_alien6.png");

    playerImg = loadImage("player.png");
    bulletImg = loadImage("bullet.png");
    evil_alienImg = loadImage("evil_alien.png");
}

function setup(){
    canvas = createCanvas(windowWidth, windowHeight);

    baby_alien1 = createSprite(250,650);
    baby_alien1.addImage(baby_alien1Img);
    baby_alien1.scale=0.2

    baby_alien2 = createSprite(450,650);
    baby_alien2.addImage(baby_alien2Img);
    baby_alien2.scale=0.2

    baby_alien3 = createSprite(650,650);
    baby_alien3.addImage(baby_alien3Img);
    baby_alien3.scale=0.2

    baby_alien4 = createSprite(850,650);
    baby_alien4.addImage(baby_alien4Img);
    baby_alien4.scale=0.2

    baby_alien5 = createSprite(1050,650);
    baby_alien5.addImage(baby_alien2Img);
    baby_alien5.scale=0.2

    baby_alien6 = createSprite(1250,650);
    baby_alien6.addImage(baby_alien6Img);
    baby_alien6.scale=0.2

    player = createSprite(750,500);
    player.addImage(playerImg);
    player.scale=0.09

    bulletGroup = new Group();
    evilAlienGroup = new Group();
}

function draw() {
    background(225);

    if(gameState=="greetings"){

        background(backgroundImg);

        fill("red");
        textSize(90);
        text("BATTLE ROYALE",450,180)

        fill("black");
        textSize(25);
        text("Hello Everyone! Welcome to BATTLE ROYALE!",450,300);
        text("You are an astronaut that has a job of protecting the baby aleins from the monsters.",450,350);
        text("Do your best to save them from the evil mosters!",450,400);
        text("If the evil aleins touched the baby aleins then the game will be over!",450,450);
        text("So player carefully! All the best!",450,500);

        fill("pink");
        textSize(30);
        text("Press Space Key to play!",450,600);
        
        if(keyWentDown("space")){
            gameState = "play";
        } 
    }

    if(gameState=="play"){
       background(battle_backgroundImg);
       drawSprites();

       //player.y=World.mouseY;
       player.x=World.mouseX;

      //console.log(World.mouseX)

      if (keyDown("space")) {
        createBullet();
      }

      evilAlien();
    }
   
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function createBullet() {
    var bullet = createSprite(100,100);
    bullet.addImage(bulletImg);
    bullet.y = 500;
    bullet.x = player.x;
    bullet.velocityY = -4;
    bullet.lifetime=100;
    bullet.scale = 0.4;
    bulletGroup.add(bullet);
}

function evilAlien() {
        var evilAlien = createSprite(200,0);
        evilAlien.x = Math.round(random(0,1350));
        evilAlien.addImage(evil_alienImg);
        evilAlien.velocityY = 4;
        evilAien.lifetime = 150;
        evilAlien.scale = 0.1;
        evilAlienGroup.add(evil_alien);
}


