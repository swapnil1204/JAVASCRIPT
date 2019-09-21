var task = require('./task');
var task1 = new task('reading book');
var task2 = new task('reading book');
var task3 = new task('reading book');
task1.complete();
task2.complete();
task2.save();
task3.complete();
task3.save();