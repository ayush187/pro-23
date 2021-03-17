
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine,world;
var stone1
var hammer1
var rubberball1
var ground1
var sand1,sand2
function setup() {
	createCanvas(800, 700);
    engine = Engine.create();
	world = engine.world;
    ground1 = new Ground(200,690,1200,20)
 hammer1 = new Hammer(200,500)
 rubberball1 = new RubberBall(500,680)
stone1 = new Stone(300,680)



	
  
}


function draw() {
  background("white");
Engine.update(engine) 
rectMode(CENTER);
 ground1.display();
 hammer1.display();
 rubberball1.display();
 stone1.display();
}



