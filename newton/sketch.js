const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
//Create multiple bobs, mulitple ropes varibale here
var bob1,bob2,bob3,bob4,bob5;
var rope1,rope2,rope3,rope4,rope5;
function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true			
	}

	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);
	bob1 = new bob(320,575,40)
	bob2 = new bob(360,575,40)
	bob3 = new bob(400,575,40)
	bob4 = new bob(440,575,40)
	bob5 = new bob(480,575,40)

	rope1=new rope(bob1.body,this.roof,-80)
	rope2=new rope(bob2.body,this.roof,-40)
	rope3=new rope(bob3.body,this.roof,0)
	rope4=new rope(bob4.body,this.roof,40)
	rope5=new rope(bob5.body,this.roof,80)

	Engine.run(engine);

	
  
}

function draw() {
  rectMode(CENTER);
  background("#99004d");

  rect(roof.position.x,roof.position.y,230,20);

  //call display() to show ropes here
rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  bob1.display();
  bob2.display();
  
  bob3.display();
  bob4.display();
  bob5.display();
  //create ellipse shape for multiple bobs here

 
}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
function keyPressed(){
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-45});
	}


}