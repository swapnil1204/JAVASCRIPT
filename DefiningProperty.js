var task = {
    title : 'my information',
    description : 'i want to read oops in javascript',
};

Object.defineProperty(task, 'toString', {
    'value' : function(){
    return task.title + "  "+task.description; 
},
writable : false,//change false to true
enumerable : false,//change false to true
configurable : false//change false to true
})

task.toString = 'hi' //everuthing is reasssignable so to prevent it make writable false;
console.log(task.toString());

console.log(task);
/*{
  title: 'my information',
  description: 'i want to read oops in javascript',
  toString: [Function: value]
}
*/
//i dont like to show to string so do enumerable false
console.log(task);
Object.keys(task);

console.log('here it is ')
///now again if I tried to make any property true then it will run which should not...
Object.defineProperty(task,'toString',{
    enumerable:true
})
console.log(task);

//so make configurable false which will throw error
/*Object.defineProperty(task,'toString',{
       ^

TypeError: Cannot redefine property: toString
*/

//that is what we expecting
