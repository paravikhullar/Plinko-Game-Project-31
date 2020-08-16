const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight = 300;


function setup() {
  createCanvas(480,800);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(240,800,480,10);

  //creating divisions
  for(var k = 0; k<=480; k=k+80){

    divisions.push(new Divisions(k, 800-divisionHeight/2, 10, divisionHeight));
    //divisions[i].display();
  }  
  // creating plinko line 1
  for(var j= 40; j<= 480; j=j+50){
    plinkos.push(new Plinko(j,75));
  }
   //creating plinko line 2
   for(var j = 15; j<= 470; j=j+50){
    plinkos.push(new Plinko(j,175));
  }
  //creating plinko line 3
  for(var j = 40; j<= 480; j=j+50){
    plinkos.push(new Plinko(j,275));
  }
  //creating plinko line 4
  for(var j = 15; j<= 470; j=j+50){
    plinkos.push(new Plinko(j,375));
  }
  
}

function draw() {
  background(0); 
  Engine.update(engine); 

  ground.display();

  //display divisions
  for(var i = 0; i<divisions.length; i++){
    divisions[i].display();
  }

//display plinkos
  for(var i = 0; i<plinkos.length; i++){
    plinkos[i].display();
  }

  //creating particles
  if(frameCount%60===0){
    particles.push(new Particle(random(480/2-10 , 480/2+10), 10,10));
  }
  //display partciles
  for(var j = 0; j<particles.length; j++){
    particles[j].display();
  }

  
  
  
  drawSprites();
}