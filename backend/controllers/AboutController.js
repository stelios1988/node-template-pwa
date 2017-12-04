const a = {};

a.getAbout = function(req, res){
    res.send('about page');
};

module.exports = a;