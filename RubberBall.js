class RubberBall {
    constructor(x, y) {
      var options = {
          'restitution':0.8,
          'friction':1.0,
          'density':1.0
      }
      this.body = Bodies.circle(x, y,40, options);
      
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
     // ellipseMode(CENTER);
      strokeWeight(10);
      stroke("blue")
      fill("blue");
      ellipse(0, 0, 40);
      pop();
    }
  };
  