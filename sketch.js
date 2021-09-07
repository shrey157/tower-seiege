const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body=Matter.Body
const Constraint =Matter.Constraint

var engine, world;
var backgroundImg, ground ,ground2,ground3;

function setup() {
    var canvas = createCanvas(1200, 600);
    engine = Engine.create();
    world = engine.world;

ground=new Ground(600,390,width,10)
ground2=new Ground(800,300,130,10)
ground3=new Ground(390,150,100,10)

//small block level 1
box11=new Box(820,190,20,20)
box12=new Box(800,190,20,20)
box13=new Box(840,190,20,20)    //  for (box=760,box<830,box=box+20){}
box14=new Box(780,190,20,20)
box14=new Box(780,190,20,20)
box15=new Box(760,190,20,20)
//level 2
box16=new Box(820,170,20,20)
box17=new Box(800,170,20,20)

box19=new Box(780,170,20,20)
box20=new Box(780,170,20,20)

//blocks big -level 1
box1=new Box(380,120,20,20)
box2=new Box(400,120,20,20)
box3=new Box(360,120,20,20)      
box4=new Box(420,120,20,20)
// level 2
box5=new Box(370,100,20,20)
box6=new Box(410,100,20,20)      
box7=new Box(390,100,20,20)
// level 3
box8=new Box(380,70,20,20)    
box9=new Box(400,70,20,20)    
// level 4
box10=new Box(390,40,23,23)
polygon=new Polygon(50,170,30,30)
rope = new Chain (polygon.body, { x: 50, y: 163 })
}
function draw() {
    background(0);
    Engine.update(engine);
   
    ground.display()
    ground3.display()
    ground2.display()
   fill(rgb(247, 56, 22))
    box1.display()
    box2.display()
    box3.display()
    box4.display()
    box5.display()
    fill('yellow')
    box6.display()
    box7.display()
    box8.display()
    fill(rgb(10, 13, 97))
    box9.display()
    box10.display()
    
    //small blocks L1
    fill('yellow')
    box11.display()
    box12.display()
    box13.display()
    box14.display()
    box15.display()
    //L2
    fill('red')
    box16.display()
    box17.display()
    //no box 18 exists
    box19.display()
    box20.display()

    polygon.display()
    rope.display()
}

function mouseDragged() {
    Matter.Body.setPosition(polygon.body, { x: mouseX, y: mouseY })
}
function mouseReleased(){
  rope.disconnect() 
}