const express = require('express');
const multer = require('multer');
const User = require('../models/User');

const router = express.Router();

// Configure Multer for avatar uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/avatars');
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    },
});
const upload = multer({ storage });

// Signup Route
router.post('/signup', upload.single('avatar'), async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const avatar = req.file ? req.file.path : null;

        const user = new User({ name, email, password, avatar });
        await user.save();

        res.status(201).json({ message: 'User created successfully', user });
    } catch (error) {
        res.status(500).json({ message: 'Error creating user', error });
    }
});

// Update User Details
router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const updates = req.body;

        const updatedUser = await User.findByIdAndUpdate(id, updates, { new: true });

        if (!updatedUser) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.json({ message: 'User updated successfully', updatedUser });
    } catch (error) {
        res.status(500).json({ message: 'Error updating user', error });
    }
});

module.exports = router;
