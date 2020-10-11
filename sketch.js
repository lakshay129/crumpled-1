
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

 var rect1,rect2,rect3;
 var ground,paperball;



function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;


	//Create the Bodies Here.

	ground=Bodies.rectangle(400,650,850,20,{isStatic:true});
	World.add(world,ground);

	
	
	rect1=new dustbin(580,550,100,20,PI);
	rect2=new dustbin(600,550,100,20,PI);
	rect3=new dustbin(680,550,100,20,PI);
	
	paperball=new ball(200,635,20);


	Engine.run(engine);
  
}


function draw() {
  background("black");
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,850,20);

  paperball.display();

 
  
  rect1.display();
  rect2.display();
  rect3.display();
 
 
  drawSprites();
 
}

function keyPressed (){
	if(keyCode===UP_ARROW){
	 Matter.Body.applyForce(paperball.body,paperball.body.position,{x:85,y:155});
	}
}



