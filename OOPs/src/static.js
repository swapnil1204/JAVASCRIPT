class Drone{
    constructor(id, name){
        this.id = id
        this.name = name
    }

    fly(){
        console.log('Drone '+this.id+' is flying');
    }

    static getCompany(){
        console.log(' getCompany executes');
    }
}
Drone.max_Height = 2000;
let drone = new Drone('123','flyer');
let drone1 = new Drone('1234','flyer');
console.log(Drone.max_Height);//static variable exist on top of class
console.log(drone.max_Height);//undefined not in context of objects
drone.fly();
drone1.fly();

//drone.getCompany(); //is not function because static method is not in context of object
Drone.getCompany();
console.log("type of and instance of")
console.log(typeof Drone);
console.log(typeof drone);
console.log(drone instanceof Drone);