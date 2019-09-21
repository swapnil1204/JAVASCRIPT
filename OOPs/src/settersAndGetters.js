class Drone {
    constructor(id) {
        this._id = id;
    }
    get id(){
        return this._id;
    }

    set id(value){
        this._id = value;
    }
}

let drone = new Drone('12345');
console.log('drone id: '+ drone.id);//although id() is a function we can access 
//it as state/property as we dont require ()

drone.id = 'ABCD!@#$%^&'; //THIS SET THE VALUE if we print then
console.log('drone id: '+ drone.id);