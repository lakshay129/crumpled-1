class dustbin {
    constructor(x,y,height,width,angle){
        var options={
            isStatic:true
        }
      
    
    this.body=Bodies.rectangle(x,y,width,height,angle,options);
    this.width=width;
    this.height=height;
    Matter .Body.setAngle(this.body,angle);
    
    World.add(world,this.body);

    }
    display(){
     var pos=this.body.position;
     

        push();
        translate(pos.x,pos.y)
        rotate (this.angle)  ;    
        rectMode(CENTER);
        fill ("white");
        rect(0,0, this.width,this.height);
        pop();
    }

}