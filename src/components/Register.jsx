import React, { useState } from 'react';
import { Account } from 'appwrite';
import { client } from '../appwrite';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const account = new Account(client);

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            await account.create('unique()', email, password, name);
            setSuccess('Registration successful! You can now log in.');
            setError('');
        } catch (err) {
            setError(err.message);
            setSuccess('');
        }
    };

    return (
        <div className="register-container p-4">
            <h2 className="text-xl font-bold mb-4">Register</h2>
            <form onSubmit={handleRegister}>
                <div className="form-group mb-2">
                    <label className="block font-medium mb-1">Name:</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="block p-2 border rounded w-full"
                        required
                    />
                </div>
                <div className="form-group mb-2">
                    <label className="block font-medium mb-1">Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="block p-2 border rounded w-full"
                        required
                    />
                </div>
                <div className="form-group mb-2">
                    <label className="block font-medium mb-1">Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="block p-2 border rounded w-full"
                        required
                    />
                </div>
                {error && <p className="text-red-500 mt-2">{error}</p>}
                {success && <p className="text-green-500 mt-2">{success}</p>}
                <button
                    type="submit"
                    className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
                >
                    Register
                </button>
            </form>
        </div>
    );
};

export default Register;
