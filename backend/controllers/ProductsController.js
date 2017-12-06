const controller = {};

controller.list = function(req, res){
    Product.find({}, function(err, products){
        res.json(products);
    });
};

controller.saveProduct = function(req, res){
    const my_product = new Product({
        title           : req.body.title,
        price           : req.body.price,
        description     : req.body.description,
        on_sale         : req.body.on_sale
    });
    my_product.save();

    io.emit("new-product", my_product);

    res.json({status: 'ok'});
};

module.exports = controller;