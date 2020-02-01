var mongoose = require ('mongoose')

var FlashSchema = mongoose.Schema ({
    
    productCart: {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'products'
    }

},
{
    timestamps : true
})
var Flash = module.exports = mongoose.model('flashs', FlashSchema);