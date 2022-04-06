
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var rotator1, rotator2;
var ball1, ball2, ball3, ball4, ball5;
var block1, block2
var plane
var angle, angle2;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

    var rotator_options = {
        isStatic : true,
		    
	}
    var plane_options = {
		isStatic : true
	}
    var ball_options = {
		retitution : 0.5,
		friction : 0.02
	}
    var block_options = {
		isStatic : true
	}

    angle = 60;
	angle2 = 60;
	


	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos aqui.
    rotator1 = Bodies.rectangle(400,200,150,20,rotator_options);
	World.add(world,rotator1);

	rotator2 = Bodies.rectangle(400,200,20,150,rotator_options);
	World.add(world,rotator2);

	plane = Bodies.rectangle(400,700,800,50,plane_options);
	World.add(world,plane);

    block1 = Bodies.rectangle(150,350,150,20,block_options);
	World.add(world,block1);

	block2 = Bodies.rectangle(650,350,150,20,block_options);
	World.add(world,block2);
	
	ball1 = Bodies.circle(320,10,15,ball_options);
	World.add(world,ball1);
   
	ball2 = Bodies.circle(360,10,15,ball_options);
	World.add(world,ball2);
	
	ball3 = Bodies.circle(400,10,15,ball_options);
	World.add(world,ball3);
	
	ball4 = Bodies.circle(440,10,15,ball_options);
	World.add(world,ball4);
	
	ball5 = Bodies.circle(460,10,15,ball_options);
	World.add(world,ball5);




	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  ellipse(RADIUS);
  background("darkblue");
  
  drawSprites();
  
  rect(plane.position.x,plane.position.y,800,50);
  
  rect(block1.position.x,block1.position.y,150,20);
  rect(block2.position.x,block2.position.y,150,20);

  rect(rotator1.position.x,rotator1.position.y,150,20);
  rect(rotator2.position.x,rotator2.position.y,20,150);


  ellipse(ball1.position.x,ball1.position.y,20);
  ellipse(ball2.position.x,ball2.position.y,20);
  ellipse(ball3.position.x,ball3.position.y,20);
  ellipse(ball4.position.x,ball4.position.y,20); 
  ellipse(ball5.position.x,ball5.position.y,20); 
  
 
  Matter.Body.rotate(rotator1,angle);
   push(); 
   translate(rotator1.position.x,rotator1.position.y); 
   rotate(angle);
   rect(0,0,150,20);
   pop();
   angle +=13;
 
   Matter.Body.rotate(rotator2,angle2);
   push(); 
   translate(rotator2.position.x,rotator2.position.y); 
   rotate(angle2);
   rect(0,0,150,20);
   pop();
   angle2 +=10;

   
   


  

   
}
