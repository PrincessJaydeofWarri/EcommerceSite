const exppress = require('express');
const router = express.Router();

const {getProducts, getProductById} = require('../controller/productControllers');

//description Get all products from db
//route GET api/products
//access Public
router.get('/', getProducts);

//description Get a product by id from db
//route GET API/PRODUCTS/:id
//access Public
router.get('/:id', getProductById);

module.exports = router;