const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var bgImg,bg;
var character;
var snow=[];
var inviground;

function preload(){
  backgroundImage=loadImage("snow2.jpg");
}


function setup() {
  createCanvas(800,400);
  Engine = Engine.create()
  World = Engine.world;
  inviground=createSprite(200,285,50,15);
  inviground.visible = false;
  bg = createSprite(200,20,30,30);
  bg.addImage("Img",bgImg);
  bg.scale=1.0;
  character=createSprite(50,360,20,40);
  chareacter.shapeColor = "darkblue";


 
}

function draw() {
  background(0); 
  Engine.update(engine); 
  bg.velocityX=-2;
  if(bg.x<0){
    bg.x = bg.width/2;

  }
  drawSprites();
  if(framecount%2===0){
    snow.push(new snow(random(width/2-300,width/2+500),10,10));
    snow.scale=1.9;
  }
  for(var j = 0; j < snow.length; j++ ){
    snow[j].display();
  }
  
}