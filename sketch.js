var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var options={
isStatic:false,
restitution:0.3,
friction:0.5,
destiny:1.2

}

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	

}

function setup() {
	createCanvas(800, 700);
	//creating the circle and the crumpled paper
	ellipse(56, 46, 55, 55);
	Matter.Bodies.circle(56, 46, 6, [12], [14]);
	ellipse.shapeColor("pink");
   

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	World.add(world, packageBody);
	

	//Creating a Ground
	ground = new Ground(200,height,400,20)
	groundSprite=craeteSprite(width/2,650,width,10,);
    ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	groundSprite.shapeColor=color("yellow"); 

	//ceate a world
	World.add(world, ground);
	


   //create engine
   engine = Engine.create();
   Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  
  drawSprites();
 
}


function keyPressed() {
if (keyCode === UP_ARROW){
 matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});


}

}



