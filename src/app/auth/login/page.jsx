import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';



export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const handleLogin = async () => {
        try {
            // const response = await axios.post('/api/auth/login', {
            //     username,
            //     password
            // });
            // document.cookie = `token=${response.data.token}; path=/`;
            router.push('/');
        } catch (error) {
            console.error('Error logging in', error);
        }
    };

    return (
        <div>
            <h1>Login</h1>
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleLogin}>Login</button>
        </div>
    );
}
