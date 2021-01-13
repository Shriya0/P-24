var crumpled_ballSprite,crumpled_ballImage
var dustbinSprite 
var groundSprite

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var options={
	isStatic : false,
	restitution : 0.3,
	friction : 0.5,
	distance : 1.2

}

function preload()
{
	crumpled_ballImage = loadImage("ball.png")
	
}

function setup() {
	createCanvas(800, 700);
   
	groundSprite = createSprite(400,670,800,10)
	groundSprite.shapeColor = "blue"

	crumpled_ballSprite = createSprite(100,630)
	crumpled_ballSprite.addImage(crumpled_ballImage)
	crumpled_ballSprite.scale = 0.1


	dustbinSprite1 = createSprite(650,655,150,20)
	dustbinSprite1.shapeColor = "yellow"
	dustbinSprite = createSprite(570,590,20,150)
	dustbinSprite.shapeColor = "yellow"
	dustbinSprite2 = createSprite(730,590,20,150)
    dustbinSprite2.shapeColor = "yellow"

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightgreen");
  

  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
	
		Matter.Body.applyForce(paperObject.body,paperObject.body.position ,{x:85,y:-85})
	}

}



