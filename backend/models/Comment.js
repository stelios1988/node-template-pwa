module.exports = mongoose.model('Comment', 
{
    text: String,
    product: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: "Product"
    },
    created_at: {type: Date, default: Date.now()}
});