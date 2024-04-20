const express = require('express');
const router = express.Router();

const controller = require('../controller/admin');

router.get('/products',controller.getProducts);
router.get('/products/:id',controller.getProductsID);
router.post('/add-products',controller.postProduct);
router.delete('/products/:id',controller.deleteProduct);
router.put('/products/:id',controller.putProduct);
module.exports = router;