
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var Hammer;
var Stone;
var Rubber;
var Iron;
var Sand1,Sand2,Sand3,Sand4,Sand5,Sand6,Sand7,Sand8,Sand9,Sand10;
function preload()
{
	
}

function setup() {
	createCanvas(800, 500);


	engine = Engine.create();
	world = engine.world;

	plane = new Plane(100,height,1400,20);

	Hammer = new hammer(10,100);
	Stone = new stone(700,320,70,70);
	Iron = new iron(300,300,50,50);
	Rubber = new rubber(120,50,40);

	Sand1 = new sand(505,450,5);
	Sand2 = new sand(510,450,5);
	Sand3 = new sand(515,450,5);
	Sand4 = new sand(520,450,5);
	Sand5 = new sand(525,450,5);
	Sand6 = new sand(515,445,5);
	Sand7 = new sand(520,445,5);
	Sand8 = new sand(525,445,5);
	Sand9 = new sand(530,445,5);
	Sand10 = new sand(535,445,5);

	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("skyblue");
  

plane.display();

Hammer.display();
Stone.display();
Iron.display();
Rubber.display();

Sand1.display();
Sand2.display();
Sand3.display();
Sand4.display();
Sand5.display();
Sand6.display();
Sand7.display();
Sand8.display();
Sand9.display();
Sand10.display();

  drawSprites();
 
}



