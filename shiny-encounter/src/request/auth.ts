import axios from 'axios';

const apiUrl = process.env.REACT_APP_SHINY_SERVER_HOST;

export const getAuthorization = async () => {
    const response = await axios.get(`${apiUrl}/authorization`);
    return response.data;
};

type RegisterProps = {
    email: string;
    name: string;
    password: string;
    token: string;
};

export const register = async ({ email, name, password, token }: RegisterProps) => {
    const response = await axios({
        method: 'POST',
        url: `${apiUrl}/signup`,
        headers: {
            Authorization: `Bearer ${token}`
        },
        data: {
            name,
            password,
            email
        }
    });
    return response.data as { access_token: string; refresh_token: string };
};

export const login = async ({ email, password, token }: Omit<RegisterProps, 'name'>) => {
    const response = await axios({
        method: 'POST',
        url: `${apiUrl}/signin`,
        headers: {
            Authorization: `Bearer ${token}`
        },
        data: {
            email,
            password
        }
    });
    return response.data as { access_token: string; refresh_token: string };
};
