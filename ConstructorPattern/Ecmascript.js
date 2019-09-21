'use strict'
class Task {
    constructor(name) {
        this.name = name;
        this.completed = false;
    }
    complete = function (name) {
        console.log('completing task of :' + this.name);
        this.completed = true;
    }
    save = function (name) {
        console.log('saving task of :' + this.name);
        this.completed = true;
    }
}
var task1 = new Task('reading book');
var task2 = new Task('reading book');
var task3 = new Task('reading book');
task1.complete();
task2.complete();
task2.save();
task3.complete();
task3.save();