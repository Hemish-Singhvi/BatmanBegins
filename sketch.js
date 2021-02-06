const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Body=Matter.Body;
const Constraint=Matter.Constraint;
const MouseConstraint=Matter.MouseConstraint;

var engine,world;
var drops,umbrella;
var walking_man;
var maxDrops=100;
var thunderbolt;
var drops=[];
var num;
var thunderframe;

var thunderbolt_img1,thunderbolt_img2,thunderbolt_img3,thunderbolt_img4;

function preload(){

    walking_man = loadAnimation("images/Walking Frame/walking_1.png", "images/Walking Frame/walking_2.png", "images/Walking Frame/walking_3.png", "images/Walking Frame/walking_4.png", "images/Walking Frame/walking_5.png", "images/Walking Frame/walking_6.png", "images/Walking Frame/walking_7.png", "images/Walking Frame/walking_8.png")

    thunderbolt_img1 = loadImage("images/thunderbolt/1.png");
    thunderbolt_img2 = loadImage("images/thunderbolt/2.png");
    thunderbolt_img3 = loadImage("images/thunderbolt/3.png");
    thunderbolt_img4 = loadImage("images/thunderbolt/4.png");
    
}

function setup(){
    createCanvas(450,700);

    engine = Engine.create();  
    world = engine.world;
        
    umbrella = new Umbrella(200,500);
    if(frameCount % 150 === 0){
        for(i=0;i<maxDrops;i++){
            drops.push(new Drop(random(0,400),random(0,400)));
        }
    }
    man = createSprite(200, 550, 100, 350);
   man.addAnimation("walking", walking_man);
   man.scale = 0.4;
   
}

function draw(){
    Engine.update(engine);
    background(0);
    if(frameCount % 80 === 0){
        thunderframe=frameCount;  
        thunderbolt = createSprite(random(10,370),random(10,30),10,10);
        num = Math.round(random(1,4)); 
        switch(num){
            case 1: thunderbolt.addImage(thunderbolt_img1);
                break;
            case 2: thunderbolt.addImage(thunderbolt_img2);
                break;
            case 3: thunderbolt.addImage(thunderbolt_img3);
                break;
            case 4: thunderbolt.addImage(thunderbolt_img4);
                break;
            default: break;
        }
        thunderbolt.scale=random(0.3,0.6);
    }

    if(thunderframe+10===frameCount && thunderbolt){
        thunderbolt.destroy();
    }


    for(var i=0;i<maxDrops;i++){
        drops[i].showDrops();
        drops[i].update();
    }
    umbrella.display();
   
     drawSprites();   
}   