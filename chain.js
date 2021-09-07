class Chain{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.06,
            length: 20
        }
        this.pointB=pointB
        this.chain = Constraint.create(options);
        World.add(world, this.chain);
    }

    disconnect(){
        this.chain.bodyA=null
    }

    display(){
        if(this.chain.bodyA){
        var pointA = this.chain.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
       //color(rgb(255,255,255))
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
}
}