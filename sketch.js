const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var rope,fruit,ground;
var fruit_con;

var om,om1,om2,ranatriste,ranafeliz;

var sad;
var saludo;
var comiendo;

var bg_img;
var candy;
var rana;

var button;
var croac;

function preload()
{
  bg_img = loadImage('background.png');
  candy = loadImage('candy.png');
  rana = loadImage('rana.png');
  om = loadAnimation("om1.png","om2.png");
  sad = loadAnimation("ranatriste.png","ranafeliz.png");
  saludo = loadAnimation("ranasaludo.png","ranasaludo.png");

  om.playing = true;
  saludo.playing = true;
  sad.playing = true;
}

function setup() 
{
  createCanvas(500,700);
  frameRate(80);

  engine = Engine.create();
  world = engine.world;
  
  om.frameDelay = 20;
  sad.frameDelay = 20;
  saludo.frameDelay = 20;
  croac = createSprite(200,620,100,100);
  croac.addImage(rana);
  croac.scale = 0.2;

  //btn 1
  button = createImg('cut_button.png');
  button.position(200,30);
  button.size(50,50);
  button.mouseClicked(drop);

  
  rope = new Rope(8,{x:220,y:30});
  ground = new Ground(200,690,600,20);
  

  fruit = Bodies.circle(300,300,20);
  Matter.Composite.add(rope.body,fruit);

  fruit_con = new Link(rope,fruit);

  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)
  
}

function draw() 
{
  background(51);
  image(bg_img,0,0,displayWidth+80,displayHeight);

  push();
  imageMode(CENTER);
  if(fruit!=null){
    image(candy,fruit.position.x,fruit.position.y,70,70);
  }
  pop();

  rope.show();

if(candy!=null){
 image(candy.position.x,candy.position.y,60,60); 
}

  Engine.update(engine);
  ground.show();
  drawSprites();
   
}

function drop()
{
  rope.break();
  fruit_con.detach();
  fruit_con = null; 
}

