
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
roof1=new Roof(width/2,20,width,10)
bob1=new Bob(50,150,40)
bob2=new Bob(100,150,40)
bob3=new Bob(150,150,40)
bob4=new Bob(200,150,40)
bob5=new Bob(250,150,40)

sling1=new SlingShot(bob1.body,{x:200,y:20})
sling2=new SlingShot(bob2.body,{x:200,y:20})
sling3=new SlingShot(bob3.body,{x:200,y:20})
sling4=new SlingShot(bob4.body,{x:200,y:20})
sling5=new SlingShot(bob5.body,{x:200,y:20})

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("black");

  roof1.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  sling1.display();
  sling2.display();
  sling3.display();
  sling4.display();
  sling5.display();


  drawSprites();
 
}



