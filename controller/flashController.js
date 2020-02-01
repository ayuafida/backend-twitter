const Flash = require('../models/flash')
const Product = require('../models/product')
const showDataCart = async (req,res) => {
    const data = await Flash.find({ }).populate('productCart').lean()
    data.forEach(row => {
       // row.subTotal = Number.parseInt(row.productCart.harga) * row.qtyCart
        if (row.productCart.harga > 1000000) {
            row.flashSale = Number.parseInt(row.productCart.harga) - (row.productCart.harga * 20 / 100 ) - 100000
        }
       else {
        row.flashSale = Number.parseInt(row.productCart.harga) - (row.productCart.harga * 20 / 100)
       }
        
    })
    return data
}

exports.addToCart = async (req,res)=>{
   // const userCart = req.params.id
    const productCart =req.body.productCart
   // const qty = Number.parseInt(req.body.qtyCart)

    const dataCart = await Flash.count ({ productCart : productCart})
    if (dataCart == 0){
        const data = {
            productCart : productCart,
           // qtyCart : qty,
           // userCart : userCart
        }
        console.log(data)
        const carts = new Flash(data)
        const saveCart = await carts.save()
        res.send(JSON.stringify({"status" : 200, "error"  : null, "response" : "Success add to cart"}))
    } 
}

exports.showCart = async (req,res) =>{
    const idUser = req.params.id
    const data = await showDataCart()
    res.send(JSON.stringify({"status" : 200, "error" : null, "response" : data}))
}

exports.editCart = async (req,res) =>{
    const userCart = req.params.id
   
   
   
    const data = await showDataCart(userCart)
    res.send(JSON.stringify({"status" : 200, "error" : null, "response" : data}))
}


exports.hapusFlash = async  (req,res) => {
    let {id} =  req.params;
    const status = await Flash.remove({_id: id})
    res.send(JSON.stringify({"status": 200, "error": null, "response": status}))
}

exports.removeCart = async  (req,res) => {
    const userCart =  req.params.id
    const hapusCart = await Cart.deleteMany({userCart : userCart})
    res.send(JSON.stringify({"status": 200, "error": null, "response": "Cart Deleted"}))
}

