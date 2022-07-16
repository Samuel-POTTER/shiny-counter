import axios from 'axios';

const apiUrl = process.env.REACT_APP_SHINY_SERVER_HOST;

export const getAuthorization = async () => {
    const response = await axios.get(`${apiUrl}/authorization`);
    return response.data;
};
