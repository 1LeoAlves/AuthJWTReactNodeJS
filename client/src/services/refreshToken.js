import axios from 'axios';

async function RefreshToken(refresh_TOKEN) {
    const reTkn = refresh_TOKEN.trim();
    const result = await axios.post(`http://localhost:8080/auth/refresh`, {reTkn},
    {
        headers: { 
            "Content-Type": "application/json"
        },
        withCredentials: true
    });
    return result.data;
}

export { RefreshToken };