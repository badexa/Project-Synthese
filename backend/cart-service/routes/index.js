const express = require('express')

const router = express.Router()


const authToken = require('../middleware/authToken')


const addToCartController = require('../controller/addToCartController')
const countAddToCartProduct = require('../controller/countAddToCartProduct')
const addToCartViewProduct  = require('../controller/addToCartViewProduct')
const updateAddToCartProduct = require('../controller/updateAddToCartProduct')
const deleteAddToCartProduct = require('../controller/deleteAddToCartProduct')









//product


//user add to cart
router.post("/addtocart",authToken,addToCartController)
router.get("/countAddToCartProduct",authToken,countAddToCartProduct)
router.get("/view-card-product",authToken,addToCartViewProduct)
router.post("/update-cart-product",authToken,updateAddToCartProduct)
router.post("/delete-cart-product",authToken,deleteAddToCartProduct)









module.exports = router