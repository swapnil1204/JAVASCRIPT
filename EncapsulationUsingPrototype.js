// var Task = function(name){
//     this.name = name;
//     this.completed = false;

//     this.complete = function(name){
//         console.log('completing task of :'+this.name);
//         this.completed = true;
//     }

//     this.save = function(name){
//         console.log('saving task of :'+this.name);
//         this.saved = true;
//     }
// }
var Task = function(name){
         this.name = name;
         this.completed = false;
        }

Task.prototype.complete = function(name){
    console.log('completing task of :'+this.name);
    this.completed = true;
}      
Task.prototype.save = function(name){
    console.log('saving task of :'+this.name);
    this.completed = true;
}

var task1 = new Task('reading book');
var task2 = new Task('reading book');
var task3 = new Task('reading book');
task1.complete();
task2.complete();
task2.save();
task3.complete();
task3.save();

/*
*the number of objects created the number of properties will created but copy of methods 
*like complete() and save() will create on the top of task prototype and every object will access from that.
*/