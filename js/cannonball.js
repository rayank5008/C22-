class CannonBall{
constructor(x,y){
this.x=x 
this.y=y
this.r=30
var options={
    isStatic:true
}
this.body=Bodies.circle(x,y,this.r,options)
//this.image=loadImage()
World.add(world,this.body)
}
display(){
ellipse(this.body.position.x,this.body.position.y,this.r,this.r)
}
}