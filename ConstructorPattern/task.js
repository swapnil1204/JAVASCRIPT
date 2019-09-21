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

module.exports = Task; 
