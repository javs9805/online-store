const express = require('express');
const router = express.Router();
const {getAllCategories,getCategoryById,createCategory,updateCategory} = require('../controllers/categoryController');

/**
 * @swagger
 * /categories/all:
 *  get:
 *    tags: [Category]
 *    description: Get all categories
 *    responses:
 *      200:
 *        description: OK
 */
router.get('/all', getAllCategories);

/**
 * @swagger
 * /categories/get/{id}:
 *  get:
 *    tags: [Category]
 *    description: Get a category by id
 *    parameters:
 *      - name: id
 *        in: path
 *        required: true
 *        type: number
 *    responses:
 *      200:
 *        description: OK
 */
router.get('/get/:id', getCategoryById);

/**
 * @swagger
 * /categories/create:
 *  post:
 *    tags: [Category]
 *    description: Create a category
 *    responses:
 *      200:
 *        description: OK
 */
router.post('/create', createCategory);

/**
 * @swagger
 * /categories/update/:id:
 *  put:
 *    tags: [Category]
 *    description: Update a category
 *    responses:
 *      200:
 *        description: OK
 */
router.put('/update/:id', updateCategory);

module.exports = router;




