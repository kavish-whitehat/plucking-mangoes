var boyIMG,boySprite,mangoIMG,mangoSprite,stoneIMG,stoneSprite,treeIMG,treeSprite;
var stoneBody,mangoBody,tree;    
var world,slingshot ;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    tree = new Tree (920,320,100,100);
    stone1 = new Stone(80, 350);
	mango6 = new Mango(100, 220);

	mango5 = new Mango(800, 220);
	mango4 = new Mango(810, 220);
    mango3 = new Mango(820, 220);

    mango2 =  new Mango(810,180);

    mango1 = new Mango(810,160);

    boy = new Boy(100,100);

    //log6 = new Log(230,180,80, PI/2);
   slingshot = new Slingshot(stone.body,{x:200,y:100});
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    strokeWeight(4);
    tree.display();
    mango1.display();
    mango2.display();
    mango3.display();
    mango4.display();

   mango5.display();
    mango6.display();
    stone1.display();
    boy.display();
   // log6.display();
    slingshot.display();    
}

function mouseDragged(){
Matter.Body.setPosition(stone1.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
    slingshot.fly();
}



