class Bob {
    constructor(x,y,radius){
      var options={
          density:1,
          frictionAir:0.005,
          isStatic:false
      }
      this.radius=radius;
      this.body=Bodies.circle(x,y,this.radius/2,options);
      World.add(world,this.body);
    }
    display(){
       var pos =this.body.position;
       var angle=this.body.angle;
          push();
          translate(pos.x,pos.y);
          rotate(angle);
          fill("yellow");
          ellipseMode(CENTER);
          ellipse(0,0,this.radius,this.radius);
          pop();
    }
}