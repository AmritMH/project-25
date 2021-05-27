class paper
{
constructor(){

var options = {
        isStatic:false,
        restitution :0,
        friction :0,
        denstity :1.2

}
this.body = bodies.circle(x,y,radius,options)
this.width= -33
this.image = loadImage("images/paper.png");
world.add(world,this.body);
}

display(){
var pos = this.body.position;
var angle = this.body.angle;
fill("white")
rotate(angle)
imageMode(CENTER);
image(this.image.pos.x,pos.y,33,33);
}

}