class Drop{
    constructor(x,y){
        var options={
            'friction':0.001,
            'restitution':0.1
        }
        this.body=Bodies.circle(x,y,10,options);
        this.r=5;

        World.add(world,this.body);
    }

    update(){
        if(this.body.position.y>height){
            Matter.Body.setPosition(this.body,{x:random(0,400),y:random(0,400)});
        }
    }
    showDrops(){
        var pos=this.body.position;
        fill(rgb(0,216,300));
        ellipseMode(CENTER);
        ellipse(pos.x,pos.y,this.r,this.r);
    }
}