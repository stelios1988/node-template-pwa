const controller = {};

controller.getUsers = function(req, res){
    res.json([
        "karydakis",
        "Pagonoudis"
    ]);
};


module.exports = controller;