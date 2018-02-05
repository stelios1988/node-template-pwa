module.exports = mongoose.model('Car', 
{
    brand: String,
    model: String,
    customers: [{
        type: mongoose.Schema.Types.ObjectId, 
        ref: "Customer" 
    }],
    options: Object
});