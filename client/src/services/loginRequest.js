import axios from 'axios';

async function RequestLogin(email, password) {
    const pwd = password.trim()
    const result = await axios.post(`http://localhost:8080/auth/login`, {email, pwd},
    {
        headers: { 
            "Content-Type": "application/json"
        }
    });
    return result.data;
}

export { RequestLogin };