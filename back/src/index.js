const express = require('express');
const bodyParser = require("body-parser");
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const path = require('path');
const { sequelize } = require('../models');
const userRoutes = require('../routes/userRoutes');
const productRoutes = require('../routes/productRoutes');
const categoryRoutes = require('../routes/categoryRoutes');
const app = express();
const port = 3001;

// Hacer que node sirva los archivos de nuestro app React
app.use(express.static(path.resolve(__dirname, '../front/build')));

app.use(express.json());
app.use('/users', userRoutes);
app.use('/products', productRoutes);
app.use('/categories', categoryRoutes);

app.get('/api', (req, res) => {
    res.json({ message: 'Hola mundo' });
});

//documentation with swagger
const options = {
    definition: {
        openapi: "3.1.0",
        info: {
            title: "LogRocket Express API with Swagger",
            version: "0.1.0",
            description:
                "This is a simple CRUD API application made with Express and documented with Swagger",
            license: {
                name: "MIT",
                url: "https://spdx.org/licenses/MIT.html",
            },
        },
        servers: [
            {
                url: "http://localhost:3001",
            },
        ],
    },
    apis: ["./routes/*.js"],
};

const specs = swaggerJsdoc(options);
app.use(
    "/api-docs",
    swaggerUi.serve,
    swaggerUi.setup(specs, { explorer: true })
);


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});