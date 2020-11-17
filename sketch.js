 
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
 
function preload()
{
  
}
var bob1,bob2,bob3,bob4,bob5,roof,chain1,chain2,chain3,chain4,chain5;
function setup() {
   createCanvas(1000, 700);
 
 
   engine = Engine.create();
   world = engine.world;
 
  
   //Create the Bodies Here.
   roof = new Roof(600,200,300,20);
 
 
var bobStartingX= 600
var bobStartingY= 200
var bobDiameter=40
 
   bob1 = new Bob(bobStartingX-bobDiameter*2,bobStartingY+350,bobDiameter)
   bob2 = new Bob(bobStartingX-bobDiameter,bobStartingY+350,bobDiameter)
   bob3 = new Bob(bobStartingX,bobStartingY+350,bobDiameter)
   bob4 = new Bob(bobStartingX+bobDiameter,bobStartingY+350,bobDiameter)
   bob5 = new Bob(bobStartingX+bobDiameter*2,bobStartingY+350,bobDiameter)
 
  
   chain1 = new chain(bob1.body,roof.body,-80,0)
   chain2 = new chain(bob2.body,roof.body,-40,0)
   chain3 = new chain(bob3.body,roof.body,0,0)
   chain4 = new chain(bob4.body,roof.body,+40,0)
   chain5 = new chain(bob5.body,roof.body,+80,0)
  
 
 
   Engine.run(engine);
 }
 
 
function draw() {
   background('pink');
 bob1.display();
 bob2.display();
 bob3.display();
 bob4.display();
 bob5.display();
 
chain1.display();
chain2.display();
chain3.display();
chain4.display();
chain5.display();
 
 roof.display();
  drawSprites();
}
 
function keyPressed() {
   if (keyCode === UP_ARROW) {
      Body.applyForce(bob1.body,bob1.body.position,{x:-80,y:-100})
    
    }
  }
 
 

