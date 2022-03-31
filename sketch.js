
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);

	var ball_options = {
		isStatic: true,
		restitution: 0.3,
		friction: 0,
		density:1.2
	}

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(width/2, 670, width, 20)
	leftSide = new Ground(1100, 600, 20, 120)
	rightSide = new Ground(900, 600, 20, 120);
	ball = Matter.Bodies.circle(600,350,150)

	Engine.run(engine);
  
}


function draw() {
	background(0);
	rectMode(CENTER);
	fill("pink");
	ellipseMode(RADIUS);
	ellipse(ball.x, ball.y, 150, 150)
	leftSide.display();
	rightSide.display()	
	ground.display()
	drawSprites();
 
}



