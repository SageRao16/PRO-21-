
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball ;
var engine,world;
var ground

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
    
	ground=new Ground(400,690,800,20)
	right

	//Create the Bodies Here.
    ball = 

	Engine.run(engine); 

	var ball_option = {
		isStatic:false,
        restitution : 0.3,
        friction : 0,
		density : 0.1
	}	
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



