var a = {};
a.first = 1;
console.log(a.first);

var a = new Object;
a.first = 1;
console.log(a.first);

var a = Object.create(Object.prototype);
a.first = 1;
console.log(a.first);


var task ={
    title : 'my information',
    description : 'hello there!'
}

task.toString = function(){
    return task.title + "  "+task.description; 
}
console.log(task.toString());


var obj = {};
var param = 'new value';
obj[param] = 'new change';
console.log(obj[param]);