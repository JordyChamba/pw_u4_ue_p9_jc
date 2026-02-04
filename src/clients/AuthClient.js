import axios from "axios";

const API_URL = "http://localhost:8082/auth/token";

const login = async (username, password) => {
    const response = await axios.get(API_URL, {
        params: {
            user: username,
            password: password
        }
    });
    return response.data;
};

export const loginFachada = async (username, password) => {
    return await login(username, password);
};
