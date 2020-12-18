const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var maxDrops=100;

var drops=[]

var boy, thunder1, thunder2, thunder3, thunder4;

var thunder;

function preload(){
  thunder1=loadImage("1.png")
  thunder2=loadImage("2.png")
  thunder3=loadImage("3.png")
  thunder4=loadImage("4.png")
}

function setup(){
   createCanvas(500,800);

   engine = Engine.create();
   world = engine.world;

   if(frameCount%60===0){
       for(var i = 0; i<maxDrops; i++){
        drops.push(new Drop(random(0,500), random(0,500)))
       }
   }

   boy = new Umbrella(250,655) 
}

function draw(){
    background(0)
    Engine.update(engine)
    
    for(var i = 0; i<maxDrops; i++){
      drops[i].display();
      drops[i].updateY();
    }

    if(frameCount%60===0){
      var rand = Math.round(random(1,4))
      switch(rand){
        case 1: thunder=createSprite(380,70,5,5) 
        thunder.addImage(thunder1);
        thunder.scale=0.4
        break;
        case 2: thunder=createSprite(70,50)
        thunder.addImage(thunder2);
        thunder.scale=0.35
        break;
        case 3: thunder=createSprite(210,70)
        thunder.addImage(thunder3);
        thunder.scale=0.35
        break;
        case 4: thunder=createSprite(290,30)
        thunder.addImage(thunder4);
        thunder.scale=0.38
        break;
        default: break;
      }
    }

    boy.display();

    drawSprites();
}   

