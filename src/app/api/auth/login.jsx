
/*
import axios from 'axios';
import jwt from 'jsonwebtoken';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { username, password } = req.body;

        try {
            const response = await axios.post('http://localhost:8080/authenticate', {
                username,
                password
            });
            const token = jwt.sign({ username }, 'your-secret-key', { expiresIn: '1h' });
            res.status(200).json({ ...response });
        } catch (error) {
            res.status(401).json({ error: 'Invalid username or password' });
        }
    } else {
        res.status(405).json({ error: 'Method not allowed' });
    }
}
*/