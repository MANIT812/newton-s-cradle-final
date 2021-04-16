
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
var roof1,bob1,bob2,bob3,bob4,bob5;
var string1,string2,string3,string4,string5;

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;
	//Create the Bodies Here.
    roof1= new Roof(400,250,230,20);
	bob1=new Bob(320,575,40);
	bob2=new Bob(360,575,40);
	bob3=new Bob(400,575,40);
	bob4=new Bob(440,575,40);
	bob5=new Bob(480,575,40);
	string1 = new Rope(bob1.body,roof1.body,-80,0);
  string2 = new Rope(bob2.body,roof1.body,-40,0);
  string3 = new Rope(bob3.body,roof1.body,0,0);
  string4 = new Rope(bob4.body,roof1.body,40,0);
  string5 = new Rope(bob5.body,roof1.body,80,0);
	Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background("pink");
  roof1.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  string1.display();
  string2.display();
  string3.display();
  string4.display();
  string5.display();
}
function keyPressed(){
  if(keyCode===32){
      Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-70,y:-70});
  }
}


