var task = {
    title : 'my information',
    description : 'i want to read oops in javascript',
};

Object.defineProperty(task, 'toString', {
    'value' : function(){
    return task.title + "  "+task.description; 
},
writable : false,
enumerable : false,
configurable : false
})

var urgentTask = Object.create(task);
Object.defineProperty(urgentTask, 'toString', {
    'value' : function(){
    return task.title + "  "+'is urgent'; 
},
writable : false,
enumerable : false,
configurable : false
})

console.log(urgentTask.toString());