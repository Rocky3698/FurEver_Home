import axios_base from "../Components/Axios/Axios";
export const getUser = async () => {
    const token = localStorage.getItem('token');
    // const id = localStorage.getItem('user_id');
    try {
        const response = await axios_base.get('/user/', {
            headers: {
                Authorization: `Token ${token}`,
                "Content-Type": "application/json",
            }
        });
        return response.data.user;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};