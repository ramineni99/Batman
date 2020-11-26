var thunderImage1,thunderImage2,thunderImage3,thunderImage4;
var drops = [];
function preload(){
    thunderImage1=loadImage("images/thunderbolt/1.png");
    thunderImage2=loadImage("images/thunderbolt/2.png");
    thunderImage3=loadImage("images/thunderbolt/3.png");
    thunderImage4=loadImage("images/thunderbolt/4.png");

}
const Engine = Matter.Engine;

const World = Matter.World;
const Bodies = Matter.Bodies;
function setup(){
    engine = Engine.create();
    world = engine.world;

    createCanvas(400,700);
    umbrella = new Umbrella(200,500);

    //creating drops
    if(frameCount % 150 === 0){

        for(var i=0; i<100; i++){
            drops.push(new Drop(random(0,400), random(0,400)));
        }

    }
    
}

function draw(){
    background("black"); 
    spawnThunder();
 
    Engine.update(engine);
    umbrella.display();
    for(var i = 0; i<100; i++){
        drops[i].showDrop();
        drops[i].updateY()
        
    }
    drawSprites();
}   

function spawnThunder(){
    if(frameCount%80==0){

    var thunderSprite=createSprite(random(10,370),random(10,30),10,10);
    var rand = Math.round(random(1,4));
    switch(rand){
        case 1:thunderSprite.addImage("1",thunderImage1);
        break;
        case 2:thunderSprite.addImage("2",thunderImage2);
        break;
        case 3:thunderSprite.addImage("3",thunderImage3);
        break;
        case 4:thunderSprite.addImage("4",thunderImage4);
        break;
    }
    thunderSprite.scale=random(0.3,0.6);
    thunderSprite.lifeTime = 6;
}
}