var mongoose = require ('mongoose')

var ProductSchema = mongoose.Schema ({
    nama_kursus: {
        type : String,
        required : true
    },
    image: {
        type: String
    },
    total_durasi: {
        type: String
        
    },
    total_murid : {
        type: Number
        
    },
    jumlah_vidio : {
        type : Number
    },
    harga: {
        type: Number
    },
},
{
    timestamps : true
})
var Product = module.exports = mongoose.model('products', ProductSchema);