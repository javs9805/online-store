// routes/userRoutes.js
const express = require('express');
const { getAllUsers, createUser, getUser } = require('../controllers/userController');
const router = express.Router();

/**
 * @swagger
 * /users/allusers:
 *   get:
 *     summary: Get a list of all users
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             example:
 *               data: [{}]
 *       500:
 *         description: Bad Request
 *         content:
 *          application/json:
 *            example:
 *             error:
 *              message: "Bad Request"
 */
router.get('/allusers', getAllUsers);

/**
 * @swagger
 * /users/signup:
 *    post:
 *      summary: Creates a new user.
 *      tags: [Users]
 *      consumes:
 *        - application/json
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              required:
 *                - firstName
 *                - lastName
 *                - email
 *                - password
 *              properties:
 *                firstName:
 *                  type: string
 *                lastName:
 *                  type: string
 *                email:
 *                  type: string
 *                password:
 *                  type: string
 *      responses:
 *        200:
 *          description: OK
 *        400:
 *          description: Bad Request
 *          content:
 *            application/json:
 *              example:
 *                error:
 *                  message: "Bad Request"
 *        500:
 *          description: Internal Server Error
 *          content:
 *            application/json:
 *              example:
 *                error:
 *                  message: "Internal Server Error"
 */
router.post('/signup', createUser);

/**
 * @swagger
 * /users/login:
 *  post:
 *      summary: Login a user
 *      tags: [Users]
 *      consumes:
 *        - application/json
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              required:
 *                - email
 *                - password
 *              properties:
 *                email:
 *                  type: string
 *                password:
 *                  type: string
 *      responses:
 *        200:
 *          description: Successful response
 *          content:
 *            application/json:
 *              example:
 *                message: "User logged in successfully"
 *        500:
 *          description: Bad Request
 *          content:
 *            application/json:
 *              example:
 *                error:
 *                  message: "Bad Request"
 */
router.post('/login', getUser);

module.exports = router;