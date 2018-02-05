module.exports = mongoose.model('Customer', 
{
    name: String,
    cars: [{
        type: mongoose.Schema.Types.ObjectId, 
        ref: "Car" 
    }]
});