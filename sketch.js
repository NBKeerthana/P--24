
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var ground,paperBall;
var bottomBin, rightBin, leftBin;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	ground=Bodies.rectangle(400,680,800,20);
	World.add(world,ground);


	//Create the Bodies Here.
	paperBall=new Paper (150,250,15,15);
	bottomBin=new Dustbin(500,662.5,120,15);
	rightBin=new Dustbin(565,628,15,70);
	leftBin=new Dustbin(435,628,15,70);		

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  rect(400,680,800,20);

  paperBall.display();
  bottomBin.display();
  rightBin.display();
  leftBin.display();
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paperBall.body,paperBall.body.position,{x:85,y:-85});

	}
}

