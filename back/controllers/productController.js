const { Product, Category } = require('../models');

const getAllProducts = async (req, res) => {
    try {
        const products = await Product.findAll();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los productos' });
    }
};

const getProductById = async (req, res) => {
    try{
        const product = await Product.findByPk(req.params.id);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.status(200).json(product);
    }catch(error){
        res.status(500).json({ message: 'Internal server error', error: error });
    }
};

const createProduct = async (req, res) => {
    try{
        const { name, price, description, stock, image, categoryId } = req.body; 
        console.log("name:", name);
        console.log("price:", price);
        console.log("description:", description);
        console.log("image:", image);
        console.log("categoryId:", categoryId);
        if (!name) {
            return res.status(400).json({ message: 'Name is required' });
        }else if(!price){
            return res.status(400).json({ message: 'Price is required' });
        }else if(!description){
            return res.status(400).json({ message: 'Description is required' });
        }else if(!stock){
            return res.status(400).json({ message: 'Stock is required' });
        }

        const product = await Product.create({ name, price, description, stock, image, categoryId });
        res.status(201).json(product);
    }catch(error){
        res.status(500).json({ message: 'Internal server error', error: error });
    }
};


const updateProduct = async (req, res) => {
    try{
        const { id, name, price, description, image, category } = req.body;
        const found = await Category.findOne({ where: { id: id } });
        if (!found) {
            return res.status(404).json({ message: 'Category not found' });
        }
        const product = await Product.update({ name, price, description, image, categoryId });
        res.status(200).json(product);
    }catch(error){
        res.status(500).json({ message: 'Internal server error', error: error });
    }
};


module.exports = {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
};