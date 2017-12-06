module.exports = mongoose.model('Product', 
{
    title: String,
    price: Number,
    description: String,
    on_sale: Boolean
});