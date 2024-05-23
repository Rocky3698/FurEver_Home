import axios_base from "../Components/Axios/Axios";
export const getAdoptionHistory = async () => {
    const token = localStorage.getItem('token');
    const id = localStorage.getItem('user_id');
    try {
        const response = await axios_base.get(`/adoption/?adopter_id=${id}`, {
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
export const getShelterAdoptionHistory = async () => {
    const token = localStorage.getItem('token');
    const id = localStorage.getItem('user_id');
    try {
        const response = await axios_base.get(`/adoption/?shelter_id=${id}`, {
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