const { User } = require('../models');

const getAllUsers = async (req, res) => {
    try {
        const users = await User.findAll();
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Crear un nuevo usuario
const createUser = async (req, res) => {
    console.log(typeof User)
    try {
        const { firstName, lastName, email, password } = req.body;
        console.log(req.body);
        if (!firstName || !lastName || !email || !password) {
            
            return res.status(400).json({ error: 'All fields are required' });
        }
        if (await User.findOne({ where: { email } })) {
            return res.status(400).json({ error: 'User already exists' });
        }
        if (password.length < 6) {
            return res.status(400).json({ error: 'Password must be at least 6 characters' });
        }
        if (firstName == "admin" || firstName == "Admin" || firstName == "ADMIN") {
            return res.status(400).json({ error: 'firstName cannot be "admin"' });
        }
        const newUser = await User.create({ firstName, lastName, email, password });
        console.log(newUser);
        res.status(201).json(newUser);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
};

// Login de un usuario
const getUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ where: { email, password } });
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.json(user);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
};


module.exports = {
    getAllUsers,
    createUser,
    getUser,
};