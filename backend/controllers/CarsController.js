const c = {};

c.carList = function(req, res){
    Car
    .find({})
    .populate('customers')
    .exec((err, cars) => {
        if(err)
            return res.sendStatus(500);

        res.json(cars);
    });
};

c.createCar = (req, res) => {
    const car = new Car(req.body);
    car.save();

    res.status(201);
    res.json({
        message: "car created"
    });
};




c.customerList = function(req, res){
    Customer
    .find({})
    .populate('cars')
    .exec((err, customers) => {
        if(err)
            return res.sendStatus(500);

        res.json(customers);
    });
};

c.createCustomer = (req, res) => {
    
    const customer = new Customer(req.body);
    customer.save();

    const customer_id = customer._id;

    Car
    .find({'_id': {$in: req.body.cars}})
    .exec((err, cars) => {
        
        for(car of cars){
            car.customers.push(customer_id);
            car.save();
        }

        res.status(201);
        res.json({
            message: "customer created and car assigned"
        });

    });
};

c.updateCarOptions = (req, res) => {

    Car.findById(req.body.car_id).exec((err, car) => {
        car.options = req.body.options;
        //car.set('options',req.body.options);
        car.save();

        res.json({
            message: "Car options saved."
        });
    });
    
};

module.exports = c;