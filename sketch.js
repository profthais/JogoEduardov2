
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine;
var world;
var PLAY = 1;
var END = 0;
var SERVE;
var gamestate;
var serve;
var backgroundImg1;
var backgroundImg2;
var score;
var canvas;
var power;

var invisibleGround
var key = 0
var delayInMilliseconds = 1000;

var fighter1;
var fighter1_gif;

var fighter2;

var power_animation;
var power_spriteData;
var power_spriteSheet;


function preload(){
    backgroundImg1 = loadImage("assets/MicrosoftTeams-image (2).png");
    backgroundImg2 = loadImage("assets/aaa.png");
    img = loadImage("assets/eduardo.png");
    img1 = loadImage("assets/edu12.png")
    fighter1_gif = loadImage("assets/animeBB.gif");
}

function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    fundo = createSprite(windowWidth/2, windowHeight/2);
    fundo.addImage(backgroundImg1);
    fighter1 = createSprite(70,windowHeight-200,20,300);
    fighter1.addImage(img);    
    fighter1.y = -900;
    fighter2 = createSprite(1200,windowHeight-200,20,300);
    fighter2.addImage(img1);
    fighter1.visible = false;
    fighter2.visible = false;
    backgroundImg2.visible = false;
    backgroundImg1.visible = true;
    gamestate = SERVE;
    invisibleGround = createSprite(800, windowHeight - 10, 2000, 100);
    invisibleGround.visible = false;
    
}


function draw() {
    background(180)
    if(gamestate === "serve"){
        fundo.addImage(backgroundImg1);
    }
    else{
        gameplay();
    }
    
    
          
          //adicionar gravidade
    fighter1.velocityY = fighter1.velocityY + 0.8
    fighter2.velocityY = fighter2.velocityY + 0.8

    fighter1.collide(invisibleGround);
    fighter2.collide(invisibleGround);

    


drawSprites();
}


function keyPressed(){
    if(keyCode===69){
        //backgroundImg1.visible = false;
        //backgroundImg2.visible = true;
        fundo.addImage(backgroundImg2);
        fighter1.visible = true;
        fighter2.visible = true;
        if(gamestate == "serve"){
            gamestate = "play";
        }
    }
}

function gameplay(){
    if(keyIsDown("68")){
        fighter1.x += 8; 
    } 
    if(keyIsDown("65")){
        fighter1.x -= 8;
    }
    if(keyIsDown("68") || keyIsDown("65")){
        fighter1.addImage(fighter1_gif);
    } else {
        fighter1.addImage(img);
    }
    //if(keyIsDown("87")){
       // fighter1.y -= 100
    //}
   
   
    if(keyIsDown("74")){
        fighter2.x -= 8;
    }
    if(keyIsDown("76")){
        fighter2.x += 8;
    }
    //if(keyIsDown("73")){
    //    fighter2.y -= 100;

   // }
    
      
       
}