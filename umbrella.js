class Umbrella{
 constructor(x,y){
  var options = {
    isStatic:true
  }
     this.boy = Bodies.circle(x,y,10,options)
     this.radius = 10
     this.image = loadImage("walking_1.png")
     World.add(world, this.boy);
 }
 display(){
    var pos = this.boy.position;
    push()
    translate(pos.x,pos.y);
    imageMode(CENTER);
    image(this.image,1,1,350,350);
    pop();
  }
}