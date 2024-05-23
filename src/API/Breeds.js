import axios_base from "../Components/Axios/Axios";

export const GetBreeds = async () => {
    const token = localStorage.getItem('token');
    try {
        const response = await axios_base.get('/pet/breeds', {
            headers: {
                Authorization: `Token ${token}`,
                "Content-Type": "application/json",
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};