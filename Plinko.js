class Plinko{
    constructor(x,y) {
      var options = {
          isStatic: true
      }
      this.body = Matter.Bodies.circle(x,y,10,options);
      this.width = 20;
      this.height = 20;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      ellipseMode(CENTER);
      fill("white");
      ellipse(pos.x, pos.y, this.width, this.height);
    }
  };