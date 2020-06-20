const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight = 300;

var particle;
var score = 0;
var turn = 0;

var gameState = "start";

var a;

function setup(){
    createCanvas(480,800);
    engine = Engine.create();
    world = engine.world;

    a = new Ground(width/2,height,width,20);

    for(var k = 0; k <= width; k = k + 80){
        divisions.push(new Divisions(k, height - divisionHeight/2, 10, divisionHeight));
    }

    for (var j = 35; j <=width; j=j+50){
        plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50){
        plinkos.push(new Plinko(j, 125));
    }

    for (var j = 35; j <=width; j=j+50){
        plinkos.push(new Plinko(j,175));
    }

    for (var j = 50; j <=width-10; j=j+50){
        plinkos.push(new Plinko(j,225));
    }

    for (var j = 35; j <=width; j=j+50){
        plinkos.push(new Plinko(j,275));
    }

    for (var j = 50; j <=width-10; j=j+50){
        plinkos.push(new Plinko(j,325));
    }

    for (var j = 35; j <=width; j=j+50){
        plinkos.push(new Plinko(j,375));
    }

    for (var j = 50; j <=width-10; j=j+50){
        plinkos.push(new Plinko(j,425));
    }
}

function draw(){
  background(0);
  
  noStroke();
  textSize(25);
  fill("white");
  text("Score : "+score,20,50);
  text("Turn : "+turn,360,50);

  text("200",100,650);
  text("200",340,650);
  text("100",180,650);
  text("100",260,650);
  text("400",20,650);
  text("400",420,650);

  Engine.update(engine);
 
    
  a.display();

  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }

    for (var i = 0; i < plinkos.length; i++) {
        plinkos[i].display();
    }

    //if(frameCount%40===0){
      //  particles.push(new Particles(random(10,370), 10,10));
   // }

    for (var m = 0; m < particles.length; m++) {
        particles[m].display();
    }

    if(particle != null){
        particle.display();

        if(particle.body.position.y > 760){
            if(particle.body.position.x > 180 && particle.body.position.x < 300){
                score = score + 100;
                particle = null;
            }
        }
    }

    if(particle != null){
        particle.display();

        if(particle.body.position.y > 760){
            if(particle.body.position.x > 60 && particle.body.position.x < 180 || particle.body.position.x > 300 && particle.body.position.x < 360 ){
                score = score + 200;
                particle = null;
            }
        }
    }

    if(particle != null){
        particle.display();
        if(particle.body.position.y > 760){
            if(particle.body.position.x > 300 && particle.body.position.x < 360){
                score = score + 200;
                particle = null;
            }
        }
    }

    if(particle != null){
        particle.display();
        if(particle.body.position.y > 760){
            if(particle.body.position.x > 60 || particle.body.position.x > 0){
                score = score + 400;
                particle = null;
            }
        }
    }

    if(particle != null){
        particle.display();
        if(particle.body.position.y > 760){
            if(particle.body.position.x > 420 || particle.body.position.x < 480){
                score = score + 400;
                particle = null;
            }
        }
    }

    if(turn > 4){
        gameState = "end"
        text("Game Over",200,50)
    }

}



function mousePressed(){
  if(gameState !== "end"){
    turn = turn + 1;
    particle = new Particles(mouseX,10,10);
  }
}