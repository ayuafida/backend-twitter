const productsController = require('../controller/productsController')
const usersController = require('../controller/usersController')
const cartController = require('../controller/cartController')
const flashController = require('../controller/flashController')
const auth = require('../middleware/auth.js')

module.exports = app => {
    app.get('/', productsController.home)

    app.get('/products' ,  productsController.listProduct)
    app.get('/products/:id',   productsController.detailProduct)
    app.post('/products/',  productsController.tambahProduct)
    app.put('/products/:id',  productsController.ubahProduct)
    app.delete('/products/:id',    productsController.hapusProduct)

    app.get('/user', usersController.listUser)
    app.get('/user/:id', usersController.detailUser)
    app.post('/user/',usersController.tambahUser)
    app.put('/user/:id',usersController.ubahUser)
    app.delete('/user/:id',usersController.hapusUser)

    app.post('/cart/:id',cartController.addToCart)
    app.get('/cart/:id',cartController.showCart)
    app.put('/cart/:id',cartController.editCart)
    app.delete('/cart/:id',cartController.deleteCart)
    app.get('/cart/remove/:id',cartController.removeCart)


    app.post('/flash',flashController.addToCart)
    app.get('/flash',flashController.showCart)
    app.delete('/flash/:id',flashController.hapusFlash)
   // app.get('/cart/checkout/:id' , cartController.checkOut)

    app.post('/gettoken', usersController.getToken)
}