const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

const Constraint = Matter.Constraint;

var engine,world;

function preload () {

polygonImg= loadImage("polygon.png");

}

function setup() {
  createCanvas(1600,800);
  //createSprite(400, 200, 50, 50);
 engine = Engine.create();
 world = engine.world;

  ground = new Ground(800,800,1600,20);

  ground1 = new Ground (800,400,200,10);

  box1 = new Box(730,235,30,40);
  box2 = new Box(760,235,30,40);
  box3 = new Box(790,235,30,40);
  box4 = new Box(820,235,30,40);
  box5 = new Box(850,235,30,40);

  box6 = new Box(730,195,30,40);
  box7 = new Box(760,195,30,40);
  box8 = new Box(790,195,30,40);

  box9 = new Box(820,155,30,40);

  polygon = Bodies.circle(400,200,20);

  World.add(world,polygon);

  slingShot = new SlingShot(this.polygon,{x:400,y:200});

}

function draw() {
  background(255,255,255);  
  drawSprites();

  Engine.update(engine);


  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  ground.display();
  ground1.display();
  push();
  imageMode(CENTER);
  image(polygonImg,polygon.position.x,polygon.position.y,40,40);

  pop();


}

function mouseDragged(){
  Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingShot.fly();
}

function keyPressed(){
  if(keyCode === 32){
     slingShot.attach(this.polygon);
  }
}