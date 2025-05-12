import React, { useState } from 'react';
import axios from 'axios';

function Signup() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        avatar: null,
    });
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData({
            ...formData,
            [name]: files ? files[0] : value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        const data = new FormData();
        data.append('name', formData.name);
        data.append('email', formData.email);
        data.append('password', formData.password);
        if (formData.avatar) {
            data.append('avatar', formData.avatar);
        }

        try {
            const response = await axios.post('/api/users/signup', data, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            setSuccess('Signup successful!');
            console.log(response.data);
        } catch (error) {
            setError('Signup failed. Please try again.');
            console.error(error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
            />
            <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
            />
            <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
            />
            <input
                type="file"
                name="avatar"
                onChange={handleChange}
            />
            <button type="submit">Sign Up</button>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {success && <p style={{ color: 'green' }}>{success}</p>}
        </form>
    );
}

export default Signup;
