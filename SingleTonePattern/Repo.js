var repo = function () {
    var called = 0;
    var save = function (task) {
        called++;
        console.log('saving task : ' + task + 'called : ' + called + 'times');
    }
    console.log('newing a task repo');
    return {
        save: save
    }
}

module.exports = repo();
// OR module.exports = new repo;