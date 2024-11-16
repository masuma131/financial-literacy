//TOD0: Need changes... MIGHT NOT WORK
import React, { useState } from 'react';
import { Account } from 'appwrite';
import { client } from '../appwrite';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const account = new Account(client);

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const session = await account.createSession(email, password);
            alert('Login successful!');
            console.log('Session:', session);
        } catch (err) {
            console.error(err);
            setError('Invalid email or password.');
        }
    };

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-2xl mb-4">Login</h2>
            <form onSubmit={handleLogin} className="space-y-4">
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-2 border rounded"
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full p-2 border rounded"
                    required
                />
                {error && <p className="text-red-500">{error}</p>}
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Login</button>
            </form>
        </div>
    );
};

export default Login;
