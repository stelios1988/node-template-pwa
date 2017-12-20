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

controller.getOneProduct = function(req, res){
    const pid = req.params.product_id;
    Product.findOne({_id: pid}).populate('comments').exec(function(err, product){
        res.json(product);
    });
};

controller.saveComment = function(req, res){
    const txt = req.body.text;
    const pid = req.body.product_id;

    const com = new Comment({
        text: txt,
        product: pid
    });
    com.save();

    Product.findOne({_id: pid}, function(err, product){
        product.comments.push(com);
        product.save();
    });

    io.emit('new-comment-'+pid, com);

    res.send('ok');
};

controller.getOneComment = function(req, res){
    const cid = req.params.comment_id;
    Comment.findOne({_id: cid}).populate('product').exec(function(err, comment){
        res.json(comment);
    });
};

module.exports = controller;