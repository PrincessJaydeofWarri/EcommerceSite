const exppress = require('express');
const router = exppress.Router();

const {getAllProducts, getProductById} = require('../controller/productControllers');

//description Get all products from db
//route GET api/products
//access Public
router.get('/', getAllProducts);

//description Get a product by id from db
//route GET API/PRODUCTS/:id
//access Public
router.get('/:id', getProductById);

module.exports = router;