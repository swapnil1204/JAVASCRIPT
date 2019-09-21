//var repo = require('./Repo');
//var myRepo = repo();
var myRepo = require('./Repo');
var taskHandler = function(){
    return{
        save: function(){
            myRepo.save('hi from taskhandler');
        }
    }
}
module.exports = taskHandler();