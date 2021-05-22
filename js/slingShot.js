class slingShot{
	constructor(bodyA,pointB)
	{
		var options={
			bodyA:bodyA,
            pointB:pointB,
            stiffness:0.04,
            length:1,
			}
		
			
        this.body=Constraint.create(options);

        this.bodyA=bodyA;
		this.pointB=pointB;

        World.add(world,this.body)
	}

	display()
	{

       if(this.body.bodyA){

          
		line(this.bodyA.position.x,this.bodyA.position.y,this.pointB.x,this.pointB.y);
        


	   }
}
 fly(){

this.body.bodyA=null;

 }




 attatch(mango){

    this.body.bodyA=mango;

 }

}