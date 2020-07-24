import axios from 'axios';

const URL = 'https://se-members.web.app';



class Token {
    async verifyToken() {

        return await axios.post(`${URL}/auth/login`, {}, {
            headers: {
                'auth-token': this.getToken()
            }
        }).then(v => v.data)
    }
    getToken() {
        return localStorage.getItem('auth-token')
    }
    delToken() {
        localStorage.removeItem('auth-token')
    }
    setToken(token) {
        localStorage.setItem('auth-token', `Bearer ${token}`);

    }
}

const t = new Token

export { t as Token }

