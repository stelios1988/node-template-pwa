const express = require('express');
const router = express.Router();

router.get('/', function (req, res) {
  res.send('api page');
});

router.get('/users', UsersController.getUsers);
router.get('/about', AboutController.getAbout);
router.get('/products', ProductsController.list);
router.post('/save-product', ProductsController.saveProduct);

// Catch 404 from /api
router.use(function(req, res){
    res.status(404);
    res.send('404');
});

module.exports = router;