const express = require('express');
const router = express.Router();
const { getAllProducts, getProductById, createProduct, updateProduct } = require('../controllers/productController');


/**
 * @swagger
 * /products/all:
 *  get:
 *    tags: [Product]
 *    description: Get all products
 *    responses:
 *      200:
 *        description: OK
 *      400:
 *        description: Bad Request
 *      500:
 *        description: Internal Server Error
 */
router.get('/get/all', getAllProducts);

/**
 * @swagger
 * /products/get/{id}:
 *  get:
 *    tags: [Product]
 *    description: Returns a product by id
 *    parameters:
 *      - name: id
 *        in: path
 *        required: true
 *        type: number
 *    responses:
 *      200:
 *        description: OK
 *      400:
 *        description: Bad Request
 *      500:
 *        description: Internal Server Error
 */
router.get('/get/:id', getProductById);

/**
 * @swagger
 * /products/create:
 *  post:
 *    tags: [Product]
 *    description: Create a product
 *    consumes:
 *      - application/json
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            required:
 *              - name
 *              - price
 *              - description
 *              - stock
 *              - categoryId
 *            properties:
 *              name:
 *                type: string
 *              price:
 *                type: number
 *              description:
 *                type: string
 *              stock:
 *                type: number
 *              categoryId:
 *                type: number
 *    responses:
 *      200:
 *        description: OK
 *      400:
 *        description: Bad Request
 *      500:
 *        description: Internal Server Error
 */
router.post('/create', createProduct);

/**
 * @swagger
 * /products/update/{id}:
 *  put:
 *    tags: [Product]
 *    description: Update a product
 *    responses:
 *      200:
 *        description: OK
 */
router.put('/update/:id', updateProduct);

module.exports = router;
